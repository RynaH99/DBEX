import Link from 'next/link';

export default function LoginHeader() {
    return (
        <header className="bg-black text-white w-full flex justify-between items-center p-4 fixed top-0 left-0 z-10">
            <div className='flex items-center'>
                <img src='images/Logo.png' alt='DBEX LOGO' className="h-10 w-10 mr-2" />
                <Link href="/" legacyBehavior>
                    <a className='font-bold text-2xl text-white'>DBEX Tech</a>
                </Link>
            </div>
        </header>
    );
}
