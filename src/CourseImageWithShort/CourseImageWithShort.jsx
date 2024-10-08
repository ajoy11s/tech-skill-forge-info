import React from 'react';
import Marquee from "react-fast-marquee";
import ImageWithPlaceholder from './ImageWithPlaceholder';
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function CourseImageWithShort() {
    const [images, setImages] = useState([]);
    const { user, logOutUser } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://techcoursedetails.netlify.app/.netlify/functions/api/products')
            .then(res => res.json())
            .then(data => setImages(data));

    }, []);

    // const handileViewDetailsBtn = () => {
    //     toast.success("Please Login Please login to view details.", {
    //         position: "center",
    //     });
    // }


    return (
        <div className="text-center my-3 bg-slat-100">
            <h1 className="text-2xl text-green-900 font-semibold">Course Summary</h1>
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
                                <span className="text-xl text-green-600 line-clamp-1">{eimage.title}</span>
                                <img src={eimage.author_img_url} alt={eimage.author} className="rounded-full size-10" />
                                <span>{eimage.author}</span>

                                {
                                    user ? (
                                        <>
                                        </>
                                    ) : (
                                        <div className="w-full flex justify-end py-2 px-2">
                                            <button className="btn btn-outline btn-primary justify-end" onClick={() => document.getElementById('my_modal_3').showModal()}>View Details</button>
                                            <dialog id="my_modal_3" className="modal">
                                                <div className="modal-box  bg-slate-300">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <h3 className="font-bold text-lg text-green-800">Tech Skill Course</h3>
                                                    <p className="py-4 text-green-700 font-semibold">Please login/registration from top right corner to view details.</p>
                                                </div>
                                            </dialog>
                                        </div>

                                    )
                                }

                            </div>
                        </div>

                    )

                }
            </div>
        </div>

    )
}
export default CourseImageWithShort;
