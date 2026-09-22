import React, { type FC } from "react";
import Navbar from "../Components/Navbar";
import { Compass } from "lucide-react";
const HomePage: FC = () => {
  return (
    <div className=" flex flex-col md:flex-row min-h-screen items-center">
      <div className="w-1/2 text-right  space-y-8  lg:px-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7D6] px-4 py-2  text-sm  font-medium text-[#B88600]">
          <Compass className="h-4 w-4" />
          <span>مسیر یادگیریت رو روشن کن</span>
        </div>
        <h1 className="font-bold text-5xl">چراغ راهت در مسیر یادگیری</h1>
        <p className="text-lg max-w-full lg:max-w-prose font-medium opacity-70">
          بوت‌کمپ‌های تخصصی و پروژه‌محور، دوره‌های برنامه‌نویسی، چالش‌ها و
          مسابقات؛ هر چیزی که برای یادگیری، تمرین و رشد در مسیر برنامه‌نویسی
          نیاز داری.
        </p>
        <div className="space-x-4">
          <button className="bg-[#F5B800] text-[#181818] font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-[#D99F00] transition cursor-pointer shadow-lg ">
            شروع یادگیری
          </button>
          <button className="bg-[#FFFFFF] text-[#181818] border:bg-[#D4D4D8] border-2 font-medium px-7 py-3.5 rounded-xl hover:bg-[#F4F4F5] transition  cursor-pointer  ">
            بوت کمپ ها
          </button>
        </div>
      </div>
      <div className=" flex items-start justify-center w-1/2 min-h">
        <img
          src="./LandingPage-LH.webp"
          alt="LightHouse-3D"
          className="h-[550px] object-contain"
        />
      </div>
    </div>
  );
};

export default HomePage;
