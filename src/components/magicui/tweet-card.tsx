import { Suspense } from "react";
import {
  enrichTweet,
  type EnrichedTweet,
  type TweetProps,
  type TwitterComponents,
} from "react-tweet";
import { getTweet, type Tweet } from "react-tweet/api";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TwitterIconProps {
  className?: string;
  [key: string]: any;
}
const Twitter = ({ className, ...props }: TwitterIconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor" 
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-black dark:text-white ${className}`} 
    {...props}
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
    </g>
  </svg>
);


const Verified = ({ className, ...props }: TwitterIconProps) => (
  <svg
    aria-label="Verified Account"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <g fill="black">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </g>
  </svg>
);

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
};

export const TweetSkeleton = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => (
  <div
    className={cn(
      "flex h-full max-h-max w-full min-w-[18rem] flex-col gap-2 rounded-lg border p-4",
      className,
    )}
    {...props}
  >
    <div className="flex flex-row gap-2">
      <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      <Skeleton className="h-10 w-full" />
    </div>
    <Skeleton className="h-20 w-full" />
  </div>
);

export const TweetNotFound = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => (
  <div
    className={cn(
      "flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg border p-4",
      className,
    )}
    {...props}
  >
    <h3>Tweet not found</h3>
  </div>
);

export const TweetHeader = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="flex flex-row justify-between tracking-tight">
    <div className="flex items-center space-x-2">
      <a href={tweet.user.url} target="_blank" rel="noreferrer">
        <Image
          title={`Profile picture of ${tweet.user.name}`}
          alt={tweet.user.screen_name}
          height={48}
          width={48}
          alt='tweet'
          src={tweet.user.profile_image_url_https}
          className="overflow-hidden rounded-full border border-transparent"
        />
      </a>
      <div>
        <a
          href={tweet.user.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center whitespace-nowrap font-semibold"
        >
          {truncate(tweet.user.name, 20)}
          {tweet.user.verified ||
            (tweet.user.is_blue_verified && (
              <Verified className="ml-1 inline h-4 w-4 text-blue-500" />
            ))}
        </a>
        <div className="flex items-center space-x-1">
          <a
            href={tweet.user.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-500 transition-all duration-75"
          >
            @{truncate(tweet.user.screen_name, 16)}
          </a>
        </div>
      </div>
    </div>
    <a href={tweet.url} target="_blank" rel="noreferrer">
      <span className="sr-only">Link to tweet</span>
      <Twitter className="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105" />
    </a>
  </div>
);

export const TweetBody = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="break-words leading-normal ">
    {tweet.entities.map((entity, idx) => {
      switch (entity.type) {
        case "url":
        case "symbol":
        case "hashtag":
        case "mention":
          return (
            <a
              key={idx}
              href={entity.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-normal text-gray-500"
            >
              <span>{entity.text}</span>
            </a>
          );
        case "text":
          return (
            <span
              key={idx}
              className="text-sm font-normal"
              dangerouslySetInnerHTML={{ __html: entity.text }}
            />
          );
      }
    })}
  </div>
);

export const TweetMedia = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="flex flex-1 items-center justify-center">
    {tweet.video && (
      <video
        poster={tweet.video.poster}
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl border shadow-sm"
      >
        <source src={tweet.video.variants[0].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
    {tweet.photos && (
      <div className="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
        <div className="shrink-0 snap-center sm:w-2" />
        {tweet.photos.map((photo) => (
          <Image
            width='300'
            height='300'
            key={photo.url}
            src={photo.url}
            title={"Photo by " + tweet.user.name}
            alt={tweet.text}
            className="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm"
          />
        ))}
        <div className="shrink-0 snap-center sm:w-2" />
      </div>
    )}
    {!tweet.video &&
      !tweet.photos &&
      // @ts-ignore
      tweet?.card?.binding_values?.thumbnail_image_large?.image_value.url && (
        <Image
            width='10'
            height='10'
            alt='tweet'
          // @ts-ignore
          src={tweet.card.binding_values.thumbnail_image_large.image_value.url}
          className="h-64 rounded-xl border object-cover shadow-sm"
        />
      )}
  </div>
);

export const MagicTweet = ({
  tweet,
  components,
  className,
  ...props
}: {
  tweet: Tweet;
  components?: TwitterComponents;
  className?: string;
}) => {
  const enrichedTweet = enrichTweet(tweet);
  return (
    <div
      className={cn(
        "relative flex h-full w-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <TweetHeader tweet={enrichedTweet} />
      <TweetBody tweet={enrichedTweet} />
      <TweetMedia tweet={enrichedTweet} />
    </div>
  );
};

/**
 * TweetCard (Server Side Only)
 */
export const TweetCard = async ({
  id,
  components,
  fallback = <TweetSkeleton />,
  onError,
  ...props
}: TweetProps & {
  className?: string;
}) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound {...props} />;
  }

  return (
    <Suspense fallback={fallback}>
      <MagicTweet tweet={tweet} {...props} />
    </Suspense>
  );
};

export default TweetCard;
