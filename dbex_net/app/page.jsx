import Image from "next/image";
import LoginBox from '@/app/components/loginScreen.jsx'
import RedirectToDotCom from '@/app/components/netRedirect.jsx';
import LoginNavbar from '@/app/components/loginNavbar.jsx'

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-start justify-center overflow-auto">
      <LoginNavbar />
      <div className="flex justify-between w-full max-w-screen-xl mt-8">
        <LoginBox />
        <RedirectToDotCom />
      </div>
    </div>
  );
}