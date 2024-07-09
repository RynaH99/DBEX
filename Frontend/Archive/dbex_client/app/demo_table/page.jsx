import './globals.css'
import DemoNavbar from './DemoNavbar.jsx'
import EditableTable from './EditableTable'


export default async function DemoScreen() {

    return(
        <>
            <title>DBEX Demo</title>
            <DemoNavbar/>
            <div className="bg-black min-h-screen">
                
                <EditableTable/>
            </div>
        </>
    )
}