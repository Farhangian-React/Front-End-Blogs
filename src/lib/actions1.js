"use server";
import { signupApi } from "../services/authService";
import { revalidatePath } from "next/cache";

export async function createUser(prevState, { formData, }) {


  const rawFormData = {
    name: formData.get("name"),
    email:formData.get("email"),
password:formData.get("password")
  };
  try {

    const {
      data: { message },
    } = await signupApi(rawFormData);
   //revalidatePath("/signin");
    return {
      message,
    };
    
  }
  
  catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
