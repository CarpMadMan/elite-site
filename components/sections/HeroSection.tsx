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
    <section className="relative bg-[#0a0a0a] pt-32 pb-24 px-4">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Promo badge */}
          <FadeIn delay={0} direction="up">
            <div className="mb-6">
              <div className="inline-flex bg-[#0a0a0a] text-white px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10">
                Free Forever
              </div>
            </div>
          </FadeIn>

          {/* Main headline */}
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Your Skills Are Real.
              <br />
              Make Them Undeniable.
            </h1>
          </FadeIn>

          {/* Subhead */}
          <FadeIn delay={0.2} direction="up">
            <p className="mt-6 text-xl text-[#a0a0a0] max-w-2xl mx-auto leading-relaxed">
              The credential verification platform that turns your real work
              into undeniable proof of expertise.
            </p>
          </FadeIn>

          {/* Platform icons */}
          <FadeIn delay={0.3} direction="up">
            <div className="mt-8">
              <PlatformIcons />
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.4} direction="up">
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#2A9D8F] hover:bg-[#238B7D] text-white border-0">
                <Link href="#get-started">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
                <Link href="#demo">
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* NEW: Scrolling Ribbon */}
          <FadeIn delay={0.5} direction="up">
            <div className="mt-12">
              <ScrollingRibbon
                items={peopleEmojis}
                speed={30}
                direction="ltr"
                glassZone={true}
                gap="60px"
              />
            </div>
          </FadeIn>

          {/* NEW: Rotating Text Banner */}
          <FadeIn delay={0.6} direction="up">
            <div className="mt-6">
              <RotatingTextBanner />
            </div>
          </FadeIn>

          {/* Before/After Animation */}
          <FadeIn delay={0.7} direction="up">
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
