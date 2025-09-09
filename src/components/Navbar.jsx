import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeView, setActiveView] = useState('main'); // 'main', 'services', 'treatments'
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Check if the page is scrolled from the top
      setIsScrolled(window.scrollY > 20);

      // 2. Check if the button is near the footer
      const footer = document.querySelector('footer');
      const button = buttonRef.current;
      if (footer && button) {
        const buttonRect = button.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        // Hide the button if its bottom edge overlaps the footer's top edge
        setIsNearFooter(buttonRect.bottom > footerRect.top);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check on component mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  const openSubmenu = (menu) => {
    setActiveView(menu);
  };

  const goBack = () => {
    setActiveView('main');
  };

  const closeMenu = () => {
    setOpen(false);
    setTimeout(() => setActiveView('main'), 300); // Reset after animation
  };

  const serviceItems = [
    'Ιατρική Δερματολογία',
    'Παιδιατρική Δερματολογία',
    'Αισθητική Δερματολογία',
    'Δερματοχειρουργική',
    'Καρκίνοι Δέρματος',
    'Ογκολογική Δερματολογία'
  ];

  const treatmentItems = [
    'Αναζωογόνηση Δέρματος',
    'Θεραπεία Υπεριδρωσίας',
    'Θεραπεία Αγγειακών Βλαβών',
    'Θεραπεία Τριχόπτωσης',
    'Αισθητική Δερματολογία για Άνδρες'
  ];

  return (
    <>
      {/* Fixed Header Bar with Name */}
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled ? (isOpen ? 'bg-transparent py-3' : 'bg-white/25 backdrop-blur-md shadow-lg py-2') : 'bg-transparent py-3'
}`}>
  <div className="container mx-auto px-4 md:px-10">
    <div className="flex items-center justify-between">
      {/* Mobile: Hamburger on left - Now doesn't take space when hidden */}
      <button
        ref={buttonRef}
        onClick={() => setOpen(!isOpen)}
        disabled={!isScrolled && !isOpen}
        className={`md:hidden w-8 h-8 flex-col items-center justify-center gap-1 group transition-all duration-300
          ${isOpen ? 'rotate-180 flex' : ''}
          ${(isNearFooter && !isOpen) || (!isScrolled && !isOpen) ? 'hidden' : 'flex'}
        `}
        aria-label="Menu"
      >
        <span className={`block w-5 h-0.5 transition-all duration-300 ${
          isOpen 
            ? 'bg-black rotate-45 translate-y-1.5' 
            : isScrolled
              ? 'bg-gray-900 group-hover:w-4'
              : 'bg-transparent'
        }`}></span>
        <span className={`block w-5 h-0.5 transition-all duration-300 ${
          isOpen 
            ? 'bg-black opacity-0' 
            : isScrolled
              ? 'bg-gray-900'
              : 'bg-transparent'
        }`}></span>
        <span className={`block w-5 h-0.5 transition-all duration-300 ${
          isOpen 
            ? 'bg-black -rotate-45 -translate-y-1.5' 
            : isScrolled
              ? 'bg-gray-900 group-hover:w-4'
              : 'bg-transparent'
        }`}></span>
      </button>

      {/* Logo/Name - Center on mobile, Left on desktop */}
      <div className={`flex-1 md:flex-initial flex transition-all duration-500 ease-out ${
        (isScrolled || isOpen) ? 'justify-center md:justify-start' : 'justify-start'
      }`}>
        <a href="#" className="inline-block transition-all duration-500 ease-out">
          <div className="flex flex-col items-start">
            <span className={`text-[9px] sm:text-[10px] tracking-[0.2em] mb-0.5 transition duration-300 
              ${isOpen ? 'text-gray-700' : isScrolled ? 'text-gray-800' : 'text-gray-300'}`}>
              ΔΕΡΜΑΤΟΛΟΓΟΣ
            </span>
            <h1 className={`logo text-[15px] sm:text-[17px] md:text-2xl font-light tracking-wide transition duration-300 
              ${isOpen ? 'text-black' : isScrolled ? 'text-gray-900' : 'text-white'}`}>
              ΔΡ. ΙΩΑΝΝΑ ΠΑΝΟΥΤΣΟΠΟΥΛΟΥ
            </h1>
          </div>
        </a>
      </div>

      {/* CTA Button */}
      <button className={`bg-black text-white px-2.5 sm:px-3 md:px-4 text-[9px] sm:text-[10px] md:text-xs cursor-pointer h-7 sm:h-8 md:h-9
        hover:bg-gray-900 transition-colors duration-300 whitespace-nowrap`}>
        Κλείσε ραντεβού
      </button>
    </div>
  </div>
</header>

      {/* Desktop Hamburger Menu Button - Fixed on left side */}
      <button
        onClick={() => setOpen(!isOpen)}
        disabled={!isScrolled && !isOpen}
        className={`hidden md:flex fixed top-1/2 left-8 -translate-y-1/2 z-50 w-10 h-10 flex-col items-center
          justify-center gap-1.5 group transition-all duration-300
          ${isOpen ? 'rotate-180' : ''}
          ${isNearFooter && !isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}
          ${!isScrolled && !isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}
        `}
        aria-label="Menu"
      >
        <span className={`block w-7 h-0.5 transition-all duration-300 ${
          isOpen 
            ? 'bg-black rotate-45 translate-y-2' 
            : 'bg-gray-900 group-hover:w-5'
        }`}></span>
        <span className={`block w-7 h-0.5 transition-all duration-300 ${
          isOpen 
            ? 'bg-black opacity-0' 
            : 'bg-gray-900'
        }`}></span>
        <span className={`block w-7 h-0.5 transition-all duration-300 ${
          isOpen 
            ? 'bg-black -rotate-45 -translate-y-2' 
            : 'bg-gray-900 group-hover:w-5'
        }`}></span>
      </button>

      {/* Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-700 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Gradient Background */}
        <div 
          className={`absolute inset-0 bg-[#f5f5d2] transition-opacity duration-700 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Menu Content Container */}
        <div className={`relative h-full flex items-center justify-center px-4 md:px-6 transition-all duration-700 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <nav className="text-center max-w-4xl mx-auto w-full relative overflow-hidden">
            
            {/* Main Menu */}
            <ul className={`space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-500 ${
              activeView === 'main' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 absolute inset-0'
            }`}>
              {/* Αρχική */}
              <li className={`transition-all duration-500 ${
                isOpen && activeView === 'main' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '100ms' }}>
                <a 
                  href="#" 
                  className="group inline-block"
                  onClick={closeMenu}
                >
                  <span className="text-black text-2xl sm:text-3xl md:text-4xl font-light relative">
                    Αρχική
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>

              {/* Υπηρεσίες */}
              <li className={`transition-all duration-500 ${
                isOpen && activeView === 'main' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <button 
                  className="group inline-flex items-center gap-2 sm:gap-3"
                  onClick={() => openSubmenu('services')}
                >
                  <span className="text-black text-2xl sm:text-3xl md:text-4xl font-light relative">
                    Υπηρεσίες
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black/70 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </li>

              {/* Θεραπείες */}
              <li className={`transition-all duration-500 ${
                isOpen && activeView === 'main' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '300ms' }}>
                <button 
                  className="group inline-flex items-center gap-2 sm:gap-3"
                  onClick={() => openSubmenu('treatments')}
                >
                  <span className="text-black text-2xl sm:text-3xl md:text-4xl font-light relative">
                    Θεραπείες
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black/70 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </li>

              {/* Δρ. Πανουτσοπούλου */}
              <li className={`transition-all duration-500 ${
                isOpen && activeView === 'main' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                <a 
                  href="#" 
                  className="group inline-block"
                  onClick={closeMenu}
                >
                  <span className="text-black text-2xl sm:text-3xl md:text-4xl font-light relative">
                    Δρ. Πανουτσοπούλου
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>

              {/* Επικοινωνία */}
              <li className={`transition-all duration-500 ${
                isOpen && activeView === 'main' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '500ms' }}>
                <a 
                  href="#" 
                  className="group inline-block"
                  onClick={closeMenu}
                >
                  <span className="text-black text-2xl sm:text-3xl md:text-4xl font-light relative">
                    Επικοινωνία
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/30 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
            </ul>

            {/* Services Submenu */}
            <ul className={`space-y-3 sm:space-y-4 md:space-y-6 transition-all duration-500 ${
              activeView === 'services' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute inset-0'
            }`}>
              <li className="my-6 sm:my-8">
                <h2 className="text-black/70 text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase">Υπηρεσίες</h2>
              </li>
              {serviceItems.map((item, idx) => (
                <li 
                  key={idx} 
                  className={`transition-all duration-500 ${
                    isOpen && activeView === 'services' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`} 
                  style={{ transitionDelay: `${(idx + 1) * 50}ms` }}
                >
                  <a 
                    href="#" 
                    className="group inline-block"
                    onClick={closeMenu}
                  >
                    <span className="text-black text-xl sm:text-2xl md:text-3xl font-light relative">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/30 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
              <li className={`pt-6 sm:pt-8 transition-all duration-500 ${
                isOpen && activeView === 'services' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                <button 
                  onClick={goBack}
                  className="group inline-flex items-center gap-2 sm:gap-3 text-black/70 hover:text-black transition-colors"
                >
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-lg sm:text-xl md:text-2xl font-light">Πίσω</span>
                </button>
              </li>
            </ul>

            {/* Treatments Submenu */}
            <ul className={`space-y-3 sm:space-y-4 md:space-y-6 transition-all duration-500 ${
              activeView === 'treatments' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 absolute inset-0'
            }`}>
              <li className="my-6 sm:my-8">
                <h2 className="text-black/70 text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase">Θεραπείες</h2>
              </li>
              {treatmentItems.map((item, idx) => (
                <li 
                  key={idx} 
                  className={`transition-all duration-500 ${
                    isOpen && activeView === 'treatments' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`} 
                  style={{ transitionDelay: `${(idx + 1) * 50}ms` }}
                >
                  <a 
                    href="#" 
                    className="group inline-block"
                    onClick={closeMenu}
                  >
                    <span className="text-black text-xl sm:text-2xl md:text-3xl font-light relative">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/30 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
              <li className={`pt-6 sm:pt-8 transition-all duration-500 ${
                isOpen && activeView === 'treatments' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '350ms' }}>
                <button 
                  onClick={goBack}
                  className="group inline-flex items-center gap-2 sm:gap-3 text-black/70 hover:text-black transition-colors"
                >
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-lg sm:text-xl md:text-2xl font-light">Πίσω</span>
                </button>
              </li>
            </ul>

            {/* Contact Info - Only visible on main menu */}
            <div className={`mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8 md:pt-12 border-t border-black/20 transition-all duration-700 ${
              isOpen && activeView === 'main' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 text-black/70">
                <a href="tel:+302610123456" className="flex items-center gap-2 hover:text-black transition-colors text-xs sm:text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>2610 123 456</span>
                </a>
                <a href="mailto:info@panoutsopoulou.gr" className="flex items-center gap-2 hover:text-black transition-colors text-xs sm:text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all sm:break-normal">info@panoutsopoulou.gr</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;