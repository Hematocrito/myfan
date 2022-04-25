import BannerInfluencerImage from 'public/banner/1-1 piezas MOVIL myadult log out-01.png';
import BannerInfluencer from 'components/BannerInfluencer';
import { Navbar } from 'views/shared';
import SubscribeInfluencer from 'components/SubscribeInfluencer';
import TipModal from 'components/TipModal';

export default function LayoutInfluencer({ children }: any) {
  return (
    <>
      <BannerInfluencer influencer={BannerInfluencerImage} />
      <SubscribeInfluencer />
      <Navbar
        routes={[
          { title: 'FEED', path: 'influencers/id/feed' },
          { title: 'Clips', path: 'influencers/id/clips/all' },
          { title: 'PHOTOS', path: 'influencers/id/photos' },
          { title: 'ABOUT', path: 'influencers/id/about' },
          { title: 'TIP ME', path: 'influencers/id/tipme' },
        ]}
      />
      {children}
      <TipModal />
    </>
  );
}
