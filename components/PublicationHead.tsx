import { format } from 'date-fns';
import Image from 'next/image';

export default function PublicationHead({ model }: any) {
  return (
    <div className="flex items-center mb-0.5 px-2  ">
      <div className="relative rounded-full w-12 h-12 border-2 border-blue-250">
        <Image
          src={model.url}
          alt={model.name}
          className="rounded-full"
          layout="fill"
        />
      </div>
      <div className="flex flex-col justify-start text-gray-400">
        <h2 className="font-normal mx-1 text-sm">
          {model.name} {model.lastName}
          {' · '}
          <span className="text-xs font-light">{model.createdAt}</span>
        </h2>
        <h2 className="font-extrabold mx-1 text-sm text-black">
          Riding Pink Dildo With Spank Ass
        </h2>
      </div>
    </div>
  );
}
