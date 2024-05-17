import Header from './header.jsx'
import Navbar from './Navbar.jsx'
import './CSS/globals.css'

export default async function Home() {

    return (
        <>
        <div className="bg-black min-h-screen">
            {/* <Header className='bg-slate-800'/> */}
            <Navbar/>
        </div>
    </>
    )
}