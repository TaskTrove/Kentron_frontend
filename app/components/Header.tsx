import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
    return (
        <div className="fixed z-40 top-0 left-0 w-screen h-10">
            <div className="bg-gray-500 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center ">
                    <a href="#" className="flex items-center">
                        <div className="text-xl font-extrabold">
                            Kentron
                        </div>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a
                            href="#"
                            className="text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                        >
                            <div className="text-sm">
                                <FontAwesomeIcon icon={faUser} />
                                login
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header