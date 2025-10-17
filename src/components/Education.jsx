import { educationData } from "../assets/data/education";

const Education = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

      {educationData.map((item, index) => (
        <div key={item.id} className="relative flex items-start mb-12 group">
          {/* Circle marker */}
          <div className="absolute left-4 w-3 h-3 rounded-full bg-blue-400 group-hover:bg-purple-400 transition-colors duration-300 transform -translate-x-1.5"></div>

          {/* Content */}
          <div className="ml-12 flex-1 w-full">
            <div className="bg-[#121212] rounded-lg p-6 border-l-4 border-blue-500 hover:border-purple-500 transition-all duration-300 hover:bg-gray-750">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm text-blue-400 bg-blue-900/30 px-3 py-1 ml-8 rounded-full mt-2 sm:mt-0">
                  {item.role}
                </span>
              </div>

              <div className="flex items-center text-gray-400 text-sm mb-3">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {item.date}
              </div>

              <p className="text-gray-300 leading-relaxed text-left">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
