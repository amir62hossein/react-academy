import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header/header';
import Footer from '../../components/common/Footer/footer';
import Courses from "../../components/CourseComponents/Courses";
import Input from '../../components/common/Input/Input'
import { motion } from 'framer-motion';

const Course = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="container mx-auto">
                <Header />
                <Courses/>
                
            </div>
            <Footer />
        </motion.div>

    );
}
export default Course;