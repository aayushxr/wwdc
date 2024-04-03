import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight, Feather } from "lucide-react";
import Image from "next/image";

const LandingNavbar = async () => {
  return (
    <nav className="sticky h-[4rem] flex items-center inset-x-0 top-0 z-30 w-full bg-transparent backdrop-blur-lg transition-all">
      <div className="container">
        <div className="flex h-14 items-center justify-between ">
          <Link
            href="/"
            className=" left-8 top-8 z-20 flex items-center text-lg font-bold tracking-tight"
          >
            <span className="flex items-center space-x-2 text-2xl text-blue-500 dark:text-zinc-100">
              <span>
                <Image
                  src="https://cdn.aayus.me/uploads/logo.png"
                  alt="N"
                  width="24"
                  height="24"
                  className="w-6"
                />
              </span>
              <span>SFI</span>
            </span>
          </Link>

          {/* <MobileNav isAuth={!!user} /> */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="#learnmore"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                About
              </Link>
              <Link
                href={"#team"}
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Team
              </Link>
              <Link
                href={"/news"}
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Newsroom
              </Link>
              <Link
                href="https://aayus.me/sfi_insta"
                className={buttonVariants({
                  size: "sm",
                  variant: "geist",
                })}
              >
                Contact <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
