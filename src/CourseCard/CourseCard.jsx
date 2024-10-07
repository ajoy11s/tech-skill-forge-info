import React from 'react'
import { Link } from 'react-router-dom';

const CourseCard = ({ courseprop }) => {
    const { _id, course_id, title, details, student, duration, price, assessments, author, level, ratings, author_img_url, img_url } = courseprop;

    return (
        <div className="text-center m-1 bg-slat-100 w-full items-center">
            <div className="rounded-lg flex flex-col lg:flex-row border border-purple-200  bg-slat-100">
                <div className="w-1/3">
                    <img
                        src={img_url}
                        alt={title}
                        placeholder={title} className="w-44 h-40 rounded-xl" />
                </div>
                <div className="flex flex-col items-start text-left w-2/3 py-2 space-x-4">
                    <span className="text-xl text-green-600 line-clamp-1">Title:{title}</span>
                    <img src={author_img_url} alt={author} className="rounded-full size-10" />
                    <span className="font-semibold">Writter:{author}</span>
                    <span className="line-clamp-2">{details}</span>
                    <div className="flex justify-end w-full px-5">
                        <Link to={`/course/${_id}`}>
                            <button className="btn btn-success btn-sm">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CourseCard;
