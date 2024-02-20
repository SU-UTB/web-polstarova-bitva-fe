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
      <nav className="mx-auto flex items-center justify-between px-4 md:px-6 lg:max-w-7xl lg:px-8">
        <a href="/" className="relative z-10 flex items-center gap-3 font-heading font-bold uppercase">
          <img src={polstare.src} className="md:-my4 -my-2.5 h-14 sm:-my-3 md:h-16 lg:h-20" alt="" />
          <span className="sr-only">SuRekordista</span>
        </a>
        <div className="hidden items-center gap-8 text-lg font-medium text-slate-700 md:flex lg:text-xl">
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
                <Menu.Button className="fixed right-4 top-6 z-30 -my-2 flex h-[40px] w-[40px] rounded-lg bg-primary-600 p-2 text-white shadow shadow-primary-600/20 sm:right-6 sm:top-7 md:hidden">
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
                    <Icon name="menu" className="h-6 w-6" />
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
                    <Icon name="close" className="h-6 w-6" />
                  </Transition>

                  <span className="sr-only">{open ? 'Zavřít menu' : 'Otevřít menu'}</span>
                </Menu.Button>
                <Transition enter="" enterFrom="" enterTo="" leave="" leaveFrom="" leaveTo="" as={React.Fragment}>
                  <Menu.Items className="fixed bottom-0 left-0 right-0 top-0 z-20 flex">
                    <Transition.Child
                      as={React.Fragment}
                      enter="transition duration-300 ease-in-out"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition duration-300 ease-in-out"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute  inset-0 h-full w-full flex-grow bg-dark/80"></div>
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
                      <div className="absolute z-20 flex items-center gap-4 pl-4 pt-5 font-bold uppercase tracking-wider text-stone-50 sm:pl-5 sm:pt-6">
                        <img src={polstare.src} className="md:-my4 -my-2.5 h-14 sm:-my-3" alt="" />
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
                      <div className="relative z-10 h-full w-full bg-dark px-4 pb-5 pt-[calc(52px+1.25rem)] text-stone-100 sm:px-6 sm:py-6">
                        <div className="flex h-full flex-col items-center justify-center space-y-8">
                          <Menu.Item>
                            <a
                              className="block w-full py-2 text-center text-lg font-medium duration-300 ui-active:text-primary-600"
                              href="/o-nas"
                            >
                              Pro bytkaře
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <a
                              className="block w-full py-2 text-center text-lg font-medium transition duration-300 ui-active:text-primary-600"
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
