import React from "react";

type BurgerProps = {
  menu: boolean
}

const BurgerMenu = (props: BurgerProps) => {

  const menuValue = props.menu

  return (
    <div className="fixed  flex flex-col flex-nowrap justify-around top-5 left-10 w-8 h-8 z-20" >
      <div className={`transform ${menuValue ? "rotate-45 origin-left bg-gray-400" : "rotate-0"} w-8 h-1 bg-blue-500 rounded transition duration-1000	`} />
      <div className={`w-8 h-1 ${menuValue ? "translate-x-full opacity-0 bg-gray-400	" : "translate-x-0 opacity-95	"} bg-blue-500 rounded transition duration-1000`} />
      <div className={`transform ${menuValue ? "-rotate-45 origin-left bg-gray-400" : "rotate-0"} w-8 h-1 bg-blue-500 rounded transition duration-1000`} />
    </div>
  );
};
export default BurgerMenu;
