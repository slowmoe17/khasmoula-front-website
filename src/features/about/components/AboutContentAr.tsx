import { Container } from "@/components";

function AboutContentAr() {
  return (
    <Container>
      <h1 className="text-[32px] font-semibold">من نحن</h1>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-[26px] font-semibold">
            نبذة عن خصمولة - khasmoola
          </h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              خصمولة هوا تطبيق ذكي متخصص في الكوبونات، أكواد الخصم، والعروض
              الحصرية من المتاجر العالمية والخليجية.
            </p>
            <p className="leading-10">
              يهدف التطبيق الي جعل تجربة المستهخدم أكثر ذكاءا وتوفيرا
              للمستتخدمين في السعودية ودول الخليج ، مع امكانية استخدامه من أي
              دولة في العالم
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[32px] font-semibold">المزايا الرئيسية</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">عرض كوبونات وعروض حقيقية محدثة يوميا.</p>
            <p className="leading-10">
              سهولة مشارمة الاكواد عبر وسائل التواصل الاجتماعي.
            </p>
            <p className="leading-10">دعم متاجر عالمية وخليجية موثوقة.</p>
            <p className="leading-10">
              تجربة مجانية بالكامل، مع خطط مستقبلية لاضافة اشتراك VIP اختياري
              يقدم مميزات اضافية للمستخدمين المميزين.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[32px] font-semibold">كيف يعمل التطبيق</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              يتيح التطبيق للمستخدم تصفح الهروض مباشرة جون الحاجة الي انشاء
              حساب.
            </p>
            <p className="leading-10">
              عند الضغط علي أي عرض أو كود كود خصم، يتم توجيه المستخدم الي المتجر
              الخارجة للاستفادة من العرض مباشرة .
            </p>
            <p className="leading-10">دعم متاجر عالمية وخليجية موثوقة.</p>
            <p className="leading-10">
              تجربة مجانية بالكامل، مع خطط مستقبلية لاضافة اشتراك VIP اختياري
              يقدم مميزات اضافية للمستخدمين المميزين.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[32px] font-semibold">رؤيتنا ورسالتنا</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              <b>رؤيتنا:</b> أن يكون خصمولة المنصة الأولي في السعودية والخليج
              التي تجمع أفضل العروض والكوبونات الموثوقة في مكان واحد .
            </p>
            <p className="leading-10">
              <b>رسالتنا:</b> تقديم محتوي حقيقي وشفاف يوفر الوقت والمال للمستخدم
              ، من خلال متابعة أحدق الخصومات والصفقات من أبرز المتاجر المحلية
              والعالمية.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[32px] font-semibold">معلومات التواصل</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              لأي استفسار أو ملاحظات، يرجي التواصل معنا عبر البريد الرسمي :
            </p>
            <a href="mailto:info@khasmoola.com" className="leading-10 block">
              info@khasmoola.com
            </a>
            <a
              href="https://khasmoola.com"
              target="_blank"
              className="leading-10"
            >
              https://khasmoola.com
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutContentAr;
