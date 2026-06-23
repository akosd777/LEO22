/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Clock, Users, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { Course } from '../types';
import { COURSES } from '../data';

interface EducationProps {
  onOpenInquiry: (type: 'education' | 'equipment' | 'general', itemName?: string) => void;
}

type FilterLevel = 'all' | 'entry' | 'pro' | 'special';

export default function Education({ onOpenInquiry }: EducationProps) {
  const [filter, setFilter] = useState<FilterLevel>('all');

  const filteredCourses = COURSES.filter(course => {
    if (filter === 'all') return true;
    if (filter === 'entry') return course.level === '초급' || course.level === '중급' || course.level === '상급';
    if (filter === 'pro') return course.level === '프로';
    if (filter === 'special') return course.level === '프리다이빙' || course.level === '테크니컬';
    return true;
  });

  const pathSteps = [
    { title: '오픈워터', desc: '바다 탐험의 시작 (최대 18m)', label: 'Level 1' },
    { title: '어드밴스드', desc: '더 넓은 스페셜티 (최대 30m)', label: 'Level 2' },
    { title: '레스큐', desc: '안전과 동료 구조 능력 배양', label: 'Level 3' },
    { title: '다이브마스터', desc: '전문 가이드 및 리더십 이수', label: 'Pro 1' },
    { title: '공인 강사', desc: 'PADI/SDI 다이빙 독립 교육', label: 'Pro 2' }
  ];

  return (
    <section id="education" className="py-24 bg-ocean-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-ocean-400 font-bold bg-ocean-900/80 px-3 py-1.5 rounded-full border border-ocean-800/60 inline-flex items-center gap-1.5 mb-4">
            <BookOpen className="h-3.5 w-3.5" /> ACADEMY EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white tracking-tight">
            체계화된 다이버 교육체계
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ocean-200 leading-relaxed">
            단순 라이센스 발급을 위한 벼락치기가 아닌, 완벽한 물속 제어와 
            자립 능력을 기르는 교육 프로그램입니다. 글로벌 스탠다드를 준수합니다.
          </p>
        </div>

        {/* Education Path (Timeline) */}
        <div className="bento-card p-6 sm:p-8 mb-16 shadow-inner">
          <h3 className="text-lg font-sans font-bold text-white mb-8 flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-500" /> LEO22 마스터 다이버 엘리트 패스웨이
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-ocean-700 via-ocean-500 to-cyan-400 z-0" />
            
            {pathSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-14 h-14 rounded-full bg-ocean-800 border-2 border-ocean-500 flex items-center justify-center font-mono text-sm font-bold text-cyan-400 mb-4 shadow-lg shadow-ocean-950/50">
                  {step.label}
                </div>
                <h4 className="font-sans font-black text-white text-base mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-ocean-300 font-light leading-snug">
                  {step.desc}
                </p>
                {idx < pathSteps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-ocean-700 my-3" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-ocean-900/80 border border-ocean-800 rounded-xl gap-1">
            <button
              id="filter-btn-all"
              onClick={() => setFilter('all')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                filter === 'all'
                  ? 'bg-ocean-600 text-white shadow-md'
                  : 'text-ocean-300 hover:text-white hover:bg-ocean-800/50'
              }`}
            >
              전체 과정
            </button>
            <button
              id="filter-btn-entry"
              onClick={() => setFilter('entry')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                filter === 'entry'
                  ? 'bg-ocean-600 text-white shadow-md'
                  : 'text-ocean-300 hover:text-white hover:bg-ocean-800/50'
              }`}
            >
              레크리에이션 (초/중/상급)
            </button>
            <button
              id="filter-btn-pro"
              onClick={() => setFilter('pro')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                filter === 'pro'
                  ? 'bg-ocean-600 text-white shadow-md'
                  : 'text-ocean-300 hover:text-white hover:bg-ocean-800/50'
              }`}
            >
              프로 과정
            </button>
            <button
              id="filter-btn-special"
              onClick={() => setFilter('special')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                filter === 'special'
                  ? 'bg-ocean-600 text-white shadow-md'
                  : 'text-ocean-300 hover:text-white hover:bg-ocean-800/50'
              }`}
            >
              특수 (프리/테크니컬)
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="education-grid">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bento-card overflow-hidden shadow-xl hover:shadow-2xl flex flex-col group h-full"
                id={`course-card-${course.id}`}
              >
                {/* Header Section */}
                <div className="p-6 pb-4 border-b border-ocean-800/50 bg-ocean-900/40 flex items-start justify-between">
                  <div className="text-left">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-ocean-800 text-cyan-400 border border-ocean-700 uppercase">
                      {course.level}
                    </span>
                    <h4 className="text-xl font-black text-white mt-2 group-hover:text-ocean-300 transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-ocean-400 font-mono mt-0.5">
                      {course.titleEng}
                    </p>
                  </div>
                  {/* Certification Body Badge */}
                  <span className="px-2.5 py-1 rounded bg-ocean-950 border border-ocean-800 text-xs font-black tracking-widest text-amber-500 font-mono">
                    {course.certificationBody}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="text-left">
                    {/* Duration Info */}
                    <div className="flex items-center gap-2 text-xs text-ocean-300 font-medium mb-4 bg-ocean-950/40 px-3 py-1.5 rounded-lg border border-ocean-900/60 w-fit">
                      <Clock className="h-3.5 w-3.5 text-cyan-400" />
                      <span>{course.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-ocean-200 font-light leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Core Curriculum Features */}
                    <div className="space-y-2 mb-6">
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> 핵심 이수 테크닉:
                      </h5>
                      {course.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-ocean-300 font-light">
                          <span className="text-cyan-400 font-bold mt-0.5">•</span>
                          <p>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendation and Inquiry trigger */}
                  <div className="pt-4 border-t border-ocean-800/40 text-left">
                    <p className="text-[11px] text-ocean-400 font-light leading-snug mb-5">
                      <strong className="text-ocean-200 font-medium">추천 대상: </strong>
                      {course.recommendFor}
                    </p>
                    <button
                      id={`btn-inquiry-${course.id}`}
                      onClick={() => onOpenInquiry('education', course.title)}
                      className="w-full py-3 bg-ocean-850 hover:bg-ocean-600 text-white font-bold rounded-xl text-xs sm:text-sm tracking-wide border border-ocean-700/60 hover:border-ocean-500 transition-all duration-300 flex items-center justify-center gap-1.5 group cursor-pointer"
                    >
                      교육 상담 및 예약 신청
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
