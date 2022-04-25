import { PreviewProfileCard } from 'components/PreviewProfileCard';
import StoriesModal from 'components/StoriesModal';
import { LayoutHome } from 'views/shared/Layouts/LayoutHome';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';

// export class Model {
//   public name: string;
//   public lastName: string;
//   public url: string;
//   public largeUrl: StaticImageData;
//   public id: string;
//   public createdAt: Date;
//   constructor(data: any) {
//     this.name = data.name.first;
//     this.lastName = data.name.last;
//     this.url = data.picture.medium;
//     this.largeUrl = data.picture.thumbnail;
//     this.id = data.login.uuid;
//     this.createdAt = new Date(data.registered.date);
//   }
// }

export default function Stories({ models }: any) {
  // const { womens } = useFakeWomens();
  const [model, setModel] = useState(models[0]);
  const openModal = (e: MouseEvent, modalId: any, model: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('model :>> ', model);

    let modal: any = document.getElementById(modalId);
    setModel(model);
    modal.classList.remove('hidden');
    const body = document.body;
    body.style.overflow = 'hidden';
  };
  console.log('models :>> ', models);

  return (
    <LayoutHome models={models}>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-6 justify-items-center md:mx-[13%]">
        {models.map((model: any) => (
          <div
            className="w-full"
            key={model.id}
            onClick={(e: any) => openModal(e, 'modal', model)}
          >
            <PreviewProfileCard model={model} />
          </div>
        ))}
      </div>
      <StoriesModal model={model} />
    </LayoutHome>
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
