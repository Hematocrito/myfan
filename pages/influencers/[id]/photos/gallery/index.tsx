import GalleryModal from 'components/GalleryModal';
import PublicationHead from 'components/PublicationHead';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import UpIcon from 'public/assets/icons/ICONS-07.png';
import MessageIcon from 'public/assets/icons/ICONS-08.png';
import ViewIcon from 'public/assets/icons/ICONS-09.png';

export default function Index({ model }: any) {
  console.log('model :>> ', model);
  const [gallery, setGallery] = useState([]);
  const [pages, setPages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setGallery(model.gallery);
    setPages(model.gallery.map((photo: any, index: number) => index));
    return () => {
      gallery;
    };
  }, [gallery]);

  const openModal = (e: MouseEvent, modalId: any, index?: any) => {
    e.preventDefault();
    e.stopPropagation();
    let modal: any = document.getElementById(modalId);
    setCurrent(index);
    modal.classList.remove('hidden');
  };
  return (
    <div className="md:mt-8">
      <PublicationHead model={model} />
      <div className="grid grid-cols-3 md:grid-cols-4 gap-1 my-2 md:mt-8 justify-items-stretch md:mx-[20%]">
        {model.gallery.map((photo: any, index: any) => (
          <div key={index} className="relative h-[33vw] sm:h-52">
            <Image
              src={photo}
              layout="fill"
              onClick={(e: any) => openModal(e, 'galleryModal', index)}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center m-2 sm:mx-4 justify-between text-semibold text-gray-400">
        <div className="flex items-center">
          <div className="relative w-5 h-4">
            <Image src={UpIcon} layout="fill" alt="1" />
          </div>
          <span className="ml-1 text-md">2</span>
        </div>
        <div className="flex items-center">
          <div className="relative w-5 h-4">
            <Image src={MessageIcon} layout="fill" alt="1" />
          </div>
          <span className="ml-1 text-sm">1</span>
        </div>
        <div className="flex items-center">
          <div className="relative w-5 h-4">
            <Image src={ViewIcon} layout="fill" alt="1" />
          </div>
          <span className="ml-1 text-sm">25</span>
        </div>
      </div>
      <GalleryModal gallery={gallery} pages={pages} current={current} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    'https://randomuser.me/api/?gender=female&results=20'
  );
  let data: any = await res.json();

  const model = {
    id: '4fe56b84-e576-48db-b8ad-82ff6320eb0a',
    name: 'Veera',
    lastName: 'Ketola',
    url: 'https://randomuser.me/api/portraits/med/women/95.jpg',
    largeUrl: 'https://randomuser.me/api/portraits/women/95.jpg',
    createdAt: new Date().toDateString(),
    gallery: [
      'https://randomuser.me/api/portraits/women/95.jpg',
      'https://randomuser.me/api/portraits/women/96.jpg',
      'https://randomuser.me/api/portraits/women/97.jpg',
      'https://randomuser.me/api/portraits/women/88.jpg',
      'https://randomuser.me/api/portraits/women/99.jpg',
      'https://randomuser.me/api/portraits/women/94.jpg',
      'https://randomuser.me/api/portraits/women/93.jpg',
      'https://randomuser.me/api/portraits/women/92.jpg',
      'https://randomuser.me/api/portraits/women/91.jpg',
      'https://randomuser.me/api/portraits/women/90.jpg',
    ],
  };

  return {
    props: {
      model,
    },
  };
};
