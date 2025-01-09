'use client';
import React from 'react';
import sloganImg from '@/images/students-darkened.jpg'

const LandingPage = () => {
  return (
    <div>
      <main>
        <section id="home" className="pt-10 relative z-10 px-10 rounded-3xl">
          <div
            className="relative h-[500px] flex items-center justify-center bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${sloganImg.src})` }}
          >
            <div className="absolute inset-0 bg-ethicare-pink/50 rounded-3xl" />
            <div className="relative text-center text-white">
              <h2 className="text-7xl font-bold">Ethicare Initiatives</h2>
              <h3 className="text-2xl font-bold italic">Where Morality Meets Wellbeing</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;