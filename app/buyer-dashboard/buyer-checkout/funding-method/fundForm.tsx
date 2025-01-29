import {AiOutlineNumber} from "react-icons/ai";
import {FaRegCircleUser} from "react-icons/fa6";
import {Button, Checkbox, Label, TextInput} from "flowbite-react";
const fundForm = () => {
    return (
        <div className="h-[544px]">
            <form className="flex flex-col justify-center gap-3 p-3">
                {/* ACCOUNT NAME */}
                <div className="mb-2 block">
                    <Label htmlFor="account_name" color="gray">
                        <span className="text-lg font-medium">Card Holder Name</span>
                    </Label>
                </div>
                <TextInput
                    id="account_name"
                    placeholder="Babatunde Johnson"
                    required
                    color="gray"
                    icon={FaRegCircleUser}
                />
                {/* ACCOUNT NUMBER */}
                <div className="mb-2 block">
                    <Label htmlFor="account_number" color="gray">
                        <span className="text-lg font-medium">Card Number</span>
                    </Label>
                </div>
                <TextInput id="account_number" placeholder="0123456789" required color="gray" icon={AiOutlineNumber} />
                <div className="flex flex-row justify-between gap-3">
                    {/* EXPIRE DATE */}
                    <div className="mb-2 flex flex-col">
                        <Label htmlFor="expiry_date" color="black">
                            <span className="text-lg font-medium">Expiry Date</span>
                        </Label>
                        <TextInput id="expiry_date" placeholder="02/24" required color="black" />
                    </div>
                    <div className="mb-2 flex flex-col">
                        {/* CVV */}
                        <Label htmlFor="cvv" color="gray">
                            <span className="text-lg font-medium">CVV</span>
                        </Label>
                        <TextInput id="ccv" placeholder="123" required color="gray" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 justify-start">
                    <div className="flex flex-row gap-1 items-center">
                        <Checkbox id="new_card" color="gray" />
                        <Label htmlFor="new_card" color="gray">
                            <span className="text-lg font-medium">Save card for future payment.</span>
                        </Label>
                    </div>
                    <Button className="bg-[#F2F2F2] text-white text-xl w-2/4 font-medium rounded-md p-3 hover:!bg-customRed">
                        Add Card
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default fundForm;
