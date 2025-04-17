"use client";
import Committee from "@/components/committee";
import { buttonVariants } from "@/components/ui/button";
import { leaders } from "@/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

export default function LandingPage() {
  console.log(
    "%c 👀 ",
    "color:white; padding: 2px 4px; border-radius: 4px; background-color: #3be343",
    "If you know what you are doing, contact me https://aayushr.dev/contact"
  );
  console.log(
    "%c Made by Aayush Rajagopalan ",
    "color:white; padding: 2px 4px; border-radius: 4px; background-color: #993bf7",
    "2024 War of Words Debating Championship, all rights reserved."
  );
  return (
    <>
      <main className="justify-center h-[100vh] items-center flex-col">
        <div className="container h-full items-center justify-center flex">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-300 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
          <div className="flex items-center justify-center z-20  max-w-6xl">
            <div className=" flex flex-col items-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-[-17rem] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[17rem]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(40.09% 35.86%, 46.02% 35.44%, 18.09% 37.26%, 85.5% 0.1%, 80.7% 2%, 66.66% 37.73%, 54.97% 54.94%, 60.68% 51.62%, 54.79% 32.05%, 12.93% 29.07%, 45.26% 49.38%, 66.98% 29.15%, 61.56% 33.34%, 54.70% 44.44%, 59.93% 40.25%, 66.88% 38.39%)",
                  }}
                  className="relative left-[calc(50%-2rem)] aspect-[1155/678] w-[38.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-emerald-400 to-emerald-800 opacity-30 sm:left-[calc(50%-2rem)] sm:w-[72.1875rem]"
                />
              </div>
              <h1 className="text-4xl max-w-5xl relative z-50 text-center font-bold leading-snug tracking-tight text-zinc-900 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                War of Words Debating Championship
              </h1>
              <p className="py-5 text-lg max-w-3xl text-center leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
                An inter-school debate tournament organised by DPS MIS for all
                high school students in Qatar
              </p>
              <div className="w-full space-x-2 flex justify-center items-center">
                <Link
                  className={buttonVariants({
                    size: "lg",
                    variant: "geist",
                    className: "mt-5",
                  })}
                  href={
                    "https://wwdc.calicotab.com"
                  }
                  target="_blank"
                >
                  Results <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className: "mt-5 ",
                  })}
                  href="/schedule"
                  target="_blank"
                >
                  Schedule <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="relative z-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 pb-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Our Leaders
              </h2>
            </div>
          </div>
        </div>
        <div className="container  gap-8 flex flex-col flex-wrap justify-center">
          <div className="relative z-50">
            <div className="m-4">
              <div className="flex flex-col items-center justify-center text-center">
                <Image
                  src="https://cdn.aayus.me/uploads/Asna20Nafees2019.png"
                  width={200}
                  height={200}
                  alt={"Ms. Asna Nafees"}
                  className="rounded-full aspect-square h-56 w-56 object-cover"
                />
                <div className="text-lg mt-3 font-semibold">
                  Ms. Asna Nafees
                </div>
                <div className="text-md font-medium">Principal</div>
                <div className="text-md font-medium">
                  DPS Modern Indian School
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            {leaders.map((member, index) => (
              <div key={index} className="m-4">
                <div className="flex flex-col items-center justify-center text-center">
                  <Image
                    src={member.image}
                    width={200}
                    height={200}
                    alt={member.name}
                    className="rounded-full aspect-square md:h-56 md:w-56 object-cover"
                  />
                  <div className="text-lg mt-3 font-semibold">
                    {member.name}
                  </div>
                  <div className="text-md  max-w-96  font-medium">
                    {member.position}
                  </div>
                  <div className="text-md font-medium">
                    DPS Modern Indian School
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Committee />
    </>
  );
}
