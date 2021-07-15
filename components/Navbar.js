import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-14">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                  <a className="flex-shrink-0 flex items-center text-lg text-gray-400 font font-semibold">
                    Emilia Kina
                  </a>
                </Link>
                <div className="hidden sm:block sm:mx-auto">
                  <div className="flex space-x-4">
                    <Link href="/">
                      <a
                        aria-label="about"
                        className={`${
                          router.pathname == "/"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }
                        px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        About/Contact
                      </a>
                    </Link>
                    <Link href="/works">
                      <a
                        aria-label="works"
                        className={`${
                          router.pathname == "/works"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }
                        px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Works
                      </a>
                    </Link>
                    <Link href="/exhibitions">
                      <a
                        aria-label="exhibitions"
                        className={`${
                          router.pathname == "/exhibitions"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }
                        px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Exhibition Views
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="https://www.instagram.com/emilia_kina" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <a
                  aria-label="about"
                  className={`${
                    router.pathname == "/" && "bg-gray-900 text-white"
                  } text-gray-300 hover:bg-gray-700 hover:text-white
                  block px-3 py-2 rounded-md text-base font-medium`}
                >
                  About/Contact
                </a>
              </Link>
              <Link href="/works">
                <a
                  aria-label="works"
                  className={`${
                    router.pathname == "/works" && "bg-gray-900 text-white"
                  } text-gray-300 hover:bg-gray-700 hover:text-white
               block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Works
                </a>
              </Link>
              <Link href="/exhibitions">
                <a
                  aria-label="exhibitions"
                  className={`${
                    router.pathname == "/exhibitions" && "bg-gray-900 text-white"
                  } text-gray-300 hover:bg-gray-700 hover:text-white
                block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Exhibition Views
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    // <nav className="flex  items-center">
    //   <Link href="/">
    //     <a className="navbar-brand" aria-label="logo">
    //       <span className="fw-bold mb-0">Emilia Kina</span>
    //     </a>
    //   </Link>
    //   <button
    //     className="navbar-toggler float-right"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbar"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button>
    //   <div className="navbar-collapse collapse" id="navbar">
    //     <ul className="navbar-nav mx-auto">
    //       <li>
    //         <Link href="/">
    //           <a className={`nav-link ${router.pathname == "/" && "active"}`} aria-label="home">
    //             About/Contact
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/works">
    //           <a className={`nav-link ${router.pathname == "/works" && "active"}`} aria-label="works">
    //             Works
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/exhibitions">
    //           <a className={`nav-link ${router.pathname == "/exhibitions" && "active"}`} aria-label="exhibitions">
    //             Exhibition Views
    //           </a>
    //         </Link>
    //       </li>
    //     </ul>
    //     <a href="https://www.instagram.com/emilia_kina" aria-label="Instagram">
    //       <i className="fab fa-instagram align-middle" />
    //     </a>
    //   </div>
    // </nav>
  );
};

export default Navbar;
