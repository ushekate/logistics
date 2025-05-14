'use client';
import React, { useState } from 'react';
import '../globals.css';
import { CiFilter } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineRemoveRedEye, MdOutlineFileDownload } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";

const Page = () => {
    const [requests, setRequests] = useState([
        { id: 'EIR-2023-001', order: 'CONT123456', date: '2023-11-20', status: 'Pending' },
        { id: 'EIR-2023-002', order: 'CONT789012', date: '2023-11-19', status: 'Approved' },
        { id: 'EIR-2023-003', order: 'CONT789012', date: '2023-11-19', status: 'Rejected' },
        { id: 'EIR-2023-004', order: 'CONT789012', date: '2023-11-19', status: 'Approved' },
        { id: 'EIR-2023-005', order: 'CONT789012', date: '2023-11-19', status: 'Approved' },
        { id: 'EIR-2023-006', order: 'CONT789012', date: '2023-11-19', status: 'Approved' },
        { id: 'EIR-2023-007', order: 'CONT789012', date: '2023-11-19', status: 'Approved' },
    ]);

    const statusStyles = {
        Pending: "text-[#18181B] bg-[#F4F4F5]",
        Approved: "text-[#FFF1F2] bg-[#16A34A]",
        Rejected: "text-[#18181B] bg-[#F2A8A8]"
    };

    const Card = ({ icon, bgColor, title, value }) => (
        <div className='border-2 border-[#2E6F40] rounded-[8px] p-4 flex flex-col gap-3 h-[184px]'>
            <div className={`w-[48px] h-[48px] rounded-[8px] p-3`} style={{ backgroundColor: bgColor }}>
                {icon}
            </div>
            <div className='text-[#3C4D03] font-bold font-[Outfit]'>{title}</div>
            <div className='text-[#3C4D03] text-2xl font-[Outfit] font-semibold'>{value}</div>
        </div>
    );

    return (
        <div className='p-4 space-y-6 w-full lg:w-[80%] mx-auto'>

            <form className='flex flex-col sm:flex-row gap-2'>
                <input
                    type="text"
                    placeholder='🔍 Search EIR by reference number'
                    className='bg-[#E8F3EB] rounded-[6px] pl-3 h-[40px] lg:w-[90%] sm:w-[80%]'
                />
                <button
                    type="submit"
                    className='flex items-center bg-[#E8F3EB] h-[40px] lg:w-[20%] sm:w-[20%] rounded-[6px] px-4 font-[Outfit]'
                >
                    <CiFilter className='mr-2' size={23} />Filter
                </button>
            </form>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Card icon={<LuClock4 size={25} color='#A16207' />} bgColor='#FEF9C3' title="Pending Requests" value="12" />
                <Card icon={<IoMdCheckmarkCircleOutline size={25} color='#16A34A' />} bgColor='#16A34A1A' title="Approved EIRs" value="45" />
                <Card icon={<RxCrossCircled size={25} color='#EF4444' />} bgColor='#EF44441A' title="Rejected Requests" value="8" />
            </div>


            <div className='border-2 rounded-[8px] border-[#2E6F40] p-4 overflow-x-auto'>
                <div className='flex justify-between items-center mb-4'>
                    <label className='font-semibold'>Recent EIR Requests</label>
                    <a href="/RequestPage">
                        <button className='flex items-center p-2 w-[144.81px] h-[40px] rounded-[6px] bg-[#2E6F40] text-white'>
                            <GrDocumentText className='mr-2' size={20} />New Request
                        </button>
                    </a>
                </div>
                <table className="min-w-full text-left">
                    <thead>
                        <tr className='text-sm font-medium'>
                            <th className='pb-3'>Request ID</th>
                            <th className='pb-3'>Order ID</th>
                            <th className='pb-3'>Request Date</th>
                            <th className='pb-3'>Status</th>
                            <th className='pb-3'>Actions</th>
                            <th className='pb-3'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req, index) => (
                            <tr key={index} className='border-t border-[#2E6F40] h-[60px]'>
                                <td>{req.id}</td>
                                <td>{req.order}</td>
                                <td>{req.date}</td>
                                <td>
                                    <span className={`rounded-full px-2 py-1 text-sm ${statusStyles[req.status]}`}>
                                        {req.status}
                                    </span>
                                </td>
                                <td>
                                    <button className='flex items-center rounded-[6px] text-[#3C4D03] bg-[#E8F3EB] px-2 py-1'>
                                        <MdOutlineRemoveRedEye className='mr-1' size={20} /> View
                                    </button>
                                </td>
                                <td>
                                    {req.status === "Approved" && (
                                        <button className='flex items-center px-2 py-1 text-white bg-[#2E6F40] rounded-[6px]'>
                                            <MdOutlineFileDownload className='mr-2' size={20} /> Download
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default Page;







