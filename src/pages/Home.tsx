import React from 'react';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const services = [
    {
      title: 'Facial',
      desc: 'Deep cleansing and rejuvenating treatments for a radiant complexion.',
      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=2000'
    },
    {
      title: 'Hair',
      desc: 'Expert styling, coloring, and treatments for healthy, beautiful hair.',
      img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2000'
    },
    {
      title: 'Makeup',
      desc: 'Flawless makeup application for special events or everyday elegance.',
      img: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=2000'
    },
    {
      title: 'Skincare',
      desc: "Personalized regimens and products to maintain your skin's health.",
      img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      text: "The facial treatment completely transformed my skin. The ambiance is so relaxing, and the staff is incredibly professional. I won't go anywhere else.",
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'
    },
    {
      name: 'Elena Rodriguez',
      text: "Booked them for my wedding makeup and hair. They listened exactly to what I wanted and executed it perfectly. Truly a luxury experience.",
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200'
    },
    {
      name: 'Mia Chen',
      text: "The attention to detail here is unmatched. I love the premium products they use. My hair has never felt healthier.",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-5 space-y-8 z-10 relative"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight">
              Enhance Your <span className="italic font-normal">Natural Beauty</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-md">
              Professional beauty services at your doorstep. Experience luxury skincare and styling tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={() => onNavigate('booking')}>Book Now</Button>
              <Button variant="ghost" size="lg" onClick={() => onNavigate('services')}>Explore Services</Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-7 relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/2] bg-surface-container-low shadow-[0_20px_60px_rgba(31,26,28,0.08)]">
              <img 
                alt="Model" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000" 
              />
            </div>
            {/* Minimal floating element */}
            <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-2xl ambient-shadow hidden lg:block border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Star className="w-5 h-5 fill-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold">4.9/5 Rating</p>
                  <p className="text-xs text-on-surface-variant">by 2,000+ Clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface-container-low px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:w-1/2">
            <h2 className="text-4xl font-bold text-on-surface mb-6">Our Services</h2>
            <p className="text-on-surface-variant text-lg">Curated treatments designed to rejuvenate and elevate your natural glow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -8 }}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow flex flex-col group cursor-pointer transition-all duration-500"
                onClick={() => onNavigate('services')}
              >
                <div className="h-56 w-full overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">{service.desc}</p>
                  <div className="mt-auto">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary border-b border-primary/30 pb-2 group-hover:border-primary transition-all">Learn More</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-20 text-on-surface">Why Choose Prisha</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', title: 'Experienced Staff', text: 'Our team consists of highly trained professionals dedicated to their craft.' },
              { icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', title: 'Premium Products', text: 'We use only the finest, carefully selected products for all our treatments.' },
              { icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135728.png', title: 'Affordable Pricing', text: 'Luxury experiences offered at accessible rates without compromising quality.' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10 opacity-30 group-hover:opacity-100 transition-opacity" style={{ filter: 'grayscale(100%) brightness(0.2)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-xs">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface-container-high px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center text-on-surface">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest p-10 rounded-3xl ambient-shadow relative"
              >
                <div className="flex items-center mb-8">
                  <img src={t.avatar} className="w-14 h-14 rounded-full object-cover mr-5 border-2 border-primary/10" alt={t.name} />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <div className="flex text-primary">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-primary" />)}
                    </div>
                  </div>
                </div>
                <p className="text-on-surface-variant italic leading-relaxed relative">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-8 bg-surface">
        <div className="max-w-5xl mx-auto text-center bg-surface-container-low rounded-[3rem] p-16 md:p-24 ambient-shadow border border-outline-variant/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Book Your Appointment Today</h2>
          <p className="text-xl text-on-surface-variant mb-12 relative z-10 max-w-xl mx-auto">Reserve your time for ultimate relaxation and rejuvenation.</p>
          <Button size="lg" className="relative z-10 text-xl px-12" onClick={() => onNavigate('booking')}>Book Now</Button>
        </div>
      </section>
    </div>
  );
};
