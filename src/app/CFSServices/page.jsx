'use client';
import React, { useState } from 'react';
import '../globals.css';
// import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineRemoveRedEye, MdOutlineFileDownload } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";


const Page = () => {
    // const requestList = [
    //     {

    //     }
    // ]
    
    return (
        <div className=''>
            <div>
                <form action="" className='flex'>
                    <div className=' bg-[#E8F3EB] rounded-[6px]'>
                        <input
                            type="text"
                            placeholder='🔍 Search EIR by reference number'
                            className='pl-3 w-[1117.02px] h-[40px]'
                        />
                    </div>
                    <button type="submit" className='flex bg-[#E8F3EB] h-[40px] rounded-[6px] ml-2 p-2 pr-4 font-[Outfit]'><CiFilter className='pt-1 mr-2' size={23} />Filter</button>
                </form>
            </div>
            <div className='mt-5 grid grid-cols-3 gap w-[1232px] h-[186px]'>
                <div className='border-2 p-5 border-[#2E6F40] rounded-[8px] h-[184px] w-[392.66px]'>
                    <div className='bg-[#FEF9C3] w-[48px] h-[48px] rounded-[8px] p-3'><LuClock4 className='position items-center h-[20px] w-[20px]' size={25} color='#A16207' /></div>
                    <div className='mt-4 text-[#3C4D03] font-bold font-[Outfit] w-[600]'>Pending Requests</div>
                    <div className='mt-4 text-[#3C4D03] text-2xl font-[Outfit] font-semibold'>12</div>
                </div>
                <div className='border-2 p-5 border-[#2E6F40] rounded-[8px] h-[184px] w-[392.66px]'>
                    <div className='bg-[#16A34A1A] w-[48px] h-[48px] rounded-[8px] p-3'><IoMdCheckmarkCircleOutline className='position items-center h-[20px] w-[20px]' size={25} color='#16A34A' /></div>
                    <div className='mt-4 text-[#3C4D03] font-bold font-[Outfit] w-[600]'>Approved EIRs</div>
                    <div className='mt-4 text-[#3C4D03] text-2xl font-[Outfit] font-semibold'>45</div>
                </div>
                <div className='border-2 p-5 border-[#2E6F40] rounded-[8px] h-[184px] w-[392.66px]'>
                    <div className='bg-[#EF44441A] w-[48px] h-[48px] rounded-[8px] p-3'><RxCrossCircled className='position items-center h-[20px] w-[20px]' size={25} color='#EF4444' /></div>
                    <div className='mt-4Pageagettext-[#3C4D03] font-bold font-[Outfit] w-[600]'>Rejected Requests</div>
                    <div className='mt-4 text-[#3C4D03] text-2xl font-[Outfit] font-semibold'>8</div>
                </div>
            </div>
            <div className='border-2 rounded-[8px] w-[1215px]  mt-5 p-5 border-[#2E6F40]'>
                <div className='flex justify-between pb-8 pt-5'>
                    <div className='pt-1'>
                        <label className='font-semibold'>Recent EIR Requests</label>
                    </div>
                    <div className='text-[#FFF1F2]'>
                        <a href="/RequestPage"><button className='flex p-2 w-[144.81px] h-[40px] rounded-[6px] bg-[#2E6F40]'><GrDocumentText className='mr-2' size={20} />New Request</button></a>
                    </div>
                </div>
                <table className="table table-fixed grid-cols-6 w-[1175px]">
                    <thead className=''>
                        <tr className=''>
                            <th className='pb-3'>Request ID</th>
                            <th className='pb-3'>Order ID</th>
                            <th className='pb-3'>Request Date</th>
                            <th className='pb-3'>Status</th>
                            <th className='pb-3'>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className='border-t-2 border-[#2E6F40] w-[1231px] h-[50px]'>
                            <td className=''>EIR-2023-001</td>
                            <td className=''>CONT123456</td>
                            <td className=''>2023-11-20</td>
                            <td className=''><label className='text-[#18181B] rounded-[9999px] px-2 py-1 bg-[#F4F4F5]'>Pending</label></td>
                            <td className='flex pt-2 justify-center'>
                                <div>
                                    <button className='flex rounded-[6px] text-[#3C4D03] bg-[#E8F3EB] px-2'>
                                        <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                        <label className='m-1'>
                                            View
                                        </label>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-t-2 border-[#2E6F40] w-[1231px] h-[50px]'>
                            <td className=''>EIR-2023-002</td>
                            <td className=''>CONT789012</td>
                            <td className=''>2023-11-19</td>
                            <td className=''><label className='text-[#FFF1F2] rounded-[9999px] px-2 py-1 bg-[#16A34A]'>Approved</label></td>
                            <td className='flex pt-2 justify-center'>
                                <div>
                                    <button className='flex rounded-[6px] text-[#3C4D03] bg-[#E8F3EB] px-2'>
                                        <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                        <label className='m-1'>
                                            View
                                        </label>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <button className='flex px-2 py-1 text-[#E4E4E7] bg-[#2E6F40] rounded-[6px]'>
                                        <MdOutlineFileDownload className='mr-2' size={20} />
                                        Download
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-t-2 border-[#2E6F40] w-[1231px] h-[50px]'>
                            <td className=''>EIR-2023-001</td>
                            <td className=''>CONT789012</td>
                            <td className=''>2023-11-19</td>
                            <td className=''><label className='text-[#18181B] rounded-[9999px] px-2 py-1 bg-[#F2A8A8]'>Rejected</label></td>
                            <td className='flex pt-2 justify-center'>
                                <div>
                                    <button className='flex rounded-[6px] text-[#3C4D03] bg-[#E8F3EB] px-2'>
                                        <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                        <label className='m-1'>
                                            View
                                        </label>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-t-2 border-[#2E6F40] w-[1231px] h-[50px]'>
                            <td className=''>EIR-2023-002</td>
                            <td className=''>CONT789012</td>
                            <td className=''>2023-11-19</td>
                            <td className=''><label className='text-[#FFF1F2] rounded-[9999px] px-2 py-1 bg-[#16A34A]'>Approved</label></td>
                            <td className='flex pt-2 justify-center'>
                                <div>
                                    <button className='flex rounded-[6px] text-[#3C4D03] bg-[#E8F3EB] px-2'>
                                        <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                        <label className='m-1'>
                                            View
                                        </label>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <button className='flex px-2 py-1 text-[#E4E4E7] bg-[#2E6F40] rounded-[6px]'>
                                        <MdOutlineFileDownload className='mr-2' size={20} />
                                        Download
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-t-2 border-[#2E6F40] w-[1231px] h-[50px]'>
                            <td className=''>EIR-2023-002</td>
                            <td className=''>CONT789012</td>
                            <td className=''>2023-11-19</td>
                            <td className=''><label className='text-[#FFF1F2] rounded-[9999px] px-2 py-1 bg-[#16A34A]'>Approved</label></td>
                            <td className='flex pt-2 justify-center'>
                                <div>
                                    <button className='flex rounded-[6px] text-[#3C4D03] bg-[#E8F3EB] px-2'>
                                        <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                        <label className='m-1'>
                                            View
                                        </label>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <button className='flex px-2 py-1 text-[#E4E4E7] bg-[#2E6F40] rounded-[6px]'>
                                        <MdOutlineFileDownload className='mr-2' size={20} />
                                        Download
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-t-2 border-[#2E6F40] w-[1231px] h-[50px]'>
                            <td className=''>EIR-2023-002</td>
                            <td className=''>CONT789012</td>
                            <td className=''>2023-11-19</td>
                            <td className=''><label className='text-[#FFF1F2] rounded-[9999px] px-2 py-1 bg-[#16A34A]'>Approved</label></td>
                            <td className='flex pt-2 justify-center'>
                                <div>
                                    <button className='flex rounded-[6px] text-[#3C4D03] bg-[#E8F3EB] px-2'>
                                        <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                        <label className='m-1'>
                                            View
                                        </label>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <button className='flex px-2 py-1 text-[#E4E4E7] bg-[#2E6F40] rounded-[6px]'>
                                        <MdOutlineFileDownload className='mr-2' size={20} />
                                        Download
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-t-2 border-[#2E6F40] w-[1231px] h-[50px]'>
                            <td className=''>EIR-2023-002</td>
                            <td className=''>CONT789012</td>
                            <td className=''>2023-11-19</td>
                            <td className=''><label className='text-[#FFF1F2] rounded-[9999px] px-2 py-1 bg-[#16A34A]'>Approved</label></td>
                            <td className='flex pt-2 justify-center'>
                                <div>
                                    <button className='flex rounded-[6px] text-[#3C4D03] bg-[#E8F3EB] px-2'>
                                        <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                        <label className='m-1'>
                                            View
                                        </label>
                                    </button>
                                </div>
                                </td>
                                <td>
                                <div>
                                    <button className='flex px-2 py-1 text-[#E4E4E7] bg-[#2E6F40] rounded-[6px]'>
                                        <MdOutlineFileDownload className='mr-2' size={20} />
                                        Download
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page;