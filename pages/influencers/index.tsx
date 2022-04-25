import { LayoutHome } from 'views/shared/Layouts/LayoutHome';
import { PreviewProfileCard } from 'components/PreviewProfileCard';
import Link from 'next/link';
import Post1 from 'public/post/post1.jpg';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import StoriesModal from 'components/StoriesModal';

function InfluencersView({ models }: any) {
  //   const { womens } = useFakeWomens();
  const [model, setModel] = useState(models[0]);
  const openModal = (e: MouseEvent, modalId: any, model: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('model :>> ', model);
    const body = document.body;
    body.style.overflow = 'hidden';

    let modal: any = document.getElementById(modalId);
    setModel(model);
    modal.classList.remove('hidden');
  };
  return (
    <LayoutHome models={models}>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-6 justify-items-center md:mx-[13%] md:mb-4">
        {models.map((model: any) => (
          <Link href={'/influencers/id/feed'} key={model.id}>
            <a className="w-full">
              <PreviewProfileCard model={model} openModal={openModal} />
            </a>
          </Link>
        ))}
      </div>
      <StoriesModal model={model} />
    </LayoutHome>
  );
}

export default InfluencersView;

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
