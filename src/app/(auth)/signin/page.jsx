import AuthFormContainer from "@/app/(dashboard)/profile/_/components/AuthFormContainer";


function signin() {
  return(
    <div>
    <AuthFormContainer/>
     </div>
  );
}

   {/* <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
              ورود
            </Button>
          )}
        </div>
      </form>

      <Link href="/signup" className="text-secondary-400 mt-6 text-center">
        ایجاد حساب کاربری
      </Link>
    </div>
    */}
   



export default signin;
