import { SectionContainer } from "@components/Section";
import { Layout } from "@components/Layout";
import Link from "next/link";
import Image from "next/image";
import cry from '../public/images/cry.png';
import quiz from '../public/images/quiz.png';
import doc from '../public/images/doc.png';
import rr from '../public/images/rr.png';
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
        link: "https://avenuelabs.co/",
        content: "A platform where you can save your favorite coin & see the volumes,prices."
    },
    {
        id: "2",
        title: "College Space",
        link: "https://pathway.avenuelabs.co/",
        logo: quiz,
        content: " A platform that provides docs and projects to learn"
    },
    {
        id: "3",
        title: "Quiz Web",
        logo: doc,
        content: "A Web App in which user can take quiz and see result instantly",
        badgeContent: "On Going"
    },
    {
        id: "3",
        title: "Room Realm",
        logo: rr,
        content: "A chat room where everybody can talk about anything!",
        badgeContent: "On Going"
    }
];

export default function Home({ posts }) {
    return (
        <Layout>
            <div className="main-wrapper wrap-md grid  px-8  mx-auto">
                {/* Header / Hero */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <SectionContainer className="hero--container flex flex-col gap-8 mt-32">
                        <Image
                            src={profilePicture}
                            className=" rounded-full bg-neutral-100 object-cover"
                            width={85}
                            height={85}
                            alt=""
                        />
                        <div className="content-container">
                            <PageTitle
                                className=" text-white font-extrabold"
                            >
                                Hey I&apos;m Ninad ⇢
                                 <PageTitle
                                className=" text-white"
                            >
                                I&apos;m Software Engineer and Web Designer
                            </PageTitle>
                            </PageTitle>
                           
                            
                            {/* <div className="content  text-3xl md:text-3xl font-medium leading-8 lg:leading-10 tracking-tight lg:tracking-tighter text-gray-400  ">
                                I am familiar with various software development tools and technologies as well as experience in database management.If you ever want to bounce ideas off of me or even just have a chat about technologies and experiences don't hesitate to Reach Out to me if you are interested in working with me on a project.
                            </div> */}
                        </div>
                        {/* <div class="buttons-container mt-6 flex flex-wrap gap-2">
                            
                        </div> */}
                    </SectionContainer>
                </MotionBTTContainer>
                {/* Card Containers */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <SectionContainer className="projects--container">
                        <h2 className="font-bold text-4xl text-white my-4 leading-8 tracking-tighter">
                            Here's My Projects
                        </h2>
                        <hr/>
                        <CardGroup className="grid scroll-m-24 gap-5 grid-cols-1 md:grid-cols-2 w-full mt-4">
                            {projectData.map((project) => (
                                <Card
                                    key={project.id}
                                    className="col-span-1 bg-neutral-900"
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
