import { PublicContainer } from 'components/wrappers/PublicContainer';

export default () => {
  return (
    <PublicContainer>
      <h1 className="text-blue-450 uppercase font-bold mt-2">
        Privacy & Policy
      </h1>
      <div className="text-xs font-medium text-black">
        Welcome to the &quot;myadultfan.com&quot; website
        <br />
        <br />
        Privacy is not a new concept. Humans have always desired privacy in
        their social as well as private lives. But the idea of privacy as a
        human right is a relatively modern phenomenon. Around the world, laws
        and regulations have been developed for the protection of data related
        to government, education, health, children, consumers, financial
        institutions, etc. This data is critical to the person it belongs to.
        Data privacy and security binds individuals and industries together and
        runs complex systems in our society. From credit card numbers and social
        security numbers to email addresses and phone numbers, our sensitive,
        personally identifiable information is important. This sort of
        information in unreliable hands can potentially have far-reaching
        consequences. Companies or websites that handle customer information are
        required to publish their Privacy Policies on their business websites.
        If you own a website, web app, mobile app or desktop app that collects
        or processes user data, you most certainly will have to post a Privacy
        Policy on your website (or give in-app access to the full Privacy Policy
        agreement)
      </div>
    </PublicContainer>
  );
};
