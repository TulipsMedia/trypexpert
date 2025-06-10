import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SubBanner } from "../Components/Banners/SubBanner";
import termsBanner from "../Images/cookie-policy.webp";
import { Link } from "react-router-dom";
import Baseurl from "../Baseurl";

export const TermsConditions = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Terms of Use | Trypexpert – Your Agreement with Us</title>
          <meta
            name="description"
            content="Review Trypexpert’s Terms of Use to understand the rules, responsibilities, and conditions of using our website and travel booking services."
          />
        </Helmet>
      </HelmetProvider>
      <SubBanner
        title="Terms of Use"
        breadcrumb="Terms of Use"
        image={termsBanner}
      />
      <section className="p-top-60 p-bottom-60" data-aos="fade">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-title">
                <small className="sub-title"> Trypexpert's</small>
                <h2 className="h1 title lh-sm">Terms of Use</h2>
              </div>
              <p>
                Trypexpert L.L.C-FZ., its subsidiaries and affiliates, d/b/a
                Trypexpert L.L.C-FZ ("Trypexpert L.L.C-FZ", "we", "our") welcome
                you (the "User(s)", or "you") to our primary Website/App at
                https://www.trypexpert.com (the "Website/App"). Our Website/App
                offers basic information regarding our company and our booking
                services ("Service(s)") as further detailed below). Each of the
                Website/App's Users may use the Website/App in accordance with
                the terms and conditions hereunder.
              </p>

              <h5>1. Acceptance of the Terms</h5>
              <p>
                By entering, connecting to, accessing or using the Website/App,
                you acknowledge that you have read and understood the following
                terms of use, including the terms of our{" "}
                <Link to={`${Weburl}/privacy-policy`} target="_blank">
                  Privacy Policy
                </Link>{" "}
                (<strong>"Privacy Policy"</strong>) and our Cookie Policy (
                <strong>"Cookie Policy"</strong>) at{" "}
                <Link to={`${Weburl}/cookie-policy`} target="_blank">
                  Cookie Policy
                </Link>{" "}
                (collectively, the "Terms") and you agree to be bound by them
                and to comply with all applicable laws and regulations regarding
                your use of the Website/App and you acknowledge that these Terms
                constitute a binding and enforceable legal contract between
                Trypexpert L.L.C-FZ and you. If you do not agree to these terms,
                please do not enter, connect, access or use the Website/App
                and/or the service in any manner.
              </p>

              <p>
                The Website/App is available only to individuals who (a) are at
                least eighteen (18) years old; and (b) possess the legal
                capacity to enter into these Terms and to form a binding
                agreement under any applicable law. You hereby represent that
                you possess the legal authority to enter into these Terms and to
                form a binding agreement under any applicable law, to use the
                Website/App in accordance with these Terms, and to fully perform
                your obligations hereunder. If you are using the Service for the
                benefit of and/or on behalf of any third party. You hereby
                represent that such third-party was made aware of these Terms.
              </p>

              <h5>2. The Website/App and the Services</h5>

              <p>
                Trypexpert L.L.C-FZ offers its Users with an online platform
                through which Users can book tourism related services and/or
                products including tours, transportation services, including
                without limitation car rental services, transfers etc., and
                accommodation (collectively, the <strong>"Services"</strong>).
              </p>

              <p>
                The Website/App may provide you with comprehensive information
                and news regarding Trypexpert L.L.C-FZ, company overview,
                partners, news regarding our company including any other content
                related thereto such as contact information, videos, text,
                files, logos, button icons, images, data compilations, links,
                other specialized content, technical data, documentation,
                know-how, specifications materials, designs, data, the "look and
                feel" of the Website/App, algorithms, source and object code,
                interface, GUI, interactive features related graphics,
                illustrations, drawings, animations, and other features obtained
                from or through the Website/App (collectively, the{" "}
                <strong>"Content"</strong>). In addition, the Website/App
                provides Users who sign up for our newsletter certain services,
                for example, provide Users with updates via e-mail regarding the
                Company's developments, new services, general content etc.
              </p>

              <h6>Please Note:</h6>

              <p>
                The content may include third party content (e.G. Information
                provided to us by third party sources), such as marketing
                materials, descriptions, prices, relevant deals of such third
                party products and services. Such third party content is not
                verified by Trypexpert L.L.C-FZ, does not bind Trypexpert
                L.L.C-FZ in any form and Trypexpert L.L.C-FZ cannot guarantee
                the accuracy or completeness of such third party content. As
                such we will not be liable in any way for any third party
                content. In any case where such information contradicts or is
                inconsistent with information provided to you by the provider or
                seller of such goods and services directly, only information
                supplied by such provider or seller directly shall prevail.
                Trypexpert L.L.C-FZ is not the seller or supplier of any such
                goods or services and has no control over or responsibility for
                such goods or services, including, but not limited to, the
                condition, utility price, suitability, reliability, timeliness,
                safety, legality, availability and/or accuracy of these goods or
                services. As such, Trypexpert L.L.C-FZ does not have any of the
                legal obligations that apply to the sellers or suppliers of
                those goods or services.
              </p>

              <p>
                As our services are supplied by a variety of third party sellers
                or suppliers, the cancellation and refund policies of each such
                third party may be different. The said services are subject to
                the terms set forth in the respective third party's order page
                and/or any third party document referring to said third party's
                cancellation and/or refund policy. It is your sole and exclusive
                responsibility to review carefully each such cancellation and/or
                refund policy and in any event of cancellation caused by the
                respective third party, Trypexpert L.L.C-FZ is not and will not
                have any liability whatsoever in connection with such
                cancellation and/or any legal proceedings between the respective
                third party and yourself.
              </p>

              <p>
                All rights in and to the content available on the website/app
                are reserved to Trypexpert L.L.C-FZ or its licensors. To the
                extent legally permissible, the website/app and the content
                available therein are provided on an "as is" basis. Trypexpert
                L.L.C-FZ will not be liable for any damages or loss incurred to
                you or any other person as a result of or in connection with
                your use of the website/appand/or the content available therein,
                and/or any decision made or action taken or not taken in
                reliance on the use of the website/appand/or the content.
              </p>

              <p>
                Your use of the website/appand/or the content available therein
                is entirely at your own risk.
              </p>

              <p>
                Additional terms may apply with respect to certain features
                and/or products provided by Trypexpert L.L.C-FZ. In case of any
                conflict between such terms and the Terms, the specific terms
                shall prevail.
              </p>

              <h5>3. Bookings</h5>

              <p>
                You are welcome to make an online booking of the various tourism
                services (such as sightseeing tours, activities, flight tickets,
                tickets, accommodation reservations and etc.) (
                <strong>"Tourism Services"</strong>) via Trypexpert L.L.C-FZ's
                Website/App including tours in various destinations (
                <strong>"Tour(s)"</strong>). Upon the completion of the booking
                process for the Tourism Services (
                <strong>"Booked Service(s)"</strong> and/or the{" "}
                <strong>"Reservation"</strong>), you will be required to pay the
                required amount for such Booked Service (as appeared on the
                Website/App and during the booking process). Following the
                payment for the Booked Services, you will receive an e-mail
                confirming the Booked Service (
                <strong>"Booking Confirmation"</strong>). The Booked Services
                are operated and provided by either a local third party tourism
                operator (the <strong>"Operator"</strong>). Following the
                completion of the Booked Service via the Website/App, you will
                be provided with contact details of the Operator that is
                expected to carry out the tour services in your Booked Service.
              </p>

              <p>
                You hereby acknowledge that payments made by credit card or
                alternative payment methods for Booked Services on or through
                the Website/App may be handled by our payment processing
                partner.
              </p>

              <p>
                As Trypexpert L.L.C-FZalso rendering its services through local
                tourism companies in other countries, we are relying on
                information provided to us by third parties, you hereby
                acknowledge that a Booked Service may be cancelled, amended or
                delayed due to circumstances which are not under Trypexpert
                L.L.C-FZ's and/or Operator's control (including Force Majeure
                events and for the avoidance of any doubt, including pandemics
                or epidemics). In such cases, Trypexpert L.L.C-FZ and/or the
                Operator will make their best efforts to inform you in advance
                of such changes and act to provide real-time reasonable
                solutions to minimize the impact of such cancellations, changes
                or delays, on the costs, schedule and your general services
                experience. In particular, in cases where access to certain
                Website/App or attractions is not available, Trypexpert L.L.C-FZ
                and/or Operator may decide on an alternative attraction and you
                shall not be entitled to any compensation or refund due to such
                changes. Please check your e-mail account provided to us during
                the booking process of the Booked Service via the Website/App at
                22:00 on the night before the Booked Service is expected to be
                provided as important updates might be provided and communicated
                in this way.
              </p>

              <p>
                All communications with respect to the Booked Service (such as
                updates, changes, cancellation requests, etc.) shall be handled
                directly by Trypexpert L.L.C-FZ, unless Trypexpert L.L.C-FZ, at
                its sole discretion, directs you to the applicable Operator of
                your Booked Service. All complaints with respect to your
                satisfaction from a Booked Service, shall be directed to the
                applicable Operator directly.
              </p>

              <p>
                You acknowledge and agree that Trypexpert L.L.C-FZ does not have
                any obligation to conduct background checks on any operator,
                hotel (as defined below) and/or third party service providers.
                We do not investigate or verify any such third party service
                provider's reputation, conduct, morality, and/or criminal
                background. In addition, Trypexpert L.L.C-FZshall not be
                responsible, in any way whatsoever, for any content and/or
                services suggested, proposed and/or provided by any operator,
                hotel and/or third-party service providers.
              </p>

              <p>
                You are solely responsible for your communications and/or
                interactions and/or meetings with other third party service
                providers, users, hotels and/or the operator(s) resulting from
                your use of the Website/App and/or the services and you shall
                take all reasonable precautions in such communications,
                interactions and/or meetings.
              </p>

              <p>
                Tours will be transported by various sizes and types of
                vehicles. Trypexpert L.L.C-FZ has no obligation nor liability
                for the size, type or model of the transportation used, provided
                however, that Trypexpert L.L.C-FZ will make reasonable
                commercial efforts to make sure that all vehicles used in
                connection with the Tour will be in full compliance with any
                applicable local laws and regulations. Special personal needs
                such as wheelchair-accessible vehicles, baby chairs, carriages,
                or dietary requirements, will be provided "on a request" basis
                upon advanced notification to Trypexpert L.L.C-FZ via the
                Website/App and/or e-mail, as applicable. Whilst the Operator
                will do its best to deliver such special needs, these are often
                requiring coordination with third-parties and Trypexpert
                L.L.C-FZ shall not be held responsible in case of lack or
                partial delivery.
              </p>

              <h5>4. User Responsibility</h5>

              <p className="mb-1">
                <strong>4.1. Tours</strong>
              </p>

              <p>
                You are required to duly arrive to anyGroup Tour pick-up point
                at least 15 minutes prior to the time set for such Tour to
                begin. During the Tour, drivers are not obligated to wait for
                you after the time set in each case by the relevant
                representative. If you miss the pickup time, or the time set for
                arrival at other points during the Tour, the Tour may proceed
                without you and Trypexpert L.L.C-FZ will not be held responsible
                nor liable for any compensation, refund or damages caused to you
                as a result thereof. You hereby understand that in certain types
                of Booked Service, driver's arrival to pick up points may be
                delayed due to unexpected traffic or other external conditions
                which are neither under Trypexpert L.L.C-FZ's nor driver's
                control. Any changes you wish to make to your Booked Service
                including change in pick-up location, tour date, must be made in
                writing and confirmed by Trypexpert L.L.C-FZ.
              </p>

              <p>
                <strong>4.2.</strong> For the avoidance of doubt, while
                participating in a group Tour, you are required to stay with the
                group at all times, while any separation from the group,
                permanently or temporarily, may cause a special 'rescue fee',
                according to the circumstances and in operator's sole
                discretion, and such rescue fee, will be fully and exclusively
                borne by you. You hereby acknowledge and agree that you shall
                have no right to offset or deduct any such rescue or similar in
                nature costs or fees applicable to you under these Terms from
                any missed/unused Website/App or attraction costs.
              </p>

              <p>
                <strong>4.3</strong> It is highly recommended that you will
                carry an active and charged cell phone from which you will be
                able at all time to receive and make local and/or international
                calls. You should provide Trypexpert L.L.C-FZ with the contact
                number during booking process. You hereby acknowledge that using
                your cell phone out of your country may impose special rates and
                costs. Trypexpert L.L.C-FZ shall not be liable for and will not
                bear any costs or expenses in this and such usage shall be at
                your sole and exclusive expense.
              </p>

              <p>
                <strong>4.4 </strong>It is hereby clarified that Trypexpert
                L.L.C-FZ may, at its sole and absolute discretion, requires you
                to withdraw, or otherwise suspend you from any Tour or other
                Booked Service, if your behavior is deemed to be offensive,
                violent, or to cause annoyance or significant discomfort to
                other participants. Trypexpert L.L.C-FZ's right in this respect
                shall also apply in case where you are not keeping a reasonable
                pace with the rest of the group in a way that is detrimental to
                the experience of other participants Trypexpert L.L.C-FZ and
                Operator shall have no further liability for your carriage under
                such circumstances and you shall not be eligible for any refund
                or compensation.
              </p>

              <p>
                <strong>4.5</strong> Trypexpert L.L.C-FZ recommends you to
                insure yourself against any and all personal health damages. In
                addition, Trypexpert L.L.C-FZ will not be liable for any
                loss/theft of personal belongings, and recommends that valuable
                belongings shall be left at home. We strongly recommend that you
                purchase comprehensive travel insurance at the time of booking
                to protect against the risk of cancellation or interruption,
                loss of baggage, medical expenses and travel delay.
              </p>

              <p>
                <strong>4.6</strong> You are required to confirm that there are
                no mistakes or overlaps between the Services in the itinerary
                provided to you by the Website/App. In any case of contradiction
                in your itinerary caused by the Website/App, you are required to
                contact our customer service.
              </p>

              <h5>5. Waiver and Release</h5>

              <p>
                During a Tour, it is likely that the Operator and/or any one
                acting on his behalf, including drivers, tour guides and etc.,
                will take certain photographs with their devices e.g. cameras,
                mobile phones, solely for advertising, publicity and promotional
                purposes and such will be published on social media or in other
                marketing materials, all subject to applicable privacy laws. If
                you do not agree to be photographed, please inform the tour
                guide/driver or Trypexpert L.L.C-FZ's representative as soon as
                possible, and in any event before such photographs are taken.
                You consent and agree that any photograph taken by a
                representative of Trypexpert L.L.C-FZ, may be used, adapted,
                reproduced, publicly distributed, or exhibited for the purposes
                mentioned above. You will not receive any compensation for any
                use of such photographs. You expressly release and hold harmless
                Trypexpert L.L.C-FZ and its employees and contractors from any
                and all claims which you have or may have arising out of the
                use, adaptation, reproduction, distribution, broadcast, or
                exhibition of such photographs.
              </p>

              <h5>6. Cancellation and Refund Policy</h5>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Type of Tourism Service</th>
                    <th>Cancellation Terms</th>
                    <th>Refund Terms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1-Day Group Tours in any city ofThe United Arab Emirates
                    </td>
                    <td>
                      Cancelation up to 24 hours before the start time of the
                      trip by sending email to Trypexpert L.L.C-FZ
                    </td>
                    <td>100% refund minus a 5% handling fee</td>
                  </tr>
                  <tr>
                    <td>Private 1 Day Tours in The United Arab Emirates</td>
                    <td>
                      Cancelation up to 48 hours before the start time of the
                      trip by sending email to Trypexpert L.L.C-FZ
                    </td>
                    <td>100% refund minus a 5% handling fee</td>
                  </tr>
                  <tr>
                    <td>Airport Transportation or VIP Services</td>
                    <td>
                      Cancelation up to 48 hours before the start time of the
                      trip by sending email to Trypexpert L.L.C-FZ
                    </td>
                    <td>100% refund minus a 5% handling fee</td>
                  </tr>
                  <tr>
                    <td>Leisure Activities</td>
                    <td>
                      Cancelation up to 48 hours before the start time of the
                      trip by sending email to Trypexpert L.L.C-FZ
                    </td>
                    <td>100% refund minus a 5% handling fee</td>
                  </tr>
                  <tr>
                    <td>E-Tickets for the parks and attractions</td>
                    <td>
                      Cancelation is acceptable before your payment is done
                      and/or before issuance of tickets from our side. Once the
                      E-Tickets are sent from our side, NO REFUND will be
                      provided.
                    </td>
                    <td>
                      100% refund before the issuance of E-Tickets or NO REFUND
                      once the tickets are issued and sent to you.
                    </td>
                  </tr>
                </tbody>
              </table>

              <ul>
                <li>
                  Your Booked Service shall be deemed canceled only if you
                  provide written cancelation notice and refund request sent to
                  Trypexpert L.L.C-FZ with sufficient prior notice. Such
                  requests are subject to Trypexpert L.L.C-FZ's official
                  confirmation. All refund requests should be directed to
                  Trypexpert L.L.C-FZ via its e-mail address{" "}
                  <Link to="mailto:info@trypexpert.com" target="_blank">
                    info@trypexpert.com.
                  </Link>
                </li>
                <li>
                  For the avoidance of any doubt, in any case of pandemics or
                  epidemics, the refund policy will remain in accordance with
                  the refund policy as set forth in the table above.
                </li>
              </ul>

              <h5>7. Fees and Payments</h5>

              <ul>
                <li>
                  Payments may be processed via certain online payment service
                  providers (<strong>"Online Payment Processors"</strong>). We
                  may add or change the Online Payment Processors by our sole
                  discretion. The Online Payment Processors enable you to send
                  payments securely online using a credit card, debit card or
                  bank account. We do not control and are not affiliated with
                  such Online Payment Processors. These Online Payment
                  Processors are independent contractors and have no employment
                  or agency relationship with Trypexpert L.L.C-FZ.
                </li>
                <li>
                  Fees are paid in AED(local currency of the UAE). Trypexpert
                  L.L.C-FZ may, at any time and at its sole discretion, amend
                  the fee schedule, payment terms and cancellation policies
                  specified on the Website/App. Any such changes will take
                  effect immediately after being posted on Trypexpert L.L.C-FZ's
                  Website/App. The third party Payment Gateway may deduct
                  foreign currency processing costs from any payment (including
                  currency conversion fees and transfer charges and other
                  processing commissions incurred by you).
                </li>
                <li>
                  You hereby acknowledge that all credit card payment for Booked
                  Services on or through the Website/App will be handled by
                  Trypexpert L.L.C-FZ's payment processor corporation.
                </li>
                <li>
                  Unless explicitly stated otherwise in writing regarding
                  certain Tourism Services offered via the Website/App, all such
                  Tourism Services prices do not include meals, beverages,
                  entrance fees, accommodation, personal travel insurance or any
                  other costs and expenses which are not stated under
                  inclusions.
                </li>
                <li>
                  In addition, for certain Tourism Services a price reduction
                  will apply to children under a certain age, depending on the
                  child policy of each park and/or attraction. This discount is
                  also not cumulative with other discounts, and will apply only
                  if presented explicitly for the Booked Service using a coupon
                  discount code.
                </li>
              </ul>

              <h5>8. Use Restrictions</h5>

              <p>
                There are certain conducts which are strictly prohibited when
                using the Website/App. Please read the following restrictions
                carefully. Failure to comply with any of the provisions set
                forth herein may result (at Trypexpert L.L.C-FZ's sole
                discretion) in the termination of your use of the Website/App
                and/or Content and/or the Service and may also expose you to
                civil and/or criminal liability.
              </p>

              <p>
                <strong>
                  Unless otherwise explicitly permitted under these Terms or in
                  writing by Trypexpert L.L.C-FZ, you may not (and you may not
                  permit anyone to):
                </strong>
              </p>

              <ul>
                <li>
                  (a) use the Website/App and/or the Content for any illegal,
                  immoral, unlawful and/or unauthorized purposes;
                </li>
                <li>
                  (b) use the Website/App and/or Content for non-personal or
                  commercial purposes;
                </li>
                <li>
                  (c) remove or disassociate, from the Content and/or the
                  Website/App any restrictions and signs indicating proprietary
                  rights of Trypexpert L.L.C-FZ, including but not limited to
                  any proprietary notices contained in such materials (such as
                  ©,™, or ®);
                </li>
                <li>
                  (d) interfere with or violate Users' rights to privacy and
                  other rights, or harvest or collect personally identifiable
                  information about Users without their express consent, whether
                  manually or with the use of any robot, any search or retrieval
                  application, or use other manual or automatic device, process
                  or method to access the Website/App and retrieve, index and/or
                  data-mine information;
                </li>
                <li>
                  (e) interfere with or disrupt the operation of the Website/App
                  or the servers or networks that host the Website/App, or
                  disobey any laws, regulations, requirements, procedures, or
                  policies of such servers or networks;
                </li>
                <li>
                  (f) falsely state or otherwise misrepresent your affiliation
                  with any person or entity, or express or imply that Trypexpert
                  L.L.C-FZ endorses you, your Website/App, your business or any
                  statement you make, or present false or inaccurate information
                  about the Website/App;
                </li>
                <li>
                  (g) take any action that imposes, or may impose, an
                  unreasonable or disproportionately large load on our
                  Website/App infrastructure, as determined by us;
                </li>
                <li>
                  (h) bypass any measures we may use to prevent or restrict
                  access to the Website/App;
                </li>
                <li>
                  (i) copy, modify, alter, adapt, make available, translate,
                  port, reverse engineer, decompile, or disassemble any portion
                  of the Content made accessible by Trypexpert L.L.C-FZ on or
                  through the Website/App, or publicly display, reproduce,
                  create derivative works from, perform, distribute, or
                  otherwise use such Content;
                </li>
                <li>
                  (j) copy, distribute, display, execute publicly, make
                  available to the public, reduce to human readable form,
                  decompile, disassemble, adapt, sublicense, make any commercial
                  use, sell, rent, transfer, lend, process, compile, reverse
                  engineer, combine with other software, translate, modify or
                  create derivative works of any material that is subject to
                  Trypexpert L.L.C-FZ's proprietary rights, including Trypexpert
                  L.L.C-FZ's Intellectual Property (as such term is defined
                  below), in any way or by any means;
                </li>
                <li>
                  (k) make any use of the Content on any other Website/App or
                  networked computer environment for any purpose without
                  Trypexpert L.L.C-FZ's prior written consent;
                </li>
                <li>
                  (l) sell, license, or exploit for any commercial purposes any
                  use of or access to the Website/App and/or the Content;
                </li>
                <li>
                  (m) frame or mirror any part of the Website/App without
                  Trypexpert L.L.C-FZ's prior express written authorization;
                </li>
                <li>
                  (n) create a database by systematically downloading and
                  storing all or any of the Content from the Website/App;
                </li>
                <li>
                  (o) transmit or otherwise make available in connection with
                  the Website/App any virus, worm, Trojan Horse, time bomb, web
                  bug, spyware, or any other computer code, file, or program
                  that may or is intended to damage or hijack the operation of
                  any hardware, software, or telecommunications equipment, or
                  any other actually or potentially harmful, disruptive, or
                  invasive code or component;
                </li>
                <li>
                  (p) use the Website/App for any purpose for which the
                  Website/App is not intended; and/or
                </li>
                <li>(q) infringe and/or violate any of the Terms.</li>
              </ul>

              <h5>9. Minors</h5>

              <p>
                The Website/App is intended for Users over the age of eighteen
                (18). We reserve the right to request proof of age at any stage
                so that we can verify that minors under this age are not using
                the Website/App. In the event that it comes to our knowledge
                that a person under the age of eighteen (18) is using the
                Website/App, we will prohibit and block such User from accessing
                the Website/App and will make all efforts to promptly delete any
                Personal Information (as such term is defined in our Privacy
                Policy) with regard to such User.
              </p>

              <h5>10. Contacting us via the Website/App</h5>

              <p>
                In order to contact us and use the Website/App, you will need to
                fill out and complete our contact form available on Website/App.
                The contact form requires, inter alia, the User's full name,
                e-mail address and telephone number. Additionally, you can
                optionally provide any text you wish to insert into the "message
                box". You may also contact Trypexpert L.L.C-FZ via the
                telephone, email, SMS, or WhatsApp correspondence, and via our
                social media accounts - Twitter, Facebook, Instagram and Skype.
              </p>

              <h5>11. Registration and User Account</h5>

              <ul>
                <li>
                  In order to use the Service you may be required to register
                  and create an account (the <strong>"Account"</strong>) by
                  completing the registration form available on the Website/App,
                  as further detailed in our Privacy Policy. You may not have
                  more than one (1) active Account.
                </li>
                <li>
                  Your Account is password protected. In order to protect the
                  security of your Personal Information available on your
                  Account to the greatest extent possible, you must safeguard
                  and not disclose your Account log-in details and you must
                  supervise the use of such Account. You must provide accurate
                  and complete information when creating an Account and you
                  agree to not misrepresent your identity or your Account
                  information. You agree to keep your Account information up to
                  date and accurate. Otherwise, we will not be able to provide
                  you with the Service and to contact you when necessary.
                </li>
                <li>
                  You may not assign or transfer your rights or delegate your
                  duties under the Account without the prior written consent of
                  Trypexpert L.L.C-FZ. You must notify us immediately of any
                  unauthorized use of your Account or any other breach of
                  security and in such event you must change your password
                  immediately via the settings in the Website/App. We cannot and
                  will not be liable for any loss or damage arising from any
                  failure of yours to comply with these Terms, i.e., if someone
                  else accesses your Account through the registration
                  information he/she has obtained from you or through a
                  violation by you of these Terms, or for any unauthorized use
                  of your password or Account or any other breach of security.
                </li>
                <li>
                  You are solely and fully responsible for maintaining the
                  confidentiality of the password and account and for all
                  activities that occur under your account. If we in good faith
                  believe you have created an Account impersonating another
                  person you may be exposed to civil and/or criminal liability.
                </li>
                <li>
                  Cancelling your account may cause the loss of certain
                  information you provided us and/or the capacity of your
                  account. We do not accept any liability for such loss.
                </li>
              </ul>

              <h5>12. Privacy and Cookie Policy</h5>

              <p>
                We respect your privacy and are committed to protect the
                information you share with us. We believe that you have a right
                to know our practices regarding the information we collect when
                you connect to, access or use the Website/App. Our policy and
                practices and the type of information collected are described in
                details in our{" "}
                <Link to={`${Weburl}/privacy-policy`} target="_blank">
                  Privacy Policy
                </Link>{" "}
                and our{" "}
                <Link to={`${Weburl}/cookie-policy`} target="_blank">
                  Cookie Policy
                </Link>{" "}
                which is incorporated herein by reference. You agree that
                Trypexpert L.L.C-FZ may use personal information that you
                provide or make available to Trypexpert L.L.C-FZ in accordance
                with the Privacy Policy. If you intend to access or use the
                Website/App you must first read and agree to the Privacy Policy
                and Cookies Policy. If you submit Personal Information on behalf
                of a third party, you hereby acknowledge that such third-party
                was made aware of the Privacy Policy and has granted his/her
                consent to the processing of his/her Personal Information by us.
              </p>

              <h5>13. Intellectual Property Rights</h5>

              <p>
                The Website/App, the Content and Trypexpert L.L.C-FZ's
                proprietary assets and all intellectual property rights
                pertaining thereto, including, but not limited to, inventions,
                patents and patent applications, trademarks, trade names,
                service marks, copyrightable materials, domain names and trade
                secrets, whether or not registered or capable of being
                registered (collectively, "Intellectual Property"), are owned by
                and/or licensed to Trypexpert L.L.C-FZ and are protected by
                applicable patent, copyright and other intellectual property
                laws and international conventions and treaties. All rights not
                expressly granted to you hereunder are reserved by Trypexpert
                L.L.C-FZ.
              </p>

              <p>
                The Terms do not convey to you an interest in or to Trypexpert
                L.L.C-FZ's Intellectual Property but only a limited revocable
                right of use in accordance with the Terms. Nothing in the Terms
                constitutes a waiver of Trypexpert L.L.C-FZ's Intellectual
                Property under any law.
              </p>

              <p>
                To the extent you provide any feedbacks, comments or suggestions
                to Trypexpert L.L.C-FZ (<strong>"Feedback"</strong>
                ), Trypexpert L.L.C-FZ shall have an exclusive, royalty-free,
                fully paid up, worldwide, perpetual and irrevocable license to
                incorporate the Feedback into any of Trypexpert L.L.C-FZ's
                current or future services, products or technologies and use
                same for any purpose all without further compensation to you and
                without your approval. You agree that all such Feedback shall be
                deemed to be non-confidential. Further, you warrant that your
                Feedback is not subject to any license terms that would purport
                to require Trypexpert L.L.C-FZ to comply with any additional
                obligations with respect to any Trypexpert L.L.C-FZ current or
                future products, technologies or services that incorporate any
                Feedback.
              </p>

              <h5>14. Trademarks and Trade names</h5>

              <p>
                Trypexpert L.L.C-FZ's marks and logos and all other proprietary
                identifiers used by Trypexpert L.L.C-FZ in connection with the
                Website/App (<strong>"Trypexpert L.L.C-FZ's Trademarks"</strong>
                ) are all trademarks and/or trade names of Trypexpert L.L.C-FZ,
                whether or not registered. All other trademarks, service marks,
                trade names and logos which may appear on the Website/App belong
                to their respective owners (<strong>"Third Party Marks"</strong>
                ). No right, license, or interest to Trypexpert L.L.C-FZ's
                Trademarks and the Third Party Marks is granted hereunder, and
                you agree that no such right, license, or interest may be
                asserted by you with respect thereto and therefore you will
                avoid using any of those marks, except as permitted herein.
              </p>

              <h5>
                15. Linking to Trypexpert L.L.C-FZ's Website/App and links to
                Third Party Website/Apps
              </h5>

              <p>
                We welcome links to any page on our Website/App. You are free to
                establish a hypertext link to the Website/App so long as the
                link does not state or imply any connection or approval of your
                Website/App, products and/or services by Trypexpert L.L.C-FZ,
                and does not portray Trypexpert L.L.C-FZ in a false or otherwise
                offensive manner. You may not link to our Website/App from a
                Website/App that you do not own or have permission to use. In
                the event that you link to Trypexpert L.L.C-FZ's Website/App you
                represent that your Website/App does not contain content that is
                unlawful, offensive or infringing third party rights. However,
                we do not permit framing or inline linking.
              </p>

              <p>
                Certain links provided herein permit our Users to leave this
                Website/App and enter non-Trypexpert L.L.C-FZWebsite/Apps or
                services. Those linked Website/Apps and services are provided
                solely as a convenience to you. These linked Website/Apps and
                services are not under the control of Trypexpert L.L.C-FZ and it
                is not responsible for the availability of such external
                Website/Apps or services, and does not endorse and is not
                responsible or liable for any content including but not limited
                to content advertising, products or other information on or
                available from such linked Website/Apps and services or any link
                contained in linked Website/Apps or service. In addition,
                Trypexpert L.L.C-FZ is not responsible or liable for such linked
                Website/Apps and services' privacy practices and/or any other
                practices. Your access to, use of and reliance upon any such
                Website/Apps, services and content and your dealings with such
                third parties are at your sole risk and expense. Trypexpert
                L.L.C-FZ reserves the right to terminate any link at any time.
                You further acknowledge and agree that Trypexpert L.L.C-FZ shall
                not be responsible or liable, directly or indirectly, for any
                damage or loss caused or alleged to be caused, by or in
                connection with use of or reliance on any services, content,
                products or other materials available on or through such linked
                Website/Apps or resource. Most of such linked Website/Apps and
                services provide legal documents, including terms of use and
                privacy policy, governing the use thereof. It is always
                advisable and we encourage you to read such documents carefully
                before using those Website/Apps and services, inter alia, in
                order to know what kind of information about you is being
                collected.
              </p>

              <h5>16. Social Media Features</h5>

              <p>
                The Website/App may include social sharing and posting features
                and other integrated tools (for example the Facebook "Like" and
                "Share" buttons, sharing and posting content via Twitter,
                YouTube, Facebook, Instagram, and e-mail etc.) (
                <strong>"Social Features"</strong>).
              </p>

              <p>
                The Social Features are operated or allow for social integration
                with certain third party social networks or third party
                platforms (<strong>"Social Network"</strong>). These are created
                and maintained by third parties who are not affiliated with
                and/or controlled by Trypexpert L.L.C-FZ. Your use of the Social
                Features is subject to the applicable third party Social Network
                terms of use and privacy policies. If you do not agree to the
                practices described in such terms you should disable our
                Website/App's integration with such Social Networks, however you
                may find that you are not able to enjoy all the features
                available in our Website/App. Trypexpert L.L.C-FZ is not
                responsible and has no liability for your use of such Social
                Networks.
              </p>

              <h5>17. Advertisements, Promotions, Sponsorships and Benefits</h5>

              <p>
                Trypexpert L.L.C-FZ may accept and display via the Website/App
                advertisements, promotions and sponsorships from third parties
                and may provide you with benefits provided via third parties.
                Please note that Trypexpert L.L.C-FZ makes no warranties or
                representations concerning such advertisements, promotions,
                sponsorship and benefits whether or not Trypexpert L.L.C-FZ has
                control over them. Trypexpert L.L.C-FZ may be entitled to
                certain shares of the earnings from such advertisements,
                promotions and sponsorship. You agree, acknowledge and consent
                that you will not be entitled to any compensation with respect
                to such monetary amounts. Trypexpert L.L.C-FZ assumes no
                responsibility for such third party advertisements, benefits and
                sponsorships and will not be liable for any damage or loss, cost
                or expense incurred to you or any other person as a result of or
                in connection with third party advertisements, benefits and
                sponsorships
              </p>

              <p>
                All the information contained in such advertisements and
                commercials belongs solely to the advertisers and Trypexpert
                L.L.C-FZ makes no warranties or representations in respect of
                such, whether or not Trypexpert L.L.C-FZ has control over such
                advertisements or commercials and these are provided on an "AS
                IS" basis.
              </p>

              <p>
                Trypexpert L.L.C-FZ and/or its representatives are not obliged
                to nor can they verify the accuracy of information represented
                in such advertisements. Thus, Trypexpert L.L.C-FZ makes no
                representation regarding the accuracy of advertisements.
              </p>

              <h5>18. Availability</h5>

              <p>
                The Website/App's availability and functionality depends on
                various factors, such as communication networks. Trypexpert
                L.L.C-FZ does not warrant or guarantee that the Website/App will
                operate and/or be available at all times without disruption or
                interruption, or that it will be immune from unauthorized access
                or error-free.
              </p>

              <h5>19. Changes to The Website/App</h5>

              <p>
                Trypexpert L.L.C-FZ reserves the right to modify, correct,
                amend, enhance, improve, make any other changes to, or
                discontinue, temporarily or permanently this Website/App (or any
                part thereof, including but not limited to the Content) or the
                Service without notice, at any time. In addition, you hereby
                acknowledge that the Content provided under this Website/App,
                may be changed, extended in terms of content and form or removed
                at any time without any notice to you. You agree that Trypexpert
                L.L.C-FZ shall not be liable to you or to any third party for
                any modification, suspension, or discontinuance of this
                Website/App or the Content included therein, and/or the Service.
                You hereby agree that Trypexpert L.L.C-FZ is not responsible for
                any errors or malfunctions that may occur in connection with the
                performance of such changes.
              </p>

              <h5>20. Disclaimers and No Warranties</h5>

              <p>
                To the fullest extent legally permissible, the Website/App and
                content are provided on an{" "}
                <strong>"as is", "with all faults"</strong> and{" "}
                <strong>"as available"</strong> basis, and Trypexpert L.L.C-FZ,
                including its vendors, officers, shareholders, sub-contractors,
                directors, employees, affiliates, subsidiaries, agents and
                suppliers (collectively,{" "}
                <strong>Trypexpert L.L.C-FZ's representatives"</strong>),
                disclaim all warranties of any kind, expressed, implied or
                statutory, including but not limited to warranties of title or
                non-infringement or implied warranties of use, merchantability
                or fitness for a particular purpose and those arising from a
                course of dealing or usage of trade. You may have additional
                consumer rights under your local laws that this agreement cannot
                change. We note that these terms govern solely the use of the
                Website/App. All disclaimers and warranties regarding any
                services of Trypexpert L.L.C-FZ shall be governed by the terms
                and conditions reflected in a separate services agreement
                between Trypexpert L.L.C-FZ and each user.
              </p>

              <p>
                <strong>We do not warrant</strong> (i) that the use and
                operation of the Website/App and/or the service and/or the
                content is or will be secure, timely, accurate, complete,
                uninterrupted, without errors, or free of viruses, defects,
                worms, other harmful components or other program limitations,
                (ii) that we will correct any errors or defects in the
                Website/App, (iii) and/or make any representation regarding the
                use, inability to use or operate, or the results of the use of
                the Website/App, the service and/or content available thereon or
                through the Website/App (including that the results of using the
                Website/App and/or service will meet your requirements or your
                expectations or be free from mistakes).
              </p>

              <p>
                We are not responsible for any consequences to you or others
                that may result from technical problems (including without
                limitation in connection with the internet such as slow
                connections, traffic congestion, and overload of servers, delays
                or interruptions) or any telecommunications or internet
                providers.
              </p>

              <p>
                Due to the continual development of new techniques for intruding
                upon and attacking networks, you hereby acknowledge that
                Trypexpert L.L.C-FZcannot guarantee that information provided by
                you via the Website/App will be secured at all times.
              </p>

              <p>
                You agree that use of the Website/App, the service and/or the
                content therein is entirely at your own risk.
              </p>

              <h5>21. Limitation of Liability</h5>
              <p>
                To the maximum extent legally permissible, in no event shall
                Trypexpert L.L.C-FZ, and its representatives be liable for any
                damages whatsoever, including, but not limited to, direct,
                indirect, special, punitive, exemplary, incidental or
                consequential damages of any kind, under any legal theory
                (including, without limitation, contract, negligence, tort or
                strict liability), including, without limitation, loss of
                goodwill, profits or data and business interruption, arising
                hereunder, resulting from or arising out of the Website/App, the
                service, the content and/or your participation in booked
                services, your use or inability to use the Website/App and/or
                the content and/or the failure of the Website/App to perform as
                represented or expected, or from any content, or from the
                performance or failure of Trypexpert L.L.C-FZ to perform under
                these terms, any other act or omission of Trypexpert L.L.C-FZ or
                Trypexpert L.L.C-FZ's representatives by any other cause
                whatsoever; or based upon breach of warranty, guarantee or
                condition, breach of contract, negligence, strict liability,
                tort, or any other legal theory, regardless of whether
                Trypexpert L.L.C-FZ or its representatives have been advised of
                the possibility of such damages.
              </p>

              <p>
                Inasmuch as some jurisdictions do not allow the exclusions or
                limitations as set forth herein, the full extent of the above
                exclusions and limitations may not apply.
              </p>

              <h5>22. Indemnification</h5>

              <p>
                You agree to defend, indemnify and hold harmless Trypexpert
                L.L.C-FZ, including Trypexpert L.L.C-FZ's Representatives from
                and against any and all claims, damages, obligations, losses,
                liabilities, costs, debts, and expenses (including but not
                limited to attorney's fees) arising from: (i) your use, misuse
                of, inability to use the Website/App, the Service and/or
                Content; (ii) your violation of any of these Terms; (iii) your
                violation of any third party rights, including without
                limitation any intellectual property rights or privacy right of
                such third party, in connection with your use of the
                Website/App; and (iv) any damage of any sort, whether direct,
                indirect, special or consequential, you may cause to any third
                party with relation to the Website/App, the Service and/or the
                Booked Service. It is hereby clarified that this defense and
                indemnification obligation will survive these Terms.
              </p>

              <p>
                Without derogating from the foregoing, we reserve the right to
                assume the exclusive defense and control of any matter which is
                subject to indemnification by you, which will not excuse your
                indemnity obligations hereunder and in which event you will
                fully cooperate with us in asserting any available defense. You
                agree not to settle any matter subject to an indemnification by
                you without first obtaining our prior express written approval
              </p>

              <h5>23. Amendments to the Terms</h5>

              <p>
                Trypexpert L.L.C-FZ may, at its sole discretion, change the
                Terms from time to time, including any other policies
                incorporated thereto, so please re-visit this page frequently.
                In case of any material change, we will make reasonable efforts
                to post a clear notice on the Website/App and/or will send you
                an e-mail (to the extent that you provided us with such e-mail
                address) regarding such change. Such material changes will take
                effect seven (7) days after such notice was provided on our
                Website/App or sent via e-mail, whichever is the earlier.
                Otherwise, all other changes to these Terms are effective as of
                the stated "Last Revised" date and your continued use of the
                Website/App on or after the Last Revised date will constitute
                acceptance of, and agreement to be bound by, those changes. In
                the event that the Terms should be amended to comply with any
                legal requirements, the amendments may take effect immediately,
                or as required by the law and without any prior notice.
              </p>

              <h5>
                24. Termination of these Terms and the Termination of the
                Website/App's operation
              </h5>

              <p>
                At any time, Trypexpert L.L.C-FZ may without notice discontinue
                your use of the Website/App, at its sole discretion, in addition
                to any other remedies that may be available to Trypexpert
                L.L.C-FZ under any applicable law.
              </p>

              <p>
                Additionally, Trypexpert L.L.C-FZ may at any time, at its sole
                discretion, cease the operation of the Website/App or any part
                thereof, temporarily or permanently, delete any information or
                Content from the Website/App or correct, modify, amend, enhance,
                improve and make any other changes thereto or discontinue
                displaying or providing any information, Content or features
                therein without giving any prior notice. You agree and
                acknowledge that Trypexpert L.L.C-FZ does not assume any
                responsibility with respect to, or in connection with the
                termination of the Website/App's operation and loss of any data.
                The provisions of these Terms that, by their nature and content,
                must survive the termination of these Terms in order to achieve
                the fundamental purposes of these Terms shall so survive.
                Without limiting the generality of the forgoing, the
                Intellectual Property, Disclaimer and Warranties, Limitation of
                Liability, Indemnification and General sections will survive the
                termination of the Terms.
              </p>

              <h5>25. General</h5>

              <ul>
                <li>
                  (a) These Terms constitute the entire terms and conditions
                  between you and Trypexpert L.L.C-FZ relating to the subject
                  matter herein and supersedes any and all prior or
                  contemporaneous written or oral agreements or understandings
                  between you and Trypexpert L.L.C-FZ,
                </li>
                <li>
                  (b) any claim relating to the Website/App or the use thereof
                  will be governed by and interpreted in accordance with the
                  laws of the United Arab Emirates without reference to its
                  conflict-of-laws principles and the United Nations Convention
                  Relating to a Uniform Law on the International Sale of Goods
                  may not be applied,
                </li>
                <li>
                  (c) any dispute arising out of or related to the Website/App
                  will be brought in, and you hereby consent to exclusive
                  jurisdiction and venue in, the competent courts of the United
                  Arab Emirates. You agree to waive all defenses of lack of
                  personal jurisdiction and forum non-convenience and agree that
                  process may be served in a manner authorized by applicable law
                  or court rule. Notwithstanding the foregoing, Trypexpert
                  L.L.C-FZ may seek injunctive relief in any court of competent
                  jurisdiction,
                </li>
                <li>
                  (d) these Terms do not, and shall not be construed to create
                  any relationship, partnership, joint venture,
                  employer-employee, agency, or franchisor-franchisee
                  relationship between the parties hereto,
                </li>
                <li>
                  (e) no waiver by either party of any breach or default
                  hereunder will be considered to be a waiver of any preceding
                  or subsequent breach or default. Any heading, caption or
                  section title contained herein is inserted only as a matter of
                  convenience, and in no way defines or explains any section or
                  provision hereof,
                </li>
                <li>
                  (f) you acknowledge and agree that any cause of action that
                  you may have arising out of or related to the Website/app must
                  commence within three (3) months after the cause of action
                  accrues. Otherwise, such cause of action is permanently
                  barred,
                </li>
                <li>
                  (g) if any provision hereof is adjudged by any court of
                  competent jurisdiction to be unenforceable, that provision
                  shall be limited or eliminated to the minimum extent necessary
                  so that these Terms shall otherwise remain in full force and
                  effect while most nearly adhering to the intent expressed
                  herein,
                </li>
                <li>
                  (h) you may not assign or transfer these Terms (including all
                  rights and obligations hereunder) without our prior written
                  consent and any attempt to do so in violation of the foregoing
                  shall be void. We may assign or transfer these Terms without
                  restriction or notification,
                </li>
                <li>
                  (i) no amendment hereof will be binding unless in writing and
                  signed by Trypexpert L.L.C-FZ, and
                </li>
                <li>
                  (j) the parties agree that all correspondence relating to
                  these Terms shall be written in the English language.
                </li>
              </ul>

              <h5>26. Contact</h5>

              <p>
                If you have any questions (or comments) concerning the Terms,
                you are most welcome to send us an e-mail to{" "}
                <Link to="mailto:info@trypexpert.com" target="_blank">
                  info@trypexpert.com
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
