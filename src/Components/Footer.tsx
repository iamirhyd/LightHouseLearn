import React from "react";
import { Mail, ArrowUpLeft } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#E4E4E7] bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-12 md:grid-cols-3 md:gap-8">
        <div className="space-y-4">
          <a href="/" className="inline-block">
            <img
              src="./Logo-black.png"
              alt="LightHouseLearn Logo"
              className="h-14 w-14 object-contain"
            />
          </a>

          <p className="max-w-sm text-sm leading-7 text-[#71717A]">
            مسیر یادگیری برنامه‌نویسی، از آموزش تا ساختن.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-[#181818]">دسترسی سریع</h3>

          <ul className="space-y-3 text-sm text-[#71717A]">
            <li>
              <a href="/" className="transition hover:text-[#B88600]">
                خانه
              </a>
            </li>
            <li>
              <a href="/courses" className="transition hover:text-[#B88600]">
                دوره‌ها
              </a>
            </li>
            <li>
              <a href="/bootcamps" className="transition hover:text-[#B88600]">
                بوت‌کمپ‌ها
              </a>
            </li>
            <li>
              <a href="/about" className="transition hover:text-[#B88600]">
                درباره ما
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-[#181818]">ارتباط با ما</h3>

          <div className="flex flex-col gap-4 text-sm text-[#71717A]">
            <a
              href="mailto:hello@lighthouselearn.ir"
              className="flex items-center gap-3 transition hover:text-[#B88600]"
            >
              <Mail size={18} />
              <span>ایمیل</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E4E4E7]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-[#71717A] sm:flex-row">
          <p>© 2026 LightHouseLearn. تمامی حقوق محفوظ است.</p>

          <a
            href="#"
            className="flex items-center gap-2 transition hover:text-[#B88600]"
          >
            بازگشت به بالا
            <ArrowUpLeft size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
