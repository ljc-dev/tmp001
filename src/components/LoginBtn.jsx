import UserIco from "../icons/userIco"

const LoginBtn = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="flex mt-4 md:mt-0 lg:ml-12 md:ml-2 text-teal-400 items-center">
      <UserIco classes={"h-8 w-8"} />
      <span className="text-sm ml-2 md:ml-1">Log In</span>
    </button >
  )
}

export default LoginBtn