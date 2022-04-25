export default function TipModal() {
  function closeModal() {
    let modal: any = document.getElementById('modal');
    modal.classList.add('hidden');
    const body = document.body;
    body.style.overflow = 'auto';
  }
  return (
    <div
      id="modal"
      className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
    >
      <div className="relative top-10 mx-auto shadow-lg rounded-md bg-white max-w-md">
        <div className="flex justify-between items-center text-lg rounded-t-md px-4 py-2">
          <h3 className="font-bold">Send Tip To Lucy Black</h3>
          <button className="font-bold" onClick={() => closeModal()}>
            X
          </button>
        </div>

        <div className="max-h-48 overflow-y-scroll p-4">
          <div className="font-bold">Amount</div>
          <div className="flex items-center max-w-md mx-auto">
            <div className="flex justify-center items-center bg-slate-200 px-6 w-12 h-12 font-extrabold text-xl rounded-l-lg">
              $
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter tip amount i. e. 5.00"
                className="w-full font-bold border-2 h-12 px-4 py-1 text-gray-400 rounded-r-xl focus:outline-none accent-pink-500"
              />
            </div>
          </div>
          <div className="w-full mt-1">
            <input
              type="text"
              placeholder="Message (Optional)"
              className="w-full font-bold border-2 h-12 px-4 py-1 text-gray-400 rounded-xl focus:outline-none"
            />
          </div>
        </div>

        <div className="px-4 py-2 flex justify-center items-center space-x-4">
          <button
            onClick={() => closeModal()}
            className="bg-maf-pink  text-white font-normal rounded-xl w-4/12 
                  text-base text-center my-1 px-4 py-1 self-center transition duration-300 "
          >
            Send Tip
          </button>
        </div>
      </div>
    </div>
  );
}
