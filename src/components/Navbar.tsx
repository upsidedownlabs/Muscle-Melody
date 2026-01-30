"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./Theming/mode-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const Navbar = ({ isDisplay }: { isDisplay: boolean }) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To prevent hydration mismatch, we wait until the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until the component is mounted
  }

  // Determine the current theme (dark/light)
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <div className="top-0 md:left-0 md:right-0 flex backdrop-blur-sm justify-center py-[10px] border-b border-g items-center font-bold z-50">
        <div className="flex w-full max-w-screen mx-2 md:mx-4 justify-between items-center">
          <div className="flex flex-row gap-2 items-center group">
            <Link href="/">
              <div className="font-rancho font-bold text-2xl duration-300 pl-2 bg-gradient-to-r from-yellow-500  to-orange-500 text-transparent bg-clip-text ">
              Muscle Melody
              </div>
            </Link>
      
          </div>
          <div className="flex gap-0 md:gap-2 items-center">
            <ModeToggle disabled={!isDisplay} />
            <Link
              href="https://github.com/upsidedownlabs/Muscle-Melody"
              target="__blank"
            >
              <Button variant={"ghost"} size={"sm"}>
                <GitHubLogoIcon width={24} height={24} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
