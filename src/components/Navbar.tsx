import React from 'react';
import { Button } from './Button';
import { Menu } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Booking', id: 'booking' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_12px_40px_rgba(31,26,28,0.06)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <a 
          className="text-2xl font-headline font-bold text-primary tracking-tighter italic cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          PRISHA CARE
        </a>
        
        <div className="hidden md:flex space-x-2 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                activePage === link.id
                  ? 'text-primary bg-surface-container-low border-b-2 border-primary rounded-b-none'
                  : 'text-on-surface/70 hover:text-primary hover:bg-surface-container-low/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button 
            size="sm" 
            className="hidden md:flex"
            onClick={() => onNavigate('booking')}
          >
            Book Appointment
          </Button>
          <button className="md:hidden text-on-surface p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};
