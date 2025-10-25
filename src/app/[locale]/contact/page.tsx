import { Container, TitlePage } from "@/components";
import { ContactForm } from "@/features/contact";

function Page() {
  return (
    <div className="pt-[70px] lg:pb-[205px] pb-[170px]">
      <Container>
        <div className="text-center space-y-5 max-w-[597px] mx-auto">
          <TitlePage title="تواصل معنا" />
          <p className="max-sm:text-base text-[22px] text-[#161616]">
            ودّك تسأل عن شي؟ أو عندك اقتراح؟ ترا فريقنا جاهز يسمعك ويخدمك بأسرع
            وقت 💬
          </p>
        </div>

        <div className="mt-12">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}

export default Page;
