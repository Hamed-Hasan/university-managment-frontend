import Banner from "@/components/HomePage/Banner";
import Categories from "@/components/HomePage/Categories";
import Companies from "@/components/HomePage/Companies";
import CourseNews from "@/components/HomePage/CourseNews";
import Courses from "@/components/HomePage/Courses";
import Dominate from "@/components/HomePage/Dominate";
import HomeFooter from "@/components/HomePage/Footer";
import Header from "@/components/HomePage/Header";
import StudentSay from "@/components/HomePage/StudentSay";

export default function Home() {
  return (
    <>
      <main className="text-gray-600 body-font bg-[#1B143F] h-max ">
        <Header />
        <Banner />
        <Companies />
        <Courses />
        <Categories />
        <StudentSay/>
        <CourseNews/>
        <Dominate/>
        <HomeFooter/>
      </main>
    </>
  );
}
