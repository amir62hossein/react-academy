import React from 'react';

interface MenuProps {
    menu: boolean | any;
}
const Menu: React.FC<MenuProps> = ({ menu }) => {
 
    //md:hidden
    const styleNone = 'hidden'
    return (
        <div className={`lg:hidden ${!menu && styleNone}`} id="mobile-menu z-50">
            <ul className="fixed top-0 left-0 h-64 w-full px-2 pt-14 pb-3 space-y-1  bg-gray-100 sm:px-3">
                <li className={`text-black  block px-3 py-2 rounded-md text-base  font-medium`}>خانه</li>
                <li className="text-black block px-3 py-2 rounded-md text-base  font-medium">دوره ها</li>
                <li className=" text-black block px-3 py-2 rounded-md text-base font-medium">اخبار و مقالات</li>
                <li className=" text-black block px-3 py-2 rounded-md text-base font-medium">ورود / ثبت نام</li>
            </ul>
        </div>
    );

}
export default Menu;