import React from 'react';

const Stat = () => {
    return (
       <>
        <div className="min-h-screen bg-gray-100 py-6 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Tutors Column */}
          <div className="stat bg-white shadow-xl rounded-lg p-4">
            <div className="stat-title text-xl font-semibold text-gray-700">Tutors</div>
            {/* <div className="stat-value text-4xl font-bold text-blue-500">{stats.tutors}</div> */}
            <div className="stat-desc text-gray-500">Total tutors available</div>
          </div>

          {/* Reviews Column */}
          <div className="stat bg-white shadow-xl rounded-lg p-4">
            <div className="stat-title text-xl font-semibold text-gray-700">Reviews</div>
            {/* <div className="stat-value text-4xl font-bold text-green-500">{stats.reviews}</div> */}
            <div className="stat-desc text-gray-500">Total reviews received</div>
          </div>

          {/* Languages Column */}
          <div className="stat bg-white shadow-xl rounded-lg p-4">
            <div className="stat-title text-xl font-semibold text-gray-700">Languages</div>
            {/* <div className="stat-value text-4xl font-bold text-purple-500">{stats.languages}</div> */}
            <div className="stat-desc text-gray-500">Total languages offered</div>
          </div>

          {/* Users Column */}
          <div className="stat bg-white shadow-xl rounded-lg p-4">
            <div className="stat-title text-xl font-semibold text-gray-700">Users</div>
            {/* <div className="stat-value text-4xl font-bold text-orange-500">{stats.users}</div> */}
            <div className="stat-desc text-gray-500">Total users registered</div>
          </div>
        </div>
      </div>
    </div>
       </>
    );
};

export default Stat;