import FeedInfluencers from 'components/FeedInfluencers';
import { Filter } from 'views/shared';
import LayoutInfluencer from 'views/shared/Layouts/LayoutInfluencer';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

export default function Feed({ models }: any) {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = 'auto';
  }, []);

  return (
    <>
      <LayoutInfluencer>
        <Filter className="flex items-center mb-2  md:mx-[15%] md:mb-4">
          <div className="flex flex-col justify-center">
            <div className="flex-1 md:flex md:flex-col md:items-center">
              <strong>Show content:</strong>
              <button className="relative bg-gray-200 text-blue-450 font-bold rounded-lg w-full py-1 pl-3 pr-2 text-base  md:w-4/12  text-center my-1 mx-2">
                <div>Subscribes only</div>
              </button>
              <button className="relative bg-gray-200 text-blue-450 font-bold rounded-lg w-full py-1 pl-3 pr-2 text-base  md:w-4/12  text-center my-1 mx-2">
                <div>Unlockable posts</div>
              </button>
              <button className="relative bg-gray-200 text-blue-450 font-bold rounded-lg w-full py-1 pl-3 pr-2 text-base  md:w-4/12  text-center my-1 mx-2">
                <div>Public content</div>
              </button>
            </div>
            <div className="flex justify-between md:mt-2 md:justify-center">
              <button className="bg-white text-black border-2 border-black font-bold rounded-3xl w-3/12 md:w-2/12 text-base text-center my-1 mx-2 py-2">
                <div>Reset</div>
              </button>
              <button className="bg-blue-450 text-white font-bold rounded-3xl w-3/12 md:w-2/12 text-base text-center my-1 mx-2 p-2">
                <div>Apply</div>
              </button>
            </div>
          </div>
        </Filter>
        <FeedInfluencers models={models} />
      </LayoutInfluencer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    'https://randomuser.me/api/?gender=female&results=20'
  );
  let data: any = await res.json();

  const models = data.results.map((result: any) => {
    let newResult: any = {};
    newResult.name = result.name.first;
    newResult.lastName = result.name.last;
    newResult.url = result.picture.medium;
    newResult.largeUrl = result.picture.large;
    newResult.id = result.login.uuid;
    newResult.createdAt = new Date().toDateString();
    return newResult;
  });

  return {
    props: {
      models,
    },
  };
};
