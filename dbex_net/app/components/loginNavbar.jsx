import Image from 'next/image';
export default function LoginNavbar() {

    return(
        <div className='flex justify-items center'>
            {/* <Image
                src='/favicon.ico'
                alt='DBEX Logo'
                width={200}
                height={200}
            /> */}
            <h1 className="text-6xl font-bold p-2">DBEX Tech</h1>
        </div>
    )
}