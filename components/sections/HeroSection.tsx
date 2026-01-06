'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn, ScrollingRibbon, RotatingTextBanner } from '@/components/animations'
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
      <div className="bg-neutral-900 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
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
  const peopleEmojis = [
    '👨‍💼','👩‍💻','👨‍🎨','👩‍🔬','👨‍🚀','👩‍⚖️','👨‍🏫','👩‍🌾','👨‍💼','👩‍🎤',
    '👨‍🔧','👩‍⚕️','👨‍🎓','👩‍💼','👨‍🍳','👩‍🎨','👨‍🔬','👩‍🚀','👨‍⚖️','👩‍🏫',
    '👨‍🌾','👩‍💻','👨‍🎤','👩‍🔧','👨‍⚕️','👩‍🎓','👨‍💼','👩‍🍳','👨‍🎨','👩‍🔬'
  ]

  return (
    <section className="relative bg-[#0a0a0a] pt-20 pb-32 px-4 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2A9D8F]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Promo badge - smaller, more subtle */}
          <FadeIn delay={0} direction="up">
            <div className="mb-8">
              <div className="inline-flex bg-white/5 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10 shadow-lg">
                ✨ Free Forever
              </div>
            </div>
          </FadeIn>

          {/* Main headline - tighter spacing, larger */}
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              Your Skills Are Real.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
                Make Them Undeniable.
              </span>
            </h1>
          </FadeIn>

          {/* Subhead - more prominent */}
          <FadeIn delay={0.2} direction="up">
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
              The credential verification platform that turns your real work
              into undeniable proof of expertise.
            </p>
          </FadeIn>

          {/* Platform icons - more compact */}
          <FadeIn delay={0.3} direction="up">
            <div className="mb-10">
              <PlatformIcons />
            </div>
          </FadeIn>

          {/* CTAs - more prominent styling */}
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
              <Button 
                size="lg" 
                className="bg-[#2A9D8F] hover:bg-[#238B7D] text-white border-0 shadow-[0_0_40px_-10px_rgba(42,157,143,0.4)] hover:shadow-[0_0_50px_-10px_rgba(42,157,143,0.5)] transition-all duration-300 text-lg px-8 py-6"
              >
                <Link href="#get-started">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm text-lg px-8 py-6"
              >
                <Link href="#demo">
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* PRIMARY FEATURE: Scrolling Ribbon - more prominent placement */}
          <FadeIn delay={0.5} direction="up">
            <div className="relative">
              {/* Glow effect behind ribbon */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A9D8F]/10 to-transparent blur-2xl" />
              
              {/* The ribbon itself */}
              <ScrollingRibbon
                items={peopleEmojis}
                speed={30}
                direction="ltr"
                glassZone={true}
                gap="60px"
                className="relative"
              />
            </div>
          </FadeIn>

          {/* Rotating Text Banner - integrated more tightly */}
          <FadeIn delay={0.6} direction="up">
            <div className="mt-8">
              <RotatingTextBanner />
            </div>
          </FadeIn>

          {/* Before/After Animation - positioned as secondary element */}
          <FadeIn delay={0.7} direction="up">
            <div className="mt-20">
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
