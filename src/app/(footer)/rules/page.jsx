
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
async function RulesPage() {
 
  return (
    <>
    <Header/>
         <div className="w-[95%] max-w-[1150px] mx-auto h-[30px]  leading-[30px] border-b-2 border-[#ccc] rtl mt-20  mb-4 ">
      <span className=" border-b-2 border-blue-400" >  قوانین و مقررات </span>
    </div>
        <div className="w-[95%] max-w-[1150px] mx-auto rounded-lg shadow-md bg-white px-3 py-10">
<p className="text-xl text-blue-500 font-bold">به سرویس بلاگدهی و مجله آنلاین فرهنگ بلاگ خوش آمدید</p>
<p className="text-sm text-secondary-900 text-justify my-3">کاربران عزیز باید قبل از انتشار هر گونه مطلب در وبلاگ خود،قوانین زیر را پذیرفته و درانجام آن دقت کنند،در غیر این صورت،مدیریت فرهنگ بلاگ این حق را دارد که مطالب و یا اکانت کاربر را حذف و مسدود نماید</p>
<p className="text-md text-blue-500 font-bold ">اهداف و قوانین</p>
<p className="text-sm text-secondary-900 text-justify my-3">هدف از راه اندازي اين سیستم کمک به ارتقاء سطح دسترسی عموم مردم به فضای اینترنت وگسترش اطلاعات و ارتباطات سالم و تابع قوانین جمهوری اسلامی ایران می باشد ولذا هرگونه فعالیت سیاسی ، مذهبی و مسایلی که با قوانین کشور و سایت متضاد باشد ممنوع است و در شرایط خاص پیگرد قانونی نیز در پی خواهد داشت</p>
 <p className="text-md text-blue-500 font-bold "> قوانین جرایم رایانه ای :</p>  
 <p className="text-sm text-secondary-900 text-justify my-3">سرویس ارم بلاگ دارنده مجوز رسمی فعالیت از مرکز فناوری اطلاعات و رسانه های دیجیتال میباشد ،لذا تمامی کاربران ملزم هستند که علاوه بر رعایت

قوانین رایج در سایت، فعالیت خود را در چهارچوب قوانین جرایم رایانه ای که در نشانی زیرقابل مشاهده است انجام دهند</p>  
<Link className="text-md text-blue-500 font-bold " href="http://peyvandha.ir/0-8.htm">  http://peyvandha.ir/0-8.htm</Link> 
<p className="text-sm text-secondary-900 text-justify my-3">جهت مطالعه فهرست مصاديق محتوای مجرمانه موضوع ماده 21 قانون جرايم رايانه اي به نشانی زیر مراجعه نمایید:</p> 
<Link className="text-md text-blue-500 font-bold " href="http://internet.ir/crime_index.html"> http://internet.ir/crime_index.html</Link>
<p className="text-md text-blue-500 font-bold ">قوانین سایت</p>
<p className="text-sm text-secondary-900 text-justify my-3">هر کاربر مجاز به ساخت "یک وبلاگ رایگان" می باشد</p>
<p className="text-sm text-secondary-900 text-justify my-3">سرویس فرهنگ بلاگ ممکن است جهت تامین نیازهای مالی خود اقدام به نمایش آگهی در وبلاگها کند</p>
<p className="text-sm text-secondary-900 text-justify my-3">در جهت حفظ منابع سایت و همچنین جلوگیری از سوء استفاده های احتمالی، وبلاگهای آزمایشی-وبلاگ های تبلیغاتی-وبلاگهای غیر فعال،حذف خواهد شد
</p>
<p className="text-sm text-secondary-900 text-justify my-3">وبلاگ های بی محتوا و وبلاگ هایی با مطالب تحت عنوان خرید و فروش ،فروشگاه اینترنتی مسدود میگردد</p>
<p className="text-sm text-blue-500 text-justify my-3">ارسال محتوای نامنظم و به هم ریخته، عدم استفاده از عکس شاخص برای هر مطلب، عدم رعایت اصول نگارش فارسی منجر به حذف وبلاگ خواهد شد</p>
<p className="text-sm text-secondary-900 text-justify my-3">کپی برداری صرف از وب سایت های دیگر ممنوع و منجر به حذف وبلاگ خواهد شد</p>
<p className="text-sm text-secondary-900 text-justify my-3">ایجاد هر گونه وبلاگ عکس ، و عکس بازیگران فقط با پوشش اسلامی و بدون آرایش مجاز است</p>
<p></p>
<p></p>
        </div>  
    

    <Footer/>
    </>
  );
}
export default RulesPage;
