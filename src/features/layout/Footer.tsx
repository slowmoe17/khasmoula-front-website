import { Button, Container } from "@/components";
import EmailIcon from "@/components/icons/EmailIcon";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/route";
import { TFunction } from "@/types";
import { getTranslations } from "next-intl/server";

const year = new Date().getFullYear();

interface FooterLink {
  title: string;
  links: string;
}

const footerLinks = (tLinks: TFunction): FooterLink[] => [
  {
    title: tLinks("privacy"),
    links: routes.privacy,
  },
  {
    title: tLinks("terms"),
    links: routes.terms,
  },
  {
    title: tLinks("contact"),
    links: routes.contact,
  },
];

async function Footer() {
  const tLinks = await getTranslations("links");
  const tFooter = await getTranslations("footer");

  return (
    <footer>
      <div className="py-12 bg-primary-light">
        <Container>
          <div className="space-y-5 text-[#1B1B1B] text-center">
            <h6 className="text-2xl font-medium">{tFooter("title")}</h6>
            <p className="text-sm">{tFooter("description")}</p>

            <div className="flex items-center justify-center gap-4 md:flex-row flex-col-reverse max-md:px-6">
              <Button
                variant="default"
                className="bg-primary text-white h-12 rounded-[10px] w-32 max-md:w-full"
              >
                {tFooter("subscribe")}
              </Button>
              <div className="relative w-full md:w-auto">
                <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]" />
                <Input
                  dir="ltr"
                  className="pl-12 placeholder:text-[#999999] font-medium h-12 border-[#999999] rounded-[10px] w-full md:w-[366px]"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex items-center justify-center gap-4 mt-9.5 text-lg font-medium">
            {footerLinks(tLinks).map((link) => (
              <Link
                href={link.links}
                key={link.title}
                className="underline underline-offset-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-primary text-white grid place-items-center h-12 font-medium">
        {tFooter("allRightsReserved", { year })}
      </div>
    </footer>
  );
}

export default Footer;
