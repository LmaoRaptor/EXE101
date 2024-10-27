const ReviewSection = () => {
  return (
    <div className="mt-20 bg-white mx-auto w-full">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-10">
        What People Are Saying
      </h2>

      {/* Rating Summary */}
      <div className="flex gap-10 justify-start">
        <div className="flex flex-col gap-2 border-r border-gray-300 pr-4">
          <div className="flex items-center gap-1">
            <span className="text-4xl font-bold text-gray-800">4.9</span>
            <div className="flex">
              <span className="text-yellow-500 text-2xl">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm text-left">Based on 39 Reviews</p>
        </div>

        {/* Rating Breakdown */}
        <div className="flex flex-col w-1/3">
          {[5, 4, 3, 2, 1].map((star, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex text-yellow-500">
                {Array(star)
                  .fill("⭐")
                  .map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
              </div>
              <div className="flex-grow h-2 bg-gray-300 rounded-lg overflow-hidden">
                <div
                  className="h-full bg-green-900"
                  style={{ width: `${star * 20}%` }}
                ></div>
              </div>
              <p className="text-gray-600 text-sm">({39 - index})</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Item */}
      {[3, 2, 1].map((item) => (
        <div key={item} className="mt-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
              TN
            </div>
            <div>
              <p className="font-bold text-gray-800 text-left">Samurai</p>
              <p className="text-xs text-gray-500">
                Verified Buyer · United States · 12/08/2021
              </p>
            </div>
          </div>
          <div className="flex items-center mt-2 text-yellow-500 text-lg">
            &#9733;&#9733;&#9733;&#9733;&#9734;
          </div>
          <p className="text-left text-gray-600">Ông anh legit tuyệt đối</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
