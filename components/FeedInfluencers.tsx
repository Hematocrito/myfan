import Publication from './Publication';
import { useState } from 'react';
import { GetServerSideProps } from 'next';

export default function FeedInfluencers({ models }: any) {
  const [more, setMore] = useState(true);

  return (
    <>
      {models.map((model: any) => (
        <div key={model.id} className="md:mx-[20%]">
          <Publication model={model} />
        </div>
      ))}
      {more && (
        <div className="flex justify-center">
          <button className="bg-white text-gray-400 font-extrabold text-center rounded-xl self-center my-2 px-6 py-1 text-base border border-gray-400">
            Load more post
          </button>
        </div>
      )}
    </>
  );
}
