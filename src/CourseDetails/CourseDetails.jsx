import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const CourseDetails =()=> {
    const { _id } = useParams();
    const [course, setCourse] = useState({});
    const { course_id, title, details, lession,student, duration, price, assessments, author, level, ratings, author_img_url, img_url } = course || {};
    const url = `https://techcoursedetails.netlify.app/.netlify/functions/api/products/${_id}`;
    useEffect(() => {

        fetch(url)
            .then((response) => response.json())
            .then((courses) => {
                setCourse(courses);  
            });
    }, []);

  return (
    <div className="text-center m-1 bg-slat-100 w-full items-center">
    <div className="rounded-lg flex flex-col lg:flex-row border border-purple-200  bg-slat-100 px-5">
        <div className="w-1/3">
            <img
                src={img_url}
                alt={title}
                placeholder={title} className="w-44 h-40 lg:w-96 lg:h-96 rounded-xl" />
        </div>
        <div className="flex flex-col items-start text-left w-2/3 py-2 space-x-4">
            <span className="text-xl text-green-600">Title:{title}</span>
            <span className="text-xl text-green-500">Level:{level}</span>
            <span className="text-xl text-green-400">Ratings:{ratings}</span>
            <img src={author_img_url} alt={author} className="rounded-full size-10 w-40 h-40" />
            <span className="font-semibold">Writter:{author}</span>
            <span>Details:{details}</span>
            <span>Lession:{lession}</span>
            <span>Student:{student}</span>
            <span>Duration:{duration}</span>
            <span>Price:{price}</span>
            <span>Assessments:{assessments}</span>
        </div>
    </div>
</div>
  )
}

export default CourseDetails;
