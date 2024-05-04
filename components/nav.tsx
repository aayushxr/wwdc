import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight, Feather } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

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
              <div className="space-x-1">
                <Link
                  href="https://aayus.me/sfi_spotify"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <FaSpotify className="h-4 w-4" />
                </Link>
                <Link
                  href="https://aayus.me/sfi_insta"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <FaInstagram className="h-4 w-4" />
                </Link>

                <Link
                  href="https://aayus.me/sfi_yt"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <FaYoutube className="h-4 w-4" />
                </Link>
              </div>
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
                href="https://donate.stripe.com/3cs5kx9O06KSgpO4gg"
                className={buttonVariants({
                  size: "sm",
                  variant: "geist",
                })}
              >
                Donate <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
