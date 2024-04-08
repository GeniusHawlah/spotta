import Image from "next/image";
import React from "react";

function MobileImagesGroup() {
  return (
    <div className="flex mt-5">
      <div
        //   ref={scrollRef}
        className="flex scroll-smooth  overflow-x-scroll justify-between items-center scrollbar-hide gap-x-2 lg:hidden"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
          <div
            className="  relative justify-between   rounded-md  "
            key={item}
          >
            <div
              key={item}
              className={`relative cursor-pointer rounded-md select-none w-[344px] h-[244px] flex gap-x-2`}
            >
              <div className="w-[172px] h-[244px]">
                <Image
                  className="object-cover w-full h-full rounded"
                  src={"https://picsum.photos/172/244"}
                  alt="Address Image"
                  width={172}
                  height={244}
                />
              </div>
              <div className="w-[172px] h-[244px]  flex flex-col justify-between gap-y-2">
                <Image
                  className="object-cover w-full h-full rounded"
                  src={"https://picsum.photos/172/122"}
                  alt="Address Image"
                  width={172}
                  height={122}
                />
                <Image
                  className="object-cover w-full h-full rounded"
                  src={"https://picsum.photos/172/122"}
                  alt="Address Image"
                  width={172}
                  height={122}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileImagesGroup;
