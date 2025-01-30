"use client";
import { AiOutlineMenu } from "react-icons/ai";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import SideNavbar from "./SideNavbar";

const MobileNavbar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
<AiOutlineMenu />
                </SheetTrigger>
                <SheetContent>
                    <div className="hidden">
                        <SheetTitle>Home</SheetTitle>
                    </div>
                    <div className="m-auto p-2">
                    <SideNavbar />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNavbar;
