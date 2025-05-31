'use client';
import React, { useState } from 'react';
import { FiUpload } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const NewRequest = () => {
    const [cfs, setCfs] = useState('');
    const [containerNo, setContainerNo] = useState('');
    const [date, setDate] = useState('');
    const [timeslot, setTimeslot] = useState('');
    const [remark, setRemark] = useState('');
    const [search, setSearch] = useState('');
    const [filterCFS, setFilterCFS] = useState('');
    const [requests, setRequests] = useState([
    {
        id: 'REQ1',
        cfs: 'CFS A',
        containerNo: '123456',
        date: '2025-05-15',
        timeslot: 'Slot 1',
        remark: 'Handling',
        uploadedOn: '2025-05-10',
    },
    {
        id: 'REQ2',
        cfs: 'CFS B',
        containerNo: '654321',
        date: '2025-05-16',
        timeslot: 'Slot 2',
        remark: 'General',
        uploadedOn: '2025-05-11',
    },
    {
        id: 'REQ3',
        cfs: 'CFS C',
        containerNo: '112233',
        date: '2025-05-17',
        timeslot: 'Slot 3',
        remark: 'Revised',
        uploadedOn: '2025-05-12',
    }
]);



    const handleSubmit = (e) => {
        e.preventDefault();
        const newRequest = {
            id: `REQ${requests.length + 1}`,
            cfs,
            containerNo,
            date,
            timeslot,
            remark,
            uploadedOn: new Date().toISOString().split('T')[0]
        };
        setRequests([newRequest, ...requests]);
        setCfs('');
        setContainerNo('');
        setDate('');
        setTimeslot('');
        setRemark('');
    };

    const filteredRequests = requests.filter(req => {
        const matchesSearch = search === '' || req.id.toLowerCase().includes(search.toLowerCase());
        const matchesCFS = filterCFS === '' || req.cfs === filterCFS;
        return matchesSearch && matchesCFS;
    });

    return (
        <div className='p-4 w-[70%] md:p-6 lg:p-8 bg-[#D4E6D2]'>
            
            <div className='border border-[#2E6F40] p-6 md:p-8 w-full lg:w-[90%] mx-auto rounded-[8px] bg-[#D4E6D2]'>
                <h1 className='font-semibold text-2xl font-[Outfit] text-[#3C4D03]'>
                    Upload New Priority Movement Request
                </h1>
                <form className='mt-5 font-[Outfit] text-[#09090B]' onSubmit={handleSubmit}>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='flex-1'>
                            <label htmlFor="cfs">CFS Name</label>
                            <select
                                id="cfs"
                                value={cfs}
                                onChange={(e) => setCfs(e.target.value)}
                                className='bg-[#E8F3EB] text-[#71717A] px-3 border rounded-[6px] w-full h-[40px]'
                                required
                            >
                                <option value="" disabled hidden>Select CFS</option>
                                <option value="CFS A">CFS A</option>
                                <option value="CFS B">CFS B</option>
                                <option value="CFS C">CFS C</option>
                                <option value="CFS D">CFS D</option>
                            </select>
                        </div>

                        <div className='flex-1'>
                            <label htmlFor="container">Container Number</label>
                            <input
                                type="text"
                                id="container"
                                value={containerNo}
                                onChange={(e) => setContainerNo(e.target.value)}
                                className='bg-[#E8F3EB] text-[#71717A] px-3 border rounded-[6px] w-full h-[40px]'
                                placeholder='Enter Container Number'
                                required
                            />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-6 mt-6'>
                        <div className='flex-1'>
                            <label htmlFor="date">Preferred Date</label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className='text-[#71717A] bg-[#E8F3EB] px-3 border rounded-[6px] w-full h-[40px]'
                                required
                            />
                        </div>

                        <div className='flex-1'>
                            <label htmlFor="timeslot">Preferred Time Slot</label>
                            <select
                                id="timeslot"
                                value={timeslot}
                                onChange={(e) => setTimeslot(e.target.value)}
                                className='px-3 text-[#71717A] bg-[#E8F3EB] border rounded-[6px] w-full h-[40px]'
                                required
                            >
                                <option value="" disabled hidden>Select Time Slot</option>
                                <option value="Slot 1">Time Slot 1</option>
                                <option value="Slot 2">Time Slot 2</option>
                                <option value="Slot 3">Time Slot 3</option>
                                <option value="Slot 4">Time Slot 4</option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <label htmlFor="remark">Remark (Optional)</label>
                        <textarea
                            id="remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            placeholder='Add Optional Remarks...'
                            className='bg-[#E8F3EB] border rounded-[6px] p-2 w-full h-[100px]'
                            rows={5}
                        ></textarea>
                    </div>

                    <div className='mt-8'>
                        <button type="submit" className='flex items-center gap-2 bg-[#1B5E20] px-4 py-2 text-white rounded-[6px]'>
                            <FiUpload />
                            Upload Request
                        </button>
                    </div>
                </form>
            </div>

            
            <div className='border border-[#2E6F40] mt-10 w-full lg:w-[90%] mx-auto rounded-[8px] bg-[#D4E6D2]'>

                <div className='p-6 md:p-8'>
                    <h1 className='font-semibold text-2xl font-[Outfit] text-[#3C4D03]'>Request List</h1>

                    <form className='mt-5 flex flex-col md:flex-row gap-4'>
                        <input
                            type="text"
                            placeholder='🔍 Search by ID'
                            className='bg-[#E8F3EB] p-2 text-[#71717A] border rounded-[6px] w-full md:w-[300px]'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <select
                            value={filterCFS}
                            onChange={(e) => setFilterCFS(e.target.value)}
                            className='bg-[#E8F3EB] p-2 text-[#71717A] border rounded-[6px] w-full md:w-[200px]'
                        >
                            <option value="">Filter by CFS</option>
                            <option value="CFS A">CFS A</option>
                            <option value="CFS B">CFS B</option>
                            <option value="CFS C">CFS C</option>
                            <option value="CFS D">CFS D</option>
                        </select>
                    </form>

                    <div className='overflow-x-auto mt-6'>
                        <table className="w-full table-auto text-left border-collapse">
                            <thead>
                                <tr className='text-[#3C4D03]'>
                                    <th className='pb-3'>Order ID</th>
                                    <th className='pb-3'>CFS Name</th>
                                    <th className='pb-3'>Uploaded On</th>
                                    <th className='pb-3'>Remarks</th>
                                    <th className='pb-3'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRequests.map((req, index) => (
                                    <tr key={index} className='border-t border-[#2E6F40] h-[50px]'>
                                        <td>{req.id}</td>
                                        <td>{req.cfs}</td>
                                        <td>{req.uploadedOn}</td>
                                        <td>{req.remark || '-'}</td>
                                        <td>
                                            <button className='flex justify-center items-center text-[#3C4D03]'>
                                                <MdOutlineRemoveRedEye size={25} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {filteredRequests.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className='text-center text-gray-400 py-6'>No requests found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewRequest;
