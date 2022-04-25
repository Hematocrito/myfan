import { Navbar } from 'views/shared';
import { LayoutHome } from './LayoutHome';

export default function LayoutClipsHome({ children, models }: any) {
  return (
    <>
      <LayoutHome models={models}>
        <div className="ml-2 my-4 font-semibold">Categories:</div>
        <div className="mb-2 md:mb-8">
          <Navbar
            routes={[
              { title: 'ALL', path: 'clips/all' },
              { title: 'FREE', path: 'clips/free' },
              { title: 'ON DEMAND', path: 'clips/ondemand' },
              { title: 'TOP VIEW', path: 'clips/topview' },
            ]}
          />
        </div>
        {children}
      </LayoutHome>
    </>
  );
}
