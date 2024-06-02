export default function Login_Input() {
    return (
        <>
            <div className="pt-20 flex flex-col justify-center items-center text-white min-h-screen">
                <div className="flex flex-row items-center mb-4">
                    <label className="w-40 mr-2 text-right">Enter Username:</label>
                    <input className="p-2 border border-gray-300 rounded" placeholder="Username"/>
                </div>
                <div className="flex flex-row items-center mb-4">
                    <label className="w-40 mr-2 text-right">Enter Email:</label>
                    <input className="p-2 border border-gray-300 rounded" placeholder="Email"/>
                </div>
                <div className="flex flex-row items-center mb-4">
                    <label className="w-40 mr-2 text-right">Enter Password:</label>
                    <input className="p-2 border border-gray-300 rounded" placeholder="Password" type="password"/>
                </div>
                <div className="mt-4 p-8">
                    <button className='bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded border border-black'>
                        Create Account
                    </button>
                </div>
            </div>
        </>
    );
}
