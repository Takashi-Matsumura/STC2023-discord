import Image from "next/image";
import React from "react";

const ServerIcon = () => {
  return (
    <div className="mt-1 bg-gray-700 w-14 h-14 rounded-full">
      <Image src="/logo192.png" alt="" width={55} height={55} />
    </div>
  );
};

export default ServerIcon;
