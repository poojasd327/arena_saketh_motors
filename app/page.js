"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Thippeswamy Nagendrappa",
    text: "I had a great experience purchasing my new car. The delivery was smooth, and my sales executive Naveen was very helpful and professional. Highly recommended!"
  },
  {
    name: "Ramya P M",
    text: "The staff explained all the features clearly and delivered the car on time. Thank you for the excellent and smooth service!"
  },
  {
    name: "Sanjana Jeevan",
    text: "Recently took delivery of our new Eeco. A special thanks to Dadapeer for his excellent support and clear guidance throughout the process."
  },
  {
    name: "Darshan Nadig",
    text: "Got the best deal from Saketh! Fully transparent pricing and on-time delivery. 100% customer satisfaction."
  },
  {
    name: "Kiran Kumar",
    text: "Excellent customer support and transparent loan assistance. Buying our Maruti Brezza from Saketh Automobiles was a fantastic decision!"
  },
  {
    name: "Meghana R",
    text: "Very polite sales staff and hassle-free vehicle delivery experience. Highly satisfied with Saketh Suzuki service!"
  }
];

export default function Home() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [flippedCommercial, setFlippedCommercial] = useState({});
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Book Test Drive Modal States
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [testDriveSubmitted, setTestDriveSubmitted] = useState(false);
  const [testDriveForm, setTestDriveForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const openTestDrive = () => {
    setTestDriveSubmitted(false);
    setIsTestDriveOpen(true);
  };

  const closeTestDrive = () => {
    setIsTestDriveOpen(false);
  };

  const handleTestDriveSubmit = (e) => {
    e.preventDefault();
    setTestDriveSubmitted(true);
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsTestDriveOpen(false);
        setSelectedCar(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isTestDriveOpen || selectedCar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isTestDriveOpen, selectedCar]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoslide for testimonials (pauses when hovered/touched)
  useEffect(() => {
    if (isTestimonialHovered) return;
    const maxIdx = isMobileView ? testimonials.length - 1 : Math.max(0, testimonials.length - 3);

    const interval = setInterval(() => {
      setTestimonialIndex(prev => (prev >= maxIdx ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isTestimonialHovered, isMobileView, testimonials.length]);

  // Adjust index if viewport changes
  useEffect(() => {
    const maxIdx = isMobileView ? testimonials.length - 1 : Math.max(0, testimonials.length - 3);
    if (testimonialIndex > maxIdx) {
      setTestimonialIndex(maxIdx);
    }
  }, [isMobileView, testimonialIndex, testimonials.length]);

  const toggleCommercialFlip = (index) => {
    setFlippedCommercial(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const prevTestimonial = () => {
    const maxIndex = isMobileView ? testimonials.length - 1 : Math.max(0, testimonials.length - 3);
    setTestimonialIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextTestimonial = () => {
    const maxIndex = isMobileView ? testimonials.length - 1 : Math.max(0, testimonials.length - 3);
    setTestimonialIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const cars = [
    { name: "Victoris", type: "Sedan", image: "/images/victoris.webp", popular: true, price: "₹ 8.50 - 11.50 Lakhs*", engine: "1197 cc", mileage: "22.5km/l", power: "66kW@6000rpm" },
    { name: "Swift", type: "Hatchback", image: "/images/swift.webp", popular: true, price: "₹ 6.49 - 9.49 Lakhs*", engine: "1197 cc", mileage: "24.8km/l", power: "60kW@5700rpm" },
    { name: "Brezza", type: "SUV", image: "/images/brezza.webp", price: "₹ 10 - 17 Lakhs*", offerPrice: "₹ 3000* Offer Price", engine: "1462 cc", mileage: "17.03 km/l", power: "103.26bhp@6000rpm" },
    { name: "Ertiga", type: "MUV", image: "/images/ertiga.webp", price: "₹ 10 - 16.48 Lakhs*", offerPrice: "₹ 3000* Offer Price", engine: "1462 cc", mileage: "19.01 km/l", power: "88.50bhp@4000rpm" },
    { name: "Dzire", type: "Sedan", image: "/images/dzire.webp", price: "₹ 6.79 - 11.22 Lakhs*", offerPrice: "₹ 13000* Offer Price", engine: "1197 cc", mileage: "24.79 km/l", power: "80 bhp @ 5700 rpm" },
    { name: "Celerio", type: "Hatchback", image: "/images/celerio.webp", price: "₹ 6 - 8.41 Lakhs*", offerPrice: "₹ 72,000* Offer Price", engine: "998 cc", mileage: "21.63 km/l", power: "67bhp@6000rpm" },
    { name: "WagonR", type: "Hatchback", image: "/images/waganr.webp", price: "₹ 6 - 9.29 Lakhs*", offerPrice: "₹ 62000* Offer Price", engine: "998 cc", mileage: "21.79 km/l", power: "81.80bhp@6000rpm" },
    { name: "S-Presso", type: "Mini SUV", image: "/images/spresso.webp", price: "₹ 5 - 7.70 Lakhs*", offerPrice: "₹ 72000* Offer Price", engine: "998 cc", mileage: "21.4 km/l", power: "67.05bhp@5500rpm" },
    { name: "Alto K10", type: "Hatchback", image: "/images/alto_k10.webp", price: "₹ 3 - 5.96 Lakhs*", offerPrice: "₹ 72000* Offer Price", engine: "998 cc", mileage: "24.39 km/l", power: "49kW @ 5500 rpm" },
    { name: "Eeco", type: "Van", image: "/images/Eeco.webp", price: "₹ 6 - 7.3 Lakhs*", offerPrice: "₹ 37000* Offer Price", engine: "1196 cc", mileage: "16.11 km/l", power: "61.7bhp@6000rpm" }
  ];

  const commercialVehicles = [
    { name: "Tour S", category: "Commercial", image: "/images/tour_s.webp", price: "₹ 6.50 - 7.45 Lakhs*", engine: "1197 cc", mileage: "23.15 km/l", power: "66kW @ 6000 rpm" },
    { name: "Tour M", category: "Commercial", image: "/images/tour_m.webp", price: "₹ 9.74 - 10.69 Lakhs*", engine: "1462 cc", mileage: "21.10 km/l", power: "75.8@6000" },
    { name: "Tour H1", category: "Commercial", image: "/images/tour_h1.webp", price: "₹ 4.8 - 5.7 Lakhs*", engine: "998 cc", mileage: "22.05 km/l", power: "49 kw @ 5500 rpm" },
    { name: "Tour H3", category: "Commercial", image: "/images/tour_h3.webp", price: "₹ 5.51 - 6.41 Lakhs*", engine: "998 cc", mileage: "25.40 km/l", power: "49 kW(66.62 PS) @5500 rpm" },
    { name: "Tour V", category: "Commercial", image: "/images/tour_V.webp", price: "₹ 5.23 - 6.49 Lakhs*", engine: "1197 cc", mileage: "20.20 km/l", power: "Gasoline: 59.4/6000 CNG: 52.7/6000" }
  ];
  const services = [
    {
      title: "Periodic Maintenance",
      icon: "⚙️",
      description: "Keep your vehicle running smoothly with our comprehensive scheduled maintenance programs."
    },
    {
      title: "Body & Paint Repair",
      icon: "🎨",
      description: "Expert collision repair and factory-finish painting to restore your car to pristine condition."
    },
    {
      title: "Wheel Alignment",
      icon: "🛞",
      description: "Precision alignment and balancing services for optimal handling and extended tire life."
    }
  ];
  const accessories = [
    {
      title: "Genuine Parts",
      icon: "🛠️",
      items: ["Maruti Suzuki Genuine Spares", "Engine Components", "Brake Pads & Discs"]
    },
    {
      title: "Interior Styling",
      icon: "✨",
      items: ["Premium Seat Covers", "Ambient Lighting", "Designer Floor Mats"]
    },
    {
      title: "Safety Essentials",
      icon: "🛡️",
      items: ["Dash Cams", "Parking Sensors", "Child Safety Seats"]
    }
  ];


  return (
    <main className="main-wrapper">
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-top">
            <div className="logo">
              <Image src="/saketh_motors_logo.jpeg" alt="Saketh Automobiles Logo" width={150} height={50} style={{ objectFit: 'contain' }} />
            </div>
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <Link href="#models" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Models</Link>
            <Link href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="#testimonials" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
            <Link href="#book" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Book Service</Link>
            <button className="btn-contact" onClick={() => openTestDrive()}>Book Test Drive</button>
          </nav>
        </header>
      </div>

      {/* Hero Section - Edge-to-Edge */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text-area">
            <div className="hero-badge">Welcome to Saketh Automobiles</div>
            <h1 className="hero-title">Drive Home Your<br /><span>Dream</span> Maruti Suzuki</h1>
            <p className="hero-desc">
              Experience the perfect blend of style, cutting-edge performance, and unmatched efficiency. Begin your journey with Saketh Automobiles today.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => {
                  document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Models
              </button>
              <button className="btn-outline" onClick={() => openTestDrive()}>Book Test Drive</button>
            </div>

          </div>
        </div>
      </section>

      <div className="container">

      {/* Car Range Section */}
      <section id="models" className="section">
        <div className="car-showcase">
          <div className="car-tabs">
            <div className="car-tabs-row">
              {cars.slice(0, 7).map((car, index) => (
                <button 
                  key={index} 
                  className={`car-tab-btn ${index === activeCarIndex ? 'car-tab-active' : ''}`}
                  onClick={() => setActiveCarIndex(index)}
                >
                  {car.name}
                </button>
              ))}
            </div>
            <div className="car-tabs-row">
              {cars.slice(7).map((car, index) => {
                const actualIndex = index + 7;
                return (
                  <button 
                    key={actualIndex} 
                    className={`car-tab-btn ${actualIndex === activeCarIndex ? 'car-tab-active' : ''}`}
                    onClick={() => setActiveCarIndex(actualIndex)}
                  >
                    {car.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="car-showcase-content">
            <div className="car-showcase-image-wrapper">
              <img 
                src={cars[activeCarIndex].image} 
                alt={cars[activeCarIndex].name} 
                className="car-showcase-img"
              />
            </div>
            
            <div className="car-showcase-actions">
              <button className="btn-dark" onClick={() => setSelectedCar(cars[activeCarIndex])}>
                Explore Details &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Commercial Vehicles Section */}
      <section className="section section-alt">
        <h2 className="section-title">Explore <span>Commercial Vehicles</span></h2>
        <div className="car-grid">
          {commercialVehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className="car-card flip-card"
              style={{ '--card-index': index }}
            >
              <div className={`flip-card-inner ${flippedCommercial[index] ? 'is-flipped' : ''}`}>
                {/* Front Side */}
                <div className="flip-card-front">
                  <div className="car-card-img-wrapper">
                    <img src={vehicle.image} alt={vehicle.name} className="car-card-img" />
                  </div>
                  <div className="car-card-content">
                    <h3 className="car-card-title">{vehicle.category || "Commercial"} {vehicle.name}</h3>
                    
                    <div className="car-card-price-section">
                      <span className="price-label">Ex-Showroom Price</span>
                      <div className="price-value">{vehicle.price}</div>
                    </div>

                    <div className="car-card-footer">
                      <button 
                        className="car-card-explore" 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCommercialFlip(index);
                        }}
                      >
                        Explore Details <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back">
                  <div>
                    <div className="flip-back-header">
                      <h3 className="flip-back-title">{vehicle.category || "Commercial"} {vehicle.name}</h3>
                      <div className="flip-back-price">{vehicle.price}</div>
                    </div>

                    <div className="flip-specs-list">
                      <div className="flip-spec-row">
                        <span className="flip-spec-label">Engine</span>
                        <span className="flip-spec-val">{vehicle.engine}</span>
                      </div>
                      <div className="flip-spec-row">
                        <span className="flip-spec-label">Mileage</span>
                        <span className="flip-spec-val">{vehicle.mileage}</span>
                      </div>
                      <div className="flip-spec-row">
                        <span className="flip-spec-label">Power</span>
                        <span className="flip-spec-val">{vehicle.power}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <h2 className="section-title">Professional <span>Services</span></h2>
        <div className="feature-grid">
          {services.map((service, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{service.title}</h3>
              <p className="feature-desc" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontWeight: '500' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accessories Section */}
      <section id="accessories" className="section section-alt">
        <h2 className="section-title">Accessories <span>Showcase</span></h2>
        <div className="feature-grid">
          {accessories.map((accessory, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">{accessory.icon}</div>
              <h3 className="feature-title">{accessory.title}</h3>
              <ul className="feature-list">
                {accessory.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <h2 className="section-title">What Our <span>Customers Say</span></h2>

        <div 
          className="testimonial-slider-viewport"
          onMouseEnter={() => setIsTestimonialHovered(true)}
          onMouseLeave={() => setIsTestimonialHovered(false)}
          onTouchStart={() => setIsTestimonialHovered(true)}
          onTouchEnd={() => setIsTestimonialHovered(false)}
        >
          <div 
            className="testimonial-slider-track"
            style={{ 
              transform: `translateX(-${testimonialIndex * (isMobileView ? 100 : 100 / 3)}%)` 
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-dots">
          {Array.from({ length: isMobileView ? testimonials.length : Math.max(1, testimonials.length - 2) }).map((_, idx) => (
            <button 
              key={idx} 
              className={`dot-btn ${idx === testimonialIndex ? 'dot-active' : ''}`}
              onClick={() => setTestimonialIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="book" className="section section-alt">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
              Feel free to contact us any time. We will get back to you as soon as we can!
            </p>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-field">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="contact-field">
                <input type="text" placeholder="Email / Phone Number" required />
              </div>
              <div className="contact-field">
                <textarea placeholder="Message" rows="3" required></textarea>
              </div>
              <button type="submit" className="contact-btn-send">SEND</button>
            </form>
          </div>

          <div className="contact-right">
            <div className="contact-accent-block-top"></div>
            <div className="contact-info-card">
              <h3 className="contact-info-title">Info</h3>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                  <span>info@sakethmotors.com</span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span>Saketh Automobiles, Main Road</span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                  <span>09:00 - 19:00</span>
                </div>
              </div>
            </div>
            <div className="contact-accent-block-bottom"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1: Brand */}
            <div className="footer-brand">
              <div className="footer-logo-wrapper">
                <Image src="/saketh_motors_logo.jpeg" alt="Saketh Automobiles Logo" width={160} height={55} style={{ objectFit: 'contain' }} />
              </div>
              <p className="footer-brand-desc">
                Your trusted authorized Maruti Suzuki Arena & Commercial dealership. Delivering performance, style, and 100% customer satisfaction.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Vehicles */}
            <div className="footer-col">
              <h4 className="footer-col-title">Our Vehicles</h4>
              <ul className="footer-links-list">
                <li><Link href="#models">Brezza</Link></li>
                <li><Link href="#models">Swift</Link></li>
                <li><Link href="#models">Ertiga</Link></li>
                <li><Link href="#models">Dzire</Link></li>
                <li><Link href="#models">Alto K10</Link></li>
                <li><Link href="#models">Commercial Tour Range</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="footer-col">
              <h4 className="footer-col-title">Services & Care</h4>
              <ul className="footer-links-list">
                <li><Link href="#services">Periodic Maintenance</Link></li>
                <li><Link href="#services">Body & Paint Repair</Link></li>
                <li><Link href="#services">Wheel Alignment</Link></li>
                <li><Link href="#accessories">Genuine Spares & Accessories</Link></li>
                <li><button type="button" onClick={() => openTestDrive()}>Book Test Drive</button></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Showroom</h4>
              <ul className="footer-contact-info">
                <li>📍 Main Road, Saketh Automobiles</li>
                <li>📞 +91 98765 43210</li>
                <li>✉️ info@sakethmotors.com</li>
                <li>🕒 Mon - Sun: 09:00 AM - 07:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom-row">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Saketh Automobiles. All rights reserved. Authorized Maruti Suzuki Dealer.
            </p>
            <div className="footer-bottom-links">
              <Link href="#">Privacy Policy</Link>
              <span>•</span>
              <Link href="#">Terms & Conditions</Link>
              <span>•</span>
              <Link href="#">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>

      </div>

      {/* Car Details Modal */}
      {selectedCar && (
        <div className="modal-overlay" onClick={() => setSelectedCar(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCar(null)}>&times;</button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedCar.image} alt={selectedCar.name} />
                <div className="modal-car-badge">{selectedCar.name}</div>
              </div>
              
              <div className="modal-info">
                <div className="modal-badge">{selectedCar.category || "Arena"} Vehicle</div>
                <h2 className="modal-vehicle-title">{selectedCar.name}</h2>
                
                <div className="modal-price-block">
                  <span className="modal-price-label">Ex-Showroom Price</span>
                  <div className="modal-price-val">{selectedCar.price}</div>
                </div>
                
                <div className="modal-specs">
                  <div className="modal-spec-card">
                    <div className="modal-spec-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="modal-spec-details">
                      <span className="modal-spec-label">Engine</span>
                      <span className="modal-spec-value">{selectedCar.engine}</span>
                    </div>
                  </div>

                  <div className="modal-spec-card">
                    <div className="modal-spec-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 22v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path>
                        <path d="M12 2v10"></path>
                        <path d="m9 5 3-3 3 3"></path>
                      </svg>
                    </div>
                    <div className="modal-spec-details">
                      <span className="modal-spec-label">Mileage</span>
                      <span className="modal-spec-value">{selectedCar.mileage}</span>
                    </div>
                  </div>

                  <div className="modal-spec-card">
                    <div className="modal-spec-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <div className="modal-spec-details">
                      <span className="modal-spec-label">Power</span>
                      <span className="modal-spec-value">{selectedCar.power}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-cta-row">
                  <button 
                    className="btn-primary" 
                    style={{ width: '100%' }} 
                    onClick={() => { 
                      setSelectedCar(null); 
                      openTestDrive();
                    }}
                  >
                    Book Test Drive Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Book Test Drive Modal */}
      {isTestDriveOpen && (
        <div className="modal-overlay" onClick={closeTestDrive}>
          <div className="test-drive-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeTestDrive} aria-label="Close modal">
              &times;
            </button>

            {!testDriveSubmitted ? (
              <>
                <div className="test-drive-header">
                  <div className="test-drive-badge">
                    Saketh Automobiles
                  </div>
                  <h2 className="test-drive-title">
                    Book a <span>Test Drive</span>
                  </h2>
                  <p className="test-drive-desc">
                    Experience your favorite Maruti Suzuki car firsthand. Fill in your details below and our team will get in touch to confirm your appointment.
                  </p>
                </div>

                <form className="test-drive-form" onSubmit={handleTestDriveSubmit}>
                  <div className="test-drive-field">
                    <label className="test-drive-label" htmlFor="td-name">Full Name *</label>
                    <input
                      id="td-name"
                      type="text"
                      className="test-drive-input"
                      placeholder="Enter your name"
                      required
                      value={testDriveForm.name}
                      onChange={(e) => setTestDriveForm({ ...testDriveForm, name: e.target.value })}
                    />
                  </div>

                  <div className="test-drive-field">
                    <label className="test-drive-label" htmlFor="td-email">Email Address *</label>
                    <input
                      id="td-email"
                      type="email"
                      className="test-drive-input"
                      placeholder="Enter your email"
                      required
                      value={testDriveForm.email}
                      onChange={(e) => setTestDriveForm({ ...testDriveForm, email: e.target.value })}
                    />
                  </div>

                  <div className="test-drive-field">
                    <label className="test-drive-label" htmlFor="td-message">Message *</label>
                    <textarea
                      id="td-message"
                      className="test-drive-textarea"
                      placeholder="Preferred date, time slot, showroom location, or any questions..."
                      rows="3"
                      required
                      value={testDriveForm.message}
                      onChange={(e) => setTestDriveForm({ ...testDriveForm, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="test-drive-submit-btn">
                    <span>Confirm Test Drive Booking</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </form>
              </>
            ) : (
              <div className="test-drive-success">
                <div className="test-drive-success-icon">✓</div>
                <h3 className="test-drive-success-title">Booking Received!</h3>
                <p className="test-drive-success-desc">
                  Thank you, <strong>{testDriveForm.name}</strong>! We have received your test drive request. Our team at Saketh Automobiles will contact you at <strong>{testDriveForm.email}</strong> shortly to confirm your scheduled slot.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    closeTestDrive();
                    setTestDriveForm({ name: "", email: "", message: "" });
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
