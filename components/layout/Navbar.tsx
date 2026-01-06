"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { name: "Product", href: "#product" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-sm border-b border-white/10"
          : "bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight text-white">ELITE</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white hover:bg-white/5 focus:outline-none"
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            asChild
            size="default"
            className="rounded-full bg-[#2A9D8F] hover:bg-[#238B7D] text-white px-6 font-medium shadow-[0_0_20px_-5px_rgba(42,157,143,0.4)] hover:shadow-[0_0_30px_-5px_rgba(42,157,143,0.5)] transition-all"
          >
            <Link href="#get-started">Get Started Free</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#0a0a0a] border-white/10">
            <MobileMenu onClose={() => setMobileMenuOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
