import { IoNotifications } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="bg-[#1e3a5f] text-white flex items-center justify-between px-8 py-2 shadow-md">
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />

          <span className="text-xl font-bold">InsightPM</span>
        </div>

        <nav>
          <ul className="flex space-x-8 text-sm font-semibold">
            <li className="border-b-2 border-transparent hover:border-white duration-200 cursor-pointer">
              <a href="#">Project</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-white duration-200 cursor-pointer">
              <a href="#">User Story</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-white duration-200 cursor-pointer">
              <a href="#">Effort Book</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-white duration-200 cursor-pointer">
              <a href="#">Approval</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-white duration-200 cursor-pointer">
              <a href="#">Report</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-3xl pl-10 pr-4 py-1 focus:outline-none bg-white text-gray-600 text-sm"
          />
        </div>

        <div className="cursor-pointer">
          <IoNotifications size={22} color="white" />
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium">John Doe</p>
            <p className="text-gray-300 text-xs">Manager</p>
          </div>
          <div>
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
