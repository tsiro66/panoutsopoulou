import { useState } from 'react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: 'Αρχική', href: '#' },
    { name: 'Υπηρεσίες', href: '#' },
    { name: 'Θεραπείες', href: '#' },
    { name: 'Δρ. Πανουτσοπούλου', href: '#' },
    { name: 'Επικοινωνία', href: '#' }
  ];

  const services = [
    { name: 'Ιατρική Δερματολογία', href: '#' },
    { name: 'Παιδιατρική Δερματολογία', href: '#' },
    { name: 'Αισθητική Δερματολογία', href: '#' },
    { name: 'Δερματοχειρουργική', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-[#f5f5d2]/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.2em] text-gray-700 block mb-1">
                ΔΕΡΜΑΤΟΛΟΓΟΣ
              </span>
              <h2 className="logo text-xl font-light tracking-wide text-black">
                ΔΡ. ΙΩΑΝΝΑ ΠΑΝΟΥΤΣΟΠΟΥΛΟΥ
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Εξειδικευμένη δερματολογική φροντίδα με σύγχρονες μεθόδους και εξατομικευμένη προσέγγιση.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-900 hover:text-blue-900 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-900 hover:text-blue-900 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-900 hover:text-blue-900 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black text-sm tracking-[0.2em] uppercase mb-6 font-light">
              Γρήγοροι Σύνδεσμοι
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-900 transition-colors duration-300 text-sm relative inline-block group"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative">
                      {link.name}
                      <span className={`absolute bottom-0 left-0 h-[1px] bg-blue-900 transition-all duration-300 ${
                        hoveredLink === link.name ? 'w-full' : 'w-0'
                      }`}></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-black text-sm tracking-[0.2em] uppercase mb-6 font-light">
              Υπηρεσίες
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-600 hover:text-blue-900 transition-colors duration-300 text-sm relative inline-block group"
                  >
                    <span className="relative">
                      {service.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-900 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black text-sm tracking-[0.2em] uppercase mb-6 font-light">
              Επικοινωνία
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Μαιζώνος 123<br />
                    Πάτρα 26222
                  </p>
                </div>
              </div>
              
              <a href="tel:+302610123456" className="flex items-center gap-3 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-900 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600 hover:text-blue-900 transition-colors text-sm">
                  2610 123 456
                </span>
              </a>
              
              <a href="mailto:info@panoutsopoulou.gr" className="flex items-center gap-3 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-900 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600 hover:text-blue-900 transition-colors text-sm">
                  info@panoutsopoulou.gr
                </span>
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-black text-sm tracking-[0.2em] uppercase mb-6 font-light">
              Ώρες Λειτουργίας
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex gap-3">
                <span>Δευ - Παρ:</span>
                <span>09:00 - 20:00</span>
              </div>
              <div className="flex gap-5">
                <span>Σάββατο:</span>
                <span>10:00 - 14:00</span>
              </div>
              <div className="flex gap-7">
                <span>Κυριακή:</span>
                <span>Κλειστά</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#f5f5d2]/30 to-blue-50 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-light text-black mb-4">
              Κλείστε το ραντεβού σας σήμερα
            </h3>
            <p className="secondary text-gray-600 mb-6 max-w-2xl mx-auto">
              Εμπιστευτείτε την υγεία του δέρματός σας σε έμπειρα χέρια. 
              Επικοινωνήστε μαζί μας για να προγραμματίσουμε την επίσκεψή σας.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 text-sm cursor-pointer hover:bg-gray-800 transition-colors duration-300">
                Κλείσε ραντεβού online
              </button>
              <a 
                href="tel:+302610123456" 
                className="border border-black text-black px-8 py-3 text-sm inline-flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Καλέστε μας
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © 2025 Δρ. Ιωάννα Πανουτσοπούλου. Όλα τα δικαιώματα κατοχυρωμένα.
            </p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                Πολιτική Απορρήτου
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                Όροι Χρήσης
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;