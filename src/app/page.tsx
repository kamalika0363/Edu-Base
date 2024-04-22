import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col justify-between items-center p-6 h-screen">
            <div className="flex flex-col items-start justify-end px-5 lg:py-8 lg:bg-[#F7F8F9] lg:border w-screen lg:w-96 h-full">
                <h1 className="text-3xl font-medium text-[#1D2226] mb-4">
                    Welcome to PopX
                </h1>
                <p className="text-base md:text-lg tracking-wider text-[#1D2226]/60 mb-6">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit
                </p>
                <div className="flex flex-col gap-3 font-medium w-full">
                    <Link href="/signup">
                        <button className="bg-[#6C25FF] text-white w-full rounded-md px-4 py-3.5">
                            Create Account
                        </button>
                    </Link>
                    <Link href="/login">
                        <button className="bg-[#6C25FF4B] text-[#1D2226] w-full rounded-md px-4 py-3.5">
                            Already Registered? Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
