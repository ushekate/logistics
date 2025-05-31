'use client';
import Image from "next/image";
import Page from "./CFSServices/page";
import MobileRequest from "./RequestPage/MobileRequest";
import RequestList from "./UploadSlip/RequestList";
import NewRequest from "./RequestPage/page";
import LoginPage from "./Login/page";


export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen min-w-screen">
      {/* <Page /> */}
      {/* <MobileRequest /> */}
      {/* <RequestList /> */}
      {/* <NewRequest /> */}
      <LoginPage />
    </div>
  );
}
