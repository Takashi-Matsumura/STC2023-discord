import React from "react";
import ServerIcon from "./ServerIcon";

const Sidebar = () => {
  return (
    <div className="flex flex-grow-35 bg-gray-700 h-screen">
      {/* sidebarLeft */}
      <div className="items-center bg-gray-900 px-2 py-2 space-y-3">
        <ServerIcon />
        <ServerIcon />
      </div>

      {/* sidebarRight */}
      <div className="bg-gray-800">
        <div>
          <h3>Discord</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
