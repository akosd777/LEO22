/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Waves, PhoneCall } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  onOpenInquiry: (type: 'education' | 'equipment' | 'general') => void;
}

export default function Navbar({ activeSection, onNavigate, onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home' as SectionId, label: '홈' },
    { id: 'about' as SectionId, label: '센터 소개' },
    { id: 'education' as SectionId, label: '전문 교육 과정' },
    { id: 'equipment' as SectionId, label: '장비 정비 & 오버홀' },
    { id: 'contact' as SectionId, label: '문의 & 오시는길' }
  ];

  const handleItemClick = (id: SectionId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#001f3f]/85 backdrop-blur-md shadow-lg border-b border-[#002d5a]/60' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => handleItemClick('home')} 
              className="flex items-center gap-2 cursor-pointer group"
              id="navbar-logo"
            >
              <div className="p-2 bg-ocean-700/50 rounded-lg border border-ocean-600/30 group-hover:bg-ocean-600/50 transition-all duration-300">
                <Waves className="h-6 w-6 text-ocean-400 group-hover:text-ocean-300 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black tracking-wider text-xl text-white group-hover:text-ocean-200 transition-colors">
                  LEO22
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-ocean-400">
                  Scuba Center
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-white font-bold' 
                      : 'text-ocean-200 hover:text-white hover:bg-ocean-800/40'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-ocean-500 to-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3" id="desktop-actions">
              <span className="text-xs font-mono text-ocean-300 bg-ocean-900/80 px-2.5 py-1 rounded-full border border-ocean-800/60 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                PROFESSIONAL ACADEMY
              </span>
              <button
                id="btn-nav-quick-call"
                onClick={() => onOpenInquiry('general')}
                className="px-4 py-2 bg-gradient-to-r from-ocean-650 to-ocean-550 hover:from-ocean-600 hover:to-ocean-500 text-white rounded-lg text-xs font-semibold shadow-md shadow-ocean-900/30 hover:shadow-ocean-600/20 border border-ocean-500/30 transition-all duration-300 flex items-center gap-1.5"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                간편 상담 신청
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden" id="mobile-hamburger">
              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-ocean-200 hover:text-white hover:bg-ocean-900 focus:outline-none transition-colors"
                aria-label="메뉴 열기"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-45 bg-ocean-950/95 backdrop-blur-lg border-b border-ocean-800/80 px-4 py-6 md:hidden shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-sans text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-ocean-800/60 text-white font-bold border-l-4 border-ocean-500'
                      : 'text-ocean-200 hover:text-white hover:bg-ocean-900/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="h-px bg-ocean-800/80 my-2" />

            <div className="flex flex-col gap-3 px-4">
              <div className="flex items-center gap-2 text-xs text-ocean-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                실시간 아카데미 / 오버홀 상담 운영 중
              </div>
              <button
                id="btn-mobile-nav-cta"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiry('general');
                }}
                className="w-full py-3 bg-gradient-to-r from-ocean-650 to-ocean-550 hover:from-ocean-600 hover:to-ocean-500 text-white rounded-lg text-sm font-bold text-center shadow-lg transition-all duration-300"
              >
                상담 문의하기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
