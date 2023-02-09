/* eslint-disable-next-line */
export interface TimeLineProps {}

export function TimeLine(props: TimeLineProps) {
  return (
    <ol className="border-l-2 border-blue-600">
      <li>
        <div className="flex flex-start items-center">
          <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
          <h4 className="text-gray-800 font-semibold text-xl -mt-2">
            Title of section 1
          </h4>
        </div>
        <div className="ml-6 mb-6 pb-6">
          <a
            href="#!"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
          >
            4 February, 2022
          </a>
          <p className="text-gray-700 mt-2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div
            className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Read more
          </div>
        </div>
      </li>
      <li>
        <div className="flex flex-start items-center">
          <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
          <h4 className="text-gray-800 font-semibold text-xl -mt-2">
            Title of section 1
          </h4>
        </div>
        <div className="ml-6 mb-6 pb-6">
          <a
            href="#!"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
          >
            4 February, 2022
          </a>
          <p className="text-gray-700 mt-2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div
            className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Read more
          </div>
        </div>
      </li>
    </ol>
  );
}

export default TimeLine;
