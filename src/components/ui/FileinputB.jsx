import { HiCloudArrowUp } from "react-icons/hi2";
function FileinputB({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired,
  className,
   errors,
  validationSchema = {},
  ...rest
}) {
   const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div className="textField">
      
      <label   htmlFor="file-upload" 
        className={
            `cursor-pointer w-full  px-3 rounded-xl text-secondary-900 border1 bg-white 
    focus:bg-white 
    transition-all duration-300 ease-out focus:shadow-md focus:shadow-primary-100 dark:focus:shadow-secondary-200;
         py-3 text-sm 
            flex items-center justify-center gap-x-2 ${className}`}>
        {label}
          <HiCloudArrowUp  className="text-[#81b061] w-5 h-5"/>
         <input id="file-upload" type="file" className="sr-only"
        name={name}
        dir={dir}
        value={value}
        onChange={onChange}
    
      />
      </label>
         {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default FileinputB;
