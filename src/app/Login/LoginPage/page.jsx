'use client';
import { useState } from "react"
import { Lock, Truck, User } from "lucide-react";
import { useRouter } from "next/navigation";


const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const steps = ['Log in', 'Email Verification', 'Document Upload', 'Successful'];

export default function PageLogin() {
    const [form, setForm] = useState({ username: '', password: '', remember: false });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.username || !form.password) {
            alert('Please fill in both fields');
            return;
        }
        console.log('Form Submitted: ', form);
        router.push('/Login/EmailVerification');
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#D4E6D2]">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">


                <div className="w-full flex flex-col items-center space-y-2 mb-6">
                    <div className="flex justify-between w-full">
                        {steps.map((step, index) => {
                            const stepNum = index + 1;
                            const isActive = stepNum === 1;
                            const isCompleted = stepNum < 1;

                            return (
                                <div key={step} className="flex flex-col items-center w-full text-center relative">
                                    <div
                                        className={cn(
                                            'w-6 h-6 flex items-center justify-center rounded-full text-sm font-semibold z-10',
                                            isActive ? 'bg-[#2E7D32] text-white'
                                                : 'bg-gray-200 text-gray-600'
                                        )}
                                    >
                                        {stepNum}
                                    </div>
                                    <span className={cn('text-xs mt-1', isActive ? 'text-black font-medium' : 'text-gray-400')}>
                                        {step}
                                    </span>
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-3 left-full w-full h-1 bg-gray-200 -z-10">
                                            <div
                                                className={cn(
                                                    'h-1 bg-black',
                                                    isCompleted ? 'w-full' : isActive ? 'w-1/2' : 'w-0'
                                                )} />
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full h-1 bg-gray-200 mb-6">
                        <div className="h-full bg-[#2E7D32] w-1/4 rounded" />
                    </div>
                </div>

                {/* Login Form */}

                <div className="text-center mb-6">
                    <Truck className="mx-auto mb-2 w-8 h-8 text-gray-500" />
                    <h2 className="text-lg font-semibold">Logistics Login</h2>
                    <p className="text-sm text-gray-500">Enter Your Credentials to access your account</p>
                </div>
                <form action="" className="space-y-4">
                    <div className="">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">Username</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                className="w-full border rounded-md px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                                value={form.username}
                                onChange={handleChange}
                            />
                            <User className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="" className="">Password</label>
                        <div className="relative mt-1">
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                className="w-full border rounded-md px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                                value={form.password}
                                onChange={handleChange}
                            />
                            <Lock className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <label htmlFor="" className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={form.remember}
                                onChange={handleChange}
                            />
                            Remember me
                        </label>
                        <button type='button' className="text-black hover:underline">Forget Password?</button>
                    </div>

                    <button type="submit" onClick={handleSubmit} className="w-full mt-2 bg-[#2E7D32] text-white h-10 rounded">
                        Sign In
                    </button>

                    <p className="text-center text-xs text-gray-400">
                        Don't have an Account?
                        <a href="#" className="text-black hover:underline">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}