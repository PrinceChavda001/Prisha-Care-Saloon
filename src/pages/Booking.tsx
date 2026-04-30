import React, { useState } from 'react';
import { Button } from '../components/Button';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export const Booking: React.FC = () => {
  const [step, setStep] = useState(2); // Start at step 2 as per screenshot

  const timeSlots = [
    '09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'
  ];

  return (
    <div className="pt-32 pb-24 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Reserve Your Time</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
            Experience luxury and rejuvenation. Select your desired service and schedule a moment dedicated entirely to you.
          </p>
        </header>

        <div className="bg-surface rounded-3xl ambient-shadow-lg overflow-hidden flex flex-col md:flex-row min-h-[700px] border border-outline-variant/10">
          {/* Summary Sidebar */}
          <div className="w-full md:w-1/3 bg-surface-container-low p-10 flex flex-col justify-between border-r border-outline-variant/10">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-10 text-on-surface">Your Selection</h2>
              <div className="space-y-10">
                <div className="border-b border-outline-variant/20 pb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant block mb-3">Service</span>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-on-surface font-bold text-lg">Signature Facial</span>
                  </div>
                </div>
                <div className="border-b border-outline-variant/20 pb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant block mb-3">Date & Time</span>
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-primary/40" />
                    <span className="text-on-surface-variant italic text-lg">Select a date</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfaf433394?q=80&w=2000" 
                alt="Rose Skincare" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Main Booking Content */}
          <div className="w-full md:w-2/3 p-10 md:p-16 flex flex-col">
            {/* Progress */}
            <div className="flex justify-between items-center mb-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/20 -translate-y-1/2 z-0" />
              {[
                { label: 'Service', num: 1 },
                { label: 'Date & Time', num: 2 },
                { label: 'Details', num: 3 }
              ].map((s) => (
                <div key={s.num} className="relative z-10 flex flex-col items-center gap-3 bg-surface px-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    step === s.num ? 'primary-gradient text-on-primary ambient-shadow scale-110' : 'bg-surface-container-highest text-on-surface-variant'
                  }`}>
                    {s.num}
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest font-bold ${step === s.num ? 'text-primary' : 'text-on-surface-variant/40'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex-grow">
              <h3 className="text-3xl font-headline font-bold mb-10">Select Date & Time</h3>
              
              {/* Calendar */}
              <div className="mb-12 bg-surface-container-low/30 p-8 rounded-3xl border border-outline-variant/5">
                <div className="flex justify-between items-center mb-8">
                  <Button variant="ghost" size="sm" className="p-2"><ChevronLeft className="w-5 h-5" /></Button>
                  <span className="font-bold text-xl font-headline">October 2024</span>
                  <Button variant="ghost" size="sm" className="p-2"><ChevronRight className="w-5 h-5" /></Button>
                </div>
                <div className="grid grid-cols-7 gap-4 text-center mb-4">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                    <span key={d} className="text-xs font-bold text-on-surface-variant/30 uppercase tracking-widest">{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-4 text-center">
                  {[29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((day, i) => (
                    <button 
                      key={i} 
                      className={`w-full py-3 rounded-xl text-lg font-medium transition-all ${
                        day === 4 ? 'primary-gradient text-on-primary ambient-shadow scale-105' :
                        day < 1 ? 'text-on-surface-variant/20 pointer-events-none' :
                        'hover:bg-surface-container-low text-on-surface'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Times */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Available Times</h4>
                <div className="grid grid-cols-3 gap-4">
                  {timeSlots.map(time => (
                    <button 
                      key={time} 
                      className={`py-5 px-4 rounded-2xl text-sm font-bold transition-all border ${
                        time === '10:30 AM' 
                          ? 'border-primary ring-2 ring-primary/20 text-primary bg-primary/5 scale-[1.02]' 
                          : 'border-outline-variant/20 bg-surface-container-low/50 text-on-surface-variant hover:border-primary/40'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-12 pt-8 border-t border-outline-variant/10 flex justify-between items-center">
              <Button variant="ghost" onClick={() => setStep(1)}>
                <ChevronLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button size="lg" className="px-12" onClick={() => setStep(3)}>
                Continue to Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
