'use client';

import ScrollingRibbon from './ScrollingRibbon';
import RotatingTextBanner from './RotatingTextBanner';

const ScrollingRibbonDemo: React.FC = () => {
  const peopleEmojis = [
    '👨‍💼','👩‍💻','👨‍🎨','👩‍🔬','👨‍🚀','👩‍⚖️','👨‍🏫','👩‍🌾','👨‍💼','👩‍🎤',
    '👨‍🔧','👩‍⚕️','👨‍🎓','👩‍💼','👨‍🍳','👩‍🎨','👨‍🔬','👩‍🚀','👨‍⚖️','👩‍🏫',
    '👨‍🌾','👩‍💻','👨‍🎤','👩‍🔧','👨‍⚕️','👩‍🎓','👨‍💼','👩‍🍳','👨‍🎨','👩‍🔬'
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center gap-12 p-8">
      {/* Title */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          ELITE Verification
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl">
          Watch as professionals flow through the verification glass zone
        </p>
      </div>

      {/* Rotating Text Banner */}
      <div className="w-full max-w-4xl">
        <RotatingTextBanner />
      </div>

      {/* Scrolling Ribbon */}
      <div className="w-full max-w-6xl">
        <ScrollingRibbon
          items={peopleEmojis}
          speed={30}
          direction="ltr"
          glassZone={true}
          gap="1.5rem"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-[#2A9D8F] mb-2">10K+</div>
          <div className="text-sm text-slate-400">Verified Pros</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
          <div className="text-sm text-slate-400">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#2A9D8F] mb-2">24/7</div>
          <div className="text-sm text-slate-400">Verification</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingRibbonDemo;
