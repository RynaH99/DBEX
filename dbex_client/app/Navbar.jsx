import './CSS/globals.css'

function Navbar() {
    return (
        <nav className="bg-black p-4 border-b border-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center'>
                    <img src='images/Logo.png' alt='DBEX LOGO' className="h-10 w-10 mr-2"/>
                    <h1 className='font-bold py-2 px-4 text-6xl text-white'>DBEX Tech</h1>
                </div>
                <ul className="flex space-x-4">
                    <li><a href="/demo_table" className="text-white font-bold hover:text-gray-300">Demo Page</a></li>
                    <li><a href="/updates" className='bg-black hover:text-gray-300 text-white font-bold py-1 px-4 '>Updates</a></li>
                    <li><a href="/" className='bg-black hover:text-gray-300 text-white font-bold py-1 px-4 rounded border border-black-700 m-1'>Register</a></li>
                    <li><a href="/login_page" className='bg-white hover:text-gray-700 text-black font-bold py-1 px-4 rounded border border-black-700 m-1 p-4'>Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;