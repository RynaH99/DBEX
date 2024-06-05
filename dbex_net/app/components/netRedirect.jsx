

export default function RedirectToDotCom() {
    return(
        <div className="fixed top-0 right-12 bottom-0 flex justify-center items-center">
            <div className="bg-black p-4 border-none rounded-2xl shadow-lg shadow-black/50 w-128">
                <h1 className="text-white flex justify-center font-bold text-3xl p-4">What Do We Do?</h1>
                <h4 className="text-white text-center font-bold flex justify-center p-2 w-80">Find Out What We Do By Heading To Our Home Page At The Link Below</h4>
                <a href='https://dbextech.com/'>
                    <h3 className="text-white font-bold flex justify-center p-6 underline text-2xl">DBEXTech.com</h3>
                </a>
            </div>
        </div>
    )
}