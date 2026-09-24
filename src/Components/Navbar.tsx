import React, { type FC } from "react";

const Navbar: FC = () => {
  const navLinks = ["خانه", "دوره ها", "بوت کمپ ها", "چالش ها", "درباره ما"];
  return (
    <nav className="fixed top-4 left-1/2 w-[80%] py-3 -translate-x-1/2 z-50 rounded-2xl border border-[#E4E4E7] bg-white/70 px-5 shadow-sm backdrop-blur-xl ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/Logo-black.png"
            alt="LightHouseLearn Logo"
            className="h-[52px] w-[52px] object-contain"
          />
          <span className="text-lg font-bold text-[#181818] font-manrope">
            LightHouseLearn
          </span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-[#181818] transition hover:text-[#B88600]"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <button className="rounded-xl bg-[#F5B800] px-5 py-2.5 font-semibold text-[#181818] transition hover:bg-[#D99F00] ">
            ورود/ثبت نام
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
