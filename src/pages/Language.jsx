import React from 'react';

const Language = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Latest Articles on Language and Tutors
          </h2>
  
          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="card w-full max-w-sm bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Why Learning a New Language is Important for Career Growth
                </h3>
                <p className="text-gray-600 mb-4">
                  Learning a new language opens up numerous career opportunities. Whether it's for better communication with international clients or understanding different cultures, it’s a valuable skill to have in today’s globalized world.
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
                  How to Choose the Right Tutor for Your Language Learning Journey
                </h3>
                <p className="text-gray-600 mb-4">
                  Selecting the right tutor is essential to your language learning success. Find out how to assess their qualifications, teaching style, and how to set clear learning goals for the best results.
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
                  The Benefits of Online Language Learning Platforms for Tutors and Students
                </h3>
                <p className="text-gray-600 mb-4">
                  Online learning platforms have revolutionized the way languages are taught. Discover how they provide flexibility for both students and tutors and offer new ways to interact and learn effectively.
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
                  Top Language Learning Tips for Beginners
                </h3>
                <p className="text-gray-600 mb-4">
                  Starting a new language can be overwhelming. Here are some practical tips to help you build a solid foundation, stay motivated, and make language learning a fun experience.
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
                  The Power of Bilingualism in the Modern World
                </h3>
                <p className="text-gray-600 mb-4">
                  Being bilingual has a huge impact on cognitive abilities, career prospects, and cultural understanding. This article discusses the many advantages of speaking more than one language.
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
                  How to Stay Motivated While Learning a New Language
                </h3>
                <p className="text-gray-600 mb-4">
                  Staying motivated during language learning is key to success. Learn effective techniques to maintain your focus, even when things get challenging, and keep progressing toward fluency.
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

export default Language;