function RHFSelectB({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="w-full  px-3 rounded-xl text-secondary-900 border1 bg-white 
    focus:bg-white 
    transition-all duration-300 ease-out focus:shadow-md focus:shadow-primary-100 dark:focus:shadow-secondary-200;
         py-3 text-xs ">
        {options.map((option) => (
          <option  key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default RHFSelectB;
