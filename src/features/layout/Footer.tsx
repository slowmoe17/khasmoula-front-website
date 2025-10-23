import { Button, Container } from "@/components";
import EmailIcon from "@/components/icons/EmailIcon";
import { Input } from "@/components/ui/input";
import { routes } from "@/lib/route";
import Link from "next/link";

const year = new Date().getFullYear();

interface FooterLink {
  title: string;
  links: string;
}

const footerLinks: FooterLink[] = [
  {
    title: "الخصوصيه",
    links: routes.privacy,
  },
  {
    title: "شروط الاستخدام",
    links: routes.terms,
  },
  {
    title: "تواصل معنا",
    links: routes.contact,
  },
];

function Footer() {
  return (
    <footer>
      <div className="py-12 bg-primary-light">
        <Container>
          <div className="space-y-5 text-[#1B1B1B] text-center">
            <h6 className="text-2xl font-medium">خلّك أول من يعرف بالعروض!</h6>
            <p className="text-sm">
              سجّل إيميلك واستقبل أحدث أكواد الخصم والعروض الحصرية على بريدك.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Button
                variant="default"
                className="bg-primary text-white h-12 rounded-[10px] w-32"
              >
                اشترك الان
              </Button>
              <div className="relative">
                <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]" />
                <Input
                  dir="ltr"
                  className="pl-12 placeholder:text-[#999999] font-medium h-12 border-[#999999] rounded-[10px] w-[366px]"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex items-center justify-center gap-4 mt-9.5 text-lg font-medium">
            {footerLinks.map((link) => (
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
        جميع الحقوق محفوظه لدي خصموله {year}©
      </div>
    </footer>
  );
}

export default Footer;
