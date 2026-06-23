/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Compass, Shield, Users, BookOpen, MapPin, ChevronRight } from 'lucide-react';
import profileImgUrl from '../assets/images/scuba_instructor_profile_1782240431041.jpg';

interface AboutProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function About({ onScrollToSection }: AboutProps) {
  const centerRecords = [
    {
      title: '5,400+일 연속 무사고 교육',
      stat: '5,400+일',
      desc: '단 한 건의 안전 사고도 허용하지 않는 엄격한 가이드라인 하에 100% 안전제일 다이빙 프로그램을 고수해 온 자랑스러운 역사입니다.',
      bg: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: '1,200+명 공인 다이버 배출',
      stat: '1,200+명',
      desc: '입문 오픈워터부터 프로 다이브마스터, 최고 권위의 전문 강사 레벨까지 이재훈 마스터 강사의 정밀 지도를 통해 양성된 다이버들의 실적입니다.',
      bg: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: '3,500+대 장비 오버홀 완수',
      stat: '3,500+대',
      desc: '세계 최정상 제조사(SCUBAPRO, APEKS, AQUALUNG) 정품 서비스 키트만을 고집하여 생명유지 장비를 정밀 세척 및 튜닝한 누적 정비 기록입니다.',
      bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const coreStrengths = [
    {
      icon: <BookOpen className="h-6 w-6 text-ocean-400" />,
      title: '학술 중심 정통 교육',
      desc: '흥미 위주의 체험이 아닙니다. 물리적 이론, 생리학적 안전 규칙, 다중 장비 운용을 완벽하게 학습하는 전문 코스.'
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: '무사고 안전 레코드',
      desc: '단 한 건의 안전 사고도 타협하지 않는 무결점 안전 가이드라인 준수. 전용 응급 산소 공급 및 세이프티 장비 상시 운영.'
    },
    {
      icon: <Users className="h-6 w-6 text-cyan-400" />,
      title: '1:1 밀착 마스터 피드백',
      desc: '실시간 영상 분석을 통해 피닝(Finning) 자세, 호흡 조절, 공중 중성부력을 정밀 교정하여 완벽하게 마스터시킵니다.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-ocean-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-ocean-400 font-bold bg-ocean-900/80 px-3 py-1.5 rounded-full border border-ocean-800/60 inline-flex items-center gap-1.5 mb-4">
            <Compass className="h-3.5 w-3.5" /> ABOUT LEO22
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white tracking-tight">
            단순 투어를 넘어선 <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-400 to-cyan-300">
              학술적 권위의 다이빙 아카데미
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ocean-200 leading-relaxed">
            LEO22 Scuba Center는 단순한 스쿠버 대행사가 아닙니다. 심도 있는 이론적 학술 교육과 수준급 제조사 정품 오버홀 기술을 갖춘 <strong>최고의 엘리트 다이빙 아카데미</strong>입니다.
          </p>
        </div>

        {/* Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {coreStrengths.map((strength, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bento-card p-8 sm:p-10 group flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2' : idx === 1 ? 'lg:col-span-1' : 'lg:col-span-3 lg:flex-row lg:items-center lg:gap-8'
              }`}
            >
              <div className={idx === 2 ? 'lg:flex lg:items-center lg:gap-8 lg:flex-1' : ''}>
                <div className="p-4 bg-ocean-800/80 rounded-2xl border border-ocean-700/60 w-fit mb-6 lg:mb-0 group-hover:bg-ocean-700 group-hover:border-ocean-500/50 transition-colors flex-shrink-0">
                  {strength.icon}
                </div>
                <div className={idx === 2 ? 'lg:ml-6 text-left' : 'text-left mt-4'}>
                  <h3 className="font-sans font-black text-xl text-white mb-3">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-ocean-200 leading-relaxed font-light">
                    {strength.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructor Profile Segment */}
        <div className="bento-card overflow-hidden shadow-2xl mb-24" id="instructor-profile">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Professional Photo */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[550px]">
              <img
                src={profileImgUrl}
                alt="LEO22 Lead Instructor Profile"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ocean-950/30 lg:to-ocean-950/90" />
              <div className="absolute bottom-6 left-6 right-6 z-10 lg:hidden">
                <span className="text-xs font-mono font-bold tracking-widest text-ocean-400 bg-ocean-950/90 px-2.5 py-1 rounded border border-ocean-800">LEO22 REPRESENTATIVE</span>
                <h4 className="text-2xl font-black text-white mt-1.5">이재훈 Master Instructor</h4>
              </div>
            </div>

            {/* Right: Credentials & Bio */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <span className="hidden lg:inline-block text-xs font-mono font-bold tracking-widest text-ocean-400 bg-ocean-950/90 px-3 py-1.5 rounded-md border border-ocean-800 w-fit mb-4">
                CHIEF COURSE DIRECTOR & MASTER MEISTER
              </span>
              <h3 className="hidden lg:block text-3xl font-black text-white tracking-tight mb-2">
                이재훈 <span className="text-base text-ocean-300 font-medium font-mono">Master Instructor / Technician</span>
              </h3>
              <p className="text-sm sm:text-base text-ocean-200 font-light leading-relaxed mb-8 italic border-l-2 border-ocean-500 pl-4">
                "안전한 스쿠버 다이빙은 완벽히 이해된 학술적 이론과 100% 신뢰할 수 있는 수명유지장비(Life Support System)의 결합에서 나옵니다. LEO22는 타협하지 않는 철학으로 여러분을 물속 마스터로 만듭니다."
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-white tracking-wider mb-4 border-b border-ocean-800 pb-1.5">
                    <Award className="h-4.5 w-4.5 text-amber-500" /> 공인 교수 및 전문 기술 자격
                  </h4>
                  <ul className="space-y-2.5 text-xs text-ocean-200 font-light">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                      PADI Master Instructor (공인 최고 교수자)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                      Emergency First Response (EFR) 강사 트레이너
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                      SDI/TDI 스페셜티 다이빙 전문 강사
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                      AIDA 공인 프리다이빙 코치
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                      TDI Technical Air/Trimix Blender Specialist
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-white tracking-wider mb-4 border-b border-ocean-800 pb-1.5">
                    <Shield className="h-4.5 w-4.5 text-cyan-400" /> 호흡기 오버홀 공식 테크니션
                  </h4>
                  <ul className="space-y-2.5 text-xs text-ocean-200 font-light">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      SCUBAPRO Authorized Service Technician
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      APEKS & AQUALUNG 공인 리페어 마이스터
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      POSEIDON / TUSA / GULL 정품 취급 오버홀 자격
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      SHEARWATER 다이브 컴퓨터 전문 기술 어드바이저
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Center Records Section */}
        <div id="records">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-400">ACADEMY RECORDS</span>
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-white mt-1">
                LEO22 아카데미 영광의 기록
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {centerRecords.map((record, idx) => (
              <div
                key={idx}
                className="bento-card overflow-hidden group shadow-lg flex flex-col min-h-[380px]"
              >
                {/* Image Container with elegant overlay */}
                <div className="h-44 overflow-hidden relative flex-shrink-0">
                  <img
                    src={record.bg}
                    alt={record.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-6 z-10">
                    <span className="text-3xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                      {record.stat}
                    </span>
                  </div>
                </div>
                {/* Info Container */}
                <div className="p-6 flex-grow flex flex-col justify-between bg-gradient-to-b from-ocean-900/50 to-ocean-950/80">
                  <div className="text-left">
                    <h4 className="font-sans font-bold text-lg text-white mb-2">
                      {record.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-ocean-300 font-light leading-relaxed">
                      {record.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
