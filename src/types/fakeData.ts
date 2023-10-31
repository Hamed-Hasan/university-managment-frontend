import  {CourseProps, Category } from "./common";
import Course1 from "@/assets/course1.png"
import Course2 from "@/assets/course2.png"
import Course3 from "@/assets/course3.png"
import Course4 from "@/assets/course4.png"
import Course5 from "@/assets/course5.png"
import Course6 from "@/assets/course6.png"

export const coursesData: CourseProps[] = [

    {
        id: 1,
        title: "Motion Graphics: Create a Nice Typography Animation",
        category: "Web Development",
        students: 5957,
        duration: "01h 49m",
        price: "$16",
        imageSrc: Course1,
      },
      {
        id: 2,
        title: "Motion Graphics: Create a Nice Typography Animation",
        category: "Web Design",
        students: 3421,
        duration: "02h 15m",
        price: "$22",
        imageSrc: Course2,
      },
      {
        id: 3,
        title: "Motion Graphics: Create a Nice Typography Animation",
        category: "Data Science",
        students: 8796,
        duration: "03h 30m",
        price: "$30",
        imageSrc: Course3,
      },
      {
        id: 4,
        title: "Motion Graphics: Create a Nice Typography Animation",
        category: "App Development",
        students: 5123,
        duration: "02h 10m",
        price: "$25",
        imageSrc: Course4,
      },
      {
        id: 5,
        title: "Motion Graphics: Create a Nice Typography Animation",
        category: "Machine Learning",
        students: 7534,
        duration: "02h 55m",
        price: "$28",
        imageSrc: Course5,
      },
      {
        id: 6,
        title: "Motion Graphics: Create a Nice Typography Animation",
        category: "UI/UX Design",
        students: 4239,
        duration: "02h 30m",
        price: "$20",
        imageSrc: Course6,
      },
]


export const categoriesData: Category[] = [
    {
      title: "Digital Marketing",
      image: "https://i.ibb.co/cJm7QZw/marketing.png",
      courseCount: "25 Courses",
    },
    {
      title: "Graphic Design",
      image: "https://i.ibb.co/R3BMtcL/graphics.png",
      courseCount: "85 Courses",
    },
    {
      title: "Art & Humanities",
      image: "https://i.ibb.co/LN4DT4x/art.png",
      courseCount: "76 Courses",
    },
    {
      title: "Personal Development",
      image: "https://i.ibb.co/9NmWXzC/development.png",
      courseCount: "22 Courses",
    },
    {
      title: "IT and Software",
      image: "https://i.ibb.co/x6xXkGm/IT.png",
      courseCount: "110 Courses",
    },
    {
      title: "Web Development",
      image: "https://i.ibb.co/Lkyc1M4/web-dev.png",
      courseCount: "16 Courses",
    },
   
  ];