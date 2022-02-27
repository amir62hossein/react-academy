import React from "react";
import axios from "axios";
const LoginUser =async (values:any)=>{
    try{
        const result = await axios.post(
            "https://academy-kgb-react.herokuapp.com/api/auth/login",
            values
          );
          return result.data;

    }catch(error){
        return console.log(error);
    }
}
export default LoginUser;