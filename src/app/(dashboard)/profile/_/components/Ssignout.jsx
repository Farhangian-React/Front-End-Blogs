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

 export default function Ssignout({handleLoginClick,isActive}) {
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


    <div className="form-box Register" style={{ display: isActive ? 'block' : 'none' }}>
                  <h2
  className=" animation pb-1"
  style={{ '--li': 18, '--S': 0 }}
>
  ثبت نام
</h2>
              <form  action={async (formData) => {
              await formAction({ formData});
             
            }} className="space-y-3">
                <div className="input-box animation " style={{'--li':18, '--S':1}}>
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        </div>
         <div className="input-box animation " style={{'--li':19, '--S':2}}>
        <RHFTextField
          label="ایمیل"
          name="email"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        </div>
        <div className="input-box animation " style={{'--li':19, '--S':3}}>
        <RHFTextField
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
        />
        </div>

       <div className="input-box animation " style={{'--li':20, '--S':4}}>
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
         <div  className="flex flex-col justify-center  animation" style={{'--li':21, '--S':5}}>
            <p className="text-center text-secondary-700 text-[12px]">
  حساب کاربری دارید؟ 
     </p> <a href="#" onClick={handleLoginClick} className="SignInLink">
      <p className="text-center text-primary-500 pt-2 text-md">  ورود</p> </a>

 
                </div>
      </form>
     </div>
  );
}
