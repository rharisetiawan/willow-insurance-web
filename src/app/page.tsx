import Image from "next/image";
import { MapPin, ClipboardList, HandCoins, Apple, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex flex-col items-center justify-start bg-[#cae5f5]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        {/* Content Box directly over sky */}
        <div className="relative z-10 w-full px-6 pt-16 md:pt-20 text-center mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111827] mb-6 font-medium leading-[1.1] max-w-4xl mx-auto">
            Saskatchewan Auto, Home<br />& Farm Insurance
          </h1>
          <p className="font-sans text-base md:text-lg text-[#111827] mb-1 max-w-2xl mx-auto font-medium">
            Trusted insurance advice in plain language — protecting<br />Saskatchewan families, farmers & businesses.
          </p>
          <p className="font-sans text-base md:text-lg text-[#111827] mb-8 max-w-2xl mx-auto font-medium">
            Call Today! (306) XXX-XXXX
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-white pt-24 pb-20 px-6 md:px-12 relative -mt-10 z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[#111827] mb-12">
            Why Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 flex flex-col items-center">
              <MapPin className="w-10 h-10 mb-6 text-gray-700" strokeWidth={1} />
              <h3 className="font-serif text-xl text-[#111827] mb-4">Local Expertise<br />You Can Trust</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                We Local Expertise you Can<br />Trust to devoment the sector<br />better insurance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 flex flex-col items-center">
              <ClipboardList className="w-10 h-10 mb-6 text-gray-700" strokeWidth={1} />
              <h3 className="font-serif text-xl text-[#111827] mb-4">Clear Coverage,<br />No Surprises</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                We come trec ili whers card<br />protectios, clear coverage,<br />no surprises.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 flex flex-col items-center">
              <HandCoins className="w-10 h-10 mb-6 text-gray-700" strokeWidth={1} />
              <h3 className="font-serif text-xl text-[#111827] mb-4">Full-Service<br />Convenience</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                Full-service convenience as<br />aomoosors and full-service<br />convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-[#fbfcfa] py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[#111827] mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Service 1 */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-md group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/auto.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                <h3 className="font-serif text-[1.15rem] leading-none text-[#e8e6e1]">Auto Insurance</h3>
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-md group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/farm.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                <h3 className="font-serif text-[1.15rem] leading-none text-[#e8e6e1]">Farm Insurance</h3>
              </div>
            </div>

            {/* Service 3 */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-md group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/home.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                <h3 className="font-serif text-[1.15rem] leading-none text-[#e8e6e1]">Home Insurance</h3>
              </div>
            </div>

            {/* Service 4 */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-md group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/notary.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                <h3 className="font-serif text-[1.15rem] leading-none text-[#e8e6e1]">Notary Services</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us & App Download Section */}
      <section className="bg-white py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl text-[#111827]">About Us</h2>
            <h3 className="font-serif text-4xl text-[#111827] leading-tight">
              Willow Insurance was<br />built on one belief
            </h3>
            <p className="text-gray-800 text-[13px] leading-relaxed pt-2">
              Willow Insurance — Company founder Rose<br />
              Freeman, we banote totcover from ersurance<br />
              and walkin-nom-bitter, we want hed more<br />
              necessary.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col pt-1">
            <p className="text-[#111827] text-[13px] leading-relaxed mb-10">
              Willow Insurance was built on one belief, iiw ample<br />
              typewaphy ws sreweing this honre as insurance: sw a<br />
              founder, rosen for a crasmary and barters. Acoso sex a<br />
              building and renen-cs cemar to download the app to book<br />
              an appointment.
            </p>

            <div className="flex gap-6 items-start mt-2">
              {/* QR Code Placeholder */}
              <div className="w-28 h-28 bg-white border-4 border-black flex-shrink-0 flex items-center justify-center relative p-1">
                {/* A simple geometric pattern to act as a QR code */}
                <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-0.5">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`bg-black ${(i % 3 === 0 || i % 5 === 0) ? 'opacity-100' : 'opacity-20'}`}></div>
                  ))}
                  <div className="absolute top-0 left-0 w-6 h-6 border-4 border-black bg-white"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-4 border-black bg-white"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-4 border-black bg-white"></div>
                </div>
              </div>

              <div className="flex flex-col pt-1">
                <h4 className="font-serif text-[1.15rem] leading-tight text-[#111827] mb-4">
                  Download the app to book<br />an appointment
                </h4>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
                    <Apple className="w-5 h-5 fill-white" />
                    <div className="text-left flex flex-col">
                      <span className="text-[8px] text-gray-300">Download on the</span>
                      <span className="font-semibold text-xs leading-none">App Store</span>
                    </div>
                  </button>
                  <button className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
                    <Play className="w-4 h-4 fill-white" />
                    <div className="text-left flex flex-col">
                      <span className="text-[8px] text-gray-300 uppercase">GET IT ON</span>
                      <span className="font-semibold text-xs leading-none">Google Play</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#101E35] py-24 px-6 md:px-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 font-medium tracking-wide">
            Get coverage that truly fits your life
          </h2>
          <p className="text-gray-300 text-[13px] mb-12">
            Get more buttones. Get coverage that truly fits your life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#101E35] px-8 py-3 rounded-full font-serif text-[15px] w-48 mx-auto sm:mx-0 shadow-sm hover:bg-gray-50 transition-colors">
              Call Now
            </button>
            <button className="bg-white text-[#101E35] px-8 py-3 rounded-full font-serif text-[15px] w-48 mx-auto sm:mx-0 shadow-sm hover:bg-gray-50 transition-colors">
              Get a Quote <span className="underline decoration-1 underline-offset-4 decoration-gray-400">Online</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
