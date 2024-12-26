import React from 'react';

const Tutor = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Importance of Tutor Booking Platforms
          </h2>
  
          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="card w-full max-w-sm bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  How Tutor Booking Platforms Increase Flexibility for Students
                </h3>
                <p className="text-gray-600 mb-4">
                  Tutor booking platforms offer students unparalleled flexibility to choose tutors based on availability, skill set, and preferred learning styles. This customization ensures a personalized and convenient learning experience.
                </p>
                <a href="#" className="btn btn-primary text-white hover:bg-blue-600">
                  Read More
                </a>
              </div>
            </div>
  
            {/* Article 2 */}
            <div className="card w-full max-w-sm bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Benefits of Scheduling and Managing Tutoring Sessions Online
                </h3>
                <p className="text-gray-600 mb-4">
                  Online tutor booking platforms simplify scheduling and session management. Students can book lessons anytime, reducing the need for back-and-forth communication. This ease of access enhances the learning experience.
                </p>
                <a href="#" className="btn btn-primary text-white hover:bg-blue-600">
                  Read More
                </a>
              </div>
            </div>
  
            {/* Article 3 */}
            <div className="card w-full max-w-sm bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Why Tutor Booking Platforms Are Essential for Tutors
                </h3>
                <p className="text-gray-600 mb-4">
                  For tutors, booking platforms offer an organized and professional way to manage their schedules and clients. This reduces administrative work and allows tutors to focus on delivering quality lessons.
                </p>
                <a href="#" className="btn btn-primary text-white hover:bg-blue-600">
                  Read More
                </a>
              </div>
            </div>
  
            {/* Article 4 */}
            <div className="card w-full max-w-sm bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  How Tutor Platforms Enhance Accessibility for Students Worldwide
                </h3>
                <p className="text-gray-600 mb-4">
                  Tutor booking platforms break down geographical barriers, giving students worldwide access to tutors from different backgrounds and expertise, ensuring high-quality education regardless of location.
                </p>
                <a href="#" className="btn btn-primary text-white hover:bg-blue-600">
                  Read More
                </a>
              </div>
            </div>
  
            {/* Article 5 */}
            <div className="card w-full max-w-sm bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Improving Learning Outcomes with Personalized Tutor Matching
                </h3>
                <p className="text-gray-600 mb-4">
                  Tutor booking platforms often use intelligent algorithms to match students with the right tutors based on their learning needs, improving learning outcomes by ensuring the best fit for both parties.
                </p>
                <a href="#" className="btn btn-primary text-white hover:bg-blue-600">
                  Read More
                </a>
              </div>
            </div>
  
            {/* Article 6 */}
            <div className="card w-full max-w-sm bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Streamlining Payments and Administrative Tasks through Tutor Platforms
                </h3>
                <p className="text-gray-600 mb-4">
                  Tutor platforms automate payments, invoicing, and other administrative tasks, saving both students and tutors time and effort. This makes the process smoother and more transparent for both parties.
                </p>
                <a href="#" className="btn btn-primary text-white hover:bg-blue-600">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Tutor;