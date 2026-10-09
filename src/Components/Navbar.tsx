import { useState, type FC } from "react";
import { Menu, X } from "lucide-react";
const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ["خانه", "دوره ", "بوت کمپ ", "چالش", "درباره "];
  return (
    <nav className="fixed top-4 left-1/2 w-[85%] py-3 -translate-x-1/2 z-50 rounded-3xl border border-[#E4E4E7] bg-white/70 px-5 shadow-sm backdrop-blur-xl ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="./Logo-black.png"
            alt="LightHouseLearn Logo"
            className="h-[52px] w-[52px] object-contain"
          />
          <span className="text-lg font-bold text-[#181818] font-manrope">
            LightHouse Learn
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
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="md:hidden rounded-lg p-2 text-[#181818] hover:bg-[#FFF7D6]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:block">
          <button className="rounded-xl bg-[#F5B800] px-5 py-2.5 font-semibold text-[#181818] transition hover:bg-[#D99F00] cursor-pointer ">
            ورود/ثبت نام
          </button>
        </div>
      </div>
      {open && (
        <div className="mt-4 flex flex-col gap-4 border-t border-[#E4E4E7] pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => {
                setOpen(false);
              }}
            >
              {link}
            </a>
          ))}
          <button className="rounded-xl bg-[#F5B800] px-5 py-2.5 font-semibold text-[#181818]">
            ورود/ثبت نام
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
