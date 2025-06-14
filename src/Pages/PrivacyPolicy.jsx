import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SubBanner } from "../Components/Banners/SubBanner";
import privacyBanner from "../Images/cookie-policy.webp";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Privacy Policy | Trypexpert – Your Data, Our Commitment</title>
          <meta
            name="description"
            content="Learn how Trypexpert collects, uses, and protects your personal information. We are committed to ensuring your privacy and data security throughout your travel journey."
          />
        </Helmet>
      </HelmetProvider>
      <SubBanner
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
        image={privacyBanner}
      />
      <section className="p-top-60 p-bottom-60" data-aos="fade">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-title">
                <small className="sub-title"> Trypexpert's</small>
                <h2 className="h1 title lh-sm">Privacy Policy</h2>
              </div>
              <p>
                At <b>Trypexpert L.L.C-FZ</b>, accessible at{" "}
                <Link to="https://trypexpert.com">www.trypexpert.com</Link>, one
                of our main priorities is the privacy of our visitors. This
                Privacy Policy document contains the types of information that
                is collected and recorded by <b>Trypexpert</b> and how we use
                it.
              </p>
              <p>
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us through
                email at{" "}
                <Link to="mailto:info@trypexpert.com" target="_blank">
                  info@trypexpert.com
                </Link>
                . This privacy policy applies only to our online activities and
                is valid for visitors to our website with regards to the
                information that they shared and/or collect in <b>Trypexper</b>
                t. This policy is not applicable to any information collected
                offline or via channels other than this website.
              </p>
              <h5>Consent</h5>
              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>
              <h5>Information we collect</h5>
              <p>
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information.
              </p>
              <p>
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and/or attachments you may
                send us, and any other information you may choose to provide.
              </p>
              <p>
                When you register for an Account, we may ask for your contact
                information, including items such as name, company name,
                address, email address, and telephone number.
              </p>
              <h5>How we use your information</h5>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our website.</li>
                <li>Improve, personalize, and expand our website.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>
                  Develop new products, services, features, and functionality.
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes.
                </li>
                <li>Send you emails.</li>
                <li>Findand prevent fraud.</li>
              </ul>
              <h5>Log Files</h5>
              <p>
                <b>Trypexpert</b> follows a standard procedure of using log
                files. These files log visitors when they visit websites. All
                hosting companies do this and it is part of hosting services'
                analytics. The information collected by log files includes
                internet protocol (IP) addresses, browser type, Internet Service
                Provider (ISP), date and time stamp, referring/exit pages, and
                possibly the number of clicks. These are not linked to any
                information that is personally identifiable. The purpose of the
                information is for analyzing trends, administering the site,
                tracking users' movement on the website, and gathering
                demographic information.
              </p>
              <h5>Cookies and Web Beacons</h5>
              <p>
                Like any other website, <b>Trypexpert</b> uses ‘cookies’. These
                cookies are used to store information, including visitors'
                preferences, and the pages on the website that the visitor
                accessed or visited. The information is used to optimize the
                users' experience by customizing our web page content based on
                visitors' browser type and/or other information.
              </p>
              <h5>DoubleClick DART Cookie</h5>
              <p>
                Google is one of the third-party vendors on our site. It also
                uses cookies, known as DART cookies, to serve ads to our site
                visitors based upon their visit to{" "}
                <Link to="https://trypexpert.com/">www.trypexpert.com</Link> and
                other sites on the internet. However, visitors may choose to
                decline the use of DART cookies by visiting the Google ad and
                content network Privacy Policy at the following URL –
                <Link
                  to="https://policies.google.com/technologies/ads"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://policies.google.com/technologies/ads
                </Link>
                .
              </p>
              <p>
                Some of the advertisers on our site may use cookies and web
                beacons. Our advertising partners are listed below. Each of our
                advertising partners has their own Privacy Policy for their
                policies on user data. For easier access, we’ve hyperlinked to
                their Privacy Policies below.
              </p>
              <h5>Google</h5>
              <p>
                <Link
                  to="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://policies.google.com/technologies/ads
                </Link>
              </p>
              <h5>Advertising Partners Privacy Policies</h5>
              <p>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of <b>Trypexpert</b>.
              </p>
              <p>
                Third-party ad servers or ad networks use technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on{" "}
                <b>Trypexpert</b>, which are sent directly to users' browser.
                They automatically receive your IP address when this occurs.
                These technologies are used to measure the effectiveness of
                their advertising campaigns and/or to personalize the
                advertising content that you see on websites that you visit.
              </p>
              <p>
                Note that <b>Trypexpert</b> has no access to or control over
                these cookies that are used by third-party advertisers.
              </p>
              <h5>Third-Party Privacy Policies</h5>
              <p>
                <b>Trypexpert's</b> Privacy Policy does not apply to other
                advertisers or websites. Thus, we are advising you to consult
                the respective Privacy Policies of these third-party ad servers
                for more detailed information. It may include their practices
                and instructions about how to opt-out of certain options. You
                may find a complete list of these Privacy Policies and their
                links here: Privacy Policy Links.
              </p>
              <p>
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites. What Are Cookies?
              </p>
              <h5>CCPA Privacy Policy (Do Not Sell My Personal Information)</h5>
              <p>
                Under the CCPA, among other rights, California consumers have
                the right to:
              </p>
              <ul>
                <li>
                  Request that a business that collects a consumer's personal
                  data disclose the categories and specific pieces of personal
                  data that a business has collected about consumers.
                </li>
                <li>
                  Request that a business delete any personal data about the
                  consumer that a business has collected.
                </li>
                <li>
                  Request that a business that sells a consumer's personal data,
                  not sell the consumer's personal data.
                </li>
                <li>
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </li>
              </ul>
              <h5>GDPR Privacy Policy (Data Protection Rights)</h5>
              <p>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
              </p>
              <ul>
                <li>
                  The right to access – You have the right to request copies of
                  your personal data. We may charge you a small fee for this
                  service.
                </li>
                <li>
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate. You
                  also have the right to request that we complete the
                  information you believe is incomplete.
                </li>
                <li>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                </li>
                <li>
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                </li>
                <li>
                  The right to object to processing – You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                </li>
                <li>
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you, under certain conditions.
                </li>
              </ul>
              <p>
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <h5>Children's Information</h5>
              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>
              <p>
                <b>Trypexpert</b> does not knowingly collect any Personal
                Identifiable Information from children under the age of 13. If
                you think that your child provided this kind of information on
                our website, we strongly encourage you to contact us immediately
                and we will do our best efforts to promptly remove such
                information from our records.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
