export function toLocalDateString(date) {
   const options = {
    // weekday: "long",
    year: "numeric",
    month: "2-digit", // <--- تغییر از "numeric" به "2-digit"
    day: "2-digit",   // <--- پیشنهاد می‌شود روز را نیز به "2-digit" تغییر دهید
  };

  return new Date(date).toLocaleDateString("fa-IR", options);
}

export function toLocalDateStringShort(date) {
  return new Date(date).toLocaleDateString("fa-IR");
}



