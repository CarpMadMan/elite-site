'use client'

import { LogoCarousel } from '@/components/animations/LogoCarousel'

const companyLogos = [
  '/companies/github.svg',
  '/companies/gitlab.svg',
  '/companies/bitbucket.svg',
  '/companies/vscode.svg',
  '/companies/jetbrains.svg',
  '/companies/figma.svg',
  '/companies/notion.svg',
  '/companies/slack.svg',
]

export function TrustedBySection() {
  return (
    <section className="-mt-8 z-10 px-4">
      <div className="container">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-gray-600 font-medium text-center mb-8">
            Trusted by forward-thinking companies worldwide
          </h2>
          <LogoCarousel
            logos={companyLogos}
            speed={25}
            direction="ltr"
            grayscale={true}
          />
        </div>
      </div>
    </section>
  )
}
