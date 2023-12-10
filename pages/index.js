
import { SectionContainer } from "@components/Section";
import { Layout } from "@components/Layout";
// import Link from "next/link";
import Image from "next/image";
import cry from '../public/images/cry.png';
import qw from '../public/images/qw.png';
import cs from '../public/images/cs.png';
import rr from '../public/images/rr.png';
import ww from '../public/images/ww.png';
import lu from '../public/images/lu.png';
import profilePicture from "../public/images/avatar1.jpeg";
import { PageTitle } from "@components/Title";
import {
    Card,
    CardBody,
    CardGroup,
    CardHeader,
    CardImage
} from "@components/Card";
import { BadgeGroup, BadgeMessage } from "@components/Badge";
import { MotionBTTContainer } from "@components/Motion";
// import Cursor from "./Cursor";

const projectData = [
    {
        id: "1",
        title: "Crypto Base",
        logo: cry,
        link: "https://github.com/NinadVyas/WebCryptoBase",
        content: "A platform where you can save your favorite coin & see the volumes,prices.",
        badgeContent: "Completed"
    },
    {
        id: "2",
        title: "College Space",
        link: "https://github.com/NinadVyas/Collage-Space",
        logo: cs,
        content: " A platform that provides docs and projects to learn",
        badgeContent: "Completed"
    },
    {
        id: "3",
        title: "Room Realm",
        link: "https://github.com/NinadVyas/Roomrealm",
        logo: rr,
        content: "A chat room where everybody can talk about anything!",
        badgeContent: "Completed"
    },
    {
        id: "4",
        title: "Quiz Web",
        link: "https://github.com/NinadVyas/quizweb",
        logo: qw,
        content: "A Web App in which user can take quiz and see result instantly",
        badgeContent: "Completed"
    },
    {
        id: "5",
        title: "Weather Web",
        link: "https://github.com/NinadVyas/WeatherApp",
        logo: ww,
        content: "A weather web app in which you can find any city weather status",
        badgeContent: "Completed"
    },
    {
        id: "5",
        title: "Login Ui",
        link: "https://github.com/NinadVyas/Login-Ui-React-Native",
        logo: lu,
        content: "Basic login and signup ui using react native and for authentication I have used firebase",
        badgeContent: "Completed"
    },

];

export default function Home() {
    return (
        <Layout>
            <div className="main-wrapper wrap-md grid  px-5  mx-auto">
                {/* Header / Hero */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    {/* <Image
                            src={banner}
                            className=" rounded-md bg-neutral-100 object-cover border border-white opacity-40	"
                            alt=""
                         /> */}
                    <SectionContainer className="hero--container flex flex-col gap-8 mt-32">
                        <div className="flex gap-8">
                            <Image
                                src={profilePicture}
                                className=" rounded-full bg-neutral-100 object-cover"
                                width={85}
                                height={85}
                                alt=""
                            />
                            <div>
                                <h1 className="text-xl lg:text-xl font-mono font-medium leading-8 lg:leading-10 tracking-tight lg:tracking-tighter mb-0 text-neutral-300">
                                    {/* Hey - I&apos;m Ninad Vyas */}
                                    Ninad Vyas
                                </h1>
                                <h1 className="text-xl lg:text-xl font-mono font-medium leading-8 lg:leading-10 tracking-tight lg:tracking-tighter mb-0 text-neutral-300">

                                    Developer & Designer
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div className=" flex items-center gap-2 ">
                                <div>
                                    <div className="h-3.5 w-3.5 rounded-full bg-emerald-600">
                                        <div className="z-[11] h-3.5 w-3.5 animate-ping rounded-full bg-emerald-600 transition-[4s]" />
                                    </div>
                                </div>
                                <span size="sm" variant="muted" className="font-mono text-white font-bold">
                                    available for hire
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="content font-mono text-xl text-neutral-300 md:text-xl font-medium leading-8 lg:leading-10 tracking-tight lg:tracking-tighter">
                                I&apos;m a software engineer based in India, with a passion for building solutions that are user-friendly,
                                innovative and problem solving.
                            </div>
                            <div class="buttons-container mt-6 mb-4 flex flex-wrap gap-2">
                                <a href="mailto:ninadvyas07@gmail.com" class="bg-[#363636] py-[4px] rounded-lg px-2 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:bg-neutral-600 transition-colors duration-300 font-mono">ninadvyas07@gmail.com</a>
                                <a href="https://www.chess.com/member/ninadvsd" rel="noreferrer" target="_blank" class="bg-[#363636] py-[4px] rounded-lg px-2 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:bg-neutral-600 font-mono transition-colors duration-300">Chess.com</a>
                                <a href="https://dev.to/ninadvyas" rel="noreferrer" target="_blank" class="bg-[#363636] py-[4px] rounded-lg px-2 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:bg-neutral-600 transition-colors font-mono duration-300">Dev.to</a>
                                <a href="https://framesbyme.netlify.app" rel="noreferrer" target="_blank" class="bg-[#363636] py-[4px] rounded-lg px-2 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:bg-neutral-600 transition-colors  font-mono duration-300" >Photography</a>
                                <a href="https://github.com/NinadVyas/" rel="noreferrer" class="bg-[#363636] py-1 rounded-lg px-1 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:bg-neutral-600 transition-colors duration-300" target="_blank" title="Follow Ninad Vyas on Github">
                                    <svg viewBox="0 0 256 256" class="w-5 h-5 inline" astro-icon="ph:github-logo-duotone"><path fill="currentColor" d="M200 112v8a48 48 0 0 1-48 48h-48a48 48 0 0 1-48-48v-8a49.3 49.3 0 0 1 8.5-27.3A52 52 0 0 1 68 40a52 52 0 0 1 43.8 24h32.4A52 52 0 0 1 188 40a52 52 0 0 1 3.5 44.7A49.3 49.3 0 0 1 200 112z" opacity=".2"></path><path fill="currentColor" d="M216 216a16 16 0 0 1-16-16v-8a32.1 32.1 0 0 0-14.8-27 55.8 55.8 0 0 0 22.8-45v-8a58 58 0 0 0-7.7-28.3 59.9 59.9 0 0 0-5.4-47.7 7.8 7.8 0 0 0-6.9-4 59.7 59.7 0 0 0-48 24h-24a59.7 59.7 0 0 0-48-24 7.8 7.8 0 0 0-6.9 4 59.9 59.9 0 0 0-5.4 47.7A58 58 0 0 0 48 112v8a55.8 55.8 0 0 0 22.8 45A32.1 32.1 0 0 0 56 192v8a16 16 0 0 1-16 16 8 8 0 0 0 0 16 32.1 32.1 0 0 0 32-32v-8a16 16 0 0 1 16-16h12v40a16 16 0 0 1-16 16 8 8 0 0 0 0 16 32.1 32.1 0 0 0 32-32v-40h24v40a32.1 32.1 0 0 0 32 32 8 8 0 0 0 0-16 16 16 0 0 1-16-16v-40h12a16 16 0 0 1 16 16v8a32.1 32.1 0 0 0 32 32 8 8 0 0 0 0-16zM64 120v-8a42.7 42.7 0 0 1 6.9-22.5 7.9 7.9 0 0 0 1.1-7.7 43.7 43.7 0 0 1 .8-33.5 43.6 43.6 0 0 1 32.3 20 8 8 0 0 0 6.7 3.7h32.4a8 8 0 0 0 6.7-3.7 43.6 43.6 0 0 1 32.3-20 43.7 43.7 0 0 1 .8 33.5 8.2 8.2 0 0 0 1.1 7.7A42.7 42.7 0 0 1 192 112v8a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40z"></path></svg>
                                </a><a href="https://www.linkedin.com/in/ninadvyas/" rel="noreferrer" class="bg-[#363636] py-1 rounded-lg px-1 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:bg-neutral-600 transition-colors duration-300" target="_blank" title="Follow Ninad Vyas on LinkedIn">
                                    <svg viewBox="0 0 256 256" class="w-5 h-5 inline" astro-icon="ph:linkedin-logo-duotone"><path fill="currentColor" d="M220 44v168a8 8 0 0 1-8 8H44a8 8 0 0 1-8-8V44a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8z" opacity=".2"></path><path fill="currentColor" d="M96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0zm-8-44a12 12 0 1 0 12 12 12 12 0 0 0-12-12zm140-24v168a16 16 0 0 1-16 16H44a16 16 0 0 1-16-16V44a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16zm-16 168V44H44v168zm-64-108a36 36 0 0 0-20.2 6.2A8 8 0 0 0 112 112v64a8 8 0 0 0 16 0v-36a20 20 0 0 1 40 0v36a8 8 0 0 0 16 0v-36a36 36 0 0 0-36-36z"></path></svg>
                                </a><a href="mailto:ninadvyas07@gmail.com" rel="noreferrer" class="bg-[#363636] py-1 rounded-lg px-1 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:bg-neutral-600 transition-colors duration-300" target="_blank" title="Send an email to Ninad Vyas">
                                    <svg viewBox="0 0 24 24" class="w-5 h-5 inline" astro-icon="mdi:email"><path fill="currentColor" d="m20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path></svg>
                                </a><a href="https://twitter.com/ninadvsd/" rel="noreferrer" class="bg-[#363636] py-1 rounded-lg px-1 flex align-center flex-[0,0,auto] justify-center text-sm text-white-300 h-fit flex-row hover:bg-neutral-600 transition-colors duration-300" target="_blank" title="Follow Ninad Vyas on Twitter">
                                    <svg viewBox="0 0 256 256" class="w-5 h-5 inline" astro-icon="ph:twitter-logo-duotone"><path fill="currentColor" d="m240 72-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48V88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24z" opacity=".2"></path><path fill="currentColor" d="M247.4 68.9A8 8 0 0 0 240 64h-30.4a48.2 48.2 0 0 0-41-24A48.3 48.3 0 0 0 120 88v6.1C79.3 83.5 46 50.7 45.7 50.3a8 8 0 0 0-8.1-1.9 8.1 8.1 0 0 0-5.5 6.2c-8.7 48.2 5.8 80.5 19.5 99.1a108.6 108.6 0 0 0 24.7 24.4c-15.3 17.3-38.9 26.3-39.1 26.4a8 8 0 0 0-3.9 11.9c.8 1.2 3.8 5.1 11.1 8.8 9.1 4.5 21.1 6.8 35.6 6.8 70.5 0 129.5-54.3 135.5-124.2l30.2-30.1a8.4 8.4 0 0 0 1.7-8.8zm-45.3 29.7a7.8 7.8 0 0 0-2.3 5.2C195.7 166.7 143.1 216 80 216c-10.6 0-18-1.4-23.2-3.1 11.5-6.2 27.5-17 37.9-32.5a8 8 0 0 0 1-6.4 8.1 8.1 0 0 0-4.1-5.1c-.1-.1-14.9-7.8-27.6-25.3-14.4-19.8-20.5-43.9-18.1-71.7 15.8 13 46 34.2 80.8 40a8.1 8.1 0 0 0 6.5-1.8 8.2 8.2 0 0 0 2.8-6.1V88a32 32 0 0 1 61.3-12.8 8.1 8.1 0 0 0 7.4 4.8h16z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </SectionContainer>
                </MotionBTTContainer>

                {/* Card Containers */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <SectionContainer className="projects--container">

                        <h2 className="font-bold text-4xl rounded-full text-left h-9  w-[10rem] text-white my-4 leading-8 tracking-tighter">
                            Projects
                        </h2>
                        {/* <hr /> */}
                        <CardGroup className="grid scroll-m-24 gap-5 grid-cols-1 md:grid-cols-2 w-full mt-4 ">
                            {projectData.map((project) => (
                                <Card
                                    key={project.id}
                                    className="col-span-1 bg-neutral-900  hover:bg-white"
                                    link={project.link}
                                    target="_blank"
                                >
                                    {!!project.badgeContent && (
                                        <BadgeGroup
                                            className="mb-0 m-6"
                                            alignment="left"
                                        >
                                            <BadgeMessage>
                                                Completed
                                            </BadgeMessage>
                                        </BadgeGroup>
                                    )}
                                    <CardBody>
                                        <CardImage
                                            src={project.logo}
                                            alt="banner"
                                            imageClassName="absolute top-0 right-0 m-6 p-4 bg-white rounded-3xl border border-neutral-300"
                                            width={80}
                                            height={80}
                                        />
                                        <div className="card-content absolute bottom-8 left-6 right-6">
                                            <CardHeader className="text-sky-500">
                                                {project.title}
                                            </CardHeader>
                                            <div className="content break-words  text-3xl font-medium leading-10 tracking-tight lg:tracking-tighter text-neutral-500 ">
                                                <p>{project.content}</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </CardGroup>
                    </SectionContainer>
                </MotionBTTContainer>
                {/* Blog Container */}
            </div>

        </Layout>
    );
}
