import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Slides from './Slides';
import SlidesGallery from './SlidesGallery';

export default function GalleryModal({ pages, gallery, current }: any) {
  // const pages = [0, 1, 2];
  // const [pages, setpages] = useState([0, 1, 2])
  useEffect(() => {
    console.log('current :>> ', current);
    setPage(current, current);
  }, [current]);

  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

  // console.log({ currentPage, direction });

  function setPage(newPage: any, newDirection: any) {
    // console.log({ newPage, newDirection, currentPage, direction });
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }

  function closeModal(e: any) {
    e.preventDefault();
    e.stopPropagation();
    let modal: any = document.getElementById('galleryModal');
    modal.classList.add('hidden');
  }
  return (
    <div
      id="galleryModal"
      className="fixed hidden flex-col z-50 inset-0 bg-black bg-opacity-90 overflow-hidden h-screen w-full"
    >
      <div className="relative rounded-md h-[10vh]">
        <div className="flex justify-between items-start text-lg rounded-t-md px-4 py-2">
          <div className="text-white">
            &#60; {currentPage + 1} / {pages.length} &#62;
          </div>
          <button
            className="font-bold text-white"
            onClick={(e) => closeModal(e)}
          >
            X
          </button>
        </div>
      </div>
      <div className="relative h-[90vh]">
        {/* <Pagination currentPage={currentPage} setPage={setPage} pages={pages} /> */}
        <SlidesGallery
          currentPage={currentPage}
          direction={direction}
          setPage={setPage}
          pages={pages}
          gallery={gallery}
        />
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
