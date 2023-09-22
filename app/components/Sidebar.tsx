import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolder, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const Sidebar = () => {
    return (
        <div className="bg-gray-200 h-screen w-1/5 p-4 pt-20 text-center">
            <h2 className="text-xl font-bold pt-4 mb-4">Workspace</h2>
            <div className="mb-4">
                <Image
                    src="/images/share.png"
                    alt="GFG logo served with static path of public directory"
                    height="100"
                    width="400"
                />
                <p className="mt-2">Home</p>
            </div>
            <div className="mb-4">
                <FontAwesomeIcon icon={faFolder} className="text-verysmall" />
                <p className="mt-2">Folders</p>
            </div>
            <div className="mb-4">
                <FontAwesomeIcon icon={faUser} className="size20" />
                <p className="mt-2">Users</p>
            </div>
            <div className="mb-4">
                <FontAwesomeIcon icon={faCog} className="text-base" />
                <p className="mt-2">Settings</p>
            </div>
            <div className="mt-auto">
                <FontAwesomeIcon icon={faSignOutAlt} className="text-base" />
                <p className="mt-2">Logout</p>
            </div>
        </div>
    );
};

export default Sidebar;
