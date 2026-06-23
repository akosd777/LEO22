/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Wrench, AlertTriangle, Clock, ArrowRight } from 'lucide-react';
import { EQUIPMENT_SERVICES } from '../data';
import workshopImgUrl from '../assets/images/scuba_equipment_maintenance_1782240446074.jpg';

interface EquipmentServiceProps {
  onOpenInquiry: (type: 'education' | 'equipment' | 'general', itemName?: string) => void;
}

export default function EquipmentService({ onOpenInquiry }: EquipmentServiceProps) {
  const overhaulProcess = [
    { step: '01', title: '입고 및 기본 테스팅', desc: '외관 검사 및 작동성 테스트를 거쳐 현재 상태를 수치 기록합니다.' },
    { step: '02', title: '완전 분해 및 초음파 세척', desc: '모든 나사와 가스켓을 완전 분해 후, 특수 전해액과 초음파 세척기를 이용하여 녹과 소금기를 완전히 박리합니다.' },
    { step: '03', title: '순정 오버홀 소모키트 조립', desc: '제조사가 정한 공식 정품 교체용 부품(O-Ring, 시트, 패드 등)으로 정밀 결합합니다.' },
    { step: '04', title: '중간압 및 흡입저항 교정', desc: '수동 전용 압력 게이지를 활용해 다이버 호흡 스타일에 맞춰 호흡 압력을 미세 교환합니다.' },
    { step: '05', title: '고압 수밀 챔버 테스트', desc: '가압 테스트용 정밀 챔버를 통해 수심 40m 이상의 환경을 모사하여 누설 유무를 최종 점검 후 출고합니다.' }
  ];

  return (
    <section id="equipment" className="py-24 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-ocean-400 font-bold bg-ocean-900/80 px-3 py-1.5 rounded-full border border-ocean-800/60 inline-flex items-center gap-1.5 mb-4">
            <Wrench className="h-3.5 w-3.5" /> EQUIPMENT MAINTENANCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white tracking-tight">
            전문 장비 정밀 오버홀 & 수리
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ocean-200 leading-relaxed">
            바닷속에서 당신의 호흡을 책임지는 유일한 생명유지장치. 
            LEO22의 공인 오버홀 테크니션이 단 1%의 타협도 없는 완전 분해 정비를 제공합니다.
          </p>
        </div>

        {/* Overview Row: Workshop Photo & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold text-ocean-400 tracking-wider block mb-2">STATE-OF-THE-ART WORKSHOP</span>
            <h3 className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight mb-4">
              공식 정품 키트 100% 사용 <br />
              전담 마이스터의 수밀 보증
            </h3>
            <p className="text-sm text-ocean-200 leading-relaxed mb-6 font-light">
              LEO22 수리 센터는 SCUBAPRO, Apeks, Aqualung 등 세계 유수 브랜드의 공식 정비 라이센스를 보유한 전문 테크니션이 직접 호흡기를 오수해 오버홀합니다. <br />
              정밀 초음파 크리닝과 순정 오버홀 가스켓 키트 교체를 원칙으로 하며, 최종 테스트를 거쳐 <strong>1년간의 오버홀 수밀 보증서</strong>를 함께 발부합니다.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex gap-3 text-xs text-amber-200">
              <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">장비 오버홀 권장 주기안내</p>
                <p className="mt-1 font-light leading-snug">스쿠버 호흡기는 안전을 위해 다이빙 50~100회 이내, 또는 소요 횟수에 관계없이 1년에 1회 완전 점검 및 오버홀을 적극 권장합니다.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative bento-card overflow-hidden shadow-2xl">
              <img
                src={workshopImgUrl}
                alt="LEO22 Premium Maintenance Workshop"
                className="w-full object-cover h-[350px] sm:h-[450px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-ocean-900/90 px-2.5 py-1 rounded border border-ocean-800">LEO22 인증 정비 공정</span>
                <p className="text-sm font-bold text-white mt-1.5">실제 LEO22 테크니션 랩에서 고장 진단 및 특허 세척 장비를 가동하는 정밀 작업 모습</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {EQUIPMENT_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bento-card p-6 sm:p-8 flex flex-col justify-between text-left"
              id={`equipment-service-${serv.id}`}
            >
              <div>
                <div className="flex justify-between items-start border-b border-ocean-800/60 pb-4 mb-6">
                  <div>
                    <h4 className="font-sans font-black text-xl text-white">
                      {serv.name}
                    </h4>
                    <span className="text-xs text-ocean-400 font-mono">
                      {serv.nameEng}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ocean-200 leading-relaxed font-light mb-6">
                  {serv.description}
                </p>

                {/* Workflow / Steps */}
                <div className="space-y-3 mb-6">
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2">정밀 정비 핵심 프로토콜:</h5>
                  {serv.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-2.5 text-xs text-ocean-300 font-light leading-relaxed">
                      <span className="text-cyan-400 font-mono font-bold flex-shrink-0">Step {idx+1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-ocean-800/40">
                <div className="flex items-center justify-between text-xs sm:text-sm mb-4">
                  <span className="text-ocean-400 font-light">정비 비용</span>
                  <span className="text-white font-bold text-sm sm:text-base">상담 후 결정 (상태에 따라 상이)</span>
                </div>
                <button
                  onClick={() => onOpenInquiry('equipment', serv.name)}
                  className="w-full py-3 bg-ocean-950 hover:bg-ocean-800 text-white border border-ocean-800 hover:border-ocean-600 font-bold rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  {serv.name} 정비 상담 신청
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div id="overhaul-process">
          <h3 className="text-xl sm:text-2xl font-sans font-black text-white text-center mb-12">
            LEO22 정통 5단계 명품 오버홀 프로토콜
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {overhaulProcess.map((proc, idx) => (
              <div
                key={idx}
                className="bento-card p-6 relative flex flex-col justify-between shadow-md text-left"
              >
                <div>
                  <span className="text-3xl font-mono font-black text-ocean-700 block mb-4">
                    {proc.step}
                  </span>
                  <h4 className="font-sans font-bold text-base text-white mb-2 leading-tight">
                    {proc.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-ocean-300 font-light leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
