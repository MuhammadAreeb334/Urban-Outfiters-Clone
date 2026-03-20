import React from "react";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      user: "Alys",
      date: "Mar 10, 2026",
      rating: 2,
      title: "Pills",
      comment: "So cute would've been perfect if it didn't pill so badly.",
      fit: "Runs Large",
    },
    {
      user: "singmlm90",
      date: "Mar 6, 2026",
      rating: 5,
      title: "Huge",
      comment:
        "Runs huge but I still love the xl fit on me so it's like a dress I'll wear it with tights",
      age: "25-34",
      height: "5' 4\"",
      fit: "Runs Large",
      sizePurchased: "X-Large",
      sizeNormallyWorn: "Medium",
    },
  ];

  const StarRating = ({ rating, size = 16 }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating
              ? "fill-black text-black"
              : "fill-gray-300 text-gray-300"
          }
        />
      ))}
    </div>
  );

  return (
    <div className=" pt-10 bg-white">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-3 mb-6 gap-2">
        <h2 className="text-lg text-gray-800">Reviews</h2>
        <button className="text-xs underline text-gray-500 uppercase tracking-wide hover:text-black">
          Write a Review
        </button>
      </div>

      <div className="space-y-8">
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              
              <div className="md:w-1/4">
                <p className="text-sm font-medium text-gray-900">
                  {review.user}
                </p>

                {review.age && (
                  <div className="text-xs text-gray-600 mt-1">
                    <p>
                      <span className="font-semibold">Age:</span> {review.age}
                    </p>
                    <p>
                      <span className="font-semibold">Height:</span>{" "}
                      {review.height}
                    </p>
                  </div>
                )}
              </div>

              <div className="md:w-2/4 space-y-2">
                <StarRating rating={review.rating} />

                <h3 className="text-sm font-medium text-gray-900">
                  {review.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {review.comment}
                </p>

                <div className="text-xs text-gray-800 space-y-1 pt-1">
                  {review.fit && (
                    <p>
                      <span className="font-semibold">Fit:</span> {review.fit}
                    </p>
                  )}
                  {review.sizePurchased && (
                    <p>
                      <span className="font-semibold">Size Purchased:</span>{" "}
                      {review.sizePurchased}
                    </p>
                  )}
                  {review.sizeNormallyWorn && (
                    <p>
                      <span className="font-semibold">
                        Size Normally Worn:
                      </span>{" "}
                      {review.sizeNormallyWorn}
                    </p>
                  )}
                </div>
              </div>

              <div className="md:w-1/4 md:text-right text-xs text-gray-500">
                {review.date}
              </div>
            </div>

            {index !== reviews.length - 1 && (
              <div className="mt-6 border-b border-dashed" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;