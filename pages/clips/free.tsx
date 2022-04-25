import Publication from 'components/Publication';
import LayoutClipsHome from 'views/shared/Layouts/LayoutClipsHome';
import { GetServerSideProps } from 'next';

export default function ClipsFree({ models }: any) {
  return (
    <>
      <LayoutClipsHome models={models}>
        {models.map((model: any) => (
          <div key={model.id} className="md:mx-[20%]">
            <Publication model={model} />
          </div>
        ))}
      </LayoutClipsHome>
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
