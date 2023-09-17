import Image from "next/image";
import React from "react";

const ServerIcon = ({ src = "/logo192.png" }) => {
  return (
    <div className="mt-1 bg-gray-700 w-14 h-14 rounded-full">
      <Image src={src} alt="" width={55} height={55} />
    </div>
  );
};

export default ServerIcon;
