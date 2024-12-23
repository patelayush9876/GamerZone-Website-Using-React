import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { motion } from 'framer-motion';

export default function About() {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom'
        });
    }, []);

    return (
        <>
            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12 reveal">
                            <motion.img
                                src="/src/assets/images/Designer.png"
                                alt="image"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12 reveal">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                GamerZone is carried out by passionate Gamers
                            </h2>
                            <p className="mt-6 text-gray-600">
                                Welcome to GamerZone, your ultimate destination for all things gaming! At GamerZone, we're not just a store—we’re a community of gamers dedicated to enhancing your gaming experience with top-of-the-line gear, accessories, and expert services.
                            </p>
                            <p className="mt-4 text-gray-600">
                                Enhance your gaming setup with our wide range of gaming peripherals, including gaming mice, keyboards, headsets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78 reveal">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                            <motion.img
                                alt="..."
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                                className="w-full align-middle rounded-t-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <blockquote className="relative p-8 mb-4">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                                    <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                                </svg>
                                <h4 className="text-xl font-bold text-black">
                                    Great for your Gaming Experience
                                </h4>
                                <p className="text-md font-light mt-2 text-black">
                                    Putting together a page has never been easier than matching
                                    together pre-made components. From landing pages presentation
                                    to login areas, you can easily customise and build your pages.
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col mt-4 reveal">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i className="fas fa-sitemap"></i>
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold">Seamless Integration</h6>
                                        <p className="mb-4 text-blueGray-500">
                                            Utilizing widely accepted standards like USB, Bluetooth, and Wi-Fi, our system guarantees compatibility with most devices, making it simple to connect and disconnect peripherals as needed.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex flex-col min-w-0 reveal">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i className="fas fa-drafting-compass"></i>
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold">
                                            Global
                                        </h6>
                                        <p className="mb-4 text-blueGray-500">
                                            Global ReachOut and Delivery
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 mt-4 reveal">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i className="fas fa-newspaper"></i>
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold">Documentations Included</h6>
                                        <p className="mb-4 text-blueGray-500">
                                            This extension also comes with 3 sample pages. They are fully coded so you can start working instantly.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex flex-col min-w-0 reveal">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i className="fas fa-file-alt"></i>
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold">Easy Payments & Billings</h6>
                                        <p className="mb-4 text-blueGray-500">
                                            Using our system, you can easily manage your payments and billing. Our system is designed to make it easy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}