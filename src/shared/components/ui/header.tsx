import { motion } from 'framer-motion';
import { type FC, useMemo, useState } from 'react';

import Logo from '@/shared/assets/icons/anse-enu-logo-white.svg?react';
import Burger from '@/shared/assets/icons/burger.svg?react';
import Close from '@/shared/assets/icons/close.svg?react';
import {
  TabsList,
  TabsTrigger,
  TabsWrapper,
} from '@/shared/components/ui/tabsWrapper.tsx';
import clsx from 'clsx';
import { AnimatePresence } from 'motion/react';

interface HeaderProps {
  handleTabClick: (tabValue: string) => void;
}

const Header: FC<HeaderProps> = ({ handleTabClick }) => {
  const navItems = useMemo(
    () => [
      { id: 'about', label: 'О шоу' },
      { id: 'stars', label: 'Состав' },
      { id: 'program', label: 'Программа' },
      { id: 'tickets', label: 'Билеты' },
    ],
    []
  );
  const [activeSection, setActiveSection] = useState<string>(navItems[0].id);
  const [hidden, setHidden] = useState<boolean>(
    window?.innerWidth < 768 || false
  );

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                     render                                     ||
  // ! ||--------------------------------------------------------------------------------||

  const logo = (
    <div className="flex items-center justify-center rounded-4xl">
      <span className="text-system-bg-light-primary text-[22px] leading-[28px] font-bold tracking-[0.35px] text-white">
        <Logo />
      </span>
    </div>
  );

  const header = (
    <AnimatePresence>
      {!hidden && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setHidden(true)}
            className="fixed inset-0 z-20 bg-black md:hidden"
          />
          <motion.div
            variants={{
              hidden: {
                x: 400,
                opacity: 0,
              },
              visible: {
                x: 0,
                opacity: 1,
              },
            }}
            initial={window?.innerWidth < 768 ? 'hidden' : 'visible'}
            animate={hidden ? 'hidden' : 'visible'}
            exit={'hidden'}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={clsx(
              'bg-tab-bg fixed top-0 right-[0] z-[25] flex h-[100dvh] w-[220px] flex-col items-center justify-start gap-4 rounded-none',
              'md:bg-tab-bg md:relative md:inset-auto md:mx-auto md:h-22 md:w-full md:max-w-6xl md:flex-row md:items-center md:justify-evenly md:gap-0 md:rounded-full md:px-6 md:py-3'
            )}
          >
            <div
              onClick={() => setHidden(true)}
              className="flex w-full justify-end p-4 md:hidden"
            >
              <Close />
            </div>

            {/* Logo */}
            {logo}

            <TabsWrapper
              value={activeSection}
              className="mt-2 w-full items-center md:mt-0 md:w-auto"
            >
              <TabsList
                defaultValue={activeSection}
                className="bg-bg-body h-11 w-full flex-col p-0 md:flex-row md:p-1"
              >
                {navItems.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    onClick={() => {
                      setActiveSection(tab.id);
                      handleTabClick(tab.id);
                      if (window.innerWidth < 767) {
                        setHidden(true);
                      }
                    }}
                    className="data-[state=active]:text-primary w-full border-t border-r-0 border-b border-l-0 border-[#D9D9D9] text-lg font-normal text-white data-[state=active]:bg-white md:w-auto"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </TabsWrapper>

            {/* <button
              className={clsx(
                'max-h-[42px] rounded-[12px] bg-white px-[24px] py-[10px] font-semibold text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-indigo-400',
                ''
              )}
            >
              <span>Регистрация</span>
            </button> */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  const mobileHeader = (
    <div className="bg-background sticky top-0 flex justify-between px-4 py-3 md:hidden">
      {/* Logo */}
      {logo}

      <motion.div>
        <Burger
          onClick={() => setHidden(false)}
          className="text-primary h-10 w-10 rounded-[12px] bg-white p-2"
        />
      </motion.div>
    </div>
  );

  return (
    <header
      className={clsx(
        'top-0 z-[30]',
        'md:bg-background md:bg-opacity-80 md:fixed md:right-0 md:left-0 md:m-[12px] md:rounded-[20px] md:backdrop-blur-md'
      )}
    >
      {header}
      {mobileHeader}
    </header>
  );
};

export default Header;
