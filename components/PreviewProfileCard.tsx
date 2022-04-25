// import { useFakeWomens } from 'hooks/useFakeWomens';
import Image from 'next/image';
import Link from 'next/link';
import StoriesModal from './StoriesModal';

export const PreviewProfileCard = ({ model }: any) => {
  return (
    <div className="w-full justify-self-center text-center">
      <div
        className="mb-10 relative h-36 sm:h-60"
        style={{
          backgroundImage: `url(
            ${model.url}
          )`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="h-16 md:h-28 w-16 md:w-28 rounded-full absolute -bottom-10 left-[50%] -translate-x-[50%] p-0.5 border-2 border-blue-450">
          <Image
            className="rounded-full "
            src={model.url}
            alt={model.name}
            layout="fill"
          />
        </div>
      </div>
      <strong className="text-gray-500 text-sm">{model.name}</strong>
    </div>
  );
};
