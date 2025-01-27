import {Button, Label, TextInput} from "flowbite-react";
import {TbLockPassword} from "react-icons/tb";
import React from "react";

const Page = () => {
    return (
        <div className="w-full p-2 ml-4">
            <div className="flex flex-col justify-start items-start">
                <h1 className="text-2xl font-bold">Change Password</h1>
                <p className="text-sm font-normal">Please provide below information to change your password.</p>
            </div>
            <form>
                {/* OLD PASSWORD */}
                <div>
                    <div className="mb-2 block py-3">
                        <Label htmlFor="old_password" value="Old Password" />
                    </div>
                    <TextInput
                        id="old_password"
                        type="password"
                        icon={TbLockPassword}
                        required
                        shadow
                        className="w-3/4 border border-customGray rounded-md"
                    />
                </div>
                <div>
                    <div className="mb-2 block py-3">
                        <Label htmlFor="new_password" value="New password" />
                    </div>
                    <TextInput
                        id="new_password"
                        type="password"
                        icon={TbLockPassword}
                        required
                        shadow
                        className="w-3/4 border border-customGray rounded-md"
                    />
                </div>
                <div>
                    <div className="mb-2 block py-3">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                    </div>
                    <TextInput
                        id="repeat-password"
                        type="password"
                        icon={TbLockPassword}
                        required
                        shadow
                        className="w-3/4 border border-customGray rounded-md"
                    />
                </div>
                <div className="flex items-start justify-start py-2">
                    <Button className="!bg-customRed p-1 w-1/4">Change Password</Button>
                </div>
            </form>
        </div>
    );
};

export default Page;
// To view this page go to: "http://localhost:3000/buyer-dashboard/buyer-account/changePassword"
