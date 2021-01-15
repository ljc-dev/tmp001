import { useContext, useEffect, useRef } from "react";
import { SignContext } from "../hooks/signContext";
import CrossIco from "../icons/crossIco";

const SignOrLog = () => {
  const mainSignRef = useRef(null)
  const titleRef = useRef(null)
  const questionRef = useRef(null)
  const readMoreTextRef = useRef(null)
  const forgotPassRef = useRef(null)
  const formSignBtnRef = useRef(null)
  const communityRef = useRef(null)
  const forgotSignRef = useRef(null)
  const mainFormRef = useRef(null)
  const mainEmailInputRef = useRef(null)
  const mainEmailErrorRef = useRef(null)
  const mainPasswordInputRef = useRef(null)
  const mainPasswordErrorRef = useRef(null)
  const passEmailInputRef = useRef(null)
  const passEmailErrorRef = useRef(null)

  const { setShowSignPopup } = useContext(SignContext)
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden")
    return () => document.documentElement.classList.remove("overflow-hidden")
  }, [])

  function handleCloseClick() {
    setShowSignPopup(false)
  }

  function handleReadMoreLessClick(e) {
    console.log(e.target.innerText)
    if (e.target.innerText === "Read more") {
      e.target.innerText = "Read less"
      readMoreTextRef.current.classList.remove("hidden")
    } else {
      e.target.innerText = "Read more"
      readMoreTextRef.current.classList.add("hidden")
    }
  }

  function handleLogToggle(e) {
    console.log(e.target.innerText);
    const logBtnText = e.target.innerText.toLowerCase()
    if (logBtnText === "log in") {
      e.target.innerText = "sign up"
      titleRef.current.innerText = "log in"
      formSignBtnRef.current.innerText = "log in"
      questionRef.current.innerText = "New to this site?"
      communityRef.current.classList.add("hidden")
      forgotPassRef.current.classList.remove("hidden")
    } else {
      e.target.innerText = "log in"
      titleRef.current.innerText = "sign up"
      formSignBtnRef.current.innerText = "sign up"
      questionRef.current.innerText = "Already a member?"
      communityRef.current.classList.remove("hidden")
      forgotPassRef.current.classList.add("hidden")
    }
  }

  function handleForgotPass(e) {
    e.preventDefault()
    mainSignRef.current.classList.add("hidden")
    forgotSignRef.current.classList.add("flex")
    forgotSignRef.current.classList.remove("hidden")
  }

  function handleMainFormSubmit(e) {
    e.preventDefault()
    let validCounter = 0
    if (!mainEmailInputRef.current.checkValidity() || !mainEmailInputRef.current.value) {
      console.log("here mail");
      mainEmailInputRef.current.classList.remove("border-teal-600")
      mainEmailInputRef.current.classList.add("border-red-500")
      mainEmailErrorRef.current.classList.remove("opacity-0")
    } else {
      mainEmailInputRef.current.classList.add("border-teal-600")
      mainEmailInputRef.current.classList.remove("border-red-500")
      mainEmailErrorRef.current.classList.add("opacity-0")
      validCounter++
    }

    if (!mainPasswordInputRef.current.checkValidity() || !mainPasswordInputRef.current.value) {
      console.log("here pass");
      mainPasswordInputRef.current.classList.remove("border-teal-600")
      mainPasswordInputRef.current.classList.add("border-red-500")
      mainPasswordErrorRef.current.classList.remove("opacity-0")
    } else {
      mainPasswordInputRef.current.classList.add("border-teal-600")
      mainPasswordInputRef.current.classList.remove("border-red-500")
      mainPasswordErrorRef.current.classList.add("opacity-0")
      validCounter++
    }

    if (validCounter === 2) {
      //form is valid
      //but in this case we need to fake invalid
      mainEmailErrorRef.current.innerText = "It looks like you can't log in with that email. Continue with Google account to log in."
      mainEmailErrorRef.current.classList.remove("opacity-0")
      mainEmailErrorRef.current.classList.remove("mb-4")
    } else {
      mainEmailErrorRef.current.innerText = "Email cannot be blank"
      mainEmailErrorRef.current.classList.add("mb-4")
    }
  }

  function handlePassFormSubmit(e) {
    e.preventDefault()
    let validCounter = 0
    if (!passEmailInputRef.current.checkValidity() || !passEmailInputRef.current.value) {
      console.log("here mail");
      passEmailInputRef.current.classList.remove("border-teal-600")
      passEmailInputRef.current.classList.add("border-red-500")
      passEmailErrorRef.current.classList.remove("opacity-0")
    } else {
      passEmailInputRef.current.classList.add("border-teal-600")
      passEmailInputRef.current.classList.remove("border-red-500")
      passEmailErrorRef.current.classList.add("opacity-0")
      validCounter++
    }

    if (validCounter === 1) {
      //form is valid
      //but in this case we need to fake invalid
      passEmailErrorRef.current.innerText = "This email doesn't match any account. Try again."
      passEmailErrorRef.current.classList.remove("opacity-0")
    } else {
      passEmailErrorRef.current.innerText = "Email cannot be blank"
    }
  }

  return (
    <div className="bg-white fixed inset-0 z-50 px-6 flex flex-col items-center w-full h-screen overflow-auto">
      <div ref={forgotSignRef} className="hidden flex-col items-center justify-center h-full pt-8">
        <h1 className="capitalize text-5xl md:text-5xl tracking-tight font-rale text-teal-900">create new password</h1>
        <p className="mt-6 text-xl tracking-tight font-open text-teal-700">Please enter your email address</p>
        <form onSubmit={handlePassFormSubmit} className="mt-12 flex flex-col w-80">
          <label className="capitalize text-teal-600" htmlFor="passEmailId">email</label>
          <input ref={passEmailInputRef} className="font-open border-b border-teal-600" type="email" name="myPassEmail" id="passEmailId" />
          <p ref={passEmailErrorRef} className="text-red-500 opacity-0 mb-4 text-xs">Email cannot be blank</p>
          <button ref={formSignBtnRef} className="bg-teal-600 text-teal-50 w-full py-3 capitalize font-open">
            create password
          </button>
        </form>
      </div>
      <div ref={mainSignRef} className="mt-6 flex flex-col items-center pt-8">
        <h1 ref={titleRef} className="capitalize text-5xl md:text-5xl tracking-tight font-mont text-teal-900">sign up</h1>
        <p className="mt-6 text-xl tracking-tight font-open"><span ref={questionRef}>Already a member?</span>
          <button onClick={handleLogToggle} className="ml-2 capitalize tracking-tighter text-teal-500">log in</button>
        </p>
        <form ref={mainFormRef} onSubmit={handleMainFormSubmit} className="mt-16 flex flex-col w-80">
          <label className="capitalize text-teal-600" htmlFor="emailId">email</label>
          <input ref={mainEmailInputRef} className="font-open border-b border-teal-600" type="email" name="myEmail" id="emailId" />
          <p ref={mainEmailErrorRef} className="text-red-500 opacity-0 mb-4 text-xs">Email cannot be blank</p>
          <label className=" capitalize text-teal-600" htmlFor="passwordId">password</label>
          <input ref={mainPasswordInputRef} className="font-open border-b border-teal-600" type="password" name="myPassword" id="passwordId" />
          <p ref={mainPasswordErrorRef} className="text-red-500 opacity-0 mb-4 text-xs">Make sure you enter a password.</p>
          <button ref={forgotPassRef} onClick={handleForgotPass} className="hidden self-start underline mb-4 text-teal-800 hover:text-teal-700">Forgot Password?</button>
          <button ref={formSignBtnRef} className=" bg-teal-600 text-teal-50 w-full py-3 capitalize font-open">
            sign up
          </button>
        </form>
        <div ref={communityRef} className="mt-10 flex items-center">
          <input type="checkbox" name="joinCommunity" id="joinComId" />
          <label className="ml-2 text-teal-900" htmlFor="joinComId">Join this site’s community.</label>
          <button onClick={handleReadMoreLessClick} className="ml-2 underline tracking-tight text-teal-900 hover:text-teal-700">Read more</button>
        </div>
        <p ref={readMoreTextRef} className="hidden text-teal-900 text-center max-w-lg">Connect with members of our site. Leave comments, follow people and more. Your nickname, profile image, and public activity will be visible on our site.</p>
      </div>
      <button onClick={handleCloseClick} className="w-8 h-8 absolute top-12 right-16">
        <span className="sr-only">close</span>
        <CrossIco />
      </button>
    </div>
  );
}

export default SignOrLog