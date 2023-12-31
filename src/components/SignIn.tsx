import { Icons } from "./ui/Icons"

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6"/>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        
      </div>
    </div>
  )
}

export default SignIn
