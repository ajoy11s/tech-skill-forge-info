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
                Choose the Right Platform
                Learning Platforms: Websites like Udacity, Coursera, or LinkedIn Learning offer courses on various tech skills.
                Skill Development: Sites like Skillshare and Pluralsight provide courses focused on practical skills.
                Certification: Some sites, like edX or Google Career Certificates, offer certifications that can enhance your resume.
            </Marquee>
        </div>
    )
}
export default WorkSection;
