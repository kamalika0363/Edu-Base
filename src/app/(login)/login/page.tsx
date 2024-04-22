import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex flex-col justify-center items-center p-6 h-screen">
            <div className="flex flex-col items-start justify-start px-5 lg:py-12 lg:bg-[#F7F8F9] lg:border w-screen lg:w-96 h-full">
                <h1 className="text-3xl font-medium text-[#1D2226] mb-4">
                    Sign in to your <br/>
                    PopX account
                </h1>
                <p className="text-base md:text-lg tracking-wider text-[#1D2226]/60 mb-6">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit
                </p>
                <form className="flex flex-col gap-5 w-full mt-4">
                    <div className="relative">
                        <input
                            type="email"
                            className="peer w-full border border-[#CBCBCB] lg:bg-[#F7F8F9] rounded-md px-4 py-3 placeholder:text-[#919191]"
                            placeholder="Enter email address"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 ml-3 -translate-y-3 bg-white lg:bg-[#F7F8F9] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#6C25FF] peer-focus:ml-4 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
                        >
                            Email Address
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            className="peer w-full border border-[#CBCBCB] lg:bg-[#F7F8F9] rounded-md px-4 py-3 placeholder:text-[#919191]"
                            placeholder="Enter password"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-0 ml-3 -translate-y-3 bg-white lg:bg-[#F7F8F9] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#6C25FF] peer-focus:ml-4 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
                        >
                            Password
                        </label>
                    </div>
                    <Link href="/profile">
                        <button
                            type="submit"
                            className="bg-[#CBCBCB] font-medium text-white w-full rounded-md px-4 py-3"
                        >
                            Login
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

