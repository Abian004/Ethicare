/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import sloganImg from '@/images/students-darkened.jpg'

const LandingPage = () => {

  // Collapsible functionality
  const toggleCollapsible = (e: any) => {
    e.currentTarget.classList.toggle('active');
    const content = e.currentTarget.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

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

        <section id="our-team" className="py-16">
          <h2 className="text-5xl text-white text-center font-bold shadow">Our Team</h2>
          {['Ethicare Champion', 'Ethicare Educator', 'Ethicare Ambassador'].map((team, index) => (
            <div key={index}>
              <button
                className="w-full text-5xl p-4 bg-white hover:bg-gray-100 transition-colors"
                onClick={toggleCollapsible}
              >
                {team}
              </button>
              <div className="content">
                {team === 'Ethicare Champion' && (
                  <div className="text-2xl text-white">
                    <p>{/* Champion content */}</p>
                    <h4 className="text-center mt-6 mb-4">Divisions</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                      {[
                        'Education and Training',
                        'Communications and Outreach',
                        'Research and Development',
                        'Community Engagement',
                        'Design',
                        'Treasury',
                        'Curriculum'
                      ].map((division, idx) => (
                        <div key={idx} className="p-4 bg-white/10 rounded">
                          {division}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default LandingPage;