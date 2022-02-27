import { NewsDetailForm } from "./interface";
 interface UserCmdProp{
        value:NewsDetailForm;
       }
const UserComment=({value}:UserCmdProp)=>{
   console.log(value)
    return(
        <div className="pt-2">
           <section className="flex w-700 min-h-22 py-2 mx-auto rounded-xl border">
               <figure className="flex-row w-20 h-20 mx-2 my-1 rounded-full border-2 border-gray-400"></figure>
               <div className="flex-row w-600 min-h-20">
                    <p className="w-96 h-6 pt-1 mx-2 mt-2 border-b text-sm">{value.email}</p>
                    <p className="w-600 mt-2 text-gray-600 text-sm"> {value.des} </p>
                    <p className="w-96 h-6 pt-1 mx-2 mt-2 border-t text-xs">تاریخ ارسال: 1400/01/01</p>
               </div>
           </section>
        </div>
    );

}
export default UserComment;