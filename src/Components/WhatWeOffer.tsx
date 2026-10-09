import { type FC } from "react";
import { BookOpen, Rocket, Trophy, Code2, ArrowLeft } from "lucide-react";
const WhatWeOffer: FC = () => {
  return (
    <section className="py-16 lg:py-24 w-full bg-white">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
          چی ارائه می‌دیم؟
        </h2>
        <p className="mt-3 text-base font-medium opacity-60 lg:text-lg">
          هر چیزی که برای یادگیری، تمرین و رشد در مسیر برنامه‌نویسی نیاز داری.
        </p>
        {/*Cards*/}
        <div className="mt-12 grid w-full max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex min-h-[320px] w-full flex-col rounded-2xl border border-[#E4E4E7] p-8 shadow-sm transition hover:border-[#F5B800]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF7D6] text-[#F5B800]">
              <BookOpen />
            </div>
            <div>
              <p className="text-lg font-bold text-[#181818]">دوره های تخصصی</p>
              <p className="mt-2 text-sm leading-6 text-[#71717A] py-4">
                یادگیری مهارت‌های برنامه‌نویسی از پایه تا پیشرفته، همراه با
                تمرین و پروژه
              </p>
            </div>
            <div className="flex">
              <button className="mt-6 flex items-center gap-2 rounded-xl bg-[#F5B800] px-4 py-2.5 text-sm font-semibold text-[#181818] transition hover:bg-[#D99F00] cursor-pointer">
                <span>مشاهده دوره</span>
                <ArrowLeft size={17} />
              </button>
            </div>
          </div>
          <div className="flex min-h-[320px] w-full flex-col rounded-2xl border border-[#E4E4E7] p-8 shadow-sm transition hover:border-[#F5B800]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF7D6] text-[#F5B800]">
              <Rocket />
            </div>
            <div>
              <p className="text-lg font-bold text-[#181818]">
                بوت‌کمپ‌های پروژه‌محور
              </p>
              <p className="mt-2 text-sm leading-6 text-[#71717A] py-4">
                یادگیری فشرده با تمرکز روی ساخت پروژه‌های واقعی و کار تیمی
              </p>
            </div>
            <div className="flex">
              <button className="mt-6 flex items-center gap-2 rounded-xl bg-[#F5B800] px-4 py-2.5 text-sm font-semibold text-[#181818] transition hover:bg-[#D99F00] cursor-pointer">
                <span>مشاهده بوت‌کمپ‌ها</span>
                <ArrowLeft size={17} />
              </button>
            </div>
          </div>
          <div className="flex min-h-[320px] w-full flex-col rounded-2xl border border-[#E4E4E7] p-8 shadow-sm transition hover:border-[#F5B800]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF7D6] text-[#F5B800]">
              <Trophy />
            </div>
            <div>
              <p className="text-lg font-bold text-[#181818]">
                چالش‌ها و مسابقات
              </p>
              <p className="mt-2 text-sm leading-6 text-[#71717A] py-4">
                مهارت‌هات رو با چالش‌های مختلف محک بزن و با بقیه رقابت کن
              </p>
            </div>
            <div className="flex">
              <button className="mt-6 flex items-center gap-2 rounded-xl bg-[#F5B800] px-4 py-2.5 text-sm font-semibold text-[#181818] transition hover:bg-[#D99F00] cursor-pointer">
                <span>مشاهده چالش‌ها</span>
                <ArrowLeft size={17} />
              </button>
            </div>
          </div>
          <div className="flex min-h-[320px] w-full flex-col rounded-2xl border border-[#E4E4E7] p-8 shadow-sm transition hover:border-[#F5B800]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF7D6] text-[#F5B800]">
              <Code2 />
            </div>
            <div>
              <p className="text-lg font-bold text-[#181818]">
                پروژه‌های واقعی
              </p>
              <p className="mt-2 text-sm leading-6 text-[#71717A] py-4">
                دانسته‌هات رو به پروژه تبدیل کن و تجربه ساخت محصول واقعی به دست
                بیار
              </p>
            </div>
            <div className="flex">
              <button className="mt-6 flex items-center gap-2 rounded-xl bg-[#F5B800] px-4 py-2.5 text-sm font-semibold text-[#181818] transition hover:bg-[#D99F00] cursor-pointer">
                <span> مشاهده پروژه‌ها</span>
                <ArrowLeft size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
