import Image from "next/image";
import React from "react";

function DesktopImagesGroup() {
  return (
    <div className="hidden lg:flex flex-wrap gap-4   lg:w-[486px] h-[464px] ">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="w-[235px] h-[224px] relative bg-black flex justify-center rounded-md items-center "
        >
          <Image
            className={`object-cover w-full h-full rounded-md ${
              item === 4 ? "opacity-50" : ""
            }`}
            src={"https://picsum.photos/235/224"}
            alt="Address Image"
            width={235}
            height={224}
          />
          {item === 4 && (
            <button className="absolute text-white">VIEW MORE</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default DesktopImagesGroup;
