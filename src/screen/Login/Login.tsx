import React, { useState } from 'react'
import Div from '../../hok/Div'
import Logincomponent from '../../components/LoginComponents/Login'
import Registercomponent from '../../components/LoginComponents/Register'
import Tab from '../../components/LoginComponents/Tab'
import {motion} from 'framer-motion'
const Login = () => {
    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)


    return (
        <Div>
            <motion.div initial={{opacity : 0}} animate={{opacity : 1}} className=' 2xl:flex 2xl:h-screen 2xl:flex-row xl:flex-col bg-blue-50 '>
            <div className=" 2xl:w-2/3  xl:w-full  mx-auto ">
                    <Tab login={login} setLogin={setLogin} register={register} setRegister={setRegister} />
                    {login && <Logincomponent />}
                    {register && <Registercomponent />}
                </div>
               
               
                 <div className='2xl:w-700 bg-blue-300 border border-transparent 2xl:block xl:block lg:block md:hidden sm:hidden'>
                    <h1 className='text-white 2xl:text-5xl xl:text-3xl text-center 2xl:my-20 xl:my-10 lg:my-'>ورود و ثبت نام</h1>
                    <img className=' block mx-auto' src={require("../../assets/images/register/Register.svg").default} alt=""/>
                </div> 
                
               
            </motion.div>

        </Div>

    )
}
export default Login