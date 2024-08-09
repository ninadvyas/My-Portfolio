import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
  ];

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="photos">
      {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-4">
          Frames captured by me
      </h2> */}
      <div className="columns-2 gap-4 sm:columns-2">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
          <Image
              width='500'
              height='500'
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
    </main>
  );
}
