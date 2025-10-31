import SprintCard from "./SprintCard";
import { RxChevronLeft, RxChevronRight, RxChevronDown } from "react-icons/rx";

const Project = () => {
  return (
    <div className="flex mx-6 my-4 gap-3">
      <div className="w-3/4 pr-6">
        <h1 className="font-bold text-lg mb-2 ">Project Overview</h1>
        <div className="flex items-center gap-4 my-4 flex-nowrap">
          <div className="relative shrink-0 w-xl">
            <select
              id="project"
              className="appearance-none w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none pr-8"
            >
              <option>Project Name (Default Value)</option>
              <option>GSD IPM Rewrite</option>
              <option>Customer Portal</option>
              <option>Shipment Lock</option>
            </select>
            <RxChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Button */}
          <button className="border border-blue-500 text-blue-500 text-sm font-semibold rounded-lg px-6 py-2 hover:bg-blue-50 transition">
            + Add Project Info
          </button>

          {/* Estimated Hours */}
          <div className="flex items-center justify-between gap-3 px-4 py-2 border-outline-none rounded-lg  bg-white shadow-[0_3px_5px_rgba(100,100,100,0.7)] ">
            <span className="text-blue-500 text-sm font-stretch-semi-condensed font-medium">
              Estimated Hours
            </span>
            <span className="text-blue-500 font-semibold bg-blue-100 rounded-lg py-0 text-sm">
              115 hrs
            </span>
          </div>
        </div>
        {/* Milestones */}
        <div className="bg-white rounded-lg p-6 pt-4 pb-6 mb-3 shadow-md shadow-gray-400 my-2 border border-gray-300">
          <h3 className="font-medium">Milestones</h3>
          <div className="flex items-center justify-center mb-4  "></div>
          <div className="flex justify-between overflow-x-auto ">
            {["I", "II", "III", "IV", "V", "VI", "VII"].map((item) => (
              <div
                key={item}
                className="min-w-[82px]  h-20 border border-gray-300 rounded-md flex items-center justify-center text-lg font-medium text-gray-700 bg-white shadow-md shadow-gray-400 "
              >
                {item}
              </div>
            ))}
            <div className="min-w-[72px] h-20 border border-gray-300 rounded-md flex items-center justify-center  font-medium shadow-[0_6px_12px_rgba(0,0,0,0.15)] -translate-y-0.5 text-white text-3xl bg-blue-500">
              +
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md shadow-gray-200 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg text-gray-800">Sprint</h3>
            <div className="flex items-center gap-3">
              <button className="text-blue-600 text-sm font-medium hover:underline">
                Add Sprint
              </button>
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <button className="border-2 rounded-md w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-blue-600 focus:border-blue-600">
                    <RxChevronLeft />
                  </button>
                  <button className="border-2 rounded-md w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-blue-600 focus:border-blue-600">
                    <RxChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <SprintCard
              sprintNumber="2"
              userStories={4}
              plannedEfforts={5}
              actualEfforts={8}
            />
            <SprintCard
              sprintNumber="3"
              userStories={4}
              plannedEfforts={5}
              actualEfforts={8}
            />
            <SprintCard
              sprintNumber="4"
              userStories={4}
              plannedEfforts={5}
              actualEfforts={8}
            />
            <SprintCard
              sprintNumber="5"
              userStories={4}
              plannedEfforts={5}
              actualEfforts={8}
            />
            <SprintCard
              sprintNumber="6"
              userStories={4}
              plannedEfforts={5}
              actualEfforts={8}
            />
            <SprintCard
              sprintNumber="2"
              userStories={15}
              plannedEfforts={5}
              actualEfforts={8}
            />
          </div>
        </div>
      </div>
      <div className="my-8 w-1/4">
        <aside className=" bg-white border-l border-gray-200 shadow-md p-5 rounded-lg h-fit">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-800">Team</h3>
              <span className="bg-red-100 text-red-600 text-sm px-2 py-0.5 rounded-full font-semibold">
                11
              </span>
            </div>
            <button className="bg-blue-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1">
              + Add Member
            </button>
          </div>

          <div className="space-y-3 text-left">
            <div className="border border-gray-200 rounded-lg px-3 py-1 hover:shadow-md">
              <p className="font-semibold text-gray-800">Gayathri Sivakumar</p>
              <p className="text-sm text-gray-500">Employee Role</p>
            </div>

            <div className="border border-gray-200 rounded-lg px-3 py-1 hover:shadow-md">
              <p className="font-semibold text-gray-800">
                Aravind Selvaganapathi
              </p>
              <p className="text-sm text-gray-500">Employee Role</p>
            </div>

            <div className="border border-gray-200 rounded-lg px-3 py-1 hover:shadow-md">
              <p className="font-semibold text-gray-800">Virat Kohli</p>
              <p className="text-sm text-gray-500">Employee Role</p>
            </div>
            <div className="border border-gray-200 rounded-lg px-3 py-1 hover:shadow-md">
              <p className="font-semibold text-gray-800">Nirmal Kumar</p>
              <p className="text-sm text-gray-500">Employee Role</p>
            </div>
            <div className="border border-gray-200 rounded-lg px-3 py-1 hover:shadow-md">
              <p className="font-semibold text-gray-800">Rahul Pasupathi</p>
              <p className="text-sm text-gray-500">Employee Role</p>
            </div>
            <div className="border border-gray-200 rounded-lg px-3 py-1 hover:shadow-md">
              <p className="font-semibold text-gray-800">
                Harikrishnan Muthuganeshan
              </p>
              <p className="text-sm text-gray-500">Employee Role</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Project;
