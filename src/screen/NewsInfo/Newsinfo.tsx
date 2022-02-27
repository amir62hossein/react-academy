import React from "react";
import Div from "../../hok/Div";
import { motion } from "framer-motion";
import Header from "../../components/common/Header/header";
import Footer from "../../components/common/Footer/footer";
import NewsDetail from "../../components/NewsDetail/NewsDetail";



const NewsInfo = () => {
  return (
    <Div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto">
        <Header />
        <NewsDetail/>
       
        <Footer />
      </motion.div>
    </Div>
  );
};
export default NewsInfo;
