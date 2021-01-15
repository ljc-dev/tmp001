import { useContext, useEffect, useRef } from "react";
import { SignContext } from "../hooks/signContext";
import CrossIco from "../icons/crossIco";

const SignOrLog = () => {
  const titleRef = useRef(null)
  const questionRef = useRef(null)
  const readMoreTextRef = useRef(null)
  const forgotPassRef = useRef(null)
  const formSignBtnRef = useRef(null)
  const communityRef = useRef(null)
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
  }

  return (
    <div className="bg-white fixed inset-0 z-50 px-6 flex flex-col items-center w-full h-screen overflow-auto">
      <div className="mt-4 flex flex-col items-center pt-8">
        <h1 ref={titleRef} className="capitalize text-5xl md:text-5xl tracking-tight font-mont text-teal-900">sign up</h1>
        <p className="mt-6 text-xl tracking-tight font-open"><span ref={questionRef}>Already a member?</span>
          <button onClick={handleLogToggle} className="ml-2 capitalize tracking-tighter text-teal-500">log in</button>
        </p>
        <form className="mt-16 flex flex-col w-80">
          <label className="capitalize text-teal-600" htmlFor="emailId">email</label>
          <input className="font-open border-b border-teal-600" type="email" name="myEmail" id="emailId" />
          <label className="mt-10 capitalize text-teal-600" htmlFor="passwordId">password</label>
          <input className="font-open border-b border-teal-600 mb-10" type="password" name="myPassword" id="passwordId" />
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
        <button onClick={handleCloseClick} className="w-8 h-8 absolute top-16 right-16">
          <span className="sr-only">close</span>
          <CrossIco />
        </button>
      </div>
    </div>
  );
}

export default SignOrLog