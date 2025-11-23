    // pages/index.js یا هر کامپوننت دیگری
    import React, { useState } from 'react';
    import moment from 'moment-jalaali'; // moment-jalaali را وارد کنید

    // حتماً moment-jalaali را به moment متصل کنید
    moment.loadPersian();

    function DateManipulator() {
      const [inputDate, setInputDate] = useState('1402/05/24');
      const [calculatedDate, setCalculatedDate] = useState('');
      const [daysToSubtract, setDaysToSubtract] = useState(10); // پیش‌فرض 10 روز
      const [monthsToSubtract, setMonthsToSubtract] = useState(0); // پیش‌فرض 0 ماه

      const handleCalculateDate = () => {
        // تاریخ ورودی شمسی را به یک آبجکت moment-jalaali تبدیل می‌کنیم
        const jalaaliDate = moment(inputDate, 'jYYYY/jMM/jDD');

        if (jalaaliDate.isValid()) {
          let newDate = jalaaliDate;

          // کم کردن روزها
          if (daysToSubtract > 0) {
            newDate = newDate.subtract(daysToSubtract, 'days');
          }

          // کم کردن ماه‌ها
          if (monthsToSubtract > 0) {
            newDate = newDate.subtract(monthsToSubtract, 'months');
          }

          // فرمت کردن تاریخ جدید به فرمت شمسی 'YYYY/MM/DD'
          setCalculatedDate(newDate.format('jYYYY/jMM/jDD'));
        } else {
          setCalculatedDate('تاریخ وارد شده معتبر نیست.');
        }
      };

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">ماشین‌حساب تاریخ شمسی</h1>

          <div className="mb-4 w-full max-w-md">
            <label htmlFor="inputDate" className="block text-gray-700 text-sm font-bold mb-2">
              تاریخ فعلی (مثال: 1402/05/24):
            </label>
            <input
              type="text"
              id="inputDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              placeholder="مثال: 1402/05/24"
            />
          </div>

          <div className="mb-4 w-full max-w-md">
            <label htmlFor="days" className="block text-gray-700 text-sm font-bold mb-2">
              تعداد روز برای کم کردن:
            </label>
            <input
              type="number"
              id="days"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={daysToSubtract}
              onChange={(e) => setDaysToSubtract(parseInt(e.target.value) || 0)}
              min="0"
            />
          </div>

          <div className="mb-6 w-full max-w-md">
            <label htmlFor="months" className="block text-gray-700 text-sm font-bold mb-2">
              تعداد ماه برای کم کردن:
            </label>
            <input
              type="number"
              id="months"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={monthsToSubtract}
              onChange={(e) => setMonthsToSubtract(parseInt(e.target.value) || 0)}
              min="0"
            />
          </div>

          <button
            onClick={handleCalculateDate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6"
          >
            محاسبه تاریخ جدید
          </button>

          {calculatedDate && (
            <div className="mt-4 p-4 bg-white rounded shadow-lg w-full max-w-md">
              <p className="text-gray-800">
                تاریخ محاسبه شده: <span className="font-semibold text-blue-600">{calculatedDate}</span>
              </p>
            </div>
          )}
        </div>
      );
    }

    export default DateManipulator;
