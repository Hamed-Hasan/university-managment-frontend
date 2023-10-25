import Banner from "@/components/HomePage/Banner";
import Categories from "@/components/HomePage/Categories";
import Companies from "@/components/HomePage/Companies";
import Courses from "@/components/HomePage/Courses";
import Header from "@/components/HomePage/Header";

export default function Home() {
  return (
    <>
      <main className="text-gray-600 body-font bg-[#1B143F] h-max ">
        <Header />
        <Banner />
        <Companies />
        <Courses />
        <Categories />
      </main>
    </>
  );
}
