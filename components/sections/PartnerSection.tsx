'use client'

import { LogoCarousel } from '@/components/animations/LogoCarousel'

const partnerLogos = [
  '/partners/aws.svg',
  '/partners/google-cloud.svg',
  '/partners/azure.svg',
  '/partners/digitalocean.svg',
  '/partners/vercel.svg',
  '/partners/netlify.svg',
  '/partners/cloudflare.svg',
]

export function PartnerSection() {
  return (
    <section className="bg-[#2A9D8F] rounded-t-3xl py-16 px-4">
      <div className="container">
        <h2 className="text-white font-medium text-center mb-8">
          Integrated with the tools you use every day
        </h2>
        <LogoCarousel
          logos={partnerLogos}
          speed={20}
          direction="rtl"
          grayscale={false}
        />
      </div>
    </section>
  )
}
