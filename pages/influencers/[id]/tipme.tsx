import LayoutInfluencer from 'views/shared/Layouts/LayoutInfluencer';
import Link from 'next/link';

export default function TipMe() {
  return (
    <>
      <LayoutInfluencer>
        <div className="mx-8  md:mx-[30%]">
          <div className="m-4">
            <div className="w-full text-center font-bold mt-8">
              Tip LucyBlack18
            </div>
            <div className="flex justify-between text-blue-450 font-bold my-8">
              <div className="text-blue-450 flex flex-col justify-end items-center">
                <button className="bg-maf-green hidden text-white font-medium text-xs rounded-xl px-2 py-1">
                  Popular
                </button>
                <div>$10</div>
              </div>
              <div className="text-blue-450 flex flex-col justify-end items-center">
                <button className="bg-maf-green hidden text-white font-medium text-xs rounded-xl px-2 py-1">
                  Popular
                </button>
                <div>$20</div>
              </div>
              <div className="text-black flex flex-col items-center">
                <button className="bg-maf-green  text-white font-medium text-xs rounded-xl px-2 py-1">
                  Popular
                </button>
                <div>$24</div>
              </div>
              <div className="text-blue-450 flex flex-col justify-end items-center">
                <button className="bg-maf-green hidden text-white font-medium text-xs rounded-xl px-2 py-1">
                  Popular
                </button>
                <div>$50</div>
              </div>
              <div className="text-blue-450 flex flex-col justify-end items-center">
                <button className="bg-maf-green hidden text-white font-medium text-xs rounded-xl px-2 py-1">
                  Popular
                </button>
                <div>$100</div>
              </div>
            </div>
          </div>
          <form className="px-2">
            <div className="border-2 mx-auto mb-2 rounded-md bg-white max-w-md">
              <div className="flex justify-between items-center text-lg rounded-t-md pl-4 pr-2 pt-2">
                <h3 className="font-bold">$ 24</h3>
                <button className="font-bold text-xs bg-gray-400 rounded-full px-2 py-1 text-white">
                  X
                </button>
              </div>

              <div className="max-h-48 overflow-y-scroll px-4">
                <div className="flex items-center max-w-md mx-auto mb-4">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Your valid email"
                      className="w-full font-normal border-b-2 h-12 py-1 text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full mt-1">
                  <input
                    type="text"
                    placeholder="Your message"
                    className="w-full font-normal border-b-2 h-12 py-1 text-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="px-4 py-2 flex justify-center items-center space-x-4">
                <button
                  className="bg-maf-pink  text-white font-normal rounded-xl w-6/12 
                  text-base text-center my-1 px-4 py-1 self-center transition duration-300 "
                >
                  Send Tip
                </button>
              </div>
            </div>
          </form>
          <div className="my-4 mt-8 text-xs font-medium">
            By checking this box, I certify that I am at leasrt 18-years old,
            have the capacity to enter into legally binding contracts, and have
            read and agree to the{' '}
            <Link href={'/terms-of-service'}>
              <a className="text-blue-450">Terms of Service.</a>
            </Link>
          </div>
        </div>
      </LayoutInfluencer>
    </>
  );
}
