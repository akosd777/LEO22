/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Waves, MapPin, Phone, MessageSquare, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-950 border-t border-ocean-900 pt-16 pb-12 relative overflow-hidden text-left" id="app-footer">
      {/* Visual background accents */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-ocean-900 pb-12 mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-ocean-900 rounded-lg border border-ocean-800">
                <Waves className="h-5 w-5 text-ocean-400" />
              </div>
              <div>
                <span className="font-sans font-black tracking-wider text-lg text-white">LEO22</span>
                <span className="text-[8px] font-mono block uppercase tracking-widest text-ocean-400">Scuba Center</span>
              </div>
            </div>
            <p className="text-xs text-ocean-300 font-light leading-relaxed max-w-sm">
              LEO22 스쿠버 센터는 완벽한 정품 수밀 보증 오버홀과 최고의 교수법에 기반한 프리미엄 스쿠버다이빙 및 프리다이빙 교육을 제공하는 아카데미입니다.
            </p>
          </div>

          {/* Licenses Affiliations Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">AFFILIATIONS & CREDENTIALS</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-ocean-900/40 border border-ocean-850 p-2.5 rounded-lg text-[10px] text-ocean-300 font-mono text-center flex items-center justify-center">
                PADI MASTER ACADEMY
              </div>
              <div className="bg-ocean-900/40 border border-ocean-850 p-2.5 rounded-lg text-[10px] text-ocean-300 font-mono text-center flex items-center justify-center">
                SDI/TDI FACILITY
              </div>
              <div className="bg-ocean-900/40 border border-ocean-850 p-2.5 rounded-lg text-[10px] text-ocean-300 font-mono text-center flex items-center justify-center">
                AIDA FREEDIVING
              </div>
              <div className="bg-ocean-900/40 border border-ocean-850 p-2.5 rounded-lg text-[10px] text-ocean-300 font-mono text-center flex items-center justify-center">
                OFFICIAL OVERHAUL LAB
              </div>
            </div>
          </div>

          {/* Quick links / disclaimer column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">CUSTOMER SERVICE INFO</h4>
            <ul className="space-y-2 text-xs text-ocean-300 font-light">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-cyan-400" />
                <span>상담직통: 010-4499-2139</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                <span>경기도 안양시 동안구 관악대로 275번길 62-15 1층</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldAlert className="h-3.5 w-3.5 text-cyan-400" />
                <span>연중무휴 (풀장 및 출장 교육 사전 예약제 운영)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Business and Tax Details according to Korean regulations */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] sm:text-xs text-ocean-400 font-light">
          <div className="space-y-1">
            <p className="font-sans">
              <strong>상호명:</strong> LEO22 Scuba Center (레오22 스쿠버 센터) | <strong>대표:</strong> 이재훈
            </p>
            <p>
              <strong>주소:</strong> 경기도 안양시 동안구 관악대로 275번길 62-15 1층 | <strong>전화번호:</strong> 010-4499-2139
            </p>
            <p>
              <strong>사업자등록번호:</strong> 138-04-21390 (예시) | <strong>통신판매업신고:</strong> 제 2026-안양동안-2222호 (예시)
            </p>
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            <p>© {currentYear} LEO22 Scuba Center. All rights reserved.</p>
            <p className="mt-1 text-[10px] text-ocean-500 font-mono">Powered by Google AI Studio Build</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
