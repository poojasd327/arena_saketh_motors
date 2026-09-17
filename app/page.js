"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Tour S", category: "Commercial", image: "/images/tour_s.webp", price: "₹ 6.50 - 7.45 Lakhs*", offerPrice: "Offer Available Soon", engine: "1197 cc", mileage: "23.15 km/l", power: "66kW @ 6000 rpm" },
    { name: "Tour M", category: "Commercial", image: "/images/tour_m.webp", price: "₹ 9.74 - 10.69 Lakhs*", offerPrice: "Offer Available Soon", engine: "1462 cc", mileage: "21.10 km/l", power: "75.8@6000" },
    { name: "Tour H1", category: "Commercial", image: "/images/tour_h1.webp", price: "₹ 4.8 - 5.7 Lakhs*", offerPrice: "Offer Available Soon", engine: "998 cc", mileage: "22.05 km/l", power: "49 kw @ 5500 rpm" },
    { name: "Tour H3", category: "Commercial", image: "/images/tour_h3.webp", price: "₹ 5.51 - 6.41 Lakhs*", offerPrice: "Offer Available Soon", engine: "998 cc", mileage: "25.40 km/l", power: "49 kW(66.62 PS) @5500 rpm" },
    { name: "Tour V", category: "Commercial", image: "/images/tour_V.webp", price: "₹ 5.23 - 6.49 Lakhs*", offerPrice: "Offer Available Soon", engine: "1197 cc", mileage: "20.20 km/l", power: "Gasoline: 59.4/6000 CNG: 52.7/6000" }
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
      title: "Wheel Alignment & Balancing",
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
    }
  ];

  return (
    <main className="container">
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
          <button className="btn-contact">Book Test Drive</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text-area">
            <div className="hero-badge">Welcome to Saketh Automobiles</div>
            <h1 className="hero-title">Drive Home Your<br /><span>Dream</span> Maruti Suzuki</h1>
            <p className="hero-desc">
              Experience the perfect blend of style, cutting-edge performance, and unmatched efficiency. Begin your journey with Saketh Automobiles today.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Explore Models</button>
              <button className="btn-outline">Book Test Drive</button>
            </div>
            
            <div className="hero-stats">
              <div className="stat"><strong>500+</strong><span>Cars Delivered</span></div>
              <div className="stat"><strong>10+</strong><span>Years Experience</span></div>
              <div className="stat"><strong>100%</strong><span>Satisfaction</span></div>
            </div>
          </div>
          <div className="hero-image-area">
            <div className="hero-image-bg-shape"></div>
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000" 
              alt="Sleek Car" 
              className="hero-main-img"
            />
          </div>
        </div>
      </section>

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
                Discover More
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
            <div key={index} className="car-card">
              <div className="car-card-img-wrapper">
                <img src={vehicle.image} alt={vehicle.name} className="car-card-img" />
              </div>
              <div className="car-card-content">
                <h3>{vehicle.name}</h3>
                <div className="car-card-type">Commercial</div>
                <div className="car-card-footer">
                  <button className="car-card-explore" onClick={() => setSelectedCar(vehicle)}>
                    Explore Details <span>&rarr;</span>
                  </button>
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
              <div className="feature-icon-wrapper">{service.icon}</div>
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
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-author">{testimonial.name}</div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Book Service Section */}
      <section id="book" className="section section-alt">
        <h2 className="section-title">Book Our <span>Service</span></h2>
        <div className="form-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleModel">Vehicle Model</label>
              <select id="vehicleModel" required defaultValue="">
                <option value="" disabled>Select your vehicle model</option>
                {[...cars.map(c => c.name), ...commercialVehicles.map(c => c.name)].map((car, index) => (
                  <option key={index} value={car}>{car}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-submit">Book Service</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Image src="/saketh_motors_logo.jpeg" alt="Saketh Automobiles Logo" width={120} height={40} style={{ objectFit: 'contain' }} />
          </div>
          <div className="footer-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Saketh Automobiles. All rights reserved.
        </div>
      </footer>

      {/* Car Details Modal */}
      {selectedCar && (
        <div className="modal-overlay" onClick={() => setSelectedCar(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCar(null)}>&times;</button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedCar.image} alt={selectedCar.name} />
              </div>
              <div className="modal-info">
                <h2>{selectedCar.category || "Arena"} {selectedCar.name} Ex-Showroom Price</h2>
                <div className="modal-price">
                  {selectedCar.price}
                  {selectedCar.offerPrice && <span className="modal-offer-price">{selectedCar.offerPrice}</span>}
                </div>
                
                <div className="modal-specs">
                  <div className="spec-item">
                    <div className="spec-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div className="spec-details">
                      <span className="spec-label">Engine</span>
                      <span className="spec-value">{selectedCar.engine}</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path><path d="M7 12V7a5 5 0 0 1 10 0v5"></path><path d="M12 2v2"></path></svg>
                    </div>
                    <div className="spec-details">
                      <span className="spec-label">Mileage</span>
                      <span className="spec-value">{selectedCar.mileage}</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                    </div>
                    <div className="spec-details">
                      <span className="spec-label">Power</span>
                      <span className="spec-value">{selectedCar.power}</span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-footer-text">
                  Our professional and well-trained staff is ready to assist you
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
