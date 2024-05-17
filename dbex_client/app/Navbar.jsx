import './CSS/globals.css'
import favicon from './images/favicon.ico'

function Navbar() {
    return (
        <nav className="bg-black p-4 border-b border-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center'>
                    <h1 className='font-bold py-2 px-4 text-6xl text-white'>DBEX Tech</h1>
                    {/* <img src={favicon} alt='DBEX LOGO'/> */}
                </div>
                <ul className="flex space-x-4">
                    <li><a href="/demo_table" className="text-white hover:text-gray-300">Demo Page</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;