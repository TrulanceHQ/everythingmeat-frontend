"use client";
import christmas_goat from "@/public/buyersImage/christmas_goat.png";
import minus_icon from "@/public/buyersImage/minus_icon.png";
import plus_icon from "@/public/buyersImage/plus_icon.png";
import {RiCoupon3Line} from "react-icons/ri";
import {Button, TextInput, Label} from "flowbite-react";
import Image from "next/image";
import {RxCross1} from "react-icons/rx";
import React, {useState} from "react";

export function Page() {
    const [cartContent, setCartContent] = useState([
        {
            id: 1,
            productName: "Christmas Goat",
            productImage: christmas_goat,
            slotNumber: "3",
            productWeight: "20kg",
            productPrice: 35000,
            quantity: 1,
        },
        {
            id: 2,
            productName: "Christmas Chicken",
            productImage: christmas_goat,
            slotNumber: "3",
            productWeight: "20kg",
            productPrice: 25000,
            quantity: 1,
        },
    ]);

    const handleIncrement = (index: number) => {
        const newCartContent = [...cartContent];
        newCartContent[index].quantity += 1;
        setCartContent(newCartContent);
    };

    const handleDecrement = (index: number) => {
        const newCartContent = [...cartContent];
        if (newCartContent[index].quantity > 1) {
            newCartContent[index].quantity -= 1;
            setCartContent(newCartContent);
        }
    };

    const handleRemoveItem = (id: number) => {
        const newCartContent = cartContent.filter((item) => item.id !== id);
        setCartContent(newCartContent);
    };

    return (
        <div className="w-full lg:w-[788px] flex flex-col flex-shrink">
            {/* CARD HEADER */}
            <div className="bg-customOrange hidden md:block rounded-xl gap-3 p-3">
                <div className="w-full flex flex-row justify-between px-3">
                    <div>
                        <h2 className="text-black text-2xl font-medium">Product</h2>
                    </div>
                    <div className="flex flex-row justify-between px-2 w-[40%]">
                        <h2 className="text-black text-2xl font-medium">Slot Number</h2>
                        <h2 className="text-black text-2xl font-medium">Price</h2>
                    </div>
                </div>
            </div>
            {/* CARD BODY */}
            {cartContent.map((item, index) => (
                <div
                    key={item.id}
                    className="flex flex-col lg:flex-row justify-center items-center lg:justify-between p-5"
                >
                    <div className="w-full flex flex-row justify-between px-3 items-center">
                        {/* PRODUCT IMAGE AND AMOUNT */}
                        <div className="flex flex-row items-center gap-2 w-3/4">
                            <RxCross1 onClick={() => handleRemoveItem(item.id)} className="cursor-pointer" />
                            <Image src={item.productImage} alt="Product Image" height={100} width={100} />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl font-bold">{item.productName}</h1>
                                <p className="text-[#606060] text-sm">{`Weight: ${item.productWeight}`}</p>
                            </div>
                            {/* COUNTER ICONS */}
                            <div className="flex flex-row border border-customOrange rounded-xl w-[125px] h-8 justify-between items-center">
                                <Image
                                    src={minus_icon}
                                    alt="minus icon"
                                    height={30}
                                    width={30}
                                    onClick={() => handleDecrement(index)}
                                    className="cursor-pointer"
                                />

                                <span className="text-base text-customOrange">{item.quantity}</span>

                                <Image
                                    src={plus_icon}
                                    alt="plus icon"
                                    height={30}
                                    width={30}
                                    onClick={() => handleIncrement(index)}
                                    className="cursor-pointer"
                                />
                            </div>
                            {/* NO OF SLOT */}
                            <div className="flex justify-end w-1/4">
                                <p className="text-[20px] font-medium">{`Slot ${item.quantity}`}</p>
                            </div>
                        </div>

                        {/* PRICE */}
                        <p className="text-[20px] font-medium">&#8358; {item.productPrice * item.quantity}</p>
                    </div>
                </div>
            ))}

            {/* NO ITEMS IN CART SCREEN */}
            {cartContent.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[300px]">
                    <h1 className="text-2xl font-medium text-customGray italic">No items in cart</h1>
                </div>
            )}

            {/* TOTAL PRICE */}
            <div className="flex flex-row items-end justify-start gap-3">
                {/* COUPON INPUT */}
                <div className="flex flex-col gap-3 w-[209px] items-start">
                    <div className="mb-2 block">
                        <Label htmlFor="coupon" value="Your Coupon" />
                    </div>
                    <TextInput id="coupon" type="number" icon={RiCoupon3Line} placeholder="#######" required />
                    {/* NB: COUPON TYPE TO BE SPECIFIED LATER */}
                </div>
                <div className="flex flex-row items-center gap-3">
                    <Button className="bg-customGray text-white w-[171px] hover:!border-customRed">Apply</Button>
                    <div>
                        <a className="text-customRed underline">Clear Cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
// To view this page go to: "http://localhost:3000/allpages/users/buyer/booking-cart"
