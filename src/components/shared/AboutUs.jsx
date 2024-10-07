import React from 'react'

function AboutUs() {
    return (
        <div className="flex justify-center">
            <div className=" flex flex-col md:flex-row gap-7 justify-center p-5 drop-shadow">
                <div className="rounded-lg p-5">
                    <div className="gap-5 flex-col lg:flex">
                        <div className="flex-1">
                            <img src="/src/assets/images/ajoy.jpg"alt="Ajoy Kumar Paul" className="rounded-full" />
                        </div>
                        <div className="text-left mx-2">
                            <p className="text-lg font-bold mb-3">Ajoy Kumar Paul</p>
                            <p className="mt-2 text-xl">Web Application Developer</p>
                            <p className="mt-2 text-xl">
                                <small>Specialist Android,HTML,CSS,JavaScript,Tailwind CSS,DaisyUI,React,React Router,Express JS,Node JS,Firebase etc</small>
                            </p>
                            <p className="mt-2 text-xl">
                                <small>Contact: ajoycse0811@gmail.eom</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
