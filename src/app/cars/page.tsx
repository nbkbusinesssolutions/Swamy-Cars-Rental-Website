'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import CarCard from '@/components/CarCard';
import { fleetData } from '@/data/fleet';

export default function CarsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCars = selectedCategory === 'all'
    ? fleetData.fleet
    : fleetData.fleet.filter(car => car.category.includes(selectedCategory));

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
          >
            Our Fleet
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Choose Your <span className="gradient-text">Perfect Ride</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Well-maintained self-drive cars starting from ₹1,200/day. Unlimited kilometers, full insurance, and 24/7 support included.
          </motion.p>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[var(--color-primary-orange)] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Cars
            </button>
            {fleetData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[var(--color-primary-orange)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No cars found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section id="terms" className="section-shell bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="section-heading">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Rental <span className="gradient-text">Terms & Conditions</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Driver Requirements</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Valid Indian driving license (minimum 1 year old)</li>
                  <li>Government-issued ID proof (Aadhaar/Passport)</li>
                  <li>Minimum age: 21 years</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Security Deposit</h3>
                <p>A refundable security deposit of ₹5,000 - ₹10,000 is required at the time of pickup (varies by vehicle type).</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fuel Policy</h3>
                <p>Cars are provided with a full tank. Please return with the same fuel level to avoid additional charges.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Insurance Coverage</h3>
                <p>All vehicles come with comprehensive insurance. In case of an accident, a deductible may apply based on the damage assessment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Free cancellation up to 24 hours before pickup</li>
                  <li>50% refund for cancellations within 24 hours</li>
                  <li>No refund for no-shows</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
