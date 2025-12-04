"use client";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import RHFTextField from "@/components/ui/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useActionState } from 'react';
import toast from "react-hot-toast";
import {createUser} from "@/lib/actions1";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const initialState = {
  error: "",
  message: "",
};

const schema = yup
  .object({
    name: yup.string().min(5).required("نام و نام خانوادگی را وارد کنید"),
    email: yup.string().email().required("ایمیل را وارد کنید"),
    password: yup.string().required("رمز عبور را وارد کنید"),
  })
  .required();

 export default function SingoutS({handleLoginClick,isActive}) {
  const [state, formAction] = useActionState(createUser, initialState);
  const router=useRouter();
    useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
handleLoginClick();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);
 
  const {
    register,
  handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema), mode: "onTouched" }); 


  return (

      <div className="mx-auto mt-5   bg-white/30  backdrop-blur-2xl   py-8 px-5   w-3/4 border-2 border-[#f2ece7]" style={{ display: isActive ? 'block' : 'none' }}>
          <p
  className="text-lg text-[#384033] text-center font-bold pb-2 "

>
  ثبت نام
</p>
              <form  action={async (formData) => {
              await formAction({ formData});
             
            }} className="space-y-3">
                <div className="input-box  " >
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        </div>
         <div className="input-box  " >
        <RHFTextField
          label="ایمیل"
          name="email"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        </div>
        <div className="input-box  " >
        <RHFTextField
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
        />
        </div>

       <div className="input-box  " >
          {isLoading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <Button
              type="submit"
              className=" btnl rounded-xl w-full py-1.5 px-3 mt-2"
            >
              عضویت
            </Button>
          )}
        </div> 
         <div  className="flex flex-col justify-center  ">
            <p className="text-center text-secondary-700 text-[12px]">
  حساب کاربری دارید؟ 
     </p> <a href="#" onClick={handleLoginClick} >
      <p className="text-center text-[#384033] pt-2 text-md">  ورود</p> </a>

 
                </div>
      </form>
     </div>
  );
}
