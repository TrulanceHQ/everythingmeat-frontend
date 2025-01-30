import {Button} from "flowbite-react";
import React from "react";

const Page = () => {
    return (
        <div className="w-full p-2 ml-4">
            <div className="flex flex-col justify-start items-start">
                <h1 className="text-2xl font-bold">Log Out</h1>
                <p className="text-sm font-normal">Are you sure you want to log out?</p>
            </div>
            <div className="flex items-start justify-start py-2">
                <Button className="!bg-customRed p-1 w-auto">Yes, Log me out</Button>
            </div>
        </div>
    );
};

export default Page;
// To view this page go to: "http://localhost:3000/buyer-dashboard/buyer-account/logout"
