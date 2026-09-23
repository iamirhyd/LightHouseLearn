import React, { type FC } from "react";
import Navbar from "../Components/Navbar";
import { Compass } from "lucide-react";
const HomePage: FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden lg:flex-row">
      <div className="pointer-events-none absolute left-[5%] top-[15%] h-[300px] w-[300px] rounded-full bg-[#F5B800]/10 blur-2xl" />

      <div className="pointer-events-none absolute right-[10%] top-[10%] h-[250px] w-[250px] rounded-full bg-[#FFD95A]/10 blur-2xl" />

      <div className="pointer-events-none absolute bottom-[5%] right-[35%] h-[300px] w-[300px] rounded-full bg-[#F5B800]/8 blur-2xl" />

      <div className="w-full lg:w-1/2 text-right  space-y-8 px-5  lg:px-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7D6] px-4 py-2  text-sm  font-medium text-[#B88600]">
          <Compass className="h-4 w-4" />
          <span>مسیر یادگیریت رو روشن کن</span>
        </div>
        <h1 className="font-bold text-4xl lg:text-5xl">
          چراغ راهت در مسیر یادگیری
        </h1>
        <p className="text-lg max-w-full lg:max-w-prose font-medium opacity-70">
          بوت‌کمپ‌های تخصصی و پروژه‌محور، دوره‌های برنامه‌نویسی، چالش‌ها و
          مسابقات؛ هر چیزی که برای یادگیری، تمرین و رشد در مسیر برنامه‌نویسی
          نیاز داری.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 lg:gap-4">
          <button className="bg-[#F5B800] text-[#181818]  font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-[#D99F00] transition cursor-pointer shadow-md ">
            شروع یادگیری
          </button>
          <button className="bg-[#FFFFFF] text-[#181818] border-[#D4D4D8] border-2 font-medium px-7 py-3.5 rounded-xl hover:bg-[#F4F4F5] transition  cursor-pointer  ">
            بوت کمپ ها
          </button>
        </div>
        <div className="flex items-center justify-start gap-8 pt-2">
          <div className="">
            <div className="text-2xl font-medium">+۱۲۰۰ </div>
            <div className="text-sm font-medium opacity-60">دانشجو </div>
          </div>
          <div className="h-8 w-px bg-[#E4E4E7]"></div>
          <div className="">
            <div className="text-2xl font-medium">+۳۰ </div>
            <div className="text-sm font-medium opacity-60">دوره </div>
          </div>
          <div className="h-8 w-px bg-[#E4E4E7]"></div>
          <div className="">
            <div className="text-2xl font-medium">+۸۰ </div>
            <div className="text-sm font-medium opacity-60">پروژه </div>
          </div>
        </div>
      </div>
      <div className=" flex items-start justify-center w-full lg:w-1/2  ">
        <img
          src="./LandingPage-LH.webp"
          alt="LightHouse-3D"
          className="h-[330px] lg:h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default HomePage;
