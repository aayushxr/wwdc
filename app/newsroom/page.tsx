import LandingNavbar from "@/components/nav";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Newsroom() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingNavbar />
      <main className="flex-1 h-full flex-col">
        <div className="container h-1/3 w-1/3 px-4 py-6 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Welcome to the Straightforward Insight Newsroom
              </h2>
              <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                In our mission to bring Straightforward Insight to life, we are
                strategically incorporating various methodologies aimed at
                maximizing our impact on the community
              </p>
            </div>
          </div>
        </div>
        <div className="container gap-8 grid grid-cols-1 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Short Summary</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Image
                src="https://cdn.aayus.me/uploads/pip.jpg"
                alt="product preview"
                width={1920}
                height={1080}
                quality={100}
                className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
              />
            </CardContent>
            <CardFooter className="w-full ml-auto">
              <Button className="">View</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Short Summary</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Image
                src="https://cdn.aayus.me/uploads/pip.jpg"
                alt="product preview"
                width={1920}
                height={1080}
                quality={100}
                className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
              />
            </CardContent>
            <CardFooter className="w-full ml-auto">
              <Button className="">View</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Short Summary</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Image
                src="https://cdn.aayus.me/uploads/pip.jpg"
                alt="product preview"
                width={1920}
                height={1080}
                quality={100}
                className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
              />
            </CardContent>
            <CardFooter className="w-full ml-auto">
              <Button className="">View</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Short Summary</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Image
                src="https://cdn.aayus.me/uploads/pip.jpg"
                alt="product preview"
                width={1920}
                height={1080}
                quality={100}
                className="rounded-md bg-background shadow-2xl ring-1 ring-gray-900/10"
              />
            </CardContent>
            <CardFooter className="w-full ml-auto">
              <Button className="">View</Button>
            </CardFooter>
          </Card>
        </div>
      </main>

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
