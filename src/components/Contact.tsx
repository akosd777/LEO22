/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Mail, MessageSquare, Instagram, Copy, Check, Navigation, Send, HeartHandshake } from 'lucide-react';
import { InquiryForm } from '../types';

interface ContactProps {
  initialFormValue: Partial<InquiryForm>;
  onFormSubmit: (form: InquiryForm) => void;
}

export default function Contact({ initialFormValue, onFormSubmit }: ContactProps) {
  const [formData, setFormData] = useState<InquiryForm>({
    name: '',
    phone: '',
    email: '',
    serviceType: 'general',
    targetCourseOrService: '',
    message: '',
    agreeToPrivacy: false,
    ...initialFormValue
  });

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync state if parent changes initialFormValue (e.g., from the overhaul calculator)
  useEffect(() => {
    if (initialFormValue.targetCourseOrService || initialFormValue.serviceType) {
      setFormData(prev => ({
        ...prev,
        ...initialFormValue
      }));
    }
  }, [initialFormValue]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('경기도 안양시 동안구 관악대로 275번길 62-15 1층');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.agreeToPrivacy) {
      alert('필수 사항(이름, 연락처, 개인정보 수집 동의)을 기입해 주세요.');
      return;
    }
    
    // Simulate API Submission
    onFormSubmit(formData);
    setFormSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'general',
        targetCourseOrService: '',
        message: '',
        agreeToPrivacy: false
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-ocean-950 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-ocean-400 font-bold bg-ocean-900/80 px-3 py-1.5 rounded-full border border-ocean-800/60 inline-flex items-center gap-1.5 mb-4">
            <MessageSquare className="h-3.5 w-3.5" /> CONTACT US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white tracking-tight">
            교육 및 장비 정비 실시간 상담
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ocean-200 leading-relaxed">
            방문 예약, 교육 일정, 장비 택배 및 픽업 접수 등 궁금하신 사항을 
            남겨주시면 공인 마이스터 강사가 직접 상세히 답변드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-wrapper">
          
          {/* Left Column: Contact Information & Map Mockup */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Contact Information */}
            <div className="bento-card p-6 sm:p-8 text-left">
              <h3 className="text-xl font-black text-white mb-6">고객 센터 및 업무 안내</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-ocean-800 rounded-xl border border-ocean-700 text-cyan-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-ocean-400 block font-mono font-bold">REPRESENTATIVE PHONE</span>
                    <a href="tel:010-4499-2139" className="text-lg sm:text-xl font-mono font-black text-white hover:text-cyan-400 transition-colors">
                      010-4499-2139
                    </a>
                    <p className="text-xs text-ocean-300 mt-1 font-light">365일 연중무휴 상시 유선 상담 가능</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-ocean-800 rounded-xl border border-ocean-700 text-cyan-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs text-ocean-400 block font-mono font-bold">CENTER ADDRESS</span>
                    <p className="text-sm sm:text-base text-white font-bold leading-relaxed">
                      경기도 안양시 동안구 관악대로 275번길 62-15 1층
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button
                        id="btn-copy-address"
                        onClick={handleCopyAddress}
                        className="px-2.5 py-1.5 bg-ocean-950 hover:bg-ocean-800 text-ocean-300 hover:text-white rounded text-xs font-semibold flex items-center gap-1 transition-all border border-ocean-850"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                        {copied ? '복사 완료!' : '주소 복사'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Social Badges */}
                <div className="pt-4 border-t border-ocean-850 flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/leo22_scubacenter"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600/30 hover:to-purple-600/30 border border-pink-500/30 hover:border-pink-500/50 rounded-xl text-xs text-pink-200 font-medium transition-all cursor-pointer"
                  >
                    <Instagram className="h-4 w-4 text-pink-400" />
                    <span>leo22_scubacenter</span>
                  </a>
                  
                  <div className="flex items-center gap-2 px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200 font-medium select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                    <span className="font-bold">카카오톡 문의:</span>
                    <span>010-4499-2139 (이재훈)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive Vector Map Mockup */}
            <div className="bento-card p-6 flex-grow flex flex-col justify-between gap-4 text-left">
              <div className="flex items-center justify-between">
                <h4 className="font-sans font-bold text-white text-sm">오시는 길 (약도안내)</h4>
                <div className="flex gap-1.5">
                  <a
                    href="https://map.naver.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 px-2 py-1 rounded border border-emerald-500/20 font-bold transition-all"
                  >
                    네이버 지도
                  </a>
                  <a
                    href="https://map.kakao.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 px-2 py-1 rounded border border-amber-500/20 font-bold transition-all"
                  >
                    카카오 맵
                  </a>
                </div>
              </div>

              {/* Styled Vector Map Canvas Mockup */}
              <div className="h-44 bg-ocean-950 rounded-xl border border-ocean-850 relative overflow-hidden flex items-center justify-center">
                {/* Simulated Roads */}
                <div className="absolute top-0 bottom-0 left-[35%] w-8 bg-ocean-900/50 rotate-12" />
                <div className="absolute left-0 right-0 top-[60%] h-8 bg-ocean-900/50 -rotate-3" />
                <div className="absolute left-[15%] right-0 top-[20%] h-6 bg-ocean-900/30" />
                
                {/* Landmarks */}
                <div className="absolute top-4 left-[10%] text-[10px] text-ocean-400 bg-ocean-900/80 px-2 py-0.5 rounded border border-ocean-800">
                  수촌마을 입구
                </div>
                <div className="absolute bottom-6 right-8 text-[10px] text-ocean-400 bg-ocean-900/80 px-2 py-0.5 rounded border border-ocean-800">
                  종합운동장 사거리
                </div>
                <div className="absolute top-[68%] left-[45%] text-[9px] text-ocean-500 font-bold tracking-widest uppercase">
                  관악대로 (Gwanak-daero)
                </div>

                {/* Centered Pulsing LEO22 Scuba Location Pin */}
                <div className="absolute left-[52%] top-[38%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <span className="w-5 h-5 bg-cyan-500 rounded-full animate-ping absolute opacity-50" />
                  <div className="w-8 h-8 bg-cyan-600 rounded-full border-2 border-white flex items-center justify-center text-white shadow-lg shadow-cyan-900/50">
                    <Navigation className="h-4 w-4 rotate-45 text-white" />
                  </div>
                  <span className="mt-1 px-2 py-0.5 bg-cyan-500 text-white text-[9px] font-bold rounded shadow-md border border-cyan-400 uppercase tracking-wider">
                    LEO22 SC
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-ocean-300 font-light leading-relaxed">
                * 안양 수촌마을 인근 관악대로 위치. 건물 1층에 전용 무료 주차 공간이 완비되어 있으므로 자차 방문 시 사전 예약 연락을 주시면 주차 자리를 우선 확보해 드립니다.
              </p>
            </div>

          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-10 flex flex-col justify-between text-left">
            <h3 className="text-xl font-black text-white mb-6 border-b border-ocean-800/60 pb-4">
              전문 상담 및 예약 접수
            </h3>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-500/20">
                  <HeartHandshake className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-black text-white mb-3">상담 신청이 접수되었습니다!</h4>
                <p className="text-sm text-ocean-200 max-w-md leading-relaxed font-light mb-8">
                  작성해 주신 연락처(<span className="font-mono text-cyan-400">{formData.phone}</span>)로 
                  LEO22 담당 강사가 빠른 시간 내에 연락드리겠습니다. 믿고 상담해 주셔서 대단히 감사합니다.
                </p>
                <p className="text-xs text-ocean-400 font-light italic">
                  * 본 창은 5초 후 자동으로 갱신됩니다.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="inquiry-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-ocean-200 uppercase tracking-wider mb-2">
                      이름 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="성함을 입력해 주세요"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-ocean-950 border border-ocean-850 focus:border-cyan-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-ocean-200 uppercase tracking-wider mb-2">
                      연락처 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="예) 010-4499-2139"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-ocean-950 border border-ocean-850 focus:border-cyan-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-ocean-200 uppercase tracking-wider mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="예) user@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-ocean-950 border border-ocean-850 focus:border-cyan-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-all"
                    />
                  </div>

                  {/* Service Type */}
                  <div className="text-left">
                    <label className="block text-xs font-bold text-ocean-200 uppercase tracking-wider mb-2">
                      상담 분야 <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-ocean-950 border border-ocean-850 focus:border-cyan-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-all"
                    >
                      <option value="general">일반 문의 / 방문 예약</option>
                      <option value="education">스쿠버 다이빙 / 프리다이빙 교육</option>
                      <option value="equipment">장비 정밀 오버홀 / 수리 점검</option>
                    </select>
                  </div>
                </div>

                {/* Target Course / Service */}
                <div className="text-left">
                  <label className="block text-xs font-bold text-ocean-200 uppercase tracking-wider mb-2">
                    신청 코스 또는 정비 장비 정보
                  </label>
                  <input
                    type="text"
                    name="targetCourseOrService"
                    placeholder="예) 오픈워터 과정 / SCUBAPRO MK25 EVO 1단 오버홀"
                    value={formData.targetCourseOrService}
                    onChange={handleInputChange}
                    className="w-full bg-ocean-950 border border-ocean-850 focus:border-cyan-500 text-white text-sm px-4 py-3 rounded-xl outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div className="text-left">
                  <label className="block text-xs font-bold text-ocean-200 uppercase tracking-wider mb-2">
                    상세 문의 사항
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="희망 시작 일정이나 자격증 보유 유무, 정비할 장비의 노후 증상 등을 상세히 남겨주시면 한결 풍부한 사전 검토 후 안내해 드립니다."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-ocean-950 border border-ocean-850 focus:border-cyan-500 text-white text-sm px-4 py-3 rounded-xl outline-none resize-none transition-all"
                  />
                </div>

                {/* Agreement to Privacy policy */}
                <div className="flex items-start gap-2.5 pt-2 text-left select-none">
                  <input
                    type="checkbox"
                    id="agreeToPrivacy"
                    name="agreeToPrivacy"
                    required
                    checked={formData.agreeToPrivacy}
                    onChange={handleInputChange}
                    className="mt-1 h-4.5 w-4.5 rounded border-ocean-800 bg-ocean-950 text-cyan-500 focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="agreeToPrivacy" className="text-xs text-ocean-300 font-light leading-snug cursor-pointer">
                    개인정보 수집 및 상담 진행 목적의 활용 동의 <span className="text-rose-500">*</span> <br />
                    <span className="text-[10px] text-ocean-400">(상담 접수, 정비 세팅 안내, 일정 공지 목적으로만 안전하게 사용 후 파기됩니다.)</span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  id="btn-submit-inquiry"
                  type="submit"
                  className="w-full py-4 mt-6 bg-gradient-to-r from-cyan-600 via-ocean-650 to-ocean-550 hover:from-cyan-550 hover:to-ocean-500 text-white font-bold rounded-xl text-sm sm:text-base tracking-wider shadow-lg hover:shadow-cyan-600/20 border border-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  실시간 상담 신청서 전송
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
