import React from "react";

const AddProjectInfo = () => {
  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center font-sans">
      {/* Modal Container */}
      <div className="bg-white w-[800px] max-h-96 rounded-md shadow-lg border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center bg-[#E8F0FE] px-4 py-1 rounded-t-md border-b border-gray-300">
          <h2 className="text-lg font-medium text-[#0A59CA]">
            Add Project Info
          </h2>
          <button className="text-[#8ab8f7] hover:text-red-500 text-4xl">
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Row 1 */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Project Name"
              className="border placeholder-gray-700 border-gray-300 rounded-md w-full px-3 py-2 text-sm outline-none "
            />
            <input
              type="number"
              placeholder="No. of Milestones"
              className="border placeholder-gray-700 border-gray-300 rounded-md w-1/3 px-3 py-2 text-sm outline-none "
            />
            <input
              type="number"
              placeholder="Estimated Hours"
              className="border placeholder-gray-700 border-gray-300 rounded-md w-1/3 px-3 py-2 text-sm outline-none "
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-x-6">
            <div className="relative w-[400px]">
              <input
                type="date"
                id="startDate"
                className="peer w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none "
                required
              />
              <label
                htmlFor="startDate"
                className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all duration-200 bg-white px-1 "
              >
                Select Project Start Date
              </label>
            </div>

            <div className="relative w-[400px]">
              <input
                type="date"
                id="endDate"
                className="peer w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none "
                required
              />
              <label
                htmlFor="endDate"
                className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none transition-all duration-200 bg-white px-1 "
              >
                Select End Date
              </label>
            </div>
          </div>

          {/* Row 3 */}
          <select className="border border-gray-300 rounded-md w-[400px] px-3 py-2 text-sm outline-none text-gray-500 ">
            <option value="">Assign Team Members</option>
            <option>Gayathri Sivakumar</option>
            <option>Selvadharshini Boominathan</option>
            <option>Others...</option>
          </select>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-200 p-3 bg-gray-50 rounded-b-md">
          <button className="border border-blue-600 text-blue-600 px-5 py-2 text-sm rounded-md hover:bg-blue-50 transition">
            Cancel
          </button>
          <button className="border border-blue-600 bg-[#0A59CA] text-white px-5 py-2 text-sm rounded-md hover:bg-blue-700 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProjectInfo;
