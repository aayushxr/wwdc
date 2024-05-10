"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight, Feather } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar";
import { useState } from "react";

const LandingNavbar = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <nav className="sticky h-[4rem] flex items-center inset-x-0 top-0 z-30 w-full bg-transparent backdrop-blur-lg transition-all">
      <div className="container">
        <div className="grid grid-cols-3 h-14 items-center">
          <Link
            href="/"
            className=" left-8 top-8 z-20 flex items-center text-lg font-bold tracking-tight"
          >
            <span className="flex items-center space-x-2 text-2xl text-emerald-700 dark:text-zinc-100">
              <span>
                <Image
                  src="https://cdn.aayus.me/uploads/logo.png"
                  alt="N"
                  width="24"
                  height="24"
                  className="w-6"
                />
              </span>
              <span className="hidden md:block">WWDC</span>
            </span>
          </Link>
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Welcome">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">About us</HoveredLink>
                <HoveredLink href="/interface-design">Our Leaders</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Past Editions"
            >
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="2023"
                  href="/2022/tournament"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="The 2023 edition of the War of the Words Debate Tournament."
                />
                <ProductItem
                  title="2022"
                  href="/2022/motions"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="The 2022 edition of the War of the Words Debate Tournament."
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="References">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/references/briefings">
                  Briefings cum references
                </HoveredLink>
                <HoveredLink href="/references/samples">
                  Sample Debates
                </HoveredLink>
                <HoveredLink href="/references">Other References</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
          {/* <MobileNav isAuth={!!user} /> */}

          <div className="hidden justify-end items-center space-x-4 sm:flex">
            <>
              <div className="space-x-1">
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
                  <FaFacebook className="h-4 w-4" />
                </Link>
              </div>

              <Link
                href="/contact"
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
