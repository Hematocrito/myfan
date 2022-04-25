// import { useFakeWomens } from 'hooks/useFakeWomens';

export const Stories = ({ models }: any) => {
  // const { womens } = useFakeWomens();

  return (
    <div className="">
      <h3 className="text-xs text-gray-600 font-light w-full mx-2">
        New Stories
      </h3>
      <div className="flex sm:mb-2 overflow-x-scroll scroll-stories">
        {models.map((model: any) => (
          <div
            key={model.id}
            className="my-2 mx-3 flex flex-col items-center text-xs font-semibold text-gray-800"
          >
            <div className="relative rounded-full w-14 md:w-20 h-14 md:h-20 border-2 border-blue-450">
              <img
                src={model.url}
                alt={model.name}
                className="rounded-full p-0.5"
              />
            </div>
            {model.name}
          </div>
        ))}
      </div>
    </div>
  );
};
