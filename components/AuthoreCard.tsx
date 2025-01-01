import Image from "next/image";
import React from "react";

export default function AuthorCard() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
            <div className="flex items-center animation-fadeIn">
                {/* Corrected image path */}
                <Image
                    className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
                    src="/images/author.jpg" 
                    alt="Author Image"
                    width={200}
                    height={200}
                />
                <div>
                    <h3 className="text-xl font-bold">Syeda Nameera</h3>
                    <p className="text-slate-500">Developer | Designer | Editor | Content Creator</p>
                </div>
            </div>

            <p className="mt-4 text-black leading-relaxed font-semibold">
                I am a passionate and results-driven software developer with expertise in [mention key programming languages or technologies, e.g., JavaScript, Python, React, Node.js]. With [5 years] of experience, I specialize in creating dynamic, user-centric applications and scalable web solutions. My background includes working on a variety of projects.
            </p>

            <div className="mt-4 flex space-x-3">
                <a
                    href="#"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration"
                >
                    Youtube
                </a>

                <a
                    href="#"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration"
                >
                    Facebook
                </a>

                <a
                    href="#"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration"
                >
                    Linkedin
                </a>

                <a
                    href="#"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration"
                >
                    Github
                </a>
            </div>
        </div>
    );
}
