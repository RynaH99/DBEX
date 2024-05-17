import './globals.css';

function DemoNavbar() {
    return (
        <nav className="bg-black p-4 border-b border-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className=' font-bold py-2 px-4 text-6xl text-white'>Demo Screen</h1>
                    {/* <div className="text-white font-bold">Logo PlaceHolder</div> */}
                </div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default DemoNavbar;
