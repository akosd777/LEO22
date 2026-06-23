/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, Wrench, ArrowRight, Compass } from 'lucide-react';
import heroImgUrl from '../assets/images/scuba_hero_underwater_1782240419136.jpg';

interface HeroProps {
  onOpenInquiry: (type: 'education' | 'equipment' | 'general') => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onOpenInquiry, onScrollToSection }: HeroProps) {
  const trustBadges = [
    {
      icon: <Award className="h-5 w-5 text-amber-400" />,
      title: '전문 아카데미',
      desc: 'PADI 최고 교수법 이수 교육',
    },
    {
      icon: <Wrench className="h-5 w-5 text-cyan-400" />,
      title: '오버홀 전문 센터',
      desc: '공인 테크니션 자체 워크숍',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      title: '철저한 안전 중심',
      desc: '해수 냉수대 시뮬레이션 테스트',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImgUrl}
          alt="LEO22 Scuba Center Underwater Hero"
          className="w-full h-full object-cover scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient masks for extreme depth & readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/70 to-ocean-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/80 via-transparent to-ocean-950/80" />
        <div className="absolute inset-0 bg-ocean-950/30 mix-blend-multiply" />
      </div>

      {/* Floating Ambient Bubbles Animating in Background */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-40">
        <div className="bubble-element w-4 h-4 bg-white/20 rounded-full absolute bottom-10 left-[15%] animate-bounce [animation-duration:8s]" />
        <div className="bubble-element w-2 h-2 bg-white/30 rounded-full absolute bottom-20 left-[35%] animate-bounce [animation-duration:12s]" />
        <div className="bubble-element w-6 h-6 bg-white/10 rounded-full absolute bottom-5 left-[60%] animate-bounce [animation-duration:10s]" />
        <div className="bubble-element w-3 h-3 bg-white/25 rounded-full absolute bottom-15 left-[80%] animate-bounce [animation-duration:14s]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Sub-label badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ocean-900/90 border border-ocean-600/50 text-ocean-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-inner"
        >
          <Compass className="h-4 w-4 text-ocean-400 animate-spin [animation-duration:20s]" />
          PROFESSIONAL SCUBA DIVING ACADEMY
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-sans tracking-tight text-white mb-6 drop-shadow-md"
          id="hero-title"
        >
          LEO22 <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 via-cyan-300 to-ocean-300">Scuba Center</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl font-sans text-ocean-100 max-w-3xl mb-12 leading-relaxed tracking-wide drop-shadow"
          id="hero-subtitle"
        >
          Scuba Diving Education · Equipment Repair · Overhaul
          <span className="block mt-2 text-sm sm:text-base text-ocean-300/90 font-light">
            최고 레벨 다이빙 교육과 정품 보증 기계식 정밀 오버홀 서비스를 제공하는 전문 다이빙 아카데미
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md sm:max-w-none justify-center"
          id="hero-ctas"
        >
          <button
            id="btn-hero-edu-inquiry"
            onClick={() => onOpenInquiry('education')}
            className="px-8 py-4 bg-gradient-to-r from-ocean-500 via-ocean-600 to-ocean-650 hover:from-ocean-450 hover:to-ocean-550 text-white rounded-xl font-bold text-base shadow-xl hover:shadow-ocean-600/30 border border-ocean-400/40 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            교육 과정 문의
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            id="btn-hero-equip-inquiry"
            onClick={() => onOpenInquiry('equipment')}
            className="px-8 py-4 bg-ocean-900/80 hover:bg-ocean-800/90 text-white rounded-xl font-bold text-base shadow-lg border border-ocean-700/80 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            장비 정비 & 오버홀 문의
            <Wrench className="h-5 w-5 text-ocean-400 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>

        {/* Trust Badge Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mt-8 pt-8 border-t border-ocean-800/40"
          id="hero-trust-badges"
        >
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bento-card p-5 shadow-lg hover:scale-[1.02] cursor-default text-left"
            >
              <div className="p-3 bg-ocean-800/80 rounded-xl border border-ocean-700/60 flex-shrink-0">
                {badge.icon}
              </div>
              <div className="text-left">
                <h4 className="font-sans font-bold text-white text-sm">
                  {badge.title}
                </h4>
                <p className="text-xs text-ocean-300 mt-0.5 font-light">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom indicator trigger to scroll down */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-85 hidden md:block" onClick={() => onScrollToSection('about')}>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono tracking-widest text-ocean-400 uppercase">EXPLORE MORE</span>
            <div className="w-6 h-10 border-2 border-ocean-600 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-ocean-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
