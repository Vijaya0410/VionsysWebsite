"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image, { StaticImageData } from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";
import { BiAndAnalyticsDataType } from "./data/BiAndAnalytics";
import { Button } from "@/components/ui/button";

interface Props {
    data: BiAndAnalyticsDataType;
}
const ServicesTemplateThree: React.FC<Props> = ({ data }) => {
    return (
        <>
            {/* First section */}
            <section className="overflow-x-hidden">
                <AuroraBackground>
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4 md:py-10 py-4  md:h-[50vh]"
                    >
                        <div className="flex flex-col justify-center items-center gap-4">
                            <h3 className="text-5xl font-bold text-orange text-center">{data.mainTitle}</h3>
                            <p className="text-md text-center text-gray1 ">{data.subTitle}</p>
                        </div>
                    </motion.div>
                </AuroraBackground>
            </section>

            {/* Second section */}
            <section className="w-[100vw] overflow-x-hidden">
                <div className="w-full">
                    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6">
                        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 md:p-6">
                            <Image data-aos="zoom-in" src={data.secondSectionImage} alt="" className="w-full" />
                        </div>
                        <div className="w-full lg:w-1/2 p-2">
                            <h2 data-aos="fade-left" className="text-3xl text-orange font-bold mb-4 text-center md:text-start">{data.secondTitle}</h2>
                            <p data-aos="fade-right" className="text-md text-gray1 text-center md:text-start">{data.secondSubTitle}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section */}
            <section className="w-[100vw] z-0 overflow-x-hidden py-6 dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="w-full flex flex-col gap-4 py-14 md:px-8 px-4">
                    <h3 data-aos="fade-down" className="text-center md:text-4xl text-lg text-orange font-semibold  sm:text-7xl  relative z-20 bg-clip-text py-8 capitalize">{data.cardsTitle}</h3>
                    <div data-aos="zoom-in" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-6 gap-x-4 gap-y-14 md:mt-0 mt-8">
                        {
                            data?.cards.map((card) => (
                                <PinContainer
                                    key={card.title}
                                    title="Data-Driven Decision Making"
                                    href="https://twitter.com/mannupaaji"
                                >
                                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[20rem] w-[18rem] h-[20rem] md:h-[20rem] ">
                                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
                                            {card.title}
                                        </h3>
                                        <div className="!m-0 !p-0 font-normal">
                                            <span className="text-gray1 text-sm">
                                                {card.message}
                                            </span>
                                        </div>
                                        <Image width="100" height="100" src={card.image} alt="" className="w-full h-full" />
                                    </div>
                                </PinContainer>

                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Fourth section */}
            <section>
                <div className="py-4 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black -z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
                        <div data-aos="" className="text-center">
                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900  relative z-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                                Frequently Asked <span className="text-blue1">Questions</span>
                            </h3>
                        </div>
                        <div className="mt-20">
                            <ul>
                                {
                                    data?.faqs?.map((faq) => (
                                        <li key={faq.qid} className="text-left mb-10">
                                            <div className="flex flex-row items-start mb-5">
                                                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                                    <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <g data-name="Layer 2">
                                                            <g data-name="menu-arrow">
                                                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                                                <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                                                                <circle cx="12" cy="19" r="1"></circle>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div data-aos="fade-left" className="bg-gray-100 p-5 px-10 w-full flex items-center">
                                                    <h4 className="text-md leading-6 font-medium text-gray-900">{faq.question}</h4>
                                                </div>
                                            </div>
                                            <div data-aos="fade-right" className="flex flex-row items-start">
                                                <div className="bg-indigo-100 p-2 px-10 w-full flex items-center">
                                                    <p className="text-gray1 text-sm">{faq.answer}</p>
                                                </div>
                                                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                                    <svg height="25px" fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 295.238 295.238" style={{ background: 'new 0 0 295.238 295.238' }} xmlSpace="preserve">
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352c5.529-1.971,9.524-7.21,9.524-13.352c0-7.41-6.024-13.333-13.429-13.333c-7.376,0-13.4,5.962-13.429,13.343c0,6.19,4.281,11.362,10.133,12.843l1.016,0.367v25.962H86.86v-14.286h-9.524v14.286h-15.81l-19.619-4.486l9.01-16.048C58.233,60.462,53.653,52.95,53.653,42.948z M26.038,83.81L46.8,66.19l-7.71-16.095l-24.557-5.633L26.038,83.81z M118.81,256.19h-76.19v-38.095h76.19V256.19z M99.381,182.476l-1.9-0.676v-28.638l-1.695-0.829l-11.376-25.619l-17.724,11.833l-5.262-12.286l-5.405,2.71v-21.429l5.214-3.219l-5.214-11.571L59.638,82.5l22.295,21.571l2.005,0.224v21.619l4.686-2.381l5.252,12.571l5.167-2.595l5.357,12.214L99.381,182.476z M192.19,256.19h-76.19v-38.095h76.19V256.19z M223.81,194.857h-76.19v-38.095h76.19V194.857z M278.81,271.429h-76.19v-38.095h76.19V271.429z"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final section contact us and schedule a meeting */}
            <section className="w-[100vw] overflow-x-hidden">
                <div className="flex justify-center items-center py-4">
                    <div className="flex flex-col justify-center items-center gap-4 md:px-8 px-2 py-4 md:w-[70%]">
                        <h4 data-aos="zoom-out" className="md:text-4xl text-lg text-blue3 font-semibold text-center">Excited about the prospect of collaborating? Share your ideas, and let's work together to create something truly remarkable!</h4>
                        <div className="flex gap-4 flex-wrap">
                            <Button data-aos="fade-right">Schedule a meeting</Button>
                            <Button data-aos="fade-left">Contact us</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesTemplateThree;