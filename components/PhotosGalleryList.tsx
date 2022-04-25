import Image from 'next/image';
import UpIcon from 'public/assets/icons/ICONS-07.png';
import MessageIcon from 'public/assets/icons/ICONS-08.png';
import ViewIcon from 'public/assets/icons/ICONS-09.png';
import Link from 'next/link';

export default function PhotosGalleryList({ models }: any) {
  return (
    <>
      <div className="font-extrabold px-8  md:mx-[15%]">GALLERY </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 m-2 justify-items-center md:mx-[15%] ">
        {models.map((model: any) => (
          <div className="relative w-full h-48 sm:h-60 md:h-64" key={model.id}>
            <Link href={'/influencers/id/photos/gallery'}>
              <a>
                <Image
                  src={model.largeUrl}
                  layout="fill"
                  className="rounded-xl"
                />
                <div className="absolute flex flex-col bottom-0 w-full h-10 bg-black bg-opacity-60 rounded-b-xl text-white">
                  <div className="self-center font-bold text-xs mt-1">
                    {model.name}
                  </div>
                  {/* <div className="flex justify-between mx-4">
                <div>a</div>
                <div>a</div>
                <div>a</div>
              </div> */}
                  <div className="flex items-center mx-2 sm:mx-4 justify-between text-semibold text-white">
                    <div className="flex items-center">
                      <Image src={UpIcon} height={15} width={20} alt="1" />{' '}
                      <span className="ml-1 text-sm">2</span>
                    </div>
                    <div className="flex items-center">
                      <Image src={MessageIcon} height={15} width={20} alt="1" />{' '}
                      <span className="ml-1 text-sm">1</span>
                    </div>
                    <div className="flex items-center">
                      <Image src={ViewIcon} height={15} width={20} alt="1" />{' '}
                      <span className="ml-1 text-sm">25</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
