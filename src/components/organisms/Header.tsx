import { Menu, Transition } from '@headlessui/react';
import React, { useEffect } from 'react';
import polstare from '../../images/logo_rekordy_png.png';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <header className="py-5 sm:py-6 md:py-8 lg:py-10">
      <nav className="lg:max-w-6xl px-4 md:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <a href="/" className="flex gap-3 uppercase font-bold items-center relative z-10 font-heading">
          <img src={polstare.src} className="h-14 md:h-16 lg:h-20 -my-2.5 sm:-my-3 md:-my4" alt="" />
          <span className="sr-only">SuRekordista</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-700 text-lg lg:text-xl">
          <a className="px-2 py-1" href="/ucastnici">
            Pro bytkaře
          </a>
          <a className="px-2 py-1" href="/partneri">
            Pro partnery
          </a>
          <a className="px-2 py-1" href="/kontakt">
            Kontakt
          </a>
        </div>
        <Menu>
          {({ open, close }) => {
            setIsMenuOpen(open);

            return (
              <>
                <Menu.Button className="p-2 h-[40px] w-[40px] -my-2 fixed flex z-30 right-4 top-6 sm:top-7 sm:right-6 bg-primary-600 rounded-lg shadow-primary-600/20 shadow text-white md:hidden">
                  <Transition
                    show={!open}
                    as="span"
                    enter="transition delay-100 duration-300 ease-in-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-300 ease-in-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="absolute"
                  >
                    <Icon name="menu" className="w-6 h-6" />
                  </Transition>
                  <Transition
                    show={open}
                    as="span"
                    enter="transition delay-100 duration-300 ease-in-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-300 ease-in-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="absolute"
                  >
                    <Icon name="close" className="w-6 h-6" />
                  </Transition>

                  <span className="sr-only">{open ? 'Zavřít menu' : 'Otevřít menu'}</span>
                </Menu.Button>
                <Transition enter="" enterFrom="" enterTo="" leave="" leaveFrom="" leaveTo="" as={React.Fragment}>
                  <Menu.Items className="fixed left-0 right-0 top-0 bottom-0 flex z-20">
                    <Transition.Child
                      as={React.Fragment}
                      enter="transition duration-300 ease-in-out"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition duration-300 ease-in-out"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="bg-dark/80  flex-grow absolute inset-0 w-full h-full"></div>
                    </Transition.Child>
                    <Transition.Child
                      as={React.Fragment}
                      enter="transition duration-300 delay-200 ease-in-out"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition duration-300 ease-in-out"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute flex gap-4 pt-5 pl-4 sm:pt-6 sm:pl-5 uppercase font-bold tracking-wider items-center text-stone-50 z-20">
                        <img src={polstare.src} className="h-14 -my-2.5 sm:-my-3 md:-my4" alt="" />
                        <span className="sr-only">SuRekordista</span>
                      </div>
                    </Transition.Child>
                    <Transition.Child
                      as={React.Fragment}
                      enter="transition duration-300 ease-in-out"
                      enterFrom="translate-x-full"
                      enterTo="opacity-100"
                      leave="transition duration-300 ease-in-out"
                      leaveFrom="opacity-100"
                      leaveTo="translate-x-full"
                    >
                      <div className="bg-dark w-full h-full pb-5 pt-[calc(52px+1.25rem)] sm:py-6 px-4 sm:px-6 text-stone-100 relative z-10">
                        <div className="flex flex-col h-full space-y-8 items-center justify-center">
                          <Menu.Item>
                            <a
                              className="ui-active:text-primary-600 block w-full py-2 text-lg font-medium text-center duration-300"
                              href="/o-nas"
                            >
                              Pro bytkaře
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <a
                              className="ui-active:text-primary-600 block w-full py-2 text-lg font-medium text-center transition duration-300"
                              href="/pridej-se-k-nam"
                            >
                              Pro partnery
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <Button type="link" href="/kontakt" variant="primary" size="md" text="Kontakt" />
                          </Menu.Item>
                        </div>
                      </div>
                    </Transition.Child>
                  </Menu.Items>
                </Transition>
              </>
            );
          }}
        </Menu>
      </nav>
    </header>
  );
};
