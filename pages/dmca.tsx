import { PublicContainer } from 'components/wrappers/PublicContainer';

export default () => {
  return (
    <PublicContainer>
      <h1 className="text-blue-450 uppercase font-bold mt-2">DMCA</h1>
      <div className="text-xs font-medium text-black">
        myadultfan.com respects the intellectual property rights of third
        parties and voluntarily complies with the Digital Millennium Copyright
        Act (DMCA). myadultfan.com has implemented a policy to terminate repeat
        copyright infringers. A copy of our repeat infringer policy (RIP) is
        available upon request to our users.
        <br />
        <br />
        Please note that, under the DMCA, any person who knowingly makes
        material misrepresentations in a notification of claimed infringement or
        in a counter-notification may be liable for damages.
      </div>
    </PublicContainer>
  );
};
