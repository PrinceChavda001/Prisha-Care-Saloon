import React from 'react';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { Clock, Star, Flower, Droplets, Heart } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Overlap Section */}
        <div className="relative mt-8 mb-24 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden relative"
          >
            <img 
              alt="Signature Facial" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2000" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-on-surface/40 to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative lg:absolute lg:bottom-0 lg:left-12 lg:transform lg:translate-y-1/3 w-full lg:w-1/2 bg-surface/90 backdrop-blur-2xl rounded-3xl p-10 lg:p-16 ambient-shadow-lg z-10 mx-auto -mt-16 border border-outline-variant/10"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Skincare</span>
              <div className="flex items-center text-on-surface-variant font-medium gap-2">
                <Clock className="w-5 h-5 text-primary" />
                60 Min
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mb-8 leading-tight">
              The Signature <span className="italic font-normal">Radiance Facial</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              A bespoke, deeply hydrating treatment designed to restore luminosity, clarify complexion, and soothe the spirit. Tailored to your unique skin profile using botanical active ingredients.
            </p>
            <div className="flex items-center justify-between gap-6 pt-6 border-t border-outline-variant/10">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-headline font-bold text-on-surface">$185</span>
                <span className="text-sm font-medium text-on-surface-variant opacity-60">/ Session</span>
              </div>
              <Button size="lg">Book Appointment</Button>
            </div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mt-48">
          {/* Left: Description */}
          <div className="lg:col-span-7 space-y-20">
            <section>
              <h2 className="text-3xl font-bold text-on-surface mb-8">The Experience</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                <p>Our Signature Radiance Facial begins with a thorough skin analysis, allowing our estheticians to curate a precise blend of serums and masks suited exactly for you. The journey starts with a gentle, aromatic double-cleanse to melt away impurities, followed by a mild enzyme exfoliation.</p>
                <p>The centerpiece of this treatment is an extended, lymphatic drainage massage of the face, neck, and décolleté. This rhythmic technique promotes circulation, reduces puffiness, and instills a deep sense of relaxation. We conclude with a rich, protective moisturizer and mineral sunscreen, leaving you with an unmistakable, lit-from-within glow.</p>
              </div>
            </section>

            <section className="bg-surface-container-low rounded-[2rem] p-10 lg:p-14 border border-outline-variant/10">
              <h3 className="text-2xl font-bold text-on-surface mb-10">Key Benefits</h3>
              <ul className="space-y-8">
                {[
                  { icon: Flower, title: 'Deep Cellular Hydration', desc: 'Infuses moisture deep into the epidermis to plump and smooth fine lines.' },
                  { icon: Droplets, title: 'Enhanced Circulation', desc: 'Targeted massage techniques stimulate blood flow for a natural, rosy flush.' },
                  { icon: Heart, title: 'Stress Reduction', desc: 'Aromatherapy and soothing touch melt away tension from facial muscles.' },
                ].map((benefit, i) => (
                  <li key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-on-surface mb-1">{benefit.title}</h4>
                      <p className="text-on-surface-variant leading-relaxed">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right: Sticky Booking Glance */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 bg-surface p-10 rounded-3xl ambient-shadow border border-outline-variant/10">
              <h3 className="text-2xl font-bold mb-10 pb-6 border-b border-surface-container">Reserve Your Time</h3>
              
              <div className="space-y-10">
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">Select Date</label>
                  <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                    {['Tue 12', 'Wed 13', 'Thu 14', 'Fri 15', 'Sat 16'].map((date, i) => (
                      <button key={i} className={`flex-shrink-0 w-20 h-24 rounded-2xl flex flex-col items-center justify-center border transition-all ${
                        i === 1 ? 'border-primary ring-2 ring-primary/20 bg-primary/5' : 'border-outline-variant/20 hover:border-primary/40'
                      }`}>
                        <span className={`text-[10px] uppercase font-bold mb-1 ${i === 1 ? 'text-primary' : 'text-on-surface-variant'}`}>{date.split(' ')[0]}</span>
                        <span className={`text-2xl font-headline font-bold ${i === 1 ? 'text-primary' : ''}`}>{date.split(' ')[1]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">Available Times</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM'].map((time, i) => (
                      <button key={i} className={`py-4 rounded-2xl border text-sm font-bold transition-all ${
                        i === 2 ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/20 hover:border-primary/40'
                      }`}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-surface-container">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-medium text-on-surface-variant">Total</span>
                    <span className="text-3xl font-headline font-bold">$185</span>
                  </div>
                  <Button size="lg" className="w-full">Confirm Booking</Button>
                  <p className="text-center text-[10px] uppercase tracking-widest text-on-surface-variant mt-6 opacity-60">No payment required until your appointment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
