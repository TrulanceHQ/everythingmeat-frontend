import {Button} from "flowbite-react";
import React from "react";

const formatCurrency = (amount: number): string => {
    return amount.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
    });
};

const BookingSummary = () => {
    const bookingItems = {
        item: 2,
        subtotal: 90000,
        delivery: 20000,
        tax: 2000,
        couponDiscount: 0.0,
    };
    const total = bookingItems.subtotal + bookingItems.delivery + bookingItems.tax - bookingItems.couponDiscount;

    return (
        <div className="md:w-full border border-customGray flex flex-col flex-shrink justify-between gap-2 h-full p-3 rounded-lg">
            <div className="border-b border-customGray p-3 flex items-start">
                <h2 className="text-customGray text-2xl font-bold">Booking Summary</h2>
            </div>
            {/* ITEM */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between gap-5">
                    <p className="text-customGray text-xl font-normal">Item:</p>
                    <p className="text-xl font-medium">{bookingItems.item}</p>
                </div>
            </div>
            {/* SUBTOTAL */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-customGray text-xl font-normal">Subtotal</p>
                    <p className="text-xl font-medium">{formatCurrency(bookingItems.subtotal)}</p>
                </div>
            </div>
            {/* DELIVERY */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-customGray text-xl font-normal">Delivery</p>
                    <p className="text-xl font-medium">{formatCurrency(bookingItems.delivery)}</p>
                </div>
            </div>
            {/* TAX */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-customGray text-xl font-normal">Tax</p>
                    <p className="text-xl font-medium">{formatCurrency(bookingItems.tax)}</p>
                </div>
            </div>
            {/* COUPON DISCOUNT */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-customGray text-xl font-normal">Coupon Discount</p>
                    <p className="text-xl font-medium">-{formatCurrency(bookingItems.couponDiscount)}</p>
                </div>
            </div>
            <hr className="border-customGray py-3" />
            {/* TOTAL */}
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="text-customGray text-xl font-normal">TOTAL</p>
                    <p className="text-xl font-medium">{formatCurrency(total)}</p>
                </div>
                <div className="flex items-center justify-center py-2">
                    <Button className="!bg-customRed p-1 w-full">Check Out</Button>
                </div>
            </div>
        </div>
    );
};

export default BookingSummary;
