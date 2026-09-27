import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { PageId } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  return (
    <div
      className={`min-h-screen pb-24 transition-colors duration-300 ${
        isDark ? 'bg-[#030712] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <PageHeader
        eyebrow="Start a Conversation"
        title="LET'S WORK TOGETHER."
        subtitle="Have an oilfield, engineering or energy-sector requirement? Connect with EMCO Oilfield Services Ltd."
        onNavigateHome={() => onNavigate('home')}
        videoFeedId="offshore-platform"
      />
      <div>
        <ContactSection />
      </div>
    </div>
  );
};
