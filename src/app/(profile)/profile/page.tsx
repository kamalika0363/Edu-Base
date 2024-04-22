import Link from "next/link";
import Image from "next/image";
import Face from "@/app/assets/Profile.png";
import Camera from "@/app/assets/Camera.png";

export default function Profile() {
    return (
        <div className="flex flex-col justify-between items-center p-6">
            <div className="flex flex-col gap-8 items-start justify-start lg:my-8 lg:border w-screen lg:w-96">
                <div className="flex text-xl items-center bg-white px-5 lg:mt-6">
                    Account Settings
                </div>
                <div className="bg-[#F7F8F9] flex flex-col gap-5 w-full h-screen">
                    <div className="flex gap-5 px-5">
                        <div>
                            <Image src={Face} alt="Profile Image" className="mt-8 h-20 w-20"/>
                            <div className="absolute top-40 lg:top-52 ml-16 flex gap-2 mt-1">
                                <Image src={Camera} alt="Camera Icon" className="h-6 w-6"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-9">
                            <h1 className="text-base font-medium text-[#1D2226]">
                                Marry Doe
                            </h1>
                            <p className="text-sm text-[#1D2226]">
                                Marry@gmail.com
                            </p>
                        </div>
                    </div>
                    <p className="text-[#1D2226] text-sm mt-5 px-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, magna ac ornare dictum, est ex porta dolor, eget
                        imperdiet purus arcu sit amet ex. Sed nec sapien in justo
                        ultricies varius.
                    </p>
                    <div className="border border-[#CBCBCB] border-dashed">
                        {/* Placeholder border */}
                    </div>
                </div>
            </div>
        </div>
    );
}
