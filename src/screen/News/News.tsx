import * as React from 'react';
import Header from '../../components/common/Header/header';
import Footer from '../../components/common/Footer/footer';
import Courses from '../../components/NewsPageComponent/courses/newsComponents';
import { motion } from 'framer-motion'
const News = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="container mx-auto mb-6">
        <Header />
        <Courses />
      </div>
      <Footer />
    </motion.div>
  )
}

export default News