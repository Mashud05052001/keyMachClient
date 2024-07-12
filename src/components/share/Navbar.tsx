import { Button } from "@/components/ui/button";
import { getCartCounts } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import "@/styles/navbar.style.css";
import { generateNavbarItems } from "@/utils/generateDynamicRoutesNavbar";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const totalCartItems = useAppSelector(getCartCounts);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);
  const navbarItems = generateNavbarItems();
  const lastNavbarItems = navbarItems[navbarItems.length - 1];

  useEffect(() => {
    const closeDropDown = (e: MouseEvent) => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef?.current?.contains(e?.target as Node)
      ) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between bg-gray py-2 text-black-600 bg-common-100">
      {/* Logo */}
      <NavLink to={""}>
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 font-semibold text-black-700 transition-all duration-200 hover:scale-110">
          <h2 className="font-bold flex items-center justify-center ">
            <span className="text-xl">Key</span>
            <span className="text-common-600 text-2xl">Mach</span>
          </h2>
        </div>
      </NavLink>

      {/* Center all navigation panel */}
      <div>
        <ul className="hidden items-center justify-between gap-4 md:flex font-semibold navbar-items">
          {navbarItems?.map((item) => (
            <NavLink
              to={item.to}
              className="group flex  cursor-pointer flex-col relative px-1"
              key={item.name}
            >
              <span className="text-center">{item.name}</span>
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-common-500 transition-all duration-300 group-hover:w-full "></span>
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Cart Icon + Mini window hamburger */}
      <div className="flex items-center justify-center  pr-2">
        {/* Cart Icon */}
        <div className="pb-1">
          <NavLink to={"/cart"}>
            <Button variant={"ghost"} className=" relative">
              <ShoppingBagIcon className="size-6 text-black" />
              <span
                className={`w-5 h-5 flex items-center justify-center absolute right-2 text-xs bottom-0 bg-common-700 text-white rounded-full p-0.5 bg-opacity-90 ${
                  totalCartItems > 99 && "text-[10px] "
                } `}
              >
                {totalCartItems}
              </span>
            </Button>
          </NavLink>
        </div>

        {/* Hamburger menu & toggle bar that will open in short window */}
        <div
          className="relative flex transition-transform md:hidden"
          ref={dropDownMenuRef}
        >
          <span>
            <Hamburger
              size={18}
              toggled={dropDownState}
              toggle={setDropDownState}
            />
          </span>

          {dropDownState && (
            <ul className="z-10 bg-slate-300   absolute -right-2 top-14 flex w-[200px] flex-col  rounded-bl-xl text-base navbar-items1">
              {navbarItems?.map((item) => (
                <NavLink
                  to={item.to}
                  className={`cursor-pointer  px-6 py-2 text-gray-600 font-semibold hover:text-white duration-100 hover:bg-common-700 ${
                    lastNavbarItems.name === item.name && "rounded-bl-xl"
                  }`}
                  key={item.name}
                  onClick={() => setDropDownState(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
