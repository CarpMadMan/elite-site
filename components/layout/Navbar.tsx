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
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto max-w-6xl rounded-full border transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-gray-200 shadow-sm"
            : "bg-transparent border-white/20"
        )}
      >
        <div className="flex h-14 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold tracking-tight text-neutral-900">
              ELITE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Product Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium text-neutral-700 hover:text-neutral-900 bg-transparent hover:bg-neutral-100",
                  "data-[state=open]:text-neutral-900 data-[state=open]:bg-neutral-100"
                )}>
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {productItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 text-neutral-700"
                          >
                            <div className="flex items-start gap-3">
                              <item.icon className="h-5 w-5 mt-0.5 text-neutral-500" />
                              <div className="flex-1">
                                <div className="text-sm font-medium leading-none text-neutral-900">
                                  {item.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-neutral-600 mt-1">
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
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium text-neutral-700 hover:text-neutral-900 bg-transparent hover:bg-neutral-100",
                  "data-[state=open]:text-neutral-900 data-[state=open]:bg-neutral-100"
                )}>
                  ELITE FOR
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {flowForItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 text-neutral-700 relative"
                          >
                            <div className="flex items-start gap-3">
                              <item.icon className="h-5 w-5 mt-0.5 text-neutral-500" />
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <div className="text-sm font-medium leading-none text-neutral-900">
                                    {item.title}
                                  </div>
                                  {item.badge && (
                                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-neutral-600 mt-1">
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
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium text-neutral-700 hover:text-neutral-900 bg-transparent hover:bg-neutral-100",
                  "data-[state=open]:text-neutral-900 data-[state=open]:bg-neutral-100"
                )}>
                  CASE STUDIES FOR
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {caseStudyItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 text-neutral-700"
                          >
                            <div className="flex items-start gap-3">
                              <item.icon className="h-5 w-5 mt-0.5 text-neutral-500" />
                              <div className="flex-1">
                                <div className="text-sm font-medium leading-none text-neutral-900">
                                  {item.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-neutral-600 mt-1">
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
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium text-neutral-700 hover:text-neutral-900 bg-transparent hover:bg-neutral-100",
                  "data-[state=open]:text-neutral-900 data-[state=open]:bg-neutral-100"
                )}>
                  Business
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {businessItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 text-neutral-700"
                          >
                            <div className="flex items-start gap-3">
                              {item.icon && <item.icon className="h-5 w-5 mt-0.5 text-neutral-500" />}
                              <div className="flex-1">
                                <div className="text-sm font-medium leading-none text-neutral-900">
                                  {item.title}
                                </div>
                                {item.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-neutral-600 mt-1">
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
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-5 font-medium transition-all"
            >
              <Link href="#get-started">GET STARTED</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-neutral-700 hover:bg-neutral-100">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-neutral-200">
              <MobileMenu onClose={() => setMobileMenuOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
