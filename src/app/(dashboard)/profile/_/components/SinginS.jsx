 "use client";
 import Loading from "@/components/ui/Loading";
 import RHFTextField from "@/components/ui/RHFTextField";
 import { useForm } from "react-hook-form";
 import { yupResolver } from "@hookform/resolvers/yup";
 import * as yup from "yup";
 import { useAuth } from "@/context/AuthContext";
 
 const schema = yup
   .object({
     email: yup.string().email().required("ایمیل را وارد کنید"),
     password: yup.string().required("رمز عبور را وارد کنید"),
   })
   .required();
 


 export default function SinginS({handleRegisterClick,isActive }) { 
     const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema), mode: "onTouched" });
  const { signin } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
  };
     return(
    


      <div className="mx-auto mt-5  bg-white/30  backdrop-blur-2xl   py-8 px-5   w-3/4 border-2 border-[#f2ece7]" style={{ display: isActive ? 'none' : 'block' }}>
          <p
  className="text-lg text-[#384033] text-center font-bold pb-2 "

>
  ورود
</p>
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div
  className="input-box "
 
>
        <RHFTextField
          label="ایمیل"
          name="email"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        
        />
        </div>
         <div className="input-box " >
        <RHFTextField
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
        />
        </div>
      <div >
          {isLoading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <button
              type="submit"
              className=" btnl rounded-xl w-full py-1.5 px-3 mt-5 "
            >
              ورود
            </button>
          )}
        </div> 
        <div className="flex flex-col justify-center  " >
                   <p className="text-center text-secondary-700 text-[12px]">
  حساب کاربری ندارید؟ 
     </p> <a href="#" onClick={handleRegisterClick} ><p className="text-center text-[#384033] pt-2 text-md"> ثبت نام</p> </a>

  </div>
      </form>
        </div>


  
        );
    }