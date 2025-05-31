// import DocumentVerification from "./DocumentVerification/page"
// import PageLogin from "./LoginPage/page"
// import EmailVerification from "./EmailVerification/page"
// import SuccessPage from "./Successful/page"


// export default function LoginPage() {
//   return(
//     <div className="w-full min-h-screen">
//         {/* <PageLogin /> */}
//         <EmailVerification />
//         {/* <DocumentVerification /> */}
//         {/* <SuccessPage /> */}
//     </div>
//   )
// }





'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const router = useRouter();

	const handleLogin = (e) => {
		e.preventDefault();
		console.log({ email, password, rememberMe });

		router.push('/Login/EmailVerification');
	};

	return (
		<div className="relative z-10 w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
			style={{ backgroundImage: 'url("/cargo-ship.png")' }}
		>
			<div className="absolute -z-[1] top-0 left-0 w-full min-h-screen bg-black/40"></div>

			<div className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md">
				<div className="text-center mb-6">
					<div className="text-sm font-bold text-green-700">Logo</div>
					<h2 className="text-2xl font-semibold text-green-800 mt-2">Welcome to Green Ocean</h2>
					<p className="text-sm text-gray-500 mt-1">Login to Your Account</p>
				</div>

				<form onSubmit={handleLogin} className="space-y-5">
					<div className="flex flex-col space-y-1">
						<label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='you@gmail.com'
							className="bg-green-50 border border-green-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
							required
						/>
					</div>

					<div className="flex flex-col space-y-1">
						<label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder='*********'
							className="bg-green-50 border border-green-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
						/>
					</div>

					<div className="flex items-center justify-between text-sm">
						<div className="flex items-center gap-2">
							<input
								id="remember"
								type="checkbox"
								checked={rememberMe}
								onChange={(e) => setRememberMe(e.target.checked)}
								className="accent-green-600"
							/>
							<label htmlFor="remember">Remember Me</label>
						</div>
						<a href="#" className="text-red-500 hover:underline">Forgot Password?</a>
					</div>

					<button
						type="submit"
						className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition-all"
            
					>
						<FaArrowRightToBracket />
						Login
					</button>
				</form>

				<div className="flex items-center my-4">
					<div className="flex-grow h-px bg-gray-300"></div>
					<span className="px-2 text-gray-500 text-sm">or</span>
					<div className="flex-grow h-px bg-gray-300"></div>
				</div>

				<button
					className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100"
					type="button"
				>
					<FcGoogle />
					Login with Google
				</button>

				<p className="text-center text-sm mt-4">
					Don't have an account?{" "}
					<a href="#" className="text-green-700 font-semibold hover:underline">Sign Up</a>
				</p>

				<p className="text-center text-xs text-gray-700 mt-2">
					Need Help?{" "}
					<a href="mailto:support@greenlogistics.com" className="text-green-600 hover:underline">support@greenlogistics.com</a>
				</p>
			</div>
		</div>
	);
}
