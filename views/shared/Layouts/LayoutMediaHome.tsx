import { Navbar } from 'views/shared';
import { LayoutHome } from './LayoutHome';

export default function LayoutMediaHome({ children, models }: any) {
  return (
    <>
      <LayoutHome models={models}>
        <div className="mb-2  md:mb-8">
          <Navbar
            routes={[
              { title: 'ALL', path: 'media/all' },
              { title: 'Photos', path: 'media/photos' },
              { title: 'Videos', path: 'media/videos' },
              //   { title: 'TOP VIEW', path: 'media/topview' },
            ]}
          />
        </div>
        {children}
      </LayoutHome>
    </>
  );
}
