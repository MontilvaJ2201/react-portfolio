import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { styles } from '../styles'
import { navLinks } from "../constants";
import { logo, menu, close } from '../assets';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import i18n from 'i18next'
import cookies from 'js-cookie'
import { t } from 'i18next'
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'es',
  },
]

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)

const Navbar = () => {
  const [ active, setActive ] = useState('');
  const [toggle, setToggle] = useState(false);
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setLanguageDropdown(false);
  };

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage?.dir || 'ltr'
  }, [currentLanguage, t])

  return (
    <nav className={ `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent backdrop-blur-sm` }>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 mr-14'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain scale-[1.75]' />
        </Link>
        <div className="relative flex flex-row justify justify-between items-center">
          <button
            onClick={() => setLanguageDropdown(!languageDropdown)}
            className="flex items-center gap-2 mx-2"
          >
            <GlobeIcon />
          </button>
          <a className='mx-2' href='https://www.linkedin.com/in/carlos-montilva-a4a0a3232/' target={'_blank'}>
            <BsLinkedin className='w-[24px] h-[24px] text-secondary hover:text-white text-[18px] font-medium cursor-pointer'/>
          </a>
          <a className='mx-2' href='https://dribbble.com/Jmont2201'>
            <BsDribbble className='w-[24px] h-[24px] text-secondary hover:text-white text-[18px] font-medium cursor-pointer'/>
          </a>
          <a className='mx-2' href='https://github.com/MontilvaJ2201'>
            <BsGithub className='w-[24px] h-[24px] text-secondary hover:text-white text-[18px] font-medium cursor-pointer'/>
          </a>
          <a className='mx-2' href='https://wa.me/+584120110295' target={'_blank'}>
            <BsWhatsapp className='w-[24px] h-[24px] text-secondary hover:text-white text-[18px] font-medium cursor-pointer'/>
          </a>
          {languageDropdown && (
            <ul className="p-4 black-gradient absolute right-32 top-8 mt-2 z-10 rounded-xl">
              {languages.map((language) => (
                <li key={language.code}>
                  <button
                    onClick={() => handleLanguageChange(language.code)}
                    className="block w-full text-secondary text-left px-2 py-1 hover:text-white-100"
                  >
                    {language.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          { navLinks.map((Link) => (
            <li 
              key={Link.id} 
              className={`${
                active === Link.title
                  ? 'text-white'
                  : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{t(`${Link.title}`)}</a>
            </li>
          )) }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${
            !toggle 
              ? 'hidden' 
              : 'flex '
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              { navLinks.map((Link) => (
                <li 
                  key={Link.id} 
                  className={`${
                    active === Link.title
                      ? 'text-white'
                      : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{t(`${Link.title}`)}</a>
                </li>
              )) }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar