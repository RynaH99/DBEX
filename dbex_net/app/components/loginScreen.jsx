import '@/app/globals.css'

export default function LoginBox() {
    return (
        <>
            <div className="flex items-center justify-start h-screen p-4">
                <div className="p-6 ml-16">
                    <h1 className='p-8 text-6xl font-bold'>Sign In</h1>
                    <form>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="border-b-2 border-black outline-none w-full p-2"
                                placeholder="Username*"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="border-b-2 border-black outline-none w-full p-2"
                                placeholder="Password*"
                            />
                        </div>
                        <div className="flex items-center mb-4 p-2">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                className="mr-2 transform scale-150"
                            />
                            <label htmlFor="rememberMe" className="text-black">Remember Me</label>
                        </div>
                        <div className="flex justify-center p-2">
                            <button className="bg-black text-white font-bold py-2 px-4 border border-black rounded-full w-full hover:bg-gray-900 hover:text-stone-200 shadow-lg shadow-black/20">
                                Sign In
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-black font-bold underline py-2 px-4 rounded hover:text-stone-600 ">
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
