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

function signup1() {
  const [state, formAction] = useActionState(createUser, initialState);
  const router=useRouter();
    useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
router.push("/signin");
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
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
      عضویت
      </h1>
      <form  action={async (formData) => {
              await formAction({ formData});
             
            }} className="space-y-10">
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
        />
        <div className="">
          {isLoading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <Button
              type="submit"
              className="py-3 px-4 btn btn--primary rounded-xl w-full"
            >
              عضویت
            </Button>
          )}
        </div>
      </form>

      <Link href="/signin" className="text-secondary-400 mt-6 text-center">
        ورود
      </Link>
    </div>
  );
}

export default signup1;
