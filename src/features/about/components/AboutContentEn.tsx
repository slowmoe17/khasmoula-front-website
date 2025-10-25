import { Container } from "@/components";

function AboutContentEn() {
  return (
    <Container>
      <h1 className="text-[32px] font-semibold">About Us</h1>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-[26px] font-semibold">Overview</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              Khasmoola is a smart mobile application dedicated to discount
              coupons, promo codes, and exclusive shopping offers from
              international and Gulf-based stores.
            </p>
            <p className="leading-10">
              It allows users to save money and shop smarter by discovering
              genuine, verified discounts.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[32px] font-semibold">Key Features</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              Access to real and verified offers updated daily.
            </p>
            <p className="leading-10">
              Easy sharing of coupon codes through social media.
            </p>
            <p className="leading-10">
              Coverage of both Gulf and international e-commerce stores.
            </p>
            <p className="leading-10">
              A completely free experience, with a future plan to add an
              optional VIP subscription.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[32px] font-semibold">How the App Works</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              Users can browse and access offers without creating an account.
            </p>
            <p className="leading-10">
              When a user clicks on a coupon or discount code, they are
              redirected to the external store to apply the offer directly.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[32px] font-semibold">Our Vision and Mission</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              <b>Vision:</b>To be the #1 trusted coupon and deal platform in
              Saudi Arabia and the Gulf region.
            </p>
            <p className="leading-10">
              <b>Mission:</b> To provide users with real, transparent, and
              reliable offers that save both time and money while ensuring a
              smooth shopping experience
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[32px] font-semibold">Contact Information</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              For support or business inquiries, please contact us via:
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

export default AboutContentEn;
