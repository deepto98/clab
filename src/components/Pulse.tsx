import React from "react";

const Pulse = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-sm rounded-md border border-red-500 p-4 shadow">
        <div className="flex animate-pulse space-x-4">
          <div className="h-10 w-10 rounded-full bg-red-500"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-red-500"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-red-500"></div>
                <div className="col-span-1 h-2 rounded bg-red-500"></div>
              </div>
              <div className="h-2 rounded bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pulse;
