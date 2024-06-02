import Navbar from './Navbar.jsx'
import WelcomeText from './welcome_body.jsx'
import './CSS/globals.css'

export default async function Home() {

    return (
    <>
    <div className="bg-black min-h-screen">
        <title>DBEX Home</title>
        <Navbar/>
        <WelcomeText/>
    </div>
    </>)
}