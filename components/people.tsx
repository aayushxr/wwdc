"use client";
import { ExecTeam, Founders } from "@/data";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";

export default function People() {
  return (
    <div id="people" className="my-10 ">
      <div className="flex container w-full flex-col mt-4 items-center justify-center text-center">
        <h2 className="max-w-2xl mt-3 text-3xl font-bold flex leading-snug tracking-tight text-zinc-800 lg:leading-tight lg:text-4xl dark:text-white">
          Our
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700">
            <TypewriterComponent
              options={{
                strings: ["Team", "Crew", "Changemakers", "Members"],

                autoStart: true,
                loop: true,
                delay: "natural",
              }}
            />
          </span>
        </h2>

        <p className="max-w-2xl py-4 text-lg leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
          The people who make the magic happen.
        </p>
      </div>
      <div className="text-xl font-semibold py-4 text-center">Founders</div>
      <div className="container gap-8 flex flex-wrap justify-center">
        {Founders.map((member, index) => (
          <div key={index} className="m-4">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src={member.image}
                width={100}
                height={100}
                alt={member.name}
                className="rounded-full aspect-square h-32 w-32 object-cover"
              />
              <div className="text-lg mt-3 font-semibold">{member.name}</div>
              <div className="text-md font-medium">{member.position}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-xl font-semibold py-4 text-center">
        Executive Team
      </div>

      <div className="container gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {ExecTeam.map((member, index) => (
          <div key={index} className="m-4">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src={member.image}
                width={100}
                height={100}
                alt={member.name}
                className="rounded-full aspect-square h-32 w-32 object-cover"
              />
              <div className="text-lg mt-3 font-semibold">{member.name}</div>
              <div className="text-md font-medium">{member.position}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
