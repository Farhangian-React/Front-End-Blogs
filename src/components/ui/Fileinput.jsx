import { HiCloudArrowUp } from "react-icons/hi2";
function Fileinput({
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
            `cursor-pointer border-2 border-primary-900 rounded-lg px-3 py-2 text-primary-900
            flex items-center justify-center gap-x-2 ${className}`}>
        {label}
          <HiCloudArrowUp className="w-5 h-5"/>
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
export default Fileinput;
