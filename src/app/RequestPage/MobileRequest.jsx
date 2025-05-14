
import React from 'react';
import { IoFilter } from "react-icons/io5";
import { MdUpload, MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";


const MobileRequest = () => {
    return (
        <div className='bg-[#D4E6D2] h-screen flex flex-col'>
            <div className='bg-green-700 text-white h-[44px] p-4 flex justify-between items-center'>
                
            </div>
            <div className='bg-[#D4E6D2] text-[#2E6F40] p-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='mr-2'>
                        <div className='w-6 h-0.5 bg-[#1A1C16] mb-1'></div>
                        <div className='w-6 h-0.5 bg-[#1A1C16] mb-1'></div>
                        <div className='w-6 h-0.5 bg-[#1A1C16]'></div>
                    </div>
                    <h1 className='text-lg font-medium'>Priority Movement Request</h1>
                </div>
                <div className='flex items-center'>
                    <button className='mr-2'>
                        <IoIosNotificationsOutline size={25} className='text-[#3C4D03]' />
                    </button>
                    <div className='bg-[#2E6F40] rounded-full w-8 h-8 flex items-center justify-center'>
                        <FiUser size={20} className='text-white' />
                    </div>
                </div>
            </div>

            <div className='mb-20 flex-1 p-4 bg-[#D4E6D2] '>
                <div className='bg-[#D4E6D2] border border-[#2E6F40] rounded-lg shadow p-4 mb-8'>
                    <h2 className='text-lg font-medium mb-4'>Upload New Priority Movement Request</h2>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-sm text-gray-600 mb-1'>CFS Name</label>
                        <select defaultValue='' className='w-full border border-gray-300 rounded-md  p-2 bg-[#E8F3EB]' name="">
                            <option disabled hidden value="">Select CFS</option>
                            <option value="cfsA">CFS A</option>
                            <option value="cfsB">CFS B</option>
                            <option value="cfsC">CFS C</option>
                            <option value="cfsD">CFS D</option>
                        </select>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="" className='block text-sm text-gray-600 mb-1'>Container Number</label>
                        <input
                            type="text"
                            name=""
                            placeholder='Enter Container Number'
                            className='w-full bg-[#E8F3EB] border border-gray-300 rounded-md p-2'
                        />
                    </div>

                    <div className='flex gap-4 mb-4'>
                        <div className='flex-1'>
                            <label className='block text-sm text-gray-600 mb-1' htmlFor="">Preferred Date</label>
                            <input
                                type="date"
                                name=""
                                className='w-full bg-[#E8F3EB] border border-gray-300 h-[50px] rounded-md p-2'
                            />
                        </div>

                        <div className='flex-1'>
                            <label htmlFor="" className="block text-sm text-gray-600 mb-1">Preferred Time Slot</label>
                            <select defaultValue='' className='w-full bg-[#E8F3EB] h-[50px] border border-gray-300 rounded-md p-2' id="">
                                <option disabled hidden value="">Select time slot</option>
                                <option value="slot1">Slot 1</option>
                                <option value="slot2">Slot 2</option>
                                <option value="slot3">Slot 3</option>
                                <option value="slot4">Slot 4</option>
                            </select>
                        </div>
                    </div>

                    <div className=''>
                        <label htmlFor="" className=''>Remark(Optional)</label><br />
                        <textarea row='40' id="" placeholder='Add Optional Remark' className='mt-2 p-2 h-30 w-full border border-[#E1E4D5] rounded-md bg-[#E8F3EB]'></textarea>
                    </div>
                    <div className='mt-2'>
                        <button className='flex justify-center text-[#FFFFFF] p-2 bg-[#2E6F40] border border-[#2E6F40] rounded-[8px] h-10 w-full'>
                            <MdUpload size={25} className='mr-2' />
                            <label htmlFor="">Upload Request</label>
                        </button>
                    </div>
                </div>
                <div className=' bg-[#D4E6D2] border border-[#2E6F40] rounded-md'>
                    <div>
                        <div className='p-3'>
                            <label className='text-lg' htmlFor="">Request List</label>
                        </div>
                        <div className='flex p-3 justify-between'>
                            <input
                                type="text"
                                name=""
                                placeholder='🔍 Search by file name'
                                className='w-[270px] p-2 border border-[#E1E4D5] rounded-[8px] bg-[#E8F3EB]'
                            />
                            <button className='w-[46px] p-3 border border-[#E1E4D5] rounded-[8px] bg-[#E8F3EB]'>
                                <IoFilter size={20} />
                            </button>
                        </div>
                        <div className='m-3 p-3 flex justify-between rounded-[6px] bg-[#E8F3EB] w-[325px]'>
                            <div className=''>
                                <span className='font-bold'>tariff_may.pdf</span>
                                <div className='flex'>
                                    <span className='pr-5'>CFS A</span>
                                    <span>2025-05-10</span>
                                </div>
                                <span>Handling</span>
                            </div>
                            <div className='pt-5'>
                                <MdOutlineRemoveRedEye className='mr-3' size={25} />
                            </div>
                        </div>

                        <div className='m-3 p-3 flex justify-between rounded-[6px] bg-[#E8F3EB] w-[325px]'>
                            <div className=''>
                                <span className='font-bold'>tariff_may.pdf</span>
                                <div className='flex'>
                                    <span className='pr-5'>CFS B</span>
                                    <span>2025-04-25</span>
                                </div>
                                <span>General</span>
                            </div>
                            <div className='pt-5'>
                                <MdOutlineRemoveRedEye className='mr-3' size={25} />
                            </div>
                        </div>

                        <div className='m-3 p-3 flex justify-between rounded-[6px] bg-[#E8F3EB] w-[325px]'>
                            <div className=''>
                                <span className='font-bold'>tariff_may.pdf</span>
                                <div className='flex'>
                                    <span className='pr-5'>CFS A</span>
                                    <span>2025-03-30</span>
                                </div>
                                <span>Revised</span>
                            </div>
                            <div className='pt-5'>
                                <MdOutlineRemoveRedEye className='mr-3' size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MobileRequest;