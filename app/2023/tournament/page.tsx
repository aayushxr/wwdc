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
    <Page title="War of Words 2024" desc="breif">
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
                      <p className="font-medium">Team Qatar Oryx </p>
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
                      <p className="font-medium">Philippines School Doha</p>
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
                War of Words Debate Championship 2023
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Dates:</p>
                <p>June 9-11, 2023</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Mode of tournament:</p>
                <p>In-person at DPS Modern Indian School, Doha, Qatar</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Format:</p>
                <p>WSDC</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Results:</p>
                <Link href={"https://warofwords2022.calicotab.com/wwdc23/"}>
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
