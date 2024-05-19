import { BackgroundGradient } from "@/components/card";
import Page from "@/components/header";
import { InfiniteMovingCards } from "@/components/moving-cards";
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

export default function Breif() {
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
    <Page title="War of Words 2023" desc="breif">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <Card>
            <CardHeader>
              <CardTitle>Champions & Runner-up</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold">1.</span>
                    <div>
                      <p className="font-medium">Team Singapore </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Champion
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold">2.</span>
                    <div>
                      <p className="font-medium">
                        Team DPS Modern Indian School
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Runner-up
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tournament Details</CardTitle>
              <CardDescription>
                War of Words Debate Championship 2022
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Tournament Name:</p>
                <p>War of Words Debate Championship 2022</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Dates:</p>
                <p>November 4-6, 2023</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Mode of tournament:</p>
                <p>Online (Zoom + Discord)</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Format:</p>
                <p>WSDC</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Results:</p>
                <Link href={"https://warofwords2022.calicotab.com/wwdc22/"}>
                  Visit
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          {/* <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          /> */}
        </div>
      </div>
    </Page>
  );
}
