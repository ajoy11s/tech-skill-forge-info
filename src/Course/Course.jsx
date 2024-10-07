import { useState } from "react";
import { useEffect } from "react";
import CourseCard from "../CourseCard/CourseCard";

function Course() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch('https://techcoursedetails.netlify.app/.netlify/functions/api/products')
      .then(res => res.json())
      .then(data => setCourse(data));

  }, []);
  return (
    <>
      <div className="text-center bg-slat-100 w-full">
        <h3 className="text-center text-2xl text-green-400 font-bold"> All Course Information </h3>
        <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-1  bg-slat-100">
          {
            course.map(tCourse => <CourseCard key={tCourse._id} courseprop={tCourse}></CourseCard>)
          }
        </div>
      </div>
    </>
  )
}

export default Course;
