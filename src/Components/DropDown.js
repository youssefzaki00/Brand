import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
  console.log(classes);
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({ names }) {
  const [selected, setSelected] = useState(names[0]);
  const handleSelect = (name) => {
    setSelected(name);
  };
  return (
    <Menu as="div" className="relative inline-block text-left dropdown-list">
      <div>
        <Menu.Button className="dropping inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3  py-2 text-sm font-medium text-gray-900  hover:bg-gray-50 ">
          {selected}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {names.map((name, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <div
                    onClick={() => handleSelect(name)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {name}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
