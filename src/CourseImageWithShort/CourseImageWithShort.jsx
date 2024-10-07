import React from 'react';
import Marquee from "react-fast-marquee";
import ImageWithPlaceholder from './ImageWithPlaceholder';
import { useState } from "react";
import { useEffect } from "react";

function CourseImageWithShort() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://techcoursedetails.netlify.app/.netlify/functions/api/products')
            .then(res => res.json())
            .then(data => setImages(data));

    }, []);
    return (
        <div className="text-center my-10 bg-slat-100">
            <h1 className="text-2xl text-green-900">About Course</h1>
            <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-1  bg-slat-100">
                {
                    images.map((eimage) =>
                        <div className="rounded-lg flex flex-col lg:flex-row border border-purple-200  bg-slat-100" key={eimage._id}>
                            <div className="w-1/2">
                                <ImageWithPlaceholder
                                    src={eimage.img_url}
                                    alt={eimage.title}
                                    placeholder={eimage.title} />
                            </div>
                            <div className="flex flex-col items-start text-left w-1/2">
                                <span className="text-xl text-green-600">{eimage.title}</span>
                                <img src={eimage.author_img_url} alt={eimage.author} className="rounded-full size-10" />
                                <span>{eimage.author}</span>
                            </div>
                        </div>

                    )

                }
            </div>
        </div>

    )
}
export default CourseImageWithShort;
