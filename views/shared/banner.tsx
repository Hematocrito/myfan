import Image from 'next/image';
import Banner1 from 'public/banner/banner1.jpg';

export const Banner = () => {
  return (
    <div className="relative w-full h-28">
      <Image
        src={Banner1}
        alt="banner"
        layout="fill"
        className="object-cover"
      ></Image>
    </div>
  );
};
