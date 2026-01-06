"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  onClose: () => void;
}

const navLinks = [
  { name: "Product", href: "#product" },
  { name: "Documentation", href: "#docs" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export function MobileMenu({ onClose }: MobileMenuProps) {
  const handleLinkClick = (href: string) => {
    onClose();
    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col space-y-4 mt-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold">ELITE</span>
      </div>

      <nav className="flex flex-col space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => handleLinkClick(link.href)}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="pt-4 border-t">
        <Button
          asChild
          className="w-full rounded-full bg-[#008080] hover:bg-[#006666] text-white"
          onClick={() => handleLinkClick("#download")}
        >
          <Link href="#download">Download for macOS</Link>
        </Button>
      </div>
    </div>
  );
}
