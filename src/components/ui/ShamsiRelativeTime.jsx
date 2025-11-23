// components/ShamsiRelativeTime.jsx
"use client";

import React, { useMemo } from 'react';
import moment from 'moment-jalaali';
import { convertToPersianDigits } from '@/utils/convertToPersian';
// بارگذاری زبان فارسی
moment.loadPersian();

/**
 * کامپوننت نمایش زمان نسبی تاریخ شمسی ورودی نسبت به امروز.
 * @param {object} props
 * @param {string} props.shamsiDate - تاریخ ورودی شمسی با فرمت YYYY/MM/DD (مثال: "1402/09/05")
 * @returns {JSX.Element}
 */
const ShamsiRelativeTime = ({ shamsiDate , post }) => {
const convertPersianDigitsToEnglish = (str) => {
  if (typeof str !== 'string') return str;
  
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let result = str;
  
  for (let i = 0; i < persianDigits.length; i++) {
    const regex = new RegExp(persianDigits[i], 'g');
    result = result.replace(regex, englishDigits[i]);
  }
  return result;
};
  // useMemo برای اجرای محاسبات تنها زمانی که shamsiDate تغییر می‌کند، استفاده می‌شود.
  const relativeTimeText = useMemo(() => {
    if (!shamsiDate) {
      return <span className="text-red-500">تاریخ ورودی مشخص نشده است.</span>;
    }

      const cleanShamsiDate = convertPersianDigitsToEnglish(shamsiDate);
    
    // 1. تبدیل رشته تاریخ ورودی به شیء moment شمسی (در حالت Strict)
    const inputMoment = moment(cleanShamsiDate, 'jYYYY/jMM/jDD', true);
 
    
  if (!inputMoment.isValid()) {
      // این خط باید اجرا شود اگر تاریخ ورودی نامعتبر باشد.
      return <span className="text-red-500">فرمت تاریخ ورودی نامعتبر است (باید YYYY/MM/DD شمسی باشد).</span>;
    }
    
    // *** اضافه شده برای دیباگ: اگر به اینجا رسیدیم، تاریخ معتبر است ***
    console.log(`Input Moment is valid: ${inputMoment.format('jYYYY/jMM/jDD')}`);
    // 2. دریافت تاریخ امروز و حذف ساعت برای مقایسه دقیق روزانه
    const today = moment().startOf('day');
    
    // 3. محاسبه تفاوت روزها
    // diffDays > 0: تاریخ ورودی گذشته است (X روز پیش)
    // diffDays = 0: تاریخ ورودی امروز است
    // diffDays < 0: تاریخ ورودی آینده است (X روز دیگر)
    const diffDays = today.diff(inputMoment, 'days');
     const diffMonths = today.diff(inputMoment, 'months');
      const diffYears = today.diff(inputMoment, 'years');

    if (diffDays === 0) {
      return <span className="text-green-600 font-bold text-lg">امروز</span>;
    } else if (diffDays > 0 && diffMonths === 0 && diffYears === 0 ) {
      // گذشته: "X روز پیش"
      return (
        <span >
          {convertToPersianDigits(diffDays)} روز پیش
        </span>
      );
    } 
    else if (diffMonths > 0 && diffMonths < 12 && diffYears === 0 ) {
      // گذشته: "X روز پیش"
      return (
        <span >
          {convertToPersianDigits(diffMonths)} ماه پیش
        </span>
      );
    }
      else if ( diffYears > 0 && diffYears < 5 ) {
      // گذشته: "X روز پیش"
      return (
        <span >
          {convertToPersianDigits(diffYears)} سال پیش
        </span>
      );
    }
    else {
      // آینده: "X روز دیگر"
      const futureDays = Math.abs(diffDays);
      return (
        <span >
          {convertToPersianDigits(futureDays)} روز دیگر
        </span>
      );
    }

  }, [shamsiDate]); // وابستگی فقط به shamsiDate

  return (
      <div className="w-full mx-auto p-5 mb-5 bg-white flex flex-row justify-between
        rounded-xl bordertop transition-all duration-300 hover:shadow-primary-300/50">
<p className='text-lg text-secondary-400 font-bold mb-1'>{post.category.title}</p>
      
        <p className="text-sm text-secondary-400 font-thin mb-1">
        {relativeTimeText}
        </p>
     

    </div>
  );
};

export default ShamsiRelativeTime;
