import { Menu, Transition } from '@headlessui/react';
import React from 'react';
import { SuLogo } from '../atoms/SuLogo';

export const Header = () => {
    return (
      <div className="relative z-50">
        <Menu
          as="header"
          className="container mx-auto px-4 py-4 md:py-8 flex justify-between itesm-center"
        >
        {({ open }) => {
          if (typeof window !== "undefined") document?.body.classList.toggle("overflow-y-hidden", open)

          return (
            <>
           <a
          href="/"
          className="flex items-center font-bold gap-4 text-lg sm:text-xl tracking-wide relative z-50"
        >
          <SuLogo className='h-8'/>
          <span>Studentská unie UTB</span>
        </a>

        {/* Mobile menu button */}
          <Menu.Button
            className="relative z-50  h-fit w-fit rounded-lg  p-1 text-gray-800 lg:hidden"
            title="Navigace"
          >
            {({ open }) => (
              <>
                <div className="relative h-6 w-6">
                  <Transition
                    className="absolute inset-0"
                    enter="transition duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    show={open}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Transition>
                  <Transition
                    className="absolute inset-0"
                    enter="transition duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    show={!open}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </Transition>
                </div>
              </>
            )}
          </Menu.Button>

          {/* Mobile menu */}
          <Transition
            enter="transition-all duration-700 linear"
            enterFrom="transform h-0"
            enterTo="transform h-screen"
            leave="transition-all duration-[800ms] ease-out "
            leaveFrom="transform h-screen"
            leaveTo="transform h-0"
            as={React.Fragment}
          >
            <Menu.Items
              as="div"
              className="fixed inset-0 w-screen bg-gray-100"
            >
              <nav className="flex h-full w-full flex-col items-center justify-center space-y-6 text-center text-xl text-gray-800 tracking-wider font-medium">
              
                  <Transition.Child
                    enter={`transition duration-700 linear delay-[200ms]`}
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-300 linear"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    as={React.Fragment}
                  >
                    <Menu.Item>
                      <a href="/kontakt" className="p-2" >
                        Kontakt
                      </a>
                    </Menu.Item>
                  </Transition.Child>

                  <Transition.Child
                    enter={`transition duration-700 linear delay-[400ms]`}
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-300 linear"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    as={React.Fragment}
                  >

                  <Menu.Item>
                      <a href="/partneri" className="px-8 py-3 bg-gray-800 text-gray-200 rounded-lg" >
                        Pro Partnery
                      </a>
                    </Menu.Item>
                  </Transition.Child>
              </nav>
            </Menu.Items>
          </Transition>
  
  {/* Desktop menu */}
          <nav className="hidden text-gray-700 lg:flex tracking-wide font-medium text-xl items-center space-x-8">
            
              <a
                href="/kontakt"
                
                className=""
                
              >Kontakt
              </a>

              <a href="/partneri" className="px-8 py-3 bg-gray-800 text-gray-200 rounded-lg -my-2.5" >
                        Pro Partnery
                      </a>
          </nav>  </>
            )
          }}
        </Menu>
      </div>
    );
  };
  