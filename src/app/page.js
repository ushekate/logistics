'use client';
import Image from "next/image";
import Page from "./CFSServices/page";
import MobileRequest from "./RequestPage/MobileRequest";
import RequestList from "./UploadSlip/RequestList";


export default function Home() {
  return (
    <div className="bg-white items-center justify-items-center min-h-screen min-w-screen pt-8">
      {/* <Page /> */}
      <MobileRequest />
      {/* <RequestList /> */}
      
    </div>
  );
}
