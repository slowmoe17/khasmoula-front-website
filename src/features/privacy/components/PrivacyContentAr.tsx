import { Container } from "@/components";

function PrivacyContentAr() {
  return (
    <Container>
      <h1 className="text-[32px] font-semibold">سياسة الخصوصية</h1>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-[26px] font-semibold">مقدمة</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              تحترم ادارة تطبيق خصموله - khasmoola خصوصية مستخدميها، وتلتزم
              بحماية أي بيانات يتم جمعها أو التعامل معها بما يتوافق مع القوانين
              المحلية والدولية لحماية الخصوصية.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">جمع البيانات</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              لا يقوم التطبيق بحمع أي بيانات شخصية أو حساسة من المستخدمين.
            </p>
            <p className="leading-10">
              لا يطلب التطبيق ادخال اسم، بريد الكتروني، أو اي معلومات هوية الا
              في حال تواصل المستخدم طوعا عبر البريد الرسمي.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">استخدام البيانات</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              في حال التواصل مع التطبيق عبر البريد الالكتروني{" "}
              <a href="mailto:info@khasmoola.com" className="leading-10">
                info@khasmoola.com
              </a>{" "}
              تستخدم المعلومات المقدمة فقط لغرض الرد علي الاستفسارات أو تحسين
              الخدمة، ولا تشارك من أي طرف ثالث .
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">
            الروابط الخارجية والاعلانات
          </h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              قد يتضمن التطبيق روابط وإعلانات من مواقع أو متاجر تابعة لجهات
              خارجية، بالإضافة إلى روابط تفتح قسائم أو متاجر محددة داخل تطبيق
              &quot;خَصْمولة&quot;.
            </p>
            <p className="leading-10">
              بينما تُستخدم الروابط الداخلية فقط للتنقل داخل التطبيق ولا تقوم
              بجمع أي بيانات شخصية، فإن &quot;خَصْمولة&quot; غير مسؤولة عن
              سياسات الخصوصية أو ممارسات الأمان الخاصة بالجهات الخارجية.
            </p>
            <p className="leading-10">
              وينبغي على المستخدمين مراجعة سياسة الخصوصية لكل موقع قبل تقديم أي
              معلومات شخصية.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">أمن المعلومات</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              نلتزم باتخاذ الاجراءات المناسبة لحماية التطبيق والمستخدمين من
              الوصول غير المصرح به او محاولات الاختراق، ومع ذالك لا يمكن ضمان
              الامان المطلق في بيئة الانترنت.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">تحديثات السياسة</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              قد يتم تحديث الخصوصية من حين الي اخر بما يتناسب مع تطورات التطبيق
              أو المتطلبات القانونية.
            </p>
            <p className="leading-10">
              ينصح المستخدم بمراجعة هذه الصفحة بشكل دوري للاطلاع علي احدث
              التعديلات.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PrivacyContentAr;
