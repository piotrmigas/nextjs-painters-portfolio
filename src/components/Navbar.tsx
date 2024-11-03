import Link from 'next/link';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const router = useRouter();

  const navigation = [
    { name: 'About/Contact', href: '/' },
    { name: 'Works', href: '/works' },
    { name: 'Exhibition Views', href: '/exhibitions' },
  ];

  return (
    <Disclosure as='nav' className='bg-gradient-to-r from-blue-200 to-blue-50'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-14'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button
                  aria-label='menu'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700 focus:outline-none'
                >
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <Link href='/'>
                  <a className='flex-shrink-0 flex items-center text-lg text-gray-500 font-semibold'>Emilia Kina</a>
                </Link>
                <div className='hidden sm:block sm:mx-auto'>
                  <div className='flex space-x-4'>
                    {navigation.map(({ name, href }) => (
                      <Link href={href} key={name}>
                        <a
                          aria-label={name}
                          className={`${router.pathname === href ? 'bg-blue-300' : 'hover:bg-white'} text-gray-700 
                        px-3 py-2 rounded-full text-sm font-medium`}
                        >
                          {name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <a
                  href='https://www.instagram.com/emilia_kina/'
                  aria-label='Instagram'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faInstagram} mask={faSquareFull} />
                </a>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map(({ name, href }) => (
                <Link href={href} key={name}>
                  <a
                    aria-label={href}
                    className={`${
                      router.pathname === href ? 'bg-blue-300' : 'hover:bg-white'
                    } text-gray-700 block px-3 py-2 rounded-md text-base font-medium text-center`}
                  >
                    {name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
