const LoginForm: React.FC = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center w-100 gap-8">
                <div>
                    <h1 className="text-white text-4xl font-semibold w-full">Upload. Describe. Filter </h1>
                </div>
                <div>
                    <form className="grid grid-rows-4 gap-4 w-100">
                        <div>
                            <label className="text-white text-lg block mb-2">Username</label>
                            <input type="text" placeholder="Username" className="bg-white text-black py-2 px-4 rounded-lg w-full" />
                        </div>
                        <div>
                            <label className="text-white text-lg block mb-2">Password</label>
                            <input type="password" placeholder="Password" className="bg-white text-black py-2 px-4 rounded-lg w-full" />
                        </div>
                        <div className="mt-4 items-center">
                            <button className="bg-red-700 text-white py-2 px-4 rounded-lg w-full">Sign In</button>
                        </div>
                        <div>
                            <p className="text-white mb-2">Or Sign In With</p>
                            <button className="border-white bg-green-900 text-white py-2 px-4 rounded-lg w-full">Google</button>
                        </div>
                        <div className="text-white flex items-center justify-between">
                            <div className="justify-self-center"><a href="#" className= "text-[0.75rem] underline text-pink-500">Forgot Password?</a></div>
                            <div>|</div>
                            <div><small className="text-pink-300">Don't have an account? <a href="#" className="text-pink-300 text-[0.75rem] underline">Sign Up</a></small></div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )

}
export default LoginForm;