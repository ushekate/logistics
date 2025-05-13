import { CheckCircle } from 'lucide-react';
import React from 'react'
// import { FiCheckCircle } from 'react-icons/fi';

const MobileRequest = () => {
    return (
        <div className='bg-[#D4E6D2] h-screen flex flex-col'>
            <div className='bg-green-700 text-white p-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='mr-2'>
                        <div className='w-6 h-0.5 bg-white mb-1'></div>
                        <div className='w-6 h-0.5 bg-white mb-1'></div>
                        <div className='w-6 h-0.5 bg-white'></div>
                    </div>
                    <h1 className='text-lg font-medium'>Priority Movement Request</h1>
                </div>
                <div className='flex items-center'>
                    <button className='mr-2'>
                        <CheckCircle size={20} />
                    </button>
                    <div className='bg-green-600 rounded-full w-8 h-8 flex items-center justify-center'>
                        <span className='text-white font-medium'>A</span>
                    </div>
                </div>
            </div>

            <div className='flex-1 p-4 bg-[#D4E6D2] overflow-auto'>
                <div className='bg-[#D4E6D2] border border-[#2E6F40] rounded-lg shadow p-4 mb-4'>
                    <h2 className='text-lg font-medium mb-4'>Upload New Priority Movement Request</h2>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-sm text-gray-600 mb-1'>CFS Name</label>
                        <select className='w-full border border-gray-300 rounded-md  p-2 bg-[#E8F3EB]' name="">
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
                        <button className='bg-[#2E6F40] border border-[#2E6F40] rounded-[8px] h-10 w-full'>
                            Upload Request
                        </button>
                    </div>
                </div>
                <div className=' bg-[#D4E6D2] border border-[#2E6F40] rounded-md'>
                    <div>
                        <div className='p-3'>
                            <label className='text-lg' htmlFor="">Request List</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name=""
                                placeholder='🔍 Search by file name'
                                className='border border-[#E1E4D5] bg-[#E8F3EB]'
                            />
                            <button className='border border-[#E1E4D5] bg-[#E8F3EB]'></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MobileRequest;