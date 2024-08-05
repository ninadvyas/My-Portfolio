import { SectionContainer } from "@components/Section";
import { MotionBTTContainer } from "@components/Motion";
import Link from "next/link";
import { IoMdMailUnread } from "react-icons/io";

export const Layout = ({ children, className = "" }) => {
    return (
        <main className={`main ${className && className}`}>
            {children}
            <SectionContainer className="mt-16 ">
                <footer className=" bg-black text-white">

                    <div className=" mx-auto grid gap-16">
                        <MotionBTTContainer
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <section class="relative w-full flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">

                                <div class="absolute inset-0 h-full w-80 object-cover object-center" />

                                <div class="absolute inset-0 bg-black mix-blend-multiply"></div>

                                <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
                                 <h2 className="font-extrabold text-4xl md:text-6xl lg:text-7xl leading-10 lg:leading-[70px] tracking-tight lg:tracking-tighter">
                                        Let&apos;s make{" "}
                                        <span className=" text-neutral-400 inline font-bold underline-offset-4 underline">
                                            great work
                                        </span>{" "}
                                        together.
                                    </h2>
                                    <div class="flex flex-row gap-2.5 sm:flex-row sm:justify-center">
                                    <a href="#" class="inline-block flex gap-1.5 rounded-lg bg-neutral-900 px-8 py-3 text-center text-sm font-semibold text-white hover:-translate-y-1 hover:scale-80 transition duration-100 hover:bg-neutral-800 border border-neutral-400 focus-visible:ring md:text-base">
                                    <div className="h-3.5 w-3.5 rounded-sm bg-blue-700 border border-white mt-1">
                                        <div className="z-[11] h-3.5 w-3.5 rounded-sm bg-blue-700" />
                                    </div>
                                        Resume
                                    </a>
                                    <a href="mailto:ninadvsd@gmail.com" class="inline-block flex gap-1.5 rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-black hover:-translate-y-1 hover:scale-80 transition duration-100 hover:bg-neutral-200 border border-neutral-400 focus-visible:ring md:text-base">
                                        Reach Out!
                                    </a>
                                    </div>
                                    {/* <span className="border border-neutral-500 text-neutral-400 font-medium text-sm mt-5 p-2 rounded-full">
                                    © 2022-2024 Ninad Vyas
                                    </span> */}
                                </div>
                            </section>
                        </MotionBTTContainer>
                    </div>
                </footer>
            </SectionContainer>
        </main>
    );
};
