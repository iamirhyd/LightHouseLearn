import React from "react";

const WhyLightHouse = () => {
  return (
    <section className=" w-full py-16 md:py-24">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto gap-8">
        <div className="w-1/2">
          <img
            src="WhyLightHouse.webp"
            alt="LightHouse2"
            className="h-[320px] md:h-[450px] object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 px-5">
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
            یادگیری یک مسیر است، نه یک مقصد.
          </h2>
          <p className="mt-4 text-base leading-8 text-[#71717A] lg:text-lg">
            در لایت‌هاوس لرن، ما باور داریم که یادگیری برنامه‌نویسی باید عملی،
            شفاف و لذت‌بخش باشد. رویکرد ما بر پایه آموزش پروژه‌محور، توضیحات
            واضح و ساخت مهارت‌های واقعی شکل گرفته است. هر خط کد شما را به مهارتی
            نزدیک می‌کند که می‌توانید در دنیای واقعی استفاده کنید.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#FFF7D6] px-4 py-2 text-sm font-medium text-[#B88600]">
              یادگیری عملی
            </span>
            <span className="rounded-full bg-[#FFF7D6] px-4 py-2 text-sm font-medium text-[#B88600]">
              توضیحات شفاف
            </span>
            <span className="rounded-full bg-[#FFF7D6] px-4 py-2 text-sm font-medium text-[#B88600]">
              آموزش پروژه‌محور
            </span>
            <span className="rounded-full bg-[#FFF7D6] px-4 py-2 text-sm font-medium text-[#B88600]">
              مهارت‌های واقعی
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLightHouse;
