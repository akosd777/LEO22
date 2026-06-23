/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SectionId = 'home' | 'about' | 'education' | 'equipment' | 'contact';

export interface Course {
  id: string;
  title: string;
  titleEng: string;
  level: '초급' | '중급' | '상급' | '프로' | '프리다이빙' | '테크니컬';
  duration: string;
  description: string;
  features: string[];
  recommendFor: string;
  certificationBody: 'PADI' | 'SDI' | 'TDI' | 'AIDA';
}

export interface Instructor {
  name: string;
  role: string;
  profileImage: string;
  intro: string;
  bio: string[];
  certifications: string[];
  specialties: string[];
}

export interface EquipmentServiceType {
  id: string;
  name: string;
  nameEng: string;
  description: string;
  steps: string[];
  features: string[];
  priceRange: string;
  period: string;
}

export interface CalculatorItem {
  id: string;
  category: 'regulator' | 'bcd' | 'computer' | 'etc';
  name: string;
  price: number;
  description: string;
}

export interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  serviceType: 'education' | 'equipment' | 'general';
  targetCourseOrService: string;
  message: string;
  agreeToPrivacy: boolean;
}
