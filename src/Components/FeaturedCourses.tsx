import React from "react";

const FeaturedCourses = () => {
  const courses = [
    {
      title: "HTML و CSS",
      hours: "۲۰ ساعت",
      price: "۴۹۹,۰۰۰ تومان",
    },
    {
      title: "JavaScript",
      hours: "۳۰ ساعت",
      price: "۷۹۹,۰۰۰ تومان",
    },
    {
      title: "React.js",
      hours: "۲۵ ساعت",
      price: "۸۹۹,۰۰۰ تومان",
    },
    {
      title: "Node.js",
      hours: "۲۸ ساعت",
      price: "۹۹۹,۰۰۰ تومان",
    },
  ];
  return (
    <>
      <div className="bg-white py-16 lg:py-24">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl py-8">
            دوره ها
          </h2>
        </div>

        <div className="mx-auto w-full max-w-7xl rounded-2xl bg-slate-50 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course.title}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-40 items-center justify-center rounded-xl bg-slate-100"></div>

                <h3 className="mt-5 text-lg font-bold text-[#181818]">
                  {course.title}
                </h3>

                <div className="mt-3 flex items-center justify-between text-sm text-[#71717A]">
                  <span>{course.hours}</span>
                  <span>{course.price}</span>
                </div>
                <button className="mt-5 w-full rounded-xl bg-[#F5B800] py-2.5 text-sm font-semibold text-[#181818] transition hover:bg-[#D99F00] cursor-pointer">
                  مشاهده دوره
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
