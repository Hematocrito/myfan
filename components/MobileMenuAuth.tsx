import { LinkIcon } from 'components';
import { useFormControl, useFormGroup } from 'hooks';
import { useState } from 'react';
import Home from 'public/assets/icons/BARRA HOMBRE-01.png';
import Star from 'public/assets/icons/BARRA HOMBRE-02.png';
import Mail from 'public/assets/icons/BARRA HOMBRE-03.png';
import ShoppingCart from 'public/assets/icons/BARRA HOMBRE-04.png';
import Search from 'public/assets/icons/lupa-02.png';
import Fire from 'public/assets/icons/barra modelo-02.png';
import Plus from 'public/assets/icons/barra modelo-03.png';
import ProfileIcon from 'public/assets/icons/menu usuario-02.png';
import ThumbUp from 'public/assets/icons/menu usuario-03.png';
import Heart from 'public/assets/icons/menu usuario-04.png';
import StarMenu from 'public/assets/icons/menu usuario-05.png';
import ShoppingCartMenu from 'public/assets/icons/menu usuario-06.png';
import LinkMenu from 'public/assets/icons/menu usuario-07.png';
import SingOut from 'public/assets/icons/menu usuario-08.png';
import FireMenu from 'public/assets/icons/menu modelo-03.png';
import VideoCam from 'public/assets/icons/menu modelo-04.png';
import Cam from 'public/assets/icons/menu modelo-05.png';
import { MdClear } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { userService } from 'services';

export const MobileMenuAuth = (props: any) => {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [isInfluencers, setIsInfluencers] = useState(false);

  const SearchForm = useFormGroup({ search: useFormControl(['']) });

  const handleOpen = (ev: any) => {
    setOpen(!open);
  };

  const logout = () => {
    setOpen(false);
    userService.logout();
  };
  return (
    <>
      <div className="flex justify-around items-center md:h-12">
        <div className="relative my-1 ml-4 w-5 h-5 md:w-10 md:h-10">
          <Link href={'/influencers'}>
            <a>
              <Image src={Home} layout="fill" />
            </a>
          </Link>
        </div>
        {isInfluencers && (
          <>
            <div className="relative w-6 h-5 md:w-10 md:h-11 my-1 pb-6 ">
              <Image src={Fire} layout="fill" />
            </div>
            <div className="relative h-7 w-7 md:w-11 md:h-11 md:top-1">
              <Image src={Plus} layout="fill" />
            </div>
          </>
        )}
        {!isInfluencers && (
          <div className="relative w-5 h-5 my-1 md:w-10 md:h-10">
            <Image src={Star} layout="fill" />
          </div>
        )}
        <div className="relative w-7 h-5 md:w-10 md:h-9 md:top-0.5 my-1">
          <Image src={Mail} layout="fill" />
          <div className="absolute -top-1 -right-1 bg-maf-green rounded-full font-bold px-[0.175rem] md:px-1 py-[0.015rem] text-[0.5rem] md:text-xs">
            125
          </div>
        </div>
        {!isInfluencers && (
          <div className="relative w-7 md:w-10 h-5 md:h-9 top-0.5 my-1">
            <Image src={ShoppingCart} layout="fill" />
            <div className="absolute -top-1 -right-1 bg-maf-green rounded-full font-bold px-[0.175rem] md:px-1 py-[0.015rem] text-[0.5rem] md:text-xs">
              4
            </div>
          </div>
        )}
        <div className="relative w-9 h-6 md:w-11 md:h-10">
          <Image src={Search} layout="fill" />
        </div>

        <div
          onClick={handleOpen}
          className={`relative rounded-full w-6 md:w-10 h-6 md:h-10 mr-2 visible transition-all duration-300 delay-75 cursor-pointer
            ${open ? 'invisible' : 'text-white'}
            `}
        >
          <img
            src={
              isInfluencers
                ? 'https://randomuser.me/api/portraits/women/34.jpg'
                : 'https://randomuser.me/api/portraits/men/35.jpg'
            }
            alt="{women.name}"
            className="rounded-full"
          />
        </div>
      </div>

      <div
        onClick={handleOpen}
        className={`'z-40 opacity-0 bg-slate-600/50 w-full h-screen top-0 left-0 transition-all duration-300 delay-100
        ${open ? 'fixed opacity-100' : 'hidden'}
        `}
      ></div>

      <div
        className={`transition-all duration-500 fixed bg-white z-50 top-0  right-0 h-screen shadow-lg w-2/3
        ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex">
          <div className="relative rounded-full flex-none w-14 h-14 border-2 border-blue-450 visible m-2 cursor-pointer text-white">
            <img
              src={
                isInfluencers
                  ? 'https://randomuser.me/api/portraits/women/34.jpg'
                  : 'https://randomuser.me/api/portraits/men/35.jpg'
              }
              alt="{women.name}"
              className="rounded-full"
            />
          </div>
          <div className="mt-2">
            {isInfluencers ? (
              <>
                <strong>LucyBlack18</strong>
                <br />
                <strong>@LucyBlack</strong>
              </>
            ) : (
              <>
                <strong>Brad Brown</strong>
                <br />
                <strong>@Brad Brown</strong>
              </>
            )}
          </div>
          <MdClear
            onClick={handleOpen}
            className="text-4xl mx-1 w-50 text-blue-450 py-1 my-2 absolute right-0 z-10"
          />
        </div>

        <div className="flex-none transition-all duration-200">
          <div className="px-2 relative transition-all duration-500 w-full">
            <nav id="nav" className="lg:text-sm lg:leading-6 relative">
              {!isInfluencers && (
                <ul>
                  <li>
                    <a className="group flex items-center mb-6 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={ProfileIcon}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-2 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={ThumbUp}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Favorite Vids
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-2 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={Heart}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Wishlist Vids
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-6 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={StarMenu}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Subscriptions
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-2 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={ShoppingCartMenu}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Orders
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-6 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={LinkMenu}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Transactions
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-6 font-medium text-blue-450">
                      <div className="cursor-pointer flex" onClick={logout}>
                        <div className="h-6 w-6 relative mx-4">
                          <Image
                            src={SingOut}
                            layout="fill"
                            className="object-fill"
                          />
                        </div>
                        Sing Out
                      </div>
                    </a>
                  </li>
                </ul>
              )}
              {isInfluencers && (
                <ul>
                  <li>
                    <a className="group flex items-center mb-2 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={ProfileIcon}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-6 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={Heart}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Subscribers
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-2 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={FireMenu}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Feeds
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-6 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={VideoCam}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Videos
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-2 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={Cam}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Galleries
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-6 pl-14 font-medium text-blue-450">
                      Tip me
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-2 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={ShoppingCartMenu}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Orders
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-2 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={LinkMenu}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-6 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={StarMenu}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Top models
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center mb-6 font-medium text-blue-450">
                      <div className="h-6 w-6 relative mx-4">
                        <Image
                          src={SingOut}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                      Sing Out
                    </a>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
