import { BackgroundGradient } from "@/components/card";
import Page from "@/components/header";
import { InfiniteMovingCards } from "@/components/moving-cards";
import Link from "next/link";

export default function TwentyThree() {
  const testimonials = [
    {
      name: "1",
      title: "https://cdn.aayus.me/wallpaper.png",
    },
    {
      name: "2",
      title: "https://cdn.aayus.me/wallpaper.png",
    },
    {
      name: "13",
      title: "https://cdn.aayus.me/wallpaper.png",
    },
    {
      name: "12",
      title: "https://cdn.aayus.me/wallpaper.png",
    },
  ];
  return (
    <Page title="War of Words 2023" desc="">
      <div className="flex flex-col">
        {/* <div className="flex items-center justify-between">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <p className="text-semibold sm:text-xl text-black  mb-2 dark:text-neutral-200">
              Tournament Details
            </p>

            <ol className="text-md py-2 text-neutral-600 dark:text-neutral-400">
              <li>Dates: 9th-11th June 2023</li>
              <li>
                Mode of tournament: In-person at DPS Modern Indian School, Doha,
                Qatar{" "}
              </li>
              <li>Format: WSDC</li>
            </ol>
            <p className="text-md py-2 text-neutral-600 dark:text-neutral-400">
              To view the results of the entire tournament,{" "}
              <Link href={"https://warofwords2022.calicotab.com/wwdc23/"}>
                click here
              </Link>
            </p>
            <p className="text-md py-2 text-neutral-600 dark:text-neutral-400">
              To know more and view more pictures{" "}
              <Link href="https://www.facebook.com/wwdc2023">
                please visit our facebook page
              </Link>
            </p>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 h-full  w-full bg-white dark:bg-zinc-900">
            <p className="text-extrabold sm:text-2xl text-black  mb-2 dark:text-neutral-200">
              Champions and Runner Up
            </p>

            <ol className="text-xl py-2 text-zinc-900 dark:text-neutral-400">
              <li>Champion : Team Qatar Onyx</li>
              <li>Runner Up: Philippines School Doha</li>
            </ol>
          </BackgroundGradient>
        </div>

        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}
      </div>
    </Page>
  );
}
