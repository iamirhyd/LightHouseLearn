import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

const FeaturedCourses = () => {
  const courses = [
    {
      title: "HTML و CSS",
      hours: "۲۰ ساعت",
      price: "۴۹۹,۰۰۰ تومان",
      icon: (
        <>
          <FaHtml5 size={50} />
          <FaCss3Alt size={50} />
        </>
      ),
    },
    {
      title: "JavaScript",
      hours: "۳۰ ساعت",
      price: "۷۹۹,۰۰۰ تومان",
      icon: <FaJsSquare size={50} />,
    },
    {
      title: "React.js",
      hours: "۲۵ ساعت",
      price: "۸۹۹,۰۰۰ تومان",
      icon: <FaReact size={50} />,
    },
    {
      title: "Node.js",
      hours: "۲۸ ساعت",
      price: "۹۹۹,۰۰۰ تومان",
      icon: <FaNodeJs size={50} />,
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto mb-8 flex w-full max-w-7xl items-center justify-between px-2">
        <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
          دوره‌های منتخب
        </h2>

        <button className="font-semibold text-[#B88600] transition hover:text-[#D99F00]">
          مشاهده همه دوره‌ها ←
        </button>
      </div>

      <div className="mx-auto w-full max-w-7xl rounded-2xl bg-slate-50 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-2xl border border-[#E4E4E7] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-40 items-center justify-center gap-4 rounded-xl bg-[#FFF7D6]">
                {course.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#181818]">
                {course.title}
              </h3>

              <div className="mt-3 flex items-center justify-between text-sm text-[#71717A]">
                <span>{course.hours}</span>
                <span>{course.price}</span>
              </div>

              <button className="mt-5 w-full cursor-pointer rounded-xl bg-[#F5B800] py-2.5 text-sm font-semibold text-[#181818] transition hover:bg-[#D99F00]">
                مشاهده دوره
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
