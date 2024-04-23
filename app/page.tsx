"use client";

// import { Features } from "@/components/features";
import LandingNavbar from "@/components/nav";
import People from "@/components/people";
import { Button, buttonVariants } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
// import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";

export default function LandingPage() {
  const [isauth, setisauth] = useState(false);
  const [otp, setotp] = useState("");
  async function handleAuth() {
    try {
      const response = await axios.post("api/auth", { pin: otp });
      if (response.data === "success") {
        setisauth(true);
      }
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <LandingNavbar />
      {isauth ? (
        <main className="flex-1 flex-col">
          {/* <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#0070f3"
        /> */}
          <div
            className="h-[80vh] md:h-[95vh] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] w-full rounded-md flex 
         items-center justify-between bg-black/[0.96] antialiased container relative overflow-hidden"
          >
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
            {/* <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-zinc-900 bg-zinc-950 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <p className="text-sm font-semibold text-zinc-100">
              This build of Lecture is a private beta
            </p>
          </div>
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Trasnform your Education
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Welcome to lecture, your portal to a new educational experience
              through live transcript and post-lecture summaries tailored to
              your needs
            </p>
            <div className="w-full space-x-2 flex justify-center items-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mt-5",
                })}
                href="/dashboard"
                target="_blank"
              >
                Get started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "mt-5",
                })}
                href="/pricing"
                target="_blank"
              >
                Learn more <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div> */}
            <div className="flex items-center w-full lg:w-1/2">
              <div className="max-w-2xl mb-8">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-zinc-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                  Welcome to Straightforward Insight
                </h1>
                <p className="py-5 text-xl leading-normal text-zinc-500 lg:text-xl xl:text-2xl dark:text-zinc-300">
                  A dynamic student-led organization which is committed to
                  providing invaluable insights to a diverse range of questions.
                  We serve as a bridge, connecting eager students with
                  pre-existing organizations to offer them unique opportunities
                  for growth and learning.
                </p>

                {/* <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md "
              >
                Contact
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white border-2 border-blue-600 rounded-md"
              >
                <span> Learn more</span>
              </a>
            </div> */}
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center w-full lg:w-1/2">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-[-2rem] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[1rem]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(88.07% 72.58%, 114.88% 71.19%, 111.39% 26.12%, 85.5% 0.1%, 80.7% 2%, 59.45% 35.4%, 73.72% 56.00%, 67.13% 57.92%, 54.79% 32.05%, 86.65% 50%, 72.89% 60.04%, 62.43% 70.13%, 66.11% 76.94%, 76.87% 73.03%, 77.01% 83.36%, 75.69% 68.91%)",
                  }}
                  className="relative left-[calc(50%-2rem)] aspect-[1155/678] w-[38.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#3a79b4] to-[#0070f3] opacity-30 sm:left-[calc(50%-2rem)] sm:w-[72.1875rem]"
                />
              </div>
              <div className="">
                <Image
                  src={
                    "https://cdn.aayus.me/uploads/Screen_Shot_2023-11-13_at_10__1_-removebg.png"
                  }
                  width="616"
                  height="617"
                  className={"object-cover pb-10"}
                  alt="Hero"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <section id="learnmore" className="w-full py-26 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    What makes SFI stand out?
                  </h2>
                  <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                    Discover the unique features that set SFI apart and empower
                    the leaders of tomorrow.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Personalized Mentorship
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Guiding students on their academic and personal
                          journeys through tailored mentorship.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Dynamic Connections
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Forge dynamic connections with diverse organizations,
                          providing limitless opportunities for growth.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Community-Focused Approach
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Foster collaboration and inspiration among youth,
                          creating a supportive environment for collective
                          progress.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Social Responsibility
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Cultivate social responsibility by encouraging
                          students to engage in community service projects and
                          advocate for causes they believe in.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative isolate">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                      <div
                        style={{
                          clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#158276] to-[#27f4dd] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                      />
                    </div>
                    <Image
                      src="https://cdn.aayus.me/uploads/20231104_140232.jpg"
                      alt="product preview"
                      width={1920}
                      height={1080}
                      quality={100}
                      className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                      <div
                        style={{
                          clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#158276] to-[#27f4dd] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="learnmore" className="w-full py-26 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    What do we hope to achieve?
                  </h2>
                  <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                    At our non-profit organisation, our vision extends beyond
                    education; we aspire to cultivate a transformative
                    environment where mentors from universities play a pivotal
                    role in nurturing students
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
                <div>
                  <div className="relative isolate">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                      <div
                        style={{
                          clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffead3] to-[#bdae9d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                      />
                    </div>
                    <Image
                      src="https://cdn.aayus.me/uploads/20231103_102301.png"
                      alt="product preview"
                      width={1920}
                      height={1080}
                      quality={100}
                      className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                      <div
                        style={{
                          clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#bdae9d] to-[#ffead3] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Meaningful Connections
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Facilitating the formation of meaningful connections
                          among students, both within our community and beyond
                          traditional boundaries.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Real-World Engagement
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Empowering students through collaborative efforts with
                          diverse organizations, providing real-world
                          experiences and contributing to impactful initiatives.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Community Impact</h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Beyond academic success, our goal is to empower
                          students to have a tangible impact on their
                          communities, creating a ripple effect of positive
                          change.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="learnmore" className="w-full py-26 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    How are we going to do this?
                  </h2>
                  <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                    In our mission to bring Straightforward Insight to life, we
                    are strategically incorporating various methodologies aimed
                    at maximizing our impact on the community
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Diverse Opportunities
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Maximizing community impact by sharing numerous
                          volunteering opportunities and participation in
                          various competitions for like-minded youth.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Insightful Podcast Series
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Host a fortnightly podcast featuring individuals
                          sharing valuable insights to enhance the high school
                          experience.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Continuous Growth Content
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Regularly post engaging content to support continuous
                          growth and development for an enriching high school
                          life.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">
                          Exploration through Writing
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                          Encourage students to broaden their perspectives by
                          exploring diverse topics through writing web articles,
                          expanding their horizons.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative isolate">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                      <div
                        style={{
                          clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9d173c] to-[#510c1f] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                      />
                    </div>
                    <Image
                      src="https://cdn.aayus.me/uploads/pip.jpg"
                      alt="product preview"
                      width={1920}
                      height={1080}
                      quality={100}
                      className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                      <div
                        style={{
                          clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#510c1f] to-[#9d173c] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <People />
          {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 relative isolate">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Sign Up for Updates
                </h2>
                <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                  Stay updated with the latest product news and updates.
                </p>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-[-27rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[27rem]"
                >
                  <div
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-2rem)] aspect-[1155/678] w-[38.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#80e1ff] to-[#305fa5] opacity-30 sm:left-[calc(50%-2rem)] sm:w-[72.1875rem]"
                  />
                </div>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    className="max-w-lg flex-1 px-4 py-2 border-border border rounded-md "
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section> */}
        </main>
      ) : (
        <div className="flex  min-h-screen flex-col items-center text-white bg-black dark:bg-dot-white/[0.2]  justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">
                You need Access to continue
              </CardTitle>
              <CardDescription>
                This is a private page. Please enter the password to continue.
                <Link href="https://wa.me/97466850961">
                  Contact me if you dont have the password.
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={otp}
                  onChange={(e: any) => setotp(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleAuth()} className="w-full">
                Sign in
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
      <footer className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 ">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2024 Straightforward Insight. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 text-neutral-400">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://aayushr.dev"
          >
            Made by Aayush Rajagopalan
          </Link>
        </nav>
      </footer>
    </div>
  );
}
