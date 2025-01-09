import React from 'react'
import Image from 'next/image';
import aboutImg from '@/images/students-darkened.jpg'
import classroomImg from '@/images/20241116_105248.jpg'

export default function page() {
  return (
    <div className="space-y-10 py-10">
      {/* Intro Section */}
      <section>
        <div className="bg-white mx-80 px-10 py-5 rounded-2xl flex items-start space-x-8">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-[400px] h-[400px] overflow-hidden rounded-lg">
            <Image
              src={aboutImg}
              alt="About background image"
              className="object-cover w-full h-full filter grayscale"
            />
            {/* Green Masking */}
            <div className="absolute inset-0 bg-ethicare-green/30 rounded-lg" />
          </div>

          {/* Content Section */}
          <div className="flex-1 text-ethicare-green">
            <div className="text-7xl font-extrabold mb-4">
              ABOUT US!
            </div>
            <p className="text-lg text-ethicare-pink-two">
              We are looking for ambassadors who are interested in understanding and addressing the issues of mental health, morale, and wellbeing, so what are you waiting for? Register Now!
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-mission">
        <div className="bg-white mx-20 px-10 py-5 rounded-2xl flex items-start space-x-8">
          {/* Image Section */}
          <div className="relative flex-shrink-0 w-[400px] h-[400px] overflow-hidden rounded-lg">
            <Image
              src={classroomImg}
              alt="Our Mission"
              className="object-cover w-full h-full"
            />
            {/* Pink Masking */}
            <div className="absolute inset-0 bg-ethicare-pink/30 rounded-lg" />
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <h2 className="text-7xl font-extrabold mb-4 text-ethicare-green">Our Mission</h2>
            <div className="space-y-4">
              <p className="text-lg text-ethicare-pink-two">
                Dalam kehidupan sehari-hari, kita seringkali dihadapkan pada berbagai situasi yang menuntut kita untuk berperilaku sopan dan
                beretika. Namun, seringkali etika dan moral dipahami hanya sebagai aturan atau norma kesopanan yang harus diikuti, tanpa
                mempertimbangkan kesejahteraan diri sendiri maupun orang lain. Kesadaran ini mendorong kami untuk mendirikan sebuah organisasi
                yang tidak hanya menekankan pentingnya moral dan etika, tetapi juga menyoroti peran krusial kesejahteraan atau wellbeing dalam
                setiap tindakan dan perilaku kita.
              </p>
              <p className="text-lg text-ethicare-pink-two">
                Organisasi ini berdiri dengan keyakinan bahwa &quot;memanusiakan manusia&quot; tidak hanya berarti berperilaku sopan kepada
                orang lain, tetapi juga dimulai dari kesadaran akan kesejahteraan diri sendiri. Memahami dan menghargai wellbeing
                diri sendiri adalah langkah pertama dalam membangun hubungan yang sehat dan saling menghargai dengan orang lain.
                Dengan demikian, etika dan moral tidak lagi dipandang sebagai kewajiban semata, tetapi sebagai refleksi dari
                pemahaman yang mendalam tentang pentingnya kesejahteraan bersama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values">
        <div className="bg-white mx-20 px-10 py-5 rounded-2xl">
          <h2 className="text-7xl font-extrabold mb-8 text-ethicare-green text-center">Our Core Values</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                title: "Compassionate Integrity",
                description: "Kami menjunjung tinggi standar integritas tertinggi, yang berakar pada belas kasih dan empati, mengakui kemanusiaan dalam diri kami dan orang lain."
              },
              {
                title: "Respectful Understanding",
                description: "Kami mempromosikan lingkungan di mana rasa hormat lebih dari sekadar kesopanan, dengan mendorong pemahaman yang mendalam dan pertimbangan atas kebutuhan dan kesejahteraan orang lain."
              },
              {
                title: "Empowerment Through Education",
                description: "Kami memberdayakan individu dengan mengedukasi mereka tentang pentingnya hidup beretika dan kesejahteraan pribadi, membekali mereka untuk membuat pilihan yang positif dan terinformasi."
              },
              {
                title: "Integrity In Action",
                description: "Kami percaya dalam mempraktikkan apa yang kami beritakan, memastikan bahwa tindakan kami secara konsisten mencerminkan komitmen kami terhadap etika dan kesejahteraan."
              }
            ].map((value, index) => (
              <div key={index} className="border-2 border-ethicare-green p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-ethicare-green mb-4">{value.title}</h3>
                <p className="text-lg text-ethicare-pink-two">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}