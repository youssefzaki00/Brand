import React from 'react'
import  './InquirySection.css'
import  './MainSection.css'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function InquirySection() {
  return (
    <div className='container mx-auto rounded  p-0 xl:px-16 mt-2 mb-4 lg:mt-4 lg:mb-4  '>
      <div className='InquirySection p-8 rounded-lg lg:p-8 flex flex-col xl:flex-row justify-between '>
        <div className='inquiry-text relative z-10'>
          <h2 className='pb-2  text-white font-semibold text-3xl'>An easy way to send<br></br> requests to all suppliers</h2>
          <span className='hidden xl:block text-xs text-white font-light'>You can just order any thing available with any quantity you want<br></br> shipped to your place.</span>
        </div>
        <div className='send-inquiry hidden xl:block rounded bg-white relative z-10  p-4 w-5/12 h-80 '>
          <h3 className=' text-xl font-semibold mb-4'>Send quote to suppliers</h3>
          <input type='text' id="order-item" className="block p-2 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 placeholder:text-black placeholder:font-medium mb-4 focus:ring-gray-200 focus:border-gray-200" placeholder="what item you need?"/>
          
          <textarea id="order-details" rows="3" className="block p-2.5 mb-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200" placeholder="Type more details"></textarea>
          <div className='Quantity flex justify-start'>
            <input type='number' id="order-item" className="block p-2.5 w-6/12 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 placeholder:text-black placeholder:font-medium mb-3 focus:ring-gray-200 focus:border-gray-200 mr-2" placeholder="Quantity"></input>
            <Menu as="div" className="relative inline-block text-left w-24 ">
              <div className='dropping'>
                <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-lg border border-gray-200 bg-white  p-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 menu-button dropping ">
                  Pcs
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Duplicate
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Archive
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Move
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Share
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Add to favorites
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Delete
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <input type='submit' value={'Send inquiry'} className=' user-join rounded-md mb-2 py-1.5 px-2.5 bg-blue-600 text-white text-md button' />
        </div>
        <input type='submit' value={'Send inquiry'} className='block xl:hidden relative z-20 user-join rounded-md mb-2 py-1.5 px-2.5 bg-blue-600 text-white text-md  w-fit button-inquiry mt-2' />
      </div>
    </div>
  );
}

export default InquirySection