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
 


 export default function Ssignin({handleRegisterClick ,isActive}) { 
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
      <div className="form-box Login " style={{ display: isActive ? 'none' : 'block' }}>
          <h2
  className="animation pb-2 "
  style={{ '--D': 0, '--S': 21 }}
>
  ورود
</h2>
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div
  className="input-box animation"
  style={{ '--D': 1, '--S': 22 }}
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
         <div className="input-box animation" style={{'--D':2, '--S':23}}>
        <RHFTextField
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
        />
        </div>
      <div className=" animation" style={{'--D':3, '--S':24}}>
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
        <div className="flex flex-col justify-center  animation" style={{'--D':4, '--S':25}}>
                   <p className="text-center text-secondary-700 text-[12px]">
  حساب کاربری ندارید؟ 
     </p> <a href="#" onClick={handleRegisterClick} className="SignUpLink"><p className="text-center text-primary-500 pt-2 text-md"> ثبت نام</p> </a>

  </div>
      </form>
        </div>
        );
    }