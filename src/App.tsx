/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import React from 'react';
import { SectionId, InquiryForm } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import EquipmentService from './components/EquipmentService';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [inquiryFormValue, setInquiryFormValue] = useState<Partial<InquiryForm>>({
    serviceType: 'general',
    targetCourseOrService: '',
    message: ''
  });
  
  // A unique key to force-reset/update Contact form state when a CTA is clicked
  const [contactKey, setContactKey] = useState<number>(0);

  // IntersectionObserver to sync scroll spy active section
  useEffect(() => {
    const sections: SectionId[] = ['home', 'about', 'education', 'equipment', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in active viewport focus
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  /**
   * Universal Inquiry Trigger
   * When user clicks a CTA, scroll to contact form and pre-fill its values.
   */
  const handleOpenInquiry = (type: 'education' | 'equipment' | 'general', itemName?: string) => {
    if (type === 'education') {
      setInquiryFormValue({
        serviceType: 'education',
        targetCourseOrService: itemName || '',
        message: itemName ? `[교육 과정 상담 신청] ${itemName} 과정 일정이 궁금합니다.` : ''
      });
    } else if (type === 'equipment') {
      const isCustomEstimate = itemName?.startsWith('[간편 견적 신청]');
      setInquiryFormValue({
        serviceType: 'equipment',
        targetCourseOrService: isCustomEstimate ? '호흡기 세부 맞춤 오버홀' : (itemName || ''),
        message: isCustomEstimate ? itemName : (itemName ? `[장비 정비 상담 신청] ${itemName} 서비스 정비를 의뢰하고 싶습니다.` : '')
      });
    } else {
      setInquiryFormValue({
        serviceType: 'general',
        targetCourseOrService: '',
        message: ''
      });
    }
    
    // Change key to reinitialize Contact form internal values with new pre-fill values
    setContactKey(prev => prev + 1);
    
    // Scroll smoothly to contact section
    setTimeout(() => {
      scrollToContact();
    }, 50);
  };

  const handleInquirySubmit = (formData: InquiryForm) => {
    console.log('Inquiry submitted successfully:', formData);
    // You can handle additional analytics or client-side storage here if needed
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen font-sans antialiased text-gray-200 bg-ocean-950">
      
      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-1" />

      {/* Floating Header Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={(id) => setActiveSection(id)}
        onOpenInquiry={handleOpenInquiry}
      />

      <main className="relative z-10">
        {/* Home Section */}
        <Hero 
          onOpenInquiry={handleOpenInquiry}
          onScrollToSection={handleScrollToSection}
        />

        {/* About Section */}
        <About 
          onScrollToSection={handleScrollToSection}
        />

        {/* Education Section */}
        <Education 
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Equipment Service Section */}
        <EquipmentService 
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Contact Section */}
        <Contact 
          initialFormValue={inquiryFormValue}
          onFormSubmit={handleInquirySubmit}
        />
      </main>

      {/* Footer Section */}
      <Footer />
      
    </div>
  );
}
