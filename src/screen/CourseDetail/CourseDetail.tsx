import React from 'react'
import Header from '../../components/common/Header/header'
import Footer from '../../components/common/Footer/footer'
import CourseDetailComponent from '../../components/CourseDetailComponent/CourseDetailComponent'
import Div from '../../hok/Div'
import { motion } from "framer-motion";
const CourseDetail = () => {
    return(
        <Div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto">
                <Header />
                <CourseDetailComponent />
            </motion.div>
            <Footer />
        </Div>
    )
}
export default CourseDetail