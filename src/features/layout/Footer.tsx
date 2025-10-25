import { Container } from "@/components";
import { Link } from "@/i18n/navigation";
import { routes } from "@/lib/route";
import { TFunction } from "@/types";
import { getTranslations } from "next-intl/server";
import { SubscribeEmail } from "../app";

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

            <SubscribeEmail buttonText={tFooter("subscribe")} />
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
