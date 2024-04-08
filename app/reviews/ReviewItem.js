import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import React, { useState } from "react";
import { generalStore } from "../a-store/zustand-store/generalStore";

function ReviewItem() {
  const [selectedReviewID, setSelectedReviewID] = useState();
  const [showCommentBox, setShowCommentBox] = useState(false);

  const { selectedAddress } = generalStore();
  const relativeTimePeriods = [
    [31536000, "year"],
    [2419200, "month"],
    [604800, "week"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];

  function relativeTime(date, isUtc = true) {
    if (!(date instanceof Date)) date = new Date(date * 1000);
    const seconds = (new Date() - date) / 1000;
    for (let [secondsPer, name] of relativeTimePeriods) {
      if (seconds >= secondsPer) {
        const amount = Math.floor(seconds / secondsPer);
        return `${amount} ${name}${amount > 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
  }

  return (
    <div>
      {selectedAddress.reviews.map((review, i) => (
        <div
          key={review?.id}
          onMouseOver={() => setSelectedReviewID(review?.id)}
          onTouchStart={() => setSelectedReviewID(review?.id)}
          onMouseLeave={() => setShowCommentBox(false)}
          className=""
        >
          {/* //>Line 1 */}
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 ">
              <Image
                className="rounded-full"
                src={"https://picsum.photos/24"}
                width={24}
                height={24}
                alt="Author Image"
              />

              <p className="text-sm">{review?.author}</p>
              <p className="text-gray-500 text-sm">
                {relativeTime(new Date(review?.time))}
              </p>
            </div>
            <p className="text-sm">
              <Icon
                icon="material-symbols-light:star"
                className="text-sm text-yellow-300 "
              />{" "}
              {review?.rating}.0
            </p>
          </div>

          {/* //> Line 2 */}
          <p className="mt-4 text-base">{review?.content}</p>

          {/* //>Line 3 */}
          <div className="flex gap-x-6 mt-3">
            {/* //>Like */}
            <button className="flex gap-x-1 items-center text-center">
              <Icon icon="uiw:like-o" className="text-2xl text-[#0d2159] dark:text-blue-300" />
              <span className="text-sm">{review?.like}</span>
            </button>
            {/* //>Dislike */}
            <button className="flex gap-x-1 items-center text-center">
              <Icon
                flip="vertical"
                icon="uiw:like-o"
                className="text-2xl text-[#0d2159] dark:text-blue-300"
              />
              <span className="text-sm">{review?.dislike}</span>
            </button>
            {/* //>Comment */}
            <button
              onClick={() => setShowCommentBox(!showCommentBox)}
              className="flex gap-x-1 items-center text-center"
            >
              <Icon
                icon="codicon:comment"
                className="text-2xl text-[#0d2159] dark:text-blue-300"
              />
              <span className="text-sm">{review?.comments}</span>
            </button>
          </div>

          {i !== selectedAddress?.reviews?.length - 1 && (
            <hr
              className={`my-8 ${
                selectedReviewID === review?.id && showCommentBox
                  ? "hidden"
                  : "block"
              }`}
            />
          )}

          {showCommentBox && selectedReviewID === review?.id && (
            <div className="border-t border-b flex items-center justify-between my-5 py-3">
              <input
                type="text"
                className="border-none focus:ring-0 bg-transparent w-full text-sm"
                placeholder="Add a comment"
              />
              <button className="duration-300 hover:bg-opacity-80 px-3 py-1 rounded bg-the-blue text-white font-medium text-sm lg:text-base">
                POST
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReviewItem;
