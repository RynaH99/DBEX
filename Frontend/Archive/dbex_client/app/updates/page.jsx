import Navbar from './Navbar.jsx'
import Updates from './updates.jsx'
import './globals.css'

export default function updatePage() {
    return(
        <>
        <div className="bg-black min-h-screen">
            <title>DBEX Home</title>
            <Navbar/>
            <Updates/>
        </div>
        </>
    )
}