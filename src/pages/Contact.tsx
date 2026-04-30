import React from 'react';
import { Button } from '../components/Button';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6 block">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl text-on-surface leading-tight tracking-tight mb-8">
              We'd love to <br/><span className="italic font-normal text-primary underline underline-offset-8 decoration-primary/20">hear from you</span>.
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-md">
              Whether you're looking to book a bespoke consultation or have a question about our treatments, our team is here to assist you.
            </p>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container-low shadow-2xl">
              <img 
                alt="Salon Interior" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000" 
              />
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute -bottom-10 -left-10 bg-surface p-8 rounded-3xl ambient-shadow hidden lg:flex items-center gap-5 border border-outline-variant/10"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Located in</p>
                <p className="text-2xl font-headline font-bold">Beverly Hills</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Details */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Form */}
            <div className="bg-surface p-10 md:p-16 rounded-[2.5rem] ambient-shadow-lg border border-outline-variant/5">
              <h2 className="text-3xl font-bold mb-10">Send a Message</h2>
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-70" htmlFor="name">Full Name</label>
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 px-0 py-4 text-on-surface transition-all placeholder:text-on-surface-variant/30 text-lg font-medium" 
                    id="name" placeholder="Jane Doe" type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-70" htmlFor="email">Email Address</label>
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 px-0 py-4 text-on-surface transition-all placeholder:text-on-surface-variant/30 text-lg font-medium" 
                    id="email" placeholder="jane@example.com" type="email" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-70" htmlFor="subject">Subject</label>
                  <select className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 px-0 py-4 text-on-surface transition-all text-lg font-medium appearance-none">
                    <option disabled selected value="">Select an inquiry type</option>
                    <option>Booking an Appointment</option>
                    <option>Questions about Services</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-70" htmlFor="message">Message</label>
                  <textarea 
                    className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 px-0 py-4 text-on-surface transition-all resize-none placeholder:text-on-surface-variant/30 text-lg font-medium" 
                    id="message" placeholder="How can we help you?" rows={4}
                  />
                </div>
                <div className="pt-6">
                  <Button className="w-full py-5 text-lg">Submit Inquiry</Button>
                </div>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center space-y-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <MapPin className="text-primary w-6 h-6" />
                    Visit Us
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-lg">
                    123 Rodeo Drive<br/>
                    Beverly Hills, CA 90210<br/>
                    Suite 400
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Phone className="text-primary w-6 h-6" />
                    Contact
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-lg mb-2">
                    <a className="hover:text-primary transition-colors">+1 (310) 555-0199</a>
                  </p>
                  <p className="text-on-surface-variant leading-loose text-lg">
                    <a className="hover:text-primary transition-colors">hello@prishacare.com</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <Clock className="text-primary w-6 h-6" />
                  Hours of Operation
                </h3>
                <div className="bg-surface-container-high/50 p-10 rounded-3xl border border-outline-variant/10">
                  <ul className="space-y-4 text-on-surface-variant text-lg">
                    <li className="flex justify-between border-b border-outline-variant/10 pb-4"><span>Monday - Friday</span> <span>9:00 AM - 7:00 PM</span></li>
                    <li className="flex justify-between border-b border-outline-variant/10 pb-4"><span>Saturday</span> <span>10:00 AM - 5:00 PM</span></li>
                    <li className="flex justify-between text-primary font-bold"><span>Sunday</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>

              {/* Fake Map */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-video bg-surface-container-high border border-outline-variant/10 relative group cursor-pointer">
                <img 
                  alt="Map" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqJz7OB8qtI7iGb4ViTnnavOIrBFCtaeb5Uy7uAhnrGfmt8Y0e8rE1pauVPuv9mxCprF3deTA3s2Zo40GWI92IAmsAfxzvUQ8Q7N4L64ws73eaSNxmM6RAN_VEyoE9FPK6EaBtw2msJsiqjVc5mF3FLBwPZRyd4kpBeGwo09Yl4-TA2Gg6ik0YnvL_J6_oR0XMpnRaV54dqKGAl1678LUCqbYXlvVEyBs4ybW-EtvtUpDDqb5yWaY7x4_y3QFkfjTUzFv9XNcJQ54" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
