export default function RHFTextFieldB({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  validationSchema = {},
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className={` textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
      </label>
    <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        // تغییر: فقط bg-white را نگه دارید و !important را حذف کنید
        className={`bg-white w-full  px-3 rounded-xl text-secondary-900 border1 
    focus:bg-white 
    transition-all duration-300 ease-out focus:shadow-md focus:shadow-primary-100 dark:focus:shadow-secondary-200;
         py-3 text-xs  ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <span className="text-primary-500 block text-xs mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
