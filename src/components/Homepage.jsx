import { useState, useEffect } from 'react';

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const services = [
    {
      title: "Ιατρική Δερματολογία",
      description: "Διάγνωση και θεραπεία όλων των παθήσεων του δέρματος με σύγχρονες επιστημονικές μεθόδους",
    },
    {
      title: "Δερματοχειρουργική",
      description: "Χειρουργικές επεμβάσεις δέρματος με ελάχιστα επεμβατικές τεχνικές για βέλτιστα αισθητικά αποτελέσματα",
    },
    {
      title: "Δημοφιλείς Θεραπείες",
      description: "Οι πιο αποτελεσματικές και σύγχρονες θεραπείες για κάθε δερματολογική ανάγκη",
    },
    {
      title: "Αισθητική Δερματολογία για Άνδρες",
      description: "Εξειδικευμένες αισθητικές θεραπείες σχεδιασμένες για τις ιδιαίτερες ανάγκες της ανδρικής επιδερμίδας",
    }
  ];

  const treatments = [
    {
      title: "Παιδιατρική Δερματολογία",
      description: "Συμβουλευτική και διαχείριση απλών και σύνθετων δερματικών παθήσεων από τη γέννηση έως την εφηβεία, συμπεριλαμβανομένων κληρονομικών δερματικών νόσων και σημαδιών γέννησης",
      image: "https://plus.unsplash.com/premium_photo-1687473582281-e7f2cc0aef83?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=300&fit=crop"
    },
    {
      title: "Θεραπεία Υπεριδρωσίας",
      description: "Αποτελεσματική εξάλειψη της υπερβολικής εφίδρωσης με χρήση ενέσεων BOTOX",
      image: "https://images.unsplash.com/photo-1603297430404-c3d8abc74449?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=300&fit=crop"
    },
    {
      title: "Δερματική Ογκολογία",
      description: "Διάγνωση και διαχείριση προκαρκινικών και καρκινικών δερματικών βλαβών",
      image: "https://images.unsplash.com/photo-1609542334025-778f9093a234?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=300&fit=crop"
    },
    {
      title: "Θεραπείες Αναζωογόνησης Δέρματος",
      description: "Αποκατάσταση του γηρασμένου δέρματος με χρήση BOTOX, δερματικών fillers, χημικών peelings και microneedling",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=300&fit=crop"
    },
    {
      title: "Ογκο-Δερματολογία",
      description: "Διάγνωση και διαχείριση των επιδράσεων της αντινεοπλασματικής θεραπείας στο δέρμα, τα μαλλιά και τα νύχια κατά τη διάρκεια της αντικαρκινικής θεραπείας",
      image: "https://plus.unsplash.com/premium_photo-1711609635822-408cefc8ab51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=300&fit=crop"
    },
    {
      title: "Θεραπείες Laser",
      description: "Αποτελεσματική εξάλειψη ρυτίδων, κηλίδων γήρανσης, ερυθρών και καφέ δυσχρωμιών, αγγείων προσώπου και ποδιών, αιμαγγειωμάτων και ουλών",
      image: "https://plus.unsplash.com/premium_photo-1675502957609-25148d769841?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581182800629-7d90925ad072?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1920&h=1080&fit=crop')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
          <div 
            className="max-w-4xl mx-auto"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY / 600
            }}
          >
            <span className="text-white/80 text-sm tracking-[0.3em] uppercase mb-4 block">
              Καλώς ήρθατε
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Εξειδικευμένη Δερματολογική<br />
              <span className="text-[#f5f5d2]">Φροντίδα & Αισθητική</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
              Σύγχρονες μέθοδοι διάγνωσης και θεραπείας με εξατομικευμένη προσέγγιση 
              για την υγεία και την ομορφιά του δέρματός σας
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 text-sm tracking-wider hover:bg-[#f5f5d2] transition-all duration-300">
                ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
              </button>
              <button className="border border-white text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f5f5d2]/10">
        <div className="container mx-auto max-w-4xl">
          <div id="welcome" className={`animate-on-scroll text-center transition-all duration-1000 ${
            isVisible.welcome ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-blue-900 text-sm tracking-[0.2em] uppercase mb-4 block">
              Η Φιλοσοφία Μας
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
              Επιστημονική Αριστεία & Ανθρώπινη Φροντίδα
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Στο ιατρείο της Δρ. Ιωάννας Πανουτσοπούλου, συνδυάζουμε την πλέον σύγχρονη 
              δερματολογική επιστήμη με την εξατομικευμένη φροντίδα. Κάθε ασθενής είναι 
              μοναδικός και η θεραπευτική προσέγγιση προσαρμόζεται στις ιδιαίτερες ανάγκες του.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-blue-900 text-sm tracking-[0.2em] uppercase mb-4 block">
              Υπηρεσίες
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-black">
              Ολοκληρωμένη Δερματολογική Φροντίδα
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                className={`animate-on-scroll group bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-light text-black mb-3 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a href="#" className="text-blue-900 text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Μάθετε περισσότερα
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Treatments Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#f5f5d2]/10 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-blue-900 text-sm tracking-[0.2em] uppercase mb-4 block">
              Εξειδικευμένες Θεραπείες
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
              Προηγμένες Δερματολογικές Λύσεις
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Από την παιδιατρική δερματολογία έως τις πλέον σύγχρονες αισθητικές επεμβάσεις, 
              προσφέρουμε ολοκληρωμένες θεραπευτικές λύσεις
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                id={`treatment-${index}`}
                className={`animate-on-scroll group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isVisible[`treatment-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-black mb-3 group-hover:text-blue-900 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                  <a href="#" className="text-blue-900 text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Περισσότερες πληροφορίες
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-[#f5f5d2]/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 text-sm tracking-[0.2em] uppercase mb-4 block">
                Γιατί να μας Επιλέξετε
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Εμπειρία, Καινοτομία & Εμπιστοσύνη
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">Πιστοποιημένη Εξειδίκευση</h3>
                    <p className="text-gray-600 text-sm">
                      Διεθνώς αναγνωρισμένη εκπαίδευση και συνεχής επιμόρφωση στις τελευταίες εξελίξεις
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">Άμεση Εξυπηρέτηση</h3>
                    <p className="text-gray-600 text-sm">
                      Ευέλικτο πρόγραμμα ραντεβού και προτεραιότητα σε επείγοντα περιστατικά
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">Ανθρωποκεντρική Προσέγγιση</h3>
                    <p className="text-gray-600 text-sm">
                      Εξατομικευμένη φροντίδα με σεβασμό στις ανάγκες κάθε ασθενούς
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1681490708105-46d8267e812c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=600&fit=crop" 
                alt="Clinic"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-blue-900">20+</div>
                  <div>
                    <div className="text-sm text-gray-600">Χρόνια</div>
                    <div className="text-lg font-light">Εμπειρίας</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f5f5d2]/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
            Ξεκινήστε το Ταξίδι σας προς το <br /> Υγιές & Όμορφο Δέρμα
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Επικοινωνήστε μαζί μας σήμερα για να προγραμματίσουμε 
            την πρώτη σας συνάντηση και να σχεδιάσουμε μαζί το θεραπευτικό σας πλάνο
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition-all duration-300">
              ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ ONLINE
            </button>
            <a 
              href="tel:+302610123456" 
              className="border border-black text-black px-8 py-4 text-sm tracking-wider inline-flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              2610 123 456
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;