import LayoutInfluencer from 'views/shared/Layouts/LayoutInfluencer';
import Image from 'next/image';
import Model from 'public/post/post1.jpg';

export default function About() {
  return (
    <>
      <LayoutInfluencer>
        <div className="m-4 md:mx-[30%]">
          <h3 className="font-semibold text-xl">About me</h3>
          <p className="text-md my-4">
            Hi guys its me bratty luna. Welcome to my private stories. Join me
            and see my naughty stories that are too hot for my public. Feel free
            to chat and send me photos, daily posts. No screenshots or
            screenrecordings pls! These are just for us (will be deleted){' '}
            <span className="font-semibold">
              PLEASE ALLOW 24 HOURS TO BE ADDED
            </span>
          </p>
          <div>THANK YOUs</div>
        </div>
        <div className="grid grid-cols-3 md:mx-[30%] gap-2 mx-4 my-8 justify-items-center">
          <div className="relative w-24 md:w-40 h-24 md:h-40">
            <Image
              src={Model}
              className={`object-cover rounded-xl`}
              layout="fill"
            />
          </div>
          <div className="relative w-24 md:w-40 h-24 md:h-40">
            <Image
              src={Model}
              className={`object-cover rounded-xl`}
              layout="fill"
            />
          </div>
          <div className="relative w-24 md:w-40 h-24 md:h-40">
            <Image
              src={Model}
              className={`object-cover rounded-xl`}
              layout="fill"
            />
          </div>
        </div>
      </LayoutInfluencer>
    </>
  );
}
