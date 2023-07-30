import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Features</h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed finibus elit, et dignissim tellus.
          </p>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-8">
            <div className="h-full">
              <h3 className="text-lg font-medium text-gray-900">Feature 1</h3>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-8">
            <div className="h-full">
              <h3 className="text-lg font-medium text-gray-900">Feature 2</h3>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-8">
            <div className="h-full">
              <h3 className="text-lg font-medium text-gray-900">Feature 3</h3>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
