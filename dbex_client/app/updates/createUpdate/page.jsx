import '../globals.css'
import UpdateContent from './updateContent'
import Navbar from './Navbar'

export default function CreateUpdate() {
    return(
        <>
        <div className="bg-black min-h-screen">
            <Navbar/>
            <UpdateContent/>
        </div>
        </>
    )
}