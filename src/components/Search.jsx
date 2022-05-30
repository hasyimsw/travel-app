import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div id="travel" className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-3 px-4 py-24">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div className="">
          <h2>LUXURY INCLUDED VACATIONS FOR 2 PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            officiis quam minus hic laboriosam labore, odio suscipit voluptas,
            nihil odit error veniam ipsum tempora inventore praesentium iure
            optio ipsam dolorem illum dolore, deleniti tempore consequuntur eos
            facilis? Accusamus dolor blanditiis numquam iusto tempora! A nihil
            velit suscipit cupiditate porro consequuntur id officia. Nam
            suscipit, amet corrupti, veniam sapiente hic repellendus iste labore
            temporibus doloribus libero itaque consequuntur nisi est incidunt
            aut ipsam magni sed soluta? Tenetur neque repellendus, aperiam fugit
            maxime minima at molestiae ipsum modi sint
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">AUTOMATED BOOKINGS</h3>
              <p className="">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="book" className="w-8/12 lg:w-full mx-auto lg:mx-0 mt-10 lg:mt-0">
          <div className="border border-blue-200 text-center p-4 rounded-tl-3xl rounded-br-3xl">
              <p className="mt-2">GET AN ADDITIONAL 10% OFF</p>
              <p className="py-2">12 HOURS LEFT</p>
              <p className="bg-gray-800 hover:bg-gray-700 text-slate-100 py-2 rounded-sm cursor-pointer">BOOK NOW AND SAVE</p>
          </div>
          <form className="w-full">
              <div className="flex flex-col my-2">
                  <label>Destination</label>
                  <select className="border rounded-md p-2">
                      <option>Grande Antigua</option>
                      <option>Key West</option>
                      <option>Maldevis</option>
                      <option>Cozumel</option>
                  </select>
              </div>
              <div className="flex flex-col my-4">
                  <label>Check-In</label>
                  <input className="border border-blue-200 rounded-md p-2" type="date" />
              </div>
              <div className="flex flex-col my-2">
                  <label>Check-Out</label>
                  <input className="border border-blue-200 rounded-md p-2" type="date" />
              </div>
              <button className="w-full my-4 hover:opacity-90">Rates and Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
