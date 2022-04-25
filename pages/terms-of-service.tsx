import { PublicContainer } from 'components/wrappers/PublicContainer';

export default () => {
  return (
    <PublicContainer>
      <h1 className="text-blue-450 uppercase font-bold">Terms of Service</h1>
      <div className="text-xs font-medium text-black">
        Welcome to the &quot;myadultfan.com&quot; website
        <br />
        <br />
        The website is only offered and available to Users who are 18 years of
        age or older. By using the Website, you represent and warrant that you
        are 18 years of age. If you do not meet all of these conditions, you
        must not acces or use the Website.
        <br />
        <br />
        The Website is a social media website and application service which
        allows Users to create a profile, upload photos and videos into their
        profile, set a monthly subscription price payable by other Users who
        wish to view their User Content and thereby generate revenue from Fans.
        <br />
        <br />
        These Terms govern your use of the Website, including any content,
        functionality, and services. by registering with and using
        myadultfan.com, you hereby accept and agree to be bound by and abide by
        these Terms. If you do not want to agree to these Terms of Service, you
        must not access or use the Website.
        <br />
        <br />
        All User Account registration and profile information is thuthful and
        accurate and that any User Content you provide is your own and does not
        infringe the intellectual property rights or any other proprietorial
        rights of a third party.
      </div>
      <h1 className="text-blue-450 uppercase font-bold mt-2">
        Cancellation Policy
      </h1>
      <div className="text-xs font-medium text-black">
        You may cancel your subscription at any timr to prevent future billing.
        To cancel your subscription and prevent future billing simply select
        &apos;Billing&apos; from the settings menu of myadultfan.com to change
        your billing preferences. This will prevent any further charges from
        accurring. You will not be entitled to a partial refund of any unused
        membership fees if you have used the services for any part of your
        billing period.
        <br />
      </div>
      <h1 className="text-blue-450 uppercase font-bold mt-2">
        Reporting & Complaints.
      </h1>
      <p className="text-xs font-medium text-black">
        (a) Content Reporting. Any person who identifies content on the Website
        that they believe to be illegal, in violation of our Terms and
        Conditions, or otherwise in violation of a regulation or standard, is
        able to submit a complaint to our 24/7 Customer Support Team via email,
        messaging. All requests are reviewed within seven (7) business days. If
        any such review yields evidence of illegal content, or content that
        violates the Companys Terms and Conditions or our Compliance Policy, the
        content will be immediately removed from our system. (b) Appeals for
        Removal. Any person depicted in content on the Website is able to submit
        an appeal to have that content removed to our 24/7 Customer Support Team
        via email, messaging. If consent cannot be established, or if the person
        depicted in the content can demonstrate that the consent is void under
        applicable law, the identified content will be removed with immediate
        effect. If the Company disagrees that consent is void under applicable
        law, the Company must allow such disagreement to be resolved by a
        neutral body, at the Company's expense.
      </p>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-blue-450 h-12 outline-none text-gray-600"
        />
        <input
          type="text"
          placeholder="Email"
          className="border-b border-blue-450 h-12 outline-none text-gray-600"
        />
        <input
          type="text"
          placeholder="Url"
          className="border-b border-blue-450 h-12 outline-none text-gray-600"
        />
        <input
          type="text"
          placeholder="Complaint"
          className="border-b border-blue-450 h-12 outline-none text-gray-600"
        />
        <button className="bg-blue-450 rounded-xl mt-2 text-white font-bold max-w-fit px-4 self-center">
          Send
        </button>
      </form>
    </PublicContainer>
  );
};
