"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, Grid, Video, Lock, Mail, Users, Laptop, Pen, MessageSquare, Briefcase, Accessibility, Award, Pencil, Wand, Linkedin, BookOpen, Building, Rss, Info, Trophy, Mail as Email, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const productItems = [
  {
    title: "Features",
    description: "Do more with your voice",
    icon: Grid,
    href: "#features",
  },
  {
    title: "Use cases",
    description: "See how Flow fits into your day",
    icon: Video,
    href: "#use-cases",
  },
  {
    title: "Workflows",
    description: "Build faster with voice-first processes",
    icon: Wand,
    href: "#workflows",
  },
  {
    title: "Privacy & Security",
    description: "Your data, your control",
    icon: Lock,
    href: "#privacy",
  },
  {
    title: "Help Center",
    description: "Learn the ins and outs of Flow",
    icon: BookOpen,
    href: "#help",
  },
  {
    title: "Talk to support",
    description: "Reach out to our support team",
    icon: MessageCircle,
    href: "#support",
  },
];

const flowForItems = [
  {
    title: "Leaders",
    description: "Unblock teams, build faster with voice",
    icon: Users,
    href: "#leaders",
    badge: null,
  },
  {
    title: "Developers",
    description: "Speak more context, get better results",
    icon: Laptop,
    href: "#developers",
    badge: "NEW",
  },
  {
    title: "Creators",
    description: "Capture content ideas anytime, anywhere",
    icon: Pen,
    href: "#creators",
    badge: null,
  },
  {
    title: "Customer support",
    description: "Resolve tickets 4x faster",
    icon: MessageSquare,
    href: "#customer-support",
    badge: "NEW",
  },
  {
    title: "Students",
    description: "Write faster, study smarter",
    icon: Award,
    href: "#students",
    badge: null,
  },
  {
    title: "Lawyers",
    description: "Dictate case notes and memos on the go",
    icon: Briefcase,
    href: "#lawyers",
    badge: null,
  },
  {
    title: "Accessibility",
    description: "Break free from the keyboard",
    icon: Accessibility,
    href: "#accessibility",
    badge: "NEW",
  },
  {
    title: "Sales",
    description: "Close more deals with your voice",
    icon: Linkedin,
    href: "#sales",
    badge: "NEW",
  },
];

const caseStudyItems = [
  {
    title: "Gaurav the Advisor",
    description: "Fast, fluent replies for busy advisors",
    icon: Trophy,
    href: "#case-study-gaurav",
    badge: null,
  },
  {
    title: "Greg the Writer",
    description: "Speaking chapters into life",
    icon: Pencil,
    href: "#case-study-greg",
    badge: null,
  },
  {
    title: "Anthony the Creator",
    description: "Unlocking creative rhythm",
    icon: Wand,
    href: "#case-study-anthony",
    badge: null,
  },
];

const businessItems = [
  {
    title: "Pricing",
    description: "Simple, transparent pricing",
    icon: null,
    href: "#pricing",
  },
  {
    title: "About",
    description: "Learn more about our mission",
    icon: Info,
    href: "#about",
  },
  {
    title: "Blog",
    description: "Insights, stories, and updates",
    icon: Rss,
    href: "#blog",
  },
  {
    title: "Company",
    description: "Our team and culture",
    icon: Building,
    href: "#company",
  },
  {
    title: "Careers",
    description: "Join the team",
    icon: Briefcase,
    href: "#careers",
  },
  {
    title: "Talk to sales",
    description: "Reach out to our enterprise team",
    icon: Mail,
    href: "#sales",
  },
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
            {/* Product Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/80 hover:text-white bg-transparent hover:bg-white/5 data-[state=open]:text-white data-[state=open]:bg-white/5">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {productItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white",
                            "text-white/70"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <item.icon className="h-5 w-5 mt-0.5 text-white/60" />
                            <div className="flex-1">
                              <div className="text-sm font-medium leading-none text-white">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-white/60 mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Flow For Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/80 hover:text-white bg-transparent hover:bg-white/5 data-[state=open]:text-white data-[state=open]:bg-white/5">
                ELITE FOR
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {flowForItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white",
                            "text-white/70 relative"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <item.icon className="h-5 w-5 mt-0.5 text-white/60" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium leading-none text-white">
                                  {item.title}
                                </div>
                                {item.badge && (
                                  <span className="inline-flex items-center rounded-full bg-[#2A9D8F]/20 px-2 py-0.5 text-xs font-medium text-[#2A9D8F]">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-white/60 mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Case Studies Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/80 hover:text-white bg-transparent hover:bg-white/5 data-[state=open]:text-white data-[state=open]:bg-white/5">
                CASE STUDIES FOR
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {caseStudyItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white",
                            "text-white/70"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <item.icon className="h-5 w-5 mt-0.5 text-white/60" />
                            <div className="flex-1">
                              <div className="text-sm font-medium leading-none text-white">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-white/60 mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Business Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/80 hover:text-white bg-transparent hover:bg-white/5 data-[state=open]:text-white data-[state=open]:bg-white/5">
                Business
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {businessItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white",
                            "text-white/70"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            {item.icon && <item.icon className="h-5 w-5 mt-0.5 text-white/60" />}
                            <div className="flex-1">
                              <div className="text-sm font-medium leading-none text-white">
                                {item.title}
                              </div>
                              {item.description && (
                                <p className="line-clamp-2 text-sm leading-snug text-white/60 mt-1">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            asChild
            size="default"
            className="rounded-full bg-[#2A9D8F] hover:bg-[#238B7D] text-white px-6 font-medium shadow-[0_0_20px_-5px_rgba(42,157,143,0.4)] hover:shadow-[0_0_30px_-5px_rgba(42,157,143,0.5)] transition-all"
          >
            <Link href="#download">Download for free</Link>
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
