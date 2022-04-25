import Image from 'next/image';
import { useState } from 'react';
import Pagination from './Pagination';
import PublicationHead from './PublicationHead';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { useRef } from 'react';
import Slides from './Slides';
import { MdSms } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function StoriesModal({ model }: any) {
  const pages = [0, 1, 2];
  // const [pages, setpages] = useState([0, 1, 2])
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);
  const router = useRouter();

  // console.log({ currentPage, direction });

  const goTo = () => {
    router.push(`/influencers/${'id'}/feed`);
    // closeModal();
  };

  function setPage(newPage: any, newDirection: any) {
    // console.log({ newPage, newDirection, currentPage, direction });
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }

  function closeModal() {
    let modal: any = document.getElementById('modal');
    modal.classList.add('hidden');
    const body = document.body;
    body.style.overflow = 'auto';
  }
  return (
    <div
      id="modal"
      className="fixed hidden flex-col z-50 inset-0 bg-black overflow-hidden h-screen w-full"
    >
      <div className="relative rounded-md h-[10vh]">
        <div className="flex justify-between items-start text-lg rounded-t-md px-4 py-2">
          <div className="flex items-center mb-0.5 px-2 ">
            <div className="relative rounded-full w-12 h-12 border-2 border-blue-250">
              <Image
                src={model.url}
                alt={model.name}
                className="rounded-full"
                layout="fill"
              />
            </div>
            <div
              className="flex flex-col justify-start text-gray-400"
              onClick={() => goTo()}
            >
              <h2 className="font-normal mx-2 text-xl">
                {model.name} {model.lastName}
              </h2>
            </div>
          </div>
          <button className="font-bold text-white" onClick={closeModal}>
            X
          </button>
        </div>
      </div>
      <div className="relative h-[90vh]">
        <Pagination currentPage={currentPage} setPage={setPage} pages={pages} />
        <Slides
          currentPage={currentPage}
          direction={direction}
          setPage={setPage}
          pages={pages}
          model={model}
        />
        <MdSms className="absolute bottom-10 text-white h-8 w-28 cursor-pointer" />
        <button className="absolute right-8 bottom-12 bg-white text-black font-extrabold text-center rounded-lg px-4 py-1 text-xs">
          TIP ME
        </button>
      </div>
      {/* <div
        className="h-full w-full relative"
        // style={{
        //   backgroundImage: `url(
        //     ${model.largeUrl.src}
        //   )`,
        //   width: '100%',
        //   height: '40vh',

        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'contain',
        //   backgroundBlendMode: 'multiply',
        // }}
      >
        <Image src={model.largeUrl} layout={'fill'} />
      </div> */}
    </div>
  );
}
