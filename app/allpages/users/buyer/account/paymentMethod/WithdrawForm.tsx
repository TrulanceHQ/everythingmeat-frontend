import {AiOutlineNumber} from "react-icons/ai";
import {FaRegCircleUser} from "react-icons/fa6";
import {TbCurrencyNaira} from "react-icons/tb";
import {BiMoneyWithdraw} from "react-icons/bi";
import {FiX} from "react-icons/fi";
import {BsBank} from "react-icons/bs";
import {Button, Label, TextInput} from "flowbite-react";
const WithdrawForm = () => {
    return (
        <>
            <div className="flex flex-col gap-1 justify-start">
                <h1 className="text-2xl font-bold">Withdraw</h1>
                <p className="text-base font-normal">
                    Please note that your withdrawal should be completed within 1 hour.
                </p>
            </div>
            <form className="flex flex-col justify-center gap-3 p-3">
                {/* ACCOUNT NAME */}
                <div className="mb-2 block">
                    <Label htmlFor="account_name" color="gray">
                        <span className="text-xl font-medium">Account Name</span>
                        <span className="italic text-sm font-normal">
                            (Name should match your Everything meat account)
                        </span>
                    </Label>
                </div>
                <TextInput
                    id="account_name"
                    placeholder="Ade John Oluwatosin"
                    required
                    color="gray"
                    icon={FaRegCircleUser}
                />
                {/* ACCOUNT NUMBER */}
                <div className="mb-2 block">
                    <Label htmlFor="account_number" color="gray">
                        <span className="text-xl font-medium">Account Number</span>
                    </Label>
                </div>
                <TextInput id="account_number" placeholder="0123456789" required color="gray" icon={AiOutlineNumber} />
                {/* BANK NAME */}
                <div className="mb-2 block">
                    <Label htmlFor="bank_name" color="gray">
                        <span className="text-xl font-medium">Account Name</span>
                    </Label>
                </div>
                <TextInput id="bank_name" placeholder="Our Bank Nig" required color="gray" icon={BsBank} />
                {/* AMOUNT */}
                <div className="mb-2 block">
                    <Label htmlFor="amount" color="gray">
                        <span className="text-xl font-medium">Amount</span>
                    </Label>
                </div>
                <TextInput id="amount" placeholder="1,000" required color="gray" icon={TbCurrencyNaira} />
                {/* BUTTONS */}
                <div className="flex flex-row justify-between gap-3">
                    <Button color="red" className="w-1/2 p-2 ">
                        Withdraw
                        <BiMoneyWithdraw className="h-5" />
                    </Button>
                    <Button color="gray" className="w-1/2 p-2">
                        Cancel
                        <FiX className="h-5" />
                    </Button>
                </div>
            </form>
        </>
    );
};

export default WithdrawForm;
