import React from 'react';
import Marquee from "react-fast-marquee";

function WorkSection() {
    return (
        <div className="flex">
             <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500"></span>
                </span>
            <Marquee className="bg-gray-200 h-10 text-xl text-green-800 flex">
             <span className="text-rose-700 font-semibold text-2xl">*** Our ongoing Courses:-</span> [Complete ReactJS, Javascript Pro, Web Design & Development, Digital Marketing, CCNA and Networking, Graphics Design ]
            </Marquee>
        </div>
    )
}
export default WorkSection;
