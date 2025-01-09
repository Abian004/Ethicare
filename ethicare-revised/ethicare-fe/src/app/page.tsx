/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import sloganImg from '@/images/students-darkened.jpg'

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Function to handle slideshow
  const plusSlides = (n: number) => {
    let newSlide = currentSlide + n;
    if (newSlide > 3) newSlide = 1;
    if (newSlide < 1) newSlide = 3;
    setCurrentSlide(newSlide);
  };

  const showSlide = (n: number) => {
    setCurrentSlide(n);
  };

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

        <section id="about" className="py-16">
          <h2 className="text-5xl text-white text-center font-bold shadow">About Us</h2>
          <div className="relative">
            {[1, 2, 3].map((slideNumber) => (
              <div
                key={slideNumber}
                className={`fade ${currentSlide === slideNumber ? 'block' : 'hidden'}`}
              >
                <div className="relative">
                  <Image
                    src={`/images/slide-${slideNumber}.jpg`}
                    alt={`Slide ${slideNumber}`}
                    width={1200}
                    height={600}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white text-xl">
                    {/* Slide text content here */}
                  </div>
                </div>
              </div>
            ))}

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={() => plusSlides(-1)}
            >
              ❮
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={() => plusSlides(1)}
            >
              ❯
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {[1, 2, 3].map((number) => (
              <button
                key={number}
                className={`h-3 w-3 rounded-full ${currentSlide === number ? 'bg-white' : 'bg-gray-400'
                  }`}
                onClick={() => showSlide(number)}
              />
            ))}
          </div>
        </section>

        <section id="our-mission" className="py-16">
          <h2 className="text-5xl text-white text-center font-bold shadow">Our Mission</h2>
          <article className="max-w-4xl mx-auto px-4">
            <div className="text-2xl text-white text-justify">
              {/* Mission text content */}
            </div>
          </article>
        </section>

        <section id="core-values" className="py-16">
          <h2 className="text-5xl text-white text-center font-bold shadow">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            {[
              {
                title: "Compassionate Integrity",
                description: "Kami menjunjung tinggi standar integritas tertinggi..."
              },
              {
                title: "Respectful Understanding",
                description: "Kami mempromosikan lingkungan di mana rasa hormat..."
              },
              {
                title: "Empowerment Through Education",
                description: "Kami memberdayakan individu dengan mengedukasi..."
              },
              {
                title: "Integrity In Action",
                description: "Kami percaya dalam mempraktikkan apa yang kami beritakan..."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-green-600 mb-4">{value.title}</h3>
                <p className="text-xl font-bold text-pink-600 text-left">
                  {value.description}
                </p>
              </div>
            ))}
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