import React from "react";

interface SprintCardProps {
  sprintNumber: string | number;
  userStories: number;
  plannedEfforts: number;
  actualEfforts: number;
}

const SprintCard: React.FC<SprintCardProps> = ({
  sprintNumber,
  userStories,
  plannedEfforts,
  actualEfforts,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition bg-white">
      <h4 className="text-blue-600 font-semibold mb-2 cursor-pointer hover:underline">
        Sprint: {sprintNumber}
      </h4>
      <div className="space-y-2 text-xs font-semibold text-gray-500 ">
        <div className="flex justify-between items-center">
          <span>User Stories:</span>
          <span className=" flex items-center justify-center w-7 h-6 bg-orange-100 text-yellow-600 font-semibold rounded-full text-sm">
            {userStories}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Planned Efforts:</span>
          <span className="flex items-center justify-center w-9 h-6 bg-orange-100 text-yellow-600 font-semibold rounded-full text-sm">
            {plannedEfforts}hrs
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Actual Efforts:</span>
          <span className="flex items-center justify-center w-9 h-6 bg-orange-100 text-yellow-600 font-semibold rounded-full text-sm">
            {actualEfforts}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default SprintCard;
