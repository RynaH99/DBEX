import Image from 'next/image';
export default function DefaultNavbar() {

    return(
        <header className="fixed top-0 left-0 right-0 bg-black text-white p-4 z-50 shadow-lg shadow-gray-500/50">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center'>
                    <a href='/'><img src='favicon.ico' alt='DBEX LOGO' className="h-10 w-10 mr-2"/></a>
                    <a href='/'><h1 className='font-bold text-2xl'>DBEX Tech</h1></a>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/contact" className="text-white font-bold hover:text-gray-300">Contact Us</a></li>
                        <li><a href="/" className="text-white font-bold hover:text-gray-300">Help</a></li>
                        <li><a href="/LoginPage" className="text-white font-bold hover:text-gray-300">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}