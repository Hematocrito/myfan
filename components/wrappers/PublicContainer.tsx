export const PublicContainer = ({
  children,
  gray,
}: {
  children: JSX.Element[] | JSX.Element | any;
  gray?: boolean;
}) => {
  return (
    <div className="w-[80%] mx-auto my-10 lg:mt-14 sm:w-3/4 md:w-1/2 lg:w-4/12">
      <div
        className={`rounded-3xl bg-white p-3 border-[3px] border-blue-250 
          ${gray && 'bg-gray-200'}`}
      >
        {children}
      </div>
    </div>
  );
};
