import { format } from 'date-fns';
import Image from 'next/image';
import Lock from 'public/assets/icons/ICONS-05.png';
import Play from 'public/assets/icons/ICONS-06.png';
import UpIcon from 'public/assets/icons/ICONS-07.png';
import MessageIcon from 'public/assets/icons/ICONS-08.png';
import ViewIcon from 'public/assets/icons/ICONS-09.png';
import PublicationHead from './PublicationHead';
import { useState } from 'react';
import Model from 'public/post/post1.jpg';

export default function Publication({ model }: any) {
  const [isVideo, setIsVideo] = useState(true);
  const [isImage, setIsImage] = useState(false);
  const [isPayment, setIsPayment] = useState(true);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function openModal(modalId: any) {
    let modal: any = document.getElementById(modalId);
    modal.classList.remove('hidden');
    const body = document.body;
    body.style.overflow = 'hidden';
  }

  return (
    <>
      <PublicationHead model={model} />
      <div className="flex flex-col mb-8 md:mt-2">
        <div className="w-full h-60 sm:h-96 relative">
          <Image
            src={Model}
            alt={model.id}
            layout="fill"
            className={`object-cover ${isSubscribe ? 'blur-[2px]' : ''}`}
          />
          {isImage && isSubscribe && (
            <div className="absolute flex flex-col justify-center w-full text-white top-20">
              <div className="flex flex-row justify-center items-center font-bold">
                <i className="fas fa-image px-2 text-2xl" /> 1
              </div>
              <button className="bg-black bg-opacity-60 px-3 py-1 font-bold text-center rounded-xl self-center my-1 text-base">
                Subscribe to Unlock
              </button>
            </div>
          )}
          {isVideo && (
            <>
              {isPayment && (
                <div className="absolute flex justify-center w-full top-20">
                  <Image src={Lock} height={80} width={80} alt="1" />
                </div>
              )}
              {isSubscribe && (
                <div className="absolute flex flex-col justify-center w-full text-white top-20">
                  <div className="flex flex-row justify-center">
                    <div className="rounded-md border-2 border-white mr-1">
                      <i className="fas fa-play flex items-end px-2 py-1 text-xs" />
                    </div>
                    <div>1 | 02:41</div>
                  </div>
                  <button className="bg-black bg-opacity-60 px-3 py-1 font-bold text-center rounded-xl self-center my-2 text-base">
                    Subscribe to Unlock
                  </button>
                </div>
              )}
              <div className="absolute right-14 px-2 text-white font-medium text-xs bg-gray-500">
                Full HD
              </div>
              <div className="absolute right-2 px-2 text-white font-medium text-xs bg-gray-500">
                02:41
              </div>
              {isPayment && (
                <div className="absolute right-4 top-6 rounded-md border-2 border-gray-500 text-gray-500">
                  <i className="fas fa-play flex items-end px-2 py-1 text-xs" />
                </div>
              )}
            </>
          )}
        </div>
        {isPayment && isVideo && (
          <button className="bg-white text-gray-400 font-extrabold text-center rounded-xl w-11/12 self-center my-2 py-1 text-base border border-gray-400">
            Buy for $16.00
          </button>
        )}
        <div className="flex items-center my-2 px-4 justify-between text-semibold text-gray-400">
          <div className="flex items-center">
            <Image src={UpIcon} height={15} width={20} alt="1" />{' '}
            <span className="ml-3 text-sm">2</span>
          </div>
          <div className="flex items-center">
            <Image src={MessageIcon} height={15} width={20} alt="1" />{' '}
            <span className="ml-3 text-sm">1</span>
          </div>
          <div className="flex items-center">
            <Image src={ViewIcon} height={15} width={20} alt="1" />{' '}
            <span className="ml-3 text-sm">25</span>
          </div>
        </div>
        {isFree && (
          <button
            onClick={() => openModal('modal')}
            className="bg-maf-pink  text-white font-bold rounded-3xl w-3/12 
                          text-base text-center my-1 px-4 py-1 self-center"
          >
            Tip me
          </button>
        )}
      </div>
    </>
  );
}
