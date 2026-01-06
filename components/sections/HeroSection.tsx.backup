'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from '@/components/animations'
import { Button } from '@/components/ui/button'
import { BeforeAfterAnimation } from '@/components/animations'

const platforms = [
  { name: 'Chrome', icon: '/platforms/chrome.svg' },
  { name: 'Firefox', icon: '/platforms/firefox.svg' },
  { name: 'Safari', icon: '/platforms/safari.svg' },
  { name: 'Edge', icon: '/platforms/edge.svg' },
]

function PromoBadge() {
  return (
    <div className="inline-flex">
      <div className="bg-[#0a0a0a] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
        Free Forever
      </div>
    </div>
  )
}

function PlatformIcons() {
  return (
    <div className="flex justify-center gap-6">
      {platforms.map((platform) => (
        <div
          key={platform.name}
          className="grayscale hover:grayscale-0 transition-all duration-200"
        >
          <Image
            src={platform.icon}
            alt={platform.name}
            width={24}
            height={24}
          />
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative bg-[#0a0a0a] pt-32 pb-24 px-4">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Promo badge */}
          <FadeIn delay={0} direction="up">
            <div className="mb-6">
              <PromoBadge />
            </div>
          </FadeIn>

          {/* Main headline - SOLID BLACK, NO GRADIENT */}
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-tight text-white leading-[1.1]">
              Your Skills Are Real.
              <br />
              Make Them Undeniable.
            </h1>
          </FadeIn>

          {/* Subhead - GRAY TEXT */}
          <FadeIn delay={0.2} direction="up">
            <p className="mt-6 text-[18px] md:text-[20px] text-[#a0a0a0] max-w-2xl mx-auto leading-[1.6]">
              The credential verification platform that turns your real work
              into undeniable proof of expertise.
            </p>
          </FadeIn>

          {/* Platform icons - BROWSER LOGOS */}
          <FadeIn delay={0.3} direction="up">
            <div className="mt-8">
              <PlatformIcons />
            </div>
          </FadeIn>

          {/* CTAs - SOLID BLACK BUTTONS, NO GLOW */}
          <FadeIn delay={0.4} direction="up">
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-[#2A9D8F] hover:bg-[#238B7D] text-white rounded-lg"
              >
                <Link href="#get-started" className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2A9D8F]/50 hover:bg-[#2A9D8F]/10 text-white rounded-lg"
              >
                <Link href="#demo" className="flex items-center">
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Before/After Animation - COMPARISON PANEL */}
          <FadeIn delay={0.5} direction="up">
            <div className="mt-16">
              <BeforeAfterAnimation
                beforeLabel="Resume Claims"
                afterLabel="Verified Skills"
                beforeText="Java Developer\n5 years experience"
                afterText="Java ✓\n47 projects verified"
                cycleDuration={3000}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
