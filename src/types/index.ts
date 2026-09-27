export type PageId = 'home' | 'about' | 'services' | 'capabilities' | 'hse' | 'careers' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  scope: string[];
  deliverables: string[];
  operationalFocus: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  summary: string;
  keyAspects: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  desc: string;
  focusArea: string;
  image?: string;
}

export interface HSEPrinciple {
  id: string;
  title: string;
  description: string;
  corePillars: string[];
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phoneNumber: string;
  serviceRequired: string;
  message: string;
}
