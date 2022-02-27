import React from 'react'

type TabProps = {
  login: boolean
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
  register: boolean
  setRegister: React.Dispatch<React.SetStateAction<boolean>>
}


const Tab = ({ login, setLogin, register, setRegister }: TabProps) => {

  const loginHandler = () => {
    setLogin(true)
    setRegister(false)
  }
  const registerHandler = () => {
    setLogin(false)
    setRegister(true)
  }

  return (
    <div className=" mx-auto  2xl:mt-8 ">
      <nav className="flex flex-col sm:flex-row w-1/6 mx-auto">
        <button
          onClick={loginHandler}
          className={`text-gray-600  p-8 py-1 px-6 block hover:text-blue-500 focus:outline-none bg-white ${login && "text-blue-500 border-b-2 border-l-2 font-medium border-blue-100"
            }  text-md`}
        >
          ورود
        </button>
        <button
          onClick={registerHandler}
          className={`text-gray-600 w-28 py-1  block hover:text-blue-500  focus:outline-none bg-white ${register && "text-blue-500 border-b-2 border-r-2 font-medium border-blue-100"
            } text-md `}
        >
         ثبت نام
        </button>
      </nav>
    </div>
  );
}
export default Tab