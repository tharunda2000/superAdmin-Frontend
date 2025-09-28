import toast, { Toaster } from "react-hot-toast";

export const smsError = () => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-custom-enter" : "animate-custom-leave"
        } max-w-md w-full  shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-red-500 bg-red-200 ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <i class="ri-close-circle-fill text-red-500 text-4xl"></i>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-md font-medium text-gray-900">Error</p>
              <p className="mt-1 text-md text-gray-500">
                SMS settings can't be saved !
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 cursor-pointer flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Close
          </button>
        </div>
      </div>
    ),
    { duration: Infinity }
  );
};

export const smsSuccess = () => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-custom-enter" : "animate-custom-leave"
        } max-w-md w-full  shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-green-500 bg-green-200 ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <i class="ri-close-circle-fill text-green-500 text-4xl"></i>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-md font-medium text-gray-900">Successful</p>
              <p className="mt-1 text-md text-gray-500">
                SMS settings saved successfully !
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 cursor-pointer flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Close
          </button>
        </div>
      </div>
    ),
    { duration: Infinity }
  );
};
