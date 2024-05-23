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
    <Page title="War of Words Debating Championship 2022" desc="">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center">
            <Card className="m-5 h-5/6 w-full max-w-md">
              <CardHeader>
                <CardTitle>Champions & Runner-up</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold">1.</span>
                      <div>
                        <p className="font-medium">Team Qatar Oryx</p>
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
                        Philippines School Doha
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
          </div>
          <div className="flex items-center justify-center">
            <Card className="m-5  w-full max-w-md">
              <CardHeader>
                <CardTitle>Tournament Details</CardTitle>
                <CardDescription>
                  War of Words Debating Championship 2023
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Dates:</p>
                  <p>June 9-11, 2023</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Mode:</p>
                  <p>In Person</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Location:</p>
                  <p>DPS Modern Indian School</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Format:</p>
                  <p>WSDC</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Results:</p>
                  <Link
                    className="underline"
                    href={"https://warofwords2022.calicotab.com/wwdc23/"}
                  >
                    Visit
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
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
