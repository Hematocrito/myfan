import { Button, Input, Select } from 'components';
import RangeDouble from 'components/RangeDouble';
import { BannerDouble, Navbar, Stories, Filter } from 'views/shared';
import Image from 'next/image';
import { ReactElement } from 'react';
import { MdStarOutline } from 'react-icons/md';
import Male from 'public/assets/icons/ICONS-01.png';
import Female from 'public/assets/icons/ICONS-02.png';
import Bi from 'public/assets/icons/ICONS-03.png';
interface LayoutHomeProps {
  children: ReactElement | any;
  models: any;
}

export const LayoutHome = ({ children, models }: LayoutHomeProps) => {
  return (
    <section>
      <BannerDouble />
      <Navbar
        routes={[
          { title: 'Influencers', path: 'influencers' },
          { title: 'Clips', path: 'clips/all' },
          { title: 'Media', path: 'media/all' },
          { title: 'Stories', path: 'stories' },
          { title: 'Feed', path: 'feed' },
        ]}
      />
      {/* <div className="flex items-center justify-end py-1 px-2 text-blue-450 text-sm">
        <i className="fas fa-filter mx-2"></i>
        <span className="flex items-center justify-center">Filter</span>
        <i className="fas fa-chevron-down mt-1 mx-2"></i>
      </div> */}
      <Filter className="flex items-center justify-end text-xs">
        <form className="md:mx-[30%]">
          <div className="flex content-center">
            <MdStarOutline className="text-3xl text-blue-450 mr-2" />
            <strong>
              500 <span className="text-blue-450">Models</span>
            </strong>
          </div>
          <div className="grid grid-cols-3 gap-3 my-3">
            {/* <div className="flex items-center"> */}
            <input
              className="border-2 self-center border-blue-450 h-10 px-2 text-black w-full text-base font-medium outline-none rounded-lg appearance-none"
              autoComplete="off"
              placeholder="Enter Ke.."
            />
            {/* </div> */}
            {/* <Input name="password" formGroup={FormGroup}>
              {['Enter Ke..', 'The password is required']}
            </Input> */}
            {/* <Select name="male" formGroup={FormGroup}>
              {['', '', ['All']]}
            </Select> */}
            <select className="w-full px-2 py-1 h-10 bg-transparent text-base font-semibold focus:ring-2 rounded-lg border-2 self-center border-blue-450 outline-none text-gray-600">
              <option>All</option>
              <option>Male</option>
              <option>Female</option>
              <option>Trans</option>
            </select>
            <select className="w-full px-2 py-1 h-10 bg-transparent text-base font-semibold focus:ring-2 rounded-lg border-2 self-center border-blue-450 outline-none text-gray-600">
              <option>Sort</option>
              <option>Latest</option>
              <option>Oldes</option>
              <option>Most Popular</option>
            </select>
            {/* <Select name="male" formGroup={FormGroup}>
              {['', '', ['Sort', 'Latest', 'Oldes', 'Most Popular']]}
            </Select> */}
          </div>
          <div className="mx-[17%] md:mx-0">
            <p className="my-1">
              <strong>By gender & orientation</strong>
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-10 w-10 justify-self-start">
                <Image src={Male} />
              </div>
              <div className="h-10 w-10 justify-self-center">
                <Image src={Female} />
              </div>
              <div className="h-10 w-10 justify-self-end">
                <Image src={Bi} />
              </div>
            </div>
          </div>
          <div className="mx-[17%] md:mx-0">
            {/* <p className="my-2">
              <strong>Price up to</strong>
            </p> */}
            {/* <input type="range" name="" className="w-full" /> */}
            <RangeDouble
              initialMin={0}
              initialMax={7500}
              min={0}
              max={10000}
              step={100}
              price={0}
            />
          </div>
          <div className="flex justify-around">
            {/* <Button width="100px" type=''>Reset</Button> */}
            <button className="border-2 border-black font-medium  rounded-3xl my-2 px-8 py-2 text-sm md:text-lg">
              Reset
            </button>
            <button className="bg-blue-450 text-white font-medium  rounded-3xl my-2 px-8 py-2 text-sm md:text-lg">
              Apply
            </button>
          </div>
        </form>
      </Filter>

      <Stories models={models} />
      {children}
    </section>
  );
};
