
import { SectionContainer } from "@components/Section";
import { Layout } from "@components/Layout";
// import Link from "next/link";
import {
    FaLinkedin,
    FaGithub,
    FaTwitter
} from "react-icons/fa";
import Image from "next/image";
import cry from '../public/images/cry.png';
import quiz from '../public/images/quiz.png';
import doc from '../public/images/doc.png';
import rr from '../public/images/rr.png';
import xtweet from '../public/images/x.png';
import profilePicture from "../public/images/avatar.png";
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

const projectData = [
    {
        id: "1",
        title: "Crypto Base",
        logo: cry,
        link: "https://github.com/NinadVyas/WebCryptoBase",
        content: "A platform where you can save your favorite coin & see the volumes,prices."
    },
    {
        id: "2",
        title: "College Space",
        link: "https://github.com/NinadVyas/Collage-Space",
        logo: quiz,
        content: " A platform that provides docs and projects to learn"
    },
    {
        id: "3",
        title: "Room Realm",
        link: "https://github.com/NinadVyas/Roomrealm",
        logo: rr,
        content: "A chat room where everybody can talk about anything!",
        badgeContent: "On Going"
    },
    {
        id: "4",
        title: "Quiz Web",
        link: "https://github.com/NinadVyas/quizweb",
        logo: doc,
        content: "A Web App in which user can take quiz and see result instantly",
        badgeContent: "On Going"
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
                        <Image
                            src={profilePicture}
                            className=" rounded-full bg-neutral-100 object-cover"
                            width={85}
                            height={85}
                            alt=""
                        />
                        <div className="">
                            <PageTitle
                                className=" text-white font-bold ">
                                Hey I&apos;m Ninad Vyas - Software Engineer & Web Designer
                            </PageTitle>
                            <p
                                className=" text-white text-2xl lg:text-2xl font-medium ">
                            I&apos;m software engineer & web designer based on India with a passion for building things that are user-friendly, 
                            innovative and problem solving. </p>
                            <div className='flex flex-row gap-4 mb-4'>
                                <p className='  w-48 text-center text-2xl text-emerald-500 font-bold bg-zinc-800	 rounded-full'>
                                    Let&apos;s Connect
                                </p>
                                <p></p>
                                <a
                                    href="https://www.linkedin.com/in/ninad-vyas-b767491a3/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaLinkedin className=" fill-neutral-400  text-3xl " />
                                </a>
                                <a
                                    href="https://github.com/NinadVyas"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaGithub className=" fill-neutral-400  text-3xl" />
                                </a>
                                <a
                                    href="https://twitter.com/NinadVyas87"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <FaTwitter className=" fill-neutral-400  text-3xl " />
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
                                    className="col-span-1 bg-neutral-900 "
                                    link={project.link}
                                    target="_blank"
                                >
                                    {/* {!!project.badgeContent && (
                                        <BadgeGroup
                                            className="mb-0 m-6"
                                            alignment="left"
                                        >
                                            <BadgeMessage>
                                                On Going
                                            </BadgeMessage>
                                        </BadgeGroup>
                                    )} */}
                                    <CardBody>
                                        <CardImage
                                            src={project.logo}
                                            alt="Articoole Banner"
                                            imageClassName="absolute top-0 right-0 m-6 p-4 bg-white rounded-3xl"
                                            width={80}
                                            height={80}
                                        />
                                        <div className="card-content absolute bottom-8 left-6 right-6">
                                            <CardHeader className="text-white">
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
