import React, { type FC } from "react";
import { motion } from "motion/react";

import { Compass } from "lucide-react";
const Hero: FC = () => {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col items-center overflow-hidden lg:flex-row">
        <div className="pointer-events-none absolute left-[5%] top-[15%] h-[300px] w-[300px] rounded-full bg-[#F5B800]/10 blur-2xl" />

        <div className="pointer-events-none absolute right-[10%] top-[10%] h-[250px] w-[250px] rounded-full bg-[#FFD95A]/15 blur-2xl" />

        <div className="pointer-events-none absolute bottom-[5%] right-[35%] h-[300px] w-[300px] rounded-full bg-[#F5B800]/8 blur-2xl" />

        <div className="w-full lg:w-1/2 text-right  space-y-8 px-5  lg:px-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7D6] px-4 py-2  text-sm  font-medium text-[#B88600]">
            <Compass className="h-4 w-4" />
            <span>مسیر یادگیریت رو روشن کن</span>
          </div>
          <h1 className="font-bold text-4xl lg:text-5xl leading-16">
            چراغ راهت در مسیر <br />
            <span className="text-[#F5B800] [text-shadow:0_2px_8px_rgba(245,184,0,0.25)]  ">
              یادگیری برنامه نویسی
            </span>
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

        <div className=" relative flex items-center justify-center w-full mt-20 lg:w-1/2 ">
          <motion.img
            src="./html-logo.webp"
            alt="HTML"
            className="absolute right-[5%] lg:right-[18%] top-[8%]  h-20 lg:h-24 w-20 lg:w-24 object-contain drop-shadow-md"
            animate={{ y: 15 }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="./css-logo.webp"
            alt="CSS"
            className="absolute left-[5%] lg:left-[18%] top-[12%] h-20 lg:h-24 w-20 lg:w-24 object-contain  drop-shadow-md"
            animate={{ y: -15 }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="./LandingPage-LH.webp"
            alt="LightHouse-3D"
            className="h-[380px] lg:h-[500px] object-contain "
          />
          <motion.img
            src="./javascript-logo.webp"
            alt="JavaScript"
            className="absolute right-5 lg:right-[12%] bottom-4  lg:bottom-[5%] h-20 lg:h-24 w-20 lg:w-24 object-contain   drop-shadow-md"
            animate={{ y: -15 }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
