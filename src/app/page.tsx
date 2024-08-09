import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { TweetCard } from "@/components/magicui/tweet-card";

const images = [
  "/images/1.jpeg",
  "/images/3.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
];

const avatarUrls = [
  "/logo/cs.png",
  "/logo/cry.png",
  "/logo/rr.png",
];

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6">
      <section id="hero">
        <div className="mx-auto w-full max-w-5xl space-y-4 pt-12">
          <div className="gap-2 flex justify-between ">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-24 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <div className="flex-col flex flex-1 space-y-1.5 mt-5 ml-2">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter"
                yOffset={8}
                text={`Hi, I'm ${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex items-left justify-left gap-4">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <div className="h-3.5 w-3.5 rounded-full bg-emerald-600 mr-2">
                    <div className="z-[11] h-3.5 w-3.5 animate-ping rounded-full bg-emerald-600 transition-[4s]" />
                  </div>
                  <span> Open To Work</span>
                </AnimatedShinyText>
              </div>
              <Link
              href='https://drive.google.com/file/d/1HHsnhcmyLMfN6CgEJkmABQTT6kqW9_ad/view?usp=sharing'
              target='_blank'
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <div className="h-3.5 w-3.5 rounded-sm bg-blue-700 border border-white mr-2">
                                        <div className="z-[11] h-3.5 w-3.5 rounded-sm bg-blue-700" />
                                    </div>
                  <span> Resume</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </Link>
            </div>
          </BlurFade>
        </div>

      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-xl text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="projects">
        <div className="space-y-4 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-left justify-left text-left">
              <h2 className="text-2xl font-bold ">
              Latest projects
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3  sm:grid-cols-2 max-w-5xl mx-auto">
            {DATA.projects.slice(0, 4).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                  dates={""}
                />
              </BlurFade>
            ))}
          </div>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Link href='/projects' className="text-lg w-72 tracking-tighter text-neutral-400 hover:text-neutral-500 flex cursor-pointer gap-2">
          <span className="mt-1.5 font-bold">All my projects</span>
          <AvatarCircles avatarUrls={avatarUrls} />
          <ArrowRightIcon className="size-7 mt-1.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </Link>
          </BlurFade>
        </div>
      </section>
      <hr/>
      <section id="photos">
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
      <h2 className="text-2xl font-bold tracking-tighter py-2">
          Frames captured by me
      </h2>
      </BlurFade>
      <div className="columns-2 gap-4 sm:columns-2">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
      <Link href='/photos' className="text-lg w-72 tracking-tighter text-neutral-400 hover:text-neutral-500 flex cursor-pointer gap-2">
          <span className="mt-1.5 font-bold">See all the frames</span>
          <ArrowRightIcon className="size-7 mt-1.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </Link>
          </BlurFade>
    </section>
    <hr/>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12 mb-10">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4 flex flex-col items-center justify-center">
              {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div> */}
              <h2 className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tighter sm:text-5xl">
                Let&apos;s make{" "}
                <span className=" text-neutral-400 inline font-bold underline-offset-4 underline">
                  great work
                </span>{" "}
                together.
              </h2>
              <p className="mx-auto max-w-[600px] flex flex-col text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enjoy connecting with people across the globe. {" "}
                Wanna talk about a project or just saying hi ?
              </p>
              <Link href='https://cal.com/ninadvyas' target='_blank'>
              <div
                className={cn(
                  "group rounded-full w-30 border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-red-600 hover:duration-300 hover:dark:text-red-400">
                  <span>Catch Up!</span>
                </AnimatedShinyText>
              </div>
              </Link>
            </div>
            <div className='columns-1 gap-2 max-w-5xl sm:columns-2 md:columns-2 lg:columns-2 mt-4 '>
              <TweetCard id="1715342708175519855"/>
              <TweetCard id="1689266916639080448"/>
             </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
