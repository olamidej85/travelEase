import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Destinations from "./components/destinations";
import Deals from "./components/deals";
import Footer from "./components/footer";
import KenyaSection from "./components/kenyaSection";
import DubaiSection from "./components/dubaiSection";
import "./App.css";
import DealsPage from "./components/dealsPage";
import ZanzibarSection from "./components/zanzibarSection";
import BookFlight from "./components/bookFlight";
import Login from "./components/login";
import BookingSuccess from "./components/bookingSuccess";
import PaymentPage from "./components/paymentPage";
import ContactPage from "./components/contactPage";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600,  
      once: false,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="app">
      <NavBar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Destinations />
                <Deals />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/bookFlight" element={<BookFlight />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/dealsPage" element={<DealsPage />} />
          <Route path="/kenyaSection" element={<KenyaSection />} />
          <Route path="/dubaiSection" element={<DubaiSection />} />
          <Route path="/zanzibarSection" element={<ZanzibarSection />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
          <Route path="/bookingSuccess" element={<BookingSuccess />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
