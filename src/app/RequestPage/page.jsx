'use client';
import React from 'react';
import { FiUpload } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";


const NewRequest = () => {
    return (
        <div className='justify-items-center gap-[24px] p-[24px] bg-[#D4E6D2]'>
            <div className='border border-[#2E6F40] p-8 w-[1112px]  rounded-[8px] bg-[#D4E6D2]'>
                <h1 className='font-semibold text-2xl font-[Outfit] text-[#3C4D03]'>Upload New Priority Movement Request</h1>
                <form action="" className='mt-5 font-[Outfit] text-[#09090B]'>
                    <div className='flex grid-cols-2'>
                        <div className='w-[519px]'>
                            <label htmlFor="">CFS Name</label>
                            <select defaultValue="" className='bg-[#E8F3EB] text-[#71717A] px-3 pr-3 border-[#E8F3EB] rounded-[6px] w-[500px] h-[40px]' name="" id="">
                                <option value="" disabled hidden>Select CFS</option>
                                <option value="cfs1">CFS A</option>
                                <option value="cfs2">CFS B</option>
                                <option value="cfs3">CFS C</option>
                                <option value="cfs4">CFS D</option>
                            </select>
                        </div>

                        <div className='w-[519px]'>
                            <label htmlFor="">Container Number</label>
                            <input type="number" className='bg-[#E8F3EB] text-[#71717A] px-3 border-[#E8F3EB] rounded-[6px] w-[500px] h-[40px]' placeholder='Enter Container Number' name="" id="" />
                        </div>
                    </div>
                    <div className='flex grid-cols-2 mt-8'>
                        <div className='w-[519px]'>
                            <label htmlFor="" className=''>Preferred date</label><br />
                            <input type="date" placeholder='Select Date' className='text-[#71717A] bg-[#E8F3EB] px-3 border-[#E8F3EB] rounded-[6px] w-[500] h-[40px]' name="" id="" />
                        </div>
                        <div className='w-[519px]'>
                            <label htmlFor="">Preferred Time Slot</label>
                            <select defaultValue='' className='px-3 text-[#71717A] bg-[#E8F3EB] border-[#E8F3EB] rounded-[6px] w-[500] h-[40px]' name="" id="">
                                <option value="" disabled hidden>Select Time Slot</option>
                                <option value="slot1">Time Slot 1</option>
                                <option value="slot2">Time Slot 2</option>
                                <option value="slot3">Time Slot 3</option>
                                <option value="slot4">Time Slot 4</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className=''>
                            <label htmlFor="">Remark (Optional)</label><br />
                            <textarea placeholder='Add Optional Remarks...' className='bg-[#E8F3EB] border-[#E8F3EB] rounded-[6px] p-2 w-[1020px] h-[100px]' rows={5} name="" id=""></textarea>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <button className='flex bg-[#1B5E20] p-2 text-[#FFF1F2] font-[Outfit]'><FiUpload className='text-[#FFF1F2] m-1' />Upload Request</button>
                    </div>
                </form>
            </div>
            <div className='border border-[#2E6F40] mt-10 w-[1112px] rounded-[8px] bg-[#D4E6D2]'>
                <div className='p-8'>
                    <div className=''>
                        <h1 className='font-semibold text-2xl font-[Outfit] text-[#3C4D03]'>Request List</h1>
                    </div>
                    <div className='mt-5'>
                        <form action="" className=''>
                            <div className='flex'>
                                <input
                                    type="text"
                                    name=""
                                    placeholder='🔍 Search by file name'
                                    className='bg-[#E8F3EB] p-2 text-[#71717A] border-[#E4E4E7] rounded-[6px] w-[300px] h-[40px]'
                                />
                                <select defaultValue='' className='bg-[#E8F3EB] p-2 ml-5 text-[#71717A] border-[#E4E4E7] rounded-[6px] w-[200px] h-[40px]' name="" id="">
                                    <option disabled hidden value="">Filter by CFS</option>
                                    <option value="cfsA">CFS A</option>
                                    <option value="cfsB">CFS B</option>
                                    <option value="cfsC">CFS C</option>
                                    <option value="cfsD">CFS D</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div>
                        <table className="table mt-5 table-fixed grid-cols-5 w-[1062px]">
                            <thead className=''>
                                <tr className=''>
                                    <th className='pb-3'>Order ID</th>
                                    <th className='pb-3'>CFS Name</th>
                                    <th className='pb-3'>Uploaded On</th>
                                    <th className='pb-3'>Remarks</th>
                                    <th className='pb-3'>Action</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className='border-t-1 border-[#2E6F40] w-[1231px] h-[50px]'>
                                    <td className=''>tariff_may.pdf</td>
                                    <td className=''>CFS A</td>
                                    <td className=''>2025-05-10</td>
                                    <td className=''>Handling</td>
                                    <td className='flex pt-2 justify-center'>
                                        <div>
                                            <button className='flex rounded-[6px] text-[#3C4D03] px-2'>
                                                <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-t-1 border-[#2E6F40] w-[1231px] h-[50px]'>
                                    <td className=''>tariff_may.pdf</td>
                                    <td className=''>CFS A</td>
                                    <td className=''>2025-05-10</td>
                                    <td className=''>Handling</td>
                                    <td className='flex pt-2 justify-center'>
                                        <div>
                                            <button className='flex rounded-[6px] text-[#3C4D03] px-2'>
                                                <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-t-1 border-[#2E6F40] w-[1231px] h-[50px]'>
                                    <td className=''>tariff_may.pdf</td>
                                    <td className=''>CFS A</td>
                                    <td className=''>2025-05-10</td>
                                    <td className=''>Handling</td>
                                    <td className='flex pt-2 justify-center'>
                                        <div>
                                            <button className='flex rounded-[6px] text-[#3C4D03] px-2'>
                                                <MdOutlineRemoveRedEye className='mt-1' size={25} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewRequest;