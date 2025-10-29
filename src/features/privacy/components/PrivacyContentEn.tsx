import { Container } from "@/components";

function PrivacyContentEn() {
  return (
    <Container>
      <h1 className="text-[32px] font-semibold">Privacy Policy</h1>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-[26px] font-semibold">Introduction</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              Khasmoola respects the privacy of its users and is committed to
              protecting any information that may be collected or shared, in
              compliance with applicable privacy laws in Saudi Arabia and
              globally.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">Data Collection</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              The application does not collect any personal or sensitive data
              from users.
            </p>
            <p className="leading-10">
              No login or personal identification is required to use the
              app&apos;s features.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">Use of Information</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              If a user contacts us via email at{" "}
              <a href="mailto:info@khasmoola.com" className="leading-10">
                info@khasmoola.com
              </a>
              , any information provided will be used solely for responding to
              inquiries and will not be shared with any third party.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">
            External Links and Advertisements
          </h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              The app may include links and ads from third-party websites or
              stores, as well as links that open specific coupons or stores
              within Khasmoola.
            </p>
            <p className="leading-10">
              While internal links are used only to navigate within the app and
              do not collect personal data, Khasmoola is not responsible for the
              privacy policies or security practices of third-party entities.
            </p>
            <p className="leading-10">
              Users should review each site&apos;s privacy policy before
              providing any personal information.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">Data Security</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              We take appropriate measures to secure the app and protect users
              from unauthorized access, misuse, or data breaches.
            </p>
            <p className="leading-10">
              However, users should be aware that no internet platform can
              guarantee complete security.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">Updates to This Policy</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              This Privacy Policy may be updated from time to time to reflect
              improvements or legal changes.
            </p>
            <p className="leading-10">
              Users are encouraged to review this page periodically to stay
              informed about the latest version.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[26px] font-semibold">Location</h2>

          <div className="text-2xl font-semibold mt-8">
            <p className="leading-10">
              Data Khasmoola may access your device&apos;s location to provide
              country-specific coupons and store information.
            </p>
            <p className="leading-10">
              This data is used solely within the app for personalized content
              and is not stored or shared with third-parties.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PrivacyContentEn;
