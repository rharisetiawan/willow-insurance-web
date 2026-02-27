import { TreePine, Menu, MapPin, ClipboardCheck, HandCoins, Apple, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* 1. Header */}
      <header className="bg-[#0A192F] text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-3 cursor-pointer group">
          <TreePine className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
          <span className="font-serif font-bold text-xl tracking-wider uppercase text-white group-hover:text-[#F8F9FA] transition-colors">
            Willow <span className="font-light text-[#D4AF37]">Insurance Corp.</span>
          </span>
        </div>
        <button className="text-white hover:text-[#D4AF37] transition-colors p-2" aria-label="Menu">
          <Menu className="w-7 h-7" />
        </button>
      </header>

      {/* 2. Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-gray-200">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        {/* Subtle overlay for whole image to balance it */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content Box with white translucent background to ensure dark text reads well */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-16 text-center bg-white/85 backdrop-blur-sm border border-white/50 shadow-2xl rounded-2xl mx-4 transform transition-all duration-700 hover:scale-[1.02]">
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-[#0A192F] mb-6 leading-tight drop-shadow-sm">
            Saskatchewan Auto, Home & Farm Insurance
          </h1>
          <p className="font-sans text-lg md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto font-medium">
            Trusted insurance advice in plain language — protecting Saskatchewan families, farmers & businesses.
          </p>
          <div className="inline-block bg-[#0A192F] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#1a365d] hover:shadow-xl transition-all duration-300 cursor-pointer">
            Call Today! (306) 555-0198
          </div>
        </div>
      </section>

      {/* 3. Why Us Section */}
      <section className="bg-[#F8F9FA] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-[#0A192F] mb-16 relative">
            Why Us
            <span className="block w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[#0A192F]/5 rounded-2xl flex items-center justify-center mb-6 text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-white transition-colors duration-500">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0A192F] mb-4">Local Expertise You Can Trust</h3>
              <p className="text-gray-600 leading-relaxed font-sans text-lg">
                We use local expertise you can trust to build the sector with better, more reliable insurance solutions tailored to Saskatchewan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[#0A192F]/5 rounded-2xl flex items-center justify-center mb-6 text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-white transition-colors duration-500">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0A192F] mb-4">Clear Coverage, No Surprises</h3>
              <p className="text-gray-600 leading-relaxed font-sans text-lg">
                We come equipped with industry-leading protections. Transparent, clear coverage—no surprises when it matters most.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[#0A192F]/5 rounded-2xl flex items-center justify-center mb-6 text-[#0A192F] group-hover:bg-[#0A192F] group-hover:text-white transition-colors duration-500">
                <HandCoins className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0A192F] mb-4">Full-Service Convenience</h3>
              <p className="text-gray-600 leading-relaxed font-sans text-lg">
                Enjoy full-service convenience as our specialized advisors handle your policies with utmost care and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Services Section */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-[#0A192F] mb-16 relative">
            Our Services
            <span className="block w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/auto.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Auto Insurance</h3>
                <div className="h-1 w-12 bg-[#D4AF37] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/farm.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Farm Insurance</h3>
                <div className="h-1 w-12 bg-[#D4AF37] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/home.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Home Insurance</h3>
                <div className="h-1 w-12 bg-[#D4AF37] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/notary.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Notary Services</h3>
                <div className="h-1 w-12 bg-[#D4AF37] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. About Us & App Download Section */}
      <section className="bg-[#F8F9FA] py-24 px-6 md:px-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="font-serif text-5xl font-bold text-[#0A192F] leading-tight">
              About Us
            </h2>
            <h3 className="font-serif text-3xl font-medium text-[#D4AF37] leading-tight">
              Willow Insurance was built on one belief.
            </h3>
            <p className="text-gray-700 font-sans text-xl leading-relaxed">
              We started our journey knowing that communities flourish when families and businesses are protected against the unpredictable. Bringing together decades of experience, our team serves Saskatchewan with honesty, deep local knowledge, and an unwavering commitment to standing by your side.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.08)] flex flex-col items-center text-center">
            <h3 className="font-serif text-2xl font-bold text-[#0A192F] mb-4">
              Download the app to book an appointment
            </h3>
            <p className="text-gray-600 font-sans text-lg mb-8 max-w-sm">
              Manage your policies, file claims instantly, and connect with your advisor anywhere, anytime.
            </p>

            <div className="bg-gray-100 p-4 rounded-xl mb-10 w-48 h-48 border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-sm text-gray-400 font-medium">QR CODE PLACEHOLDER</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors w-full sm:w-auto font-sans">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="font-semibold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors w-full sm:w-auto font-sans">
                <Play className="w-5 h-5 ml-1" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">GET IT ON</div>
                  <div className="font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Section */}
      <section className="bg-gradient-to-br from-[#0A192F] to-[#122b54] py-24 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Get coverage that truly fits your life
          </h2>
          <p className="text-blue-100 font-sans text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Take the next step in securing your future. Get more options. Get coverage that truly fits your life today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-[#0A192F] hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Call Now
            </button>
            <button className="bg-[#D4AF37] text-[#0A192F] hover:bg-[#c3b091] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent">
              Get a Quote Online
            </button>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-[#0A192F] pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <TreePine className="w-6 h-6 text-[#D4AF37]" />
              <span className="font-serif font-bold text-lg tracking-widest uppercase text-white">
                Willow <span className="font-light text-[#D4AF37]">Insurance Corp.</span>
              </span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-white/10 mb-8"></div>

          <div className="flex flex-col md:flex-row justify-between text-gray-400 font-sans text-sm gap-8">
            <div className="flex flex-wrap gap-8">
              <a href="#" className="hover:text-white transition-colors">Shell Lake</a>
              <a href="#" className="hover:text-white transition-colors">Debden</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
            <div className="flex flex-wrap gap-8">
              <a href="#" className="hover:text-white transition-colors">Legal</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Feedback</a>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Willow Insurance Corp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
