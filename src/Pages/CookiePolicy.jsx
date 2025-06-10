import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SubBanner } from "../Components/Banners/SubBanner";
import cookieBanner from "../Images/cookie-policy.webp";
import { Link } from "react-router-dom";
import Baseurl from "../Baseurl";

export const CookiePolicy = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cookie Policy | Trypexpert – How We Use Cookies</title>
          <meta
            name="description"
            content="Read Trypexpert’s Cookie Policy to understand how we use cookies to improve your browsing experience, personalize content, and analyze site traffic."
          />
        </Helmet>
      </HelmetProvider>
      <SubBanner
        title="Cookie Policy"
        breadcrumb="Cookie Policy"
        image={cookieBanner}
      />
      <section className="p-top-60 p-bottom-60" data-aos="fade">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-title">
                <small className="sub-title"> Trypexpert's</small>
                <h2 className="h1 title lh-sm">Cookie Policy</h2>
              </div>
              <p>
                <b>Trypexpert L.L.C-FZ</b>, its subsidiaries and affiliates,
                d/b/a
                <b>Trypexpert L.L.C-FZ</b> ("Trypexpert", "we", "our") welcome
                you (the "User(s)", or "you") to our primary website at
                www.trypexpert.com (the "Site"). We are committed to ensuring
                that your privacy is protected. We aim to be as open and
                transparent as possible around the information we collect when
                you visit our Site/App, including through the use of "Cookies".
              </p>

              <h5>1. Introduction</h5>
              <p>
                This cookie policy (<strong>"Cookie Policy"</strong>) explains
                what Cookies (as defined below) are and how we use them. It also
                explains the different types of Cookies we use, and how you can
                change or delete them. We hope that this policy will assist you
                in understanding, and feeling more confident about, our use of
                Cookies.
              </p>

              <p>
                For information on how your information is collected and used by
                us in general, please see our{" "}
                <Link to={`${Weburl}/privacy-policy`}>Privacy Policy</Link>{" "}
                which can be found above this policy (
                <strong>"Privacy Policy"</strong>).
              </p>

              <p>
                In this Cookie Policy, reference to "Cookies" includes cookies
                and all other files that collect information in a similar
                manner. Please note that most Cookies do not collect information
                that identifies you, and will instead collect more general
                information such as how Users arrive at and use our Site, or a
                User's general location.
              </p>

              <h6>Note to our Users in the EU:</h6>

              <p>
                In order to place Cookies (including tags and other
                technologies) on your browser or device, we may need to obtain
                your consent. We will do so by providing a clear notice in the
                form of a cookie banner on the Site that informs you what
                Cookies are used for, as well as providing you with useful
                information about the technologies we use and a link to this
                Cookie Policy. You will need to indicate your acceptance of our
                use of Cookies. On a mobile device this might be by swiping a
                banner, pressing a button, or using facial recognition.
              </p>

              <p>
                You are able to opt-out of the use of Cookies. For more
                information, see the Section 7 below on blocking Cookies.
              </p>

              <p>
                Using information collected from Cookies: where we want to use
                the information that Cookies and similar technologies collect,
                we either need your consent or we will do so based on the
                legitimate interest ground. In certain cases we rely on our
                legitimate interests to use the data collected by Cookies. To do
                this we conduct an assessment to make sure the purposes for
                which we use your data are fair and that your privacy rights are
                considered. We only rely on legitimate interests where your
                rights do not override our interests in using the data. For more
                information about your rights in relation to legitimate
                interests, please refer to our Privacy Policy.
              </p>

              <h5>2. What Are Cookies</h5>

              <p>
                Cookies are small text files which are stored on, and accessed
                from, your computer or mobile device when you visit the Site or
                a page on the Site. We use cookies, web beacons, pixels, clear
                gifs and other similar tools (collectively, "Cookies") on our
                Site to recognize your device from those of other Users of the
                Site, to improve the Site's performance, to deliver a better and
                more personalized service according to the User's individual
                interests and the device or browser used, to track Users' use of
                the Site, to gather information about the Users' approximate
                geographic location (e.g. city) to provide localized content, to
                prevent fraud and/or abuse, to estimate our audience size and
                usage pattern and perform other analytics, to develop our Site
                and to administer our advertising campaigns to Users across
                different websites and devices.
              </p>

              <h5>3. How Long Will Cookies Stay on My Device?</h5>

              <p>
                Most of the Cookies we use are erased from your device
                immediately after your browser session terminates ("Session
                Cookies"). Other Cookies remain saved on your device and enable
                us to recognize your device in the event of a later visit to our
                Site ("Persistent Cookies"). Persistent Cookies allow us to make
                our Site more user-friendly, effective and safe and to record
                your acceptance of our cookie policy detailed herein. Please
                note that the data collected through Cookies will not be kept
                for longer than is necessary to fulfil the purposes mentioned
                above.
              </p>

              <h5>4. First and Third Party Cookies?</h5>

              <p>
                First-party Cookies are Cookies that belong to us and that we
                place on your device. Third-party Cookies are Cookies that
                another party, which provides us a service, places on your
                device through your use of our Site. For example, to administer
                our Site and for research purposes, we have contracted
                third-party service providers to track and analyze statistical
                usage and volume information from our Site Users. Third-party
                Cookies may also be placed on your device by our business
                partners so that they can use them to advertise products and
                services to you elsewhere on the Internet.
              </p>

              <h5>5. Do We Track Whether Users Open Our Emails?</h5>

              <p>
                Our emails may contain a single "web beacon pixel" which enables
                us to verify whether our emails (and any links or advertisements
                within the email) are opened. We may use this information to
                determine whether our emails are of interest to Users, to
                approach Users who do not open our emails and verify whether
                they wish to continue receiving them and to inform our
                advertisers in aggregate of the audience size for their
                advertisements. Please note that such "web beacon pixel" will be
                deleted once you delete the email from your email account. If
                you do not wish the "web beacon pixel" to be downloaded to your
                device at all, please set your email account settings to receive
                emails from us in plain text rather than HTML.
              </p>

              <h5>6. What Sort of Cookies Does Our Website Use?</h5>

              <p>Generally, our Cookies perform the following functions:</p>

              <ul>
                <li>
                  <strong>Essential Cookies</strong> - those Cookies are
                  essential to navigate around the Site and use its features.
                  For example, they allow us to remember your Cookie preferences
                  and to verify if something is not working properly, so we can
                  fix it quickly.
                </li>
                <li>
                  <strong>Analytical and Performance Cookies</strong> - those
                  Cookies are used to analyze how our Users use our Site and to
                  monitor the Site's performance. For example, we might use
                  performance Cookies to keep track of which pages are
                  frequently visited and from what locations our Users come
                  from. We might also use these Cookies to highlight Site
                  services that we think will be of interest to you based on
                  your usage of the Site. We generally use third party Cookies
                  to perform these services, for example, Google Analytics.
                </li>
                <li>
                  <strong>Functionality Cookies</strong> - those Cookies allow
                  us to operate the Site in accordance with your preferences
                  when browsing the Site. For example, such Cookies save you the
                  trouble of typing in a username every time you access the
                  Site, and recall your customization preferences, such as your
                  preferred text size, fonts, languages and other parts of the
                  Site that are alterable.
                </li>
                <li>
                  <strong>Targeting and Tracking Cookies</strong> - those
                  Cookies collect information about your activities on our Site
                  and other websites, to provide you: (i) Online Behavioral
                  Advertising, for which Cookies are placed on your device by
                  our third party service providers to collect your web browsing
                  activity and group together your interests in order to provide
                  you with targeted advertisements which are more relevant to
                  you when you visit our Site (please note that your web
                  browsing activity history can be used to gather certain
                  demographic information which relate to you, such as your age
                  and gender); and (ii) Retargeting, which enables our
                  advertising partners to show you advertisements selected based
                  on your online browsing activity on other websites, thus
                  allowing companies to advertise to people who previously
                  visited their website. We may allow our third-party service
                  provides to use Cookies on the Site for the purposes
                  identified above, including collecting information about your
                  online activities over time and across different websites.{" "}
                  <strong>
                    For more information on the development of user-profiles and
                    the use of targeting/advertising Cookies, please see
                  </strong>{" "}
                  <Link
                    to="https://youronlinechoices.eu/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    www.youronlinechoices.eu.
                  </Link>
                </li>
                <li>
                  <strong>Social Networking Cookies</strong> - those Cookies are
                  used so that Users can interact with the content of different
                  social platforms (Facebook, Twitter, Pinterest, etc.) which
                  are generated specifically for individual users of these
                  social networks. The conditions of use regarding these cookies
                  and the information collected is regulated by the privacy
                  policy of the corresponding social platform.
                </li>
              </ul>

              <h6>
                Below Are Certain Specific Cookies You Can Find on Our Site
              </h6>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Analytics</td>
                    <td>Third party Tracking Technology</td>
                    <td>
                      Performance cookie, which is used to collect information
                      about how visitors use our Site. We use the information to
                      compile reports and to help us improve the Site. The
                      cookies collect information in an anonymous form,
                      including the number of visitors to the Site, where
                      visitors have come to the Site from and the pages they
                      visited. Privacy Policy.
                    </td>
                  </tr>
                  <tr>
                    <td>Adwords (Google)</td>
                    <td>Third party Advertising (targeting) Cookies</td>
                    <td>
                      Social Networking Cookie, which is associated with the
                      AdWord advertising service from Google. Helps with
                      tracking conversion rates for ads. Privacy Policy.
                    </td>
                  </tr>
                  <tr>
                    <td>Facebook Cookies</td>
                    <td>Third party Social Networking Cookies</td>
                    <td>
                      Social Networking Cookies which enables Facebook to offer
                      the Facebook Products to you and to understand the
                      information they receive about you, including information
                      about your use of other websites and apps, whether or not
                      you are registered or logged in. Cookie Policy.
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">Our own cookies</td>
                    <td>
                      We use cookies to track users who arrive from specific
                      channels, to provide promotions, special offers, and other
                      customized/targeted experience.
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h5>7. Can a Site User Block Cookies?</h5>

              <p>
                Most devices and browsers will allow you to erase Cookies from
                your device's hard drive, block acceptance of Cookies, or
                receive a warning before a cookie is stored. However, if you
                block or erase Cookies, your experience of the Site may be
                limited. Please note that unless you block the acceptance of
                Cookies, the Site will utilize Cookies upon your use of the Site
                (all unless it is required by applicable law to provide a
                separate consent to use such Cookies, and in which case we will
                use such Cookies only after we receive your separate consent to
                such use and subject to your right to withdraw such consent at
                any time). If you want to remove previously stored Cookies, you
                can manually delete the Cookies at any time. However, this will
                not prevent the Site from placing further Cookies on your device
                unless and until you adjust your settings as described above.
              </p>

              <p>
                For detailed instructions regarding the blocking of Cookies,
                please refer to your browser 'help', 'tool' or 'edit' section or
                see
                <Link
                  to="https://www.allaboutcookies.org/manage-cookies"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://www.allaboutcookies.org/manage-cookies.
                </Link>
                Below are links to instructions regarding the blocking of
                Cookies on commonly used web-browsers:
              </p>

              <ul>
                <li>Chrome</li>
                <li>Internet Explorer and Microsoft Edge</li>
                <li>Mozilla Firefox</li>
                <li>Safari</li>
              </ul>

              <h5>8. Opting Out of Performance Cookies</h5>

              <p>
                It is possible to opt-out of having your browsing activity
                within the Site recorded by performance Cookies. Please note
                that we use Google Analytics as our service provider in order to
                track Users' activities on the Site, including by use such
                service's persistent Cookies. Google provides a browser-add on
                which allows users to opt-out of Google Analytics across all
                websites, which can be downloaded here:{" "}
                <Link
                  to="https://tools.google.com/dlpage/gaoptout"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://tools.google.com/dlpage/gaoptout.
                </Link>
              </p>

              <h5>9. Opting Out of Target Advertising Cookies</h5>

              <p>
                Please note that if you want to opt out from receiving targeted
                advertising, this does not mean that you will receive less
                advertising when you use our Site, but rather that the
                advertising you see will not be as customized to your interests.
                You can visit the Internet Advertising Bureau's consumer advice
                site at
                <Link
                  to="https://www.youronlinechoices.com/uk/your-ad-choices"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://www.youronlinechoices.com/uk/your-ad-choices,
                </Link>
                which will provide you further information, a list of all
                Cookies that are currently set on your device and instruction on
                how to opt-out of each of them.
              </p>

              <h5>10. Have Any Questions?</h5>

              <p>
                If you have any questions (or comments) concerning this Cookie
                Policy, please send us an email to the following address:
                <Link to="mailto:info@trypexpert.com" target="_blank">
                  info@trypexpert.com
                </Link>{" "}
                and we will make an effort to reply within a reasonable
                timeframe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
