import axios from "axios";
import React from "react";
const RegisterUser = async (values: any) => {
  try {
    const result = await axios.post(
      "https://academy-kgb-react.herokuapp.com/api/auth/register",
      values
    );
    return result.data;
  } catch (error) {
    return null;
  }
};
export default RegisterUser;
