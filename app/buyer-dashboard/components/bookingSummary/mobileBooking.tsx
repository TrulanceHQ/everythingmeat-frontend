import React from "react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import BookingSummary from "./bookingSummary";
const MobileBooking = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <h2 className="text-xl text-customGray hover:text-customRed m-2 p-1">Booking Summary</h2>
                </SheetTrigger>
                <SheetContent>
                    <SheetTitle>Booking Summary</SheetTitle>
                    <BookingSummary />
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileBooking;
