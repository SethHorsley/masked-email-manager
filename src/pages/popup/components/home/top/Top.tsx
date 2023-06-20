import React from 'react';
import icon from '@assets/img/icon.svg';

export default function TopComponent() {
  return (
    <section className="flex">
      <div className="w-full">
        <div className="flex">
          <div className="w-1/6 bg-gray-400 ml-2 mt-2">
            <img src={icon} className="pointer-events-none h-5" alt="icon" />
          </div>
          <div className="w-3/6 bg-gray-500">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Masked Emails..."
                required
              ></input>
            </div>
          </div>
          <div className="w-2/6 bg-gray-400">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                width="16"
                height="16"
                data-path-count="1"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 text-white fill-current"
              >
                <path
                  data-path-style="onLight"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 2a1 1 0 0 0-1 1v4H3a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2H9V3a1 1 0 0 0-1-1Z"
                ></path>
              </svg>
              New Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
