import {Button} from "flowbite-react";
import React from "react";
//import {useBooking} from "../../context/CartContext";

const formatCurrency = (amount: number): string => {
    return amount.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
    });
};

const bookingSummary: React.FC = () => {
    const bookingItems = {
        subtotal: 70000,
        delivery: 2000,
        tax: 324.44,
        couponDiscount: 0,
        item: 2,
    };
    //   const {subtotal, delivery, tax, couponDiscount, discount, totalAfterDiscount} = useBooking();
    const total = bookingItems.subtotal + bookingItems.delivery + bookingItems.tax - bookingItems.couponDiscount;
    return (
        <div>
            {" "}
            <div className="border border-customGray flex flex-col flex-shrink justify-between gap-2 m-1 md:m-5 p-3 rounded-lg">
                <div className="border-b border-customGray p-3 items-start hidden md:flex ">
                    <h2 className="text-customGray md:text-lg lg:text-xl font-bold">Booking Summary</h2>
                </div>
                {/* ITEM */}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between gap-5">
                        <p className="text-customGray text-xl font-normal">Item:</p>
                        <p className=" text-sm md:text-base lg:text-lg font-medium">{bookingItems.item}</p>
                    </div>
                </div>
                {/* SUBTOTAL */}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between">
                        <p className="text-customGray text-base md:text-xl font-normal">Subtotal:</p>
                        <p className="text-sm md:text-base lg:text-lg font-medium">
                            {formatCurrency(bookingItems.subtotal)}
                        </p>
                    </div>
                </div>
                {/* DELIVERY */}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between">
                        <p className="text-customGray text-base font-normal">Delivery:</p>
                        <p className="text-sm md:text-base lg:text-lg font-medium">
                            {formatCurrency(bookingItems.delivery)}
                        </p>
                    </div>
                </div>
                {/* TAX */}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between">
                        <p className="text-customGray text-base md:text-xl font-normal">Tax:</p>
                        <p className="text-sm md:text-base lg:text-lg font-medium">
                            {formatCurrency(bookingItems.tax)}
                        </p>
                    </div>
                </div>
                {/* COUPON DISCOUNT */}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between">
                        <p className="text-customGray text-base md:text-xl font-normal">Coupon:</p>
                        <p className="text-sm md:text-base lg:text-lg font-medium">
                            -{formatCurrency(bookingItems.couponDiscount)}
                        </p>
                    </div>
                </div>
                <hr className="border-customGray py-3" />
                {/* TOTAL */}
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between">
                        <p className="text-customGray text-base md:text-xl font-normal">TOTAL:</p>
                        <p className="text-sm md:text-base lg:text-lg">{formatCurrency(total)}</p>
                    </div>
                    <div className="flex items-center justify-center py-2">
                        <Button className="!bg-customRed p-1 w-full">Check Out</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default bookingSummary;
