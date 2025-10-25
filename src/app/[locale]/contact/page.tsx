import { Container, TitlePage } from "@/components";
import { ContactForm } from "@/features/contact";
import { getTranslations } from "next-intl/server";

async function Page() {
  const tContact = await getTranslations("contact");

  return (
    <div className="pt-[70px] lg:pb-[205px] pb-[170px]">
      <Container>
        <div className="text-center space-y-5 max-w-[597px] mx-auto">
          <TitlePage title={tContact("title")} />
          <p className="max-sm:text-base text-[22px] text-[#161616]">
            {tContact("description")}
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
