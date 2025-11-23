const convertPersianDigitsToEnglish = (str) => {
  if (typeof str !== 'string') return str;
  
  // نگاشت ارقام فارسی به لاتین
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let result = str;
  
  for (let i = 0; i < persianDigits.length; i++) {
    // استفاده از RegExp سراسری (g) برای جایگزینی همه نمونه‌ها
    const regex = new RegExp(persianDigits[i], 'g');
    result = result.replace(regex, englishDigits[i]);
  }
  return result;
};
