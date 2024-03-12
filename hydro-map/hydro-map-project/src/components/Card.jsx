import React from 'react';

const Card = () => {
    return (
        <React.Fragment>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            className="h-48 w-full object-cover md:h-full md:w-48"
                            src="https://plus.unsplash.com/premium_photo-1691735665916-cf31006dffe3?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Placeholder"
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Introduction
                        </div>
                        <a
                            href="#"
                            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </a>
                        <p className="mt-2 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                            tempus sapien eget ante dapibus, sit amet pellentesque odio
                            lobortis.
                        </p>
                        <button className="transition duration-500 ease-in-out mt-4 bg-blue-500 hover:bg-blue-700 text-white hover:-translate-y-1 hover:scale-70 font-bold py-2 px-4 rounded">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Card;


