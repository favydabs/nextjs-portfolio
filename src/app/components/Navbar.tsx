"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, SunMoon } from "lucide-react";
import Image from "next/image";
import { logo } from "@/app/components/Images";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-2 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center  justify-between px-4 shadow-md rounded-full">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-20 h-14 rounded-full" />
        </Link>
        <div className="flex gap-6  justify-center  py-4 px-6 ">
          <Link
            href="/projects"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
        </div>
        <div className=" gap-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <SunMoon className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
