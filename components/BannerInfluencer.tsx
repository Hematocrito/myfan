import Image from 'next/image';

export default function BannerInfluencer({ influencer }: any) {
  function openModal(modalId: any) {
    let modal: any = document.getElementById(modalId);
    modal.classList.remove('hidden');
    const body = document.body;
    body.style.overflow = 'hidden';
  }

  return (
    <div className="relative h-64 lg:h-[70vh]">
      <Image src={influencer} layout="fill" className="object-fill" />
      <div className="absolute w-full top-1">
        <div className="flex justify-around">
          <div className="text-white flex flex-col text-center">
            <div className="font-bold text-base">13.2k</div>
            <div className="font-medium text-xs">followers</div>
          </div>
          <div className="text-white flex flex-col text-center">
            <div className="font-bold text-base">291</div>
            <div className="font-medium text-xs">posts</div>
          </div>
          <div className="text-white flex flex-col text-center">
            <div className="font-bold text-base">277</div>
            <div className="font-medium text-xs">photos</div>
          </div>
          <div className="text-white flex flex-col text-center">
            <div className="font-bold text-base">320</div>
            <div className="font-medium text-xs">clips</div>
          </div>
        </div>
      </div>

      <div className="absolute w-full bottom-1">
        <div className="flex flex-col justify-start md:items-center w-full text-white px-3">
          {/* <div className="text-white flex  text-start"> */}
          <div className="font-bold text-2xl lg:text-6xl lg:mb-4">
            LUCYBLACK18
          </div>
          <div className="flex md:w-full md:justify-center">
            <button className="border-2 border-white bg-white text-gray-400 font-extrabold shadow-md text-center rounded-lg md:rounded-none w-6/12 md:w-2/12 px-1 py-1 text-sm mb-2">
              SEND ME A MESSAGE
            </button>
            <button
              onClick={() => openModal('modal')}
              className="border-2 border-blue-450 bg-blue-450 font-extrabold shadow-md text-center rounded-lg md:rounded-none w-3/12 md:w-2/12 py-1 text-sm mb-2 ml-2"
            >
              TIP ME
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
