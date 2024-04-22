import Link from "next/link";

export default function Login() {
    return (
        <div className="flex flex-col justify-between items-center p-6 h-screen">
            <div className="flex flex-col items-start justify-start px-5 py-8 lg:my-8 lg:bg-[#F7F8F9] lg:border w-screen lg:w-96">
                <h1 className="text-3xl font-medium text-[#1D2226] mb-4">
                    Create your <br/>
                    PopX account
                </h1>
                <p className="text-base md:text-lg tracking-wider text-[#1D2226]/60 mb-6">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit
                </p>
                <form className="flex flex-col gap-5 w-full">
                    <div className="relative">
                        <input
                            type="text"
                            className="peer w-full border border-[#CBCBCB] lg:bg-[#F7F8F9] rounded-md px-4 py-3 placeholder:text-[#919191]"
                            placeholder="Full Name"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-0 ml-3 -translate-y-3 bg-white lg:bg-[#F7F8F9] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:text-base text-[#6C25FF] peer-focus:ml-4 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
                        >
                            Full Name <span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="number"
                            className="peer w-full border border-[#CBCBCB] lg:bg-[#F7F8F9] rounded-md px-4 py-3 placeholder:text-[#919191]"
                            placeholder="Phone Number"
                        />
                        <label
                            htmlFor="phone"
                            className="absolute left-0 ml-3 -translate-y-3 bg-white lg:bg-[#F7F8F9] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:text-base text-[#6C25FF] peer-focus:ml-4 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
                        >
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            className="peer w-full border border-[#CBCBCB] lg:bg-[#F7F8F9] rounded-md px-4 py-3 placeholder:text-[#919191]"
                            placeholder="Enter email address"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 ml-3 -translate-y-3 bg-white lg:bg-[#F7F8F9] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:text-base text-[#6C25FF] peer-focus:ml-4 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
                        >
                            Email Address <span className="text-red-500">*</span>
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
                            className="absolute left-0 ml-3 -translate-y-3 bg-white lg:bg-[#F7F8F9] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:text-base text-[#6C25FF] peer-focus:ml-4 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
                        >
                            Password <span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            type="Company Name"
                            className="peer w-full border border-[#CBCBCB] lg:bg-[#F7F8F9] rounded-md px-4 py-3 placeholder:text-[#919191]"
                            placeholder="Company Name"
                        />
                        <label
                            htmlFor="Company Name"
                            className="absolute left-0 ml-3 -translate-y-3 bg-white lg:bg-[#F7F8F9] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:text-base text-[#6C25FF] peer-focus:ml-4 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
                        >
                            Company Name
                        </label>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="mr-4">Are you an Agency?</p>
                        <div className="flex gap-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="yes"
                                    name="agency"
                                    value="yes"
                                    className="mr-2"
                                />
                                <label htmlFor="yes" className="mr-4">Yes</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="no"
                                    name="agency"
                                    value="no"
                                    className="mr-2"
                                />
                                <label htmlFor="no">No</label>
                            </div>
                        </div>
                    </div>
                    <Link href="/profile">
                        <button
                            type="submit"
                            className="bg-[#6C25FF] mt-8 font-medium text-white w-full rounded-md px-4 py-3"
                        >
                            Create Account
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

