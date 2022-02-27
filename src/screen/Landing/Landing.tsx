import React from "react";
import Header from '../../components/common/Header/header'
import LandingServices from "../../components/LandingComponents/LandingServices/LandingServices";
import Footer from "../../components/common/Footer/footer";
import LandingTeacher from "../../components/LandingComponents/LandingTeacher/LandingTeachers";
import LandingOffers from "../../components/LandingComponents/LanndingOffer/LandingOffers";
import LandingNews from "../../components/LandingComponents/LandingNews/LandingNews";
import LandingStartSection from "../../components/LandingComponents/LandingStartSection/LandingStartSection";
import LandingBestCourses from "../../components/LandingComponents/LandingBestCourses/LandingBestCourses";
import { motion } from "framer-motion"

function Landing() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="container mx-auto">
        <Header />
        <LandingStartSection />
        <LandingServices />
        <LandingBestCourses />
        <LandingNews />
        <LandingTeacher />
        <LandingOffers />
      </div>
      <Footer />
    </motion.div>
  );
}
export default Landing;
