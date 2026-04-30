import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 px-8 bg-surface-container-low text-on-surface border-t border-surface-container-highest/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a className="text-xl font-headline italic font-bold text-on-surface mb-6 block tracking-tighter" href="#">
              PRISHA CARE
            </a>
            <p className="font-body text-sm text-on-surface-variant tracking-wide leading-relaxed">
              Elevating your natural beauty through curated, luxury experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-6 text-on-surface tracking-widest uppercase">Legal</h4>
            <ul className="space-y-3">
              <li><a className="text-sm text-on-surface/60 hover:text-primary transition-colors duration-200" href="#">Privacy Policy</a></li>
              <li><a className="text-sm text-on-surface/60 hover:text-primary transition-colors duration-200" href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-6 text-on-surface tracking-widest uppercase">Company</h4>
            <ul className="space-y-3">
              <li><a className="text-sm text-on-surface/60 hover:text-primary transition-colors duration-200" href="#">Careers</a></li>
              <li><a className="text-sm text-on-surface/60 hover:text-primary transition-colors duration-200" href="#">Sustainability</a></li>
            </ul>
          </div>

          <div className="flex items-end md:justify-end">
            <p className="text-xs text-on-surface-variant font-medium tracking-wider">
              © 2024 Prisha Care Salon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
