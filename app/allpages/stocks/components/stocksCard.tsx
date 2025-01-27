"use client";
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {MdOutlineZoomOutMap} from "react-icons/md";
import {IoChevronBack, IoCloseOutline, IoChevronForward, IoChevronBackOutline} from "react-icons/io5";
import {useEffect} from "react";

interface StocksCardProps {
    paginatedStocks: any[];
    filteredStocks: any[];
    currentPage: number;
    itemsPerPage: number;
    handlePageChange: (page: number) => void;
    handleRemoveCategory: () => void;
    handleRemovePriceRange: () => void;
    handleClearFilters: () => void;
    selectedCategory: string;
    priceRange: [number, number];
}

// FUNCTION TO READ FROM THE API
// useEffect(() => {
//   const getProducts = async React.FC<StocksCardProps> = ({ paginatedStocks, filteredStocks, currentPage, itemsPerPage, handlePageChange, handleRemoveCategory, handleRemovePriceRange, handleClearFilters, selectedCategory, priceRange }) => {
//     try{
//       const response = await fetch ("https://everythingmeat-server.onrender.com/api/v1/products");
//       if (!response.ok) throw new Error ("Failed to fetch product")
//         const responseData = await response.json();
//       //setProduct(responseData)
//     }
//     catch (err){
//       console.alert('Can not fetch product now, Try again later.')
//       //setError('Can not fetch product now, Try again later.')
//     }
//     finally{
//       //setloading(false)
//       console.log('DONE')
//     }
//   }
//   //getproducts()
// },[])

const StocksCard: React.FC<StocksCardProps> = ({
    paginatedStocks,
    filteredStocks,
    currentPage,
    itemsPerPage,
    handlePageChange,
    handleRemoveCategory,
    handleRemovePriceRange,
    handleClearFilters,
    selectedCategory,
    priceRange,
}) => {
    return (
        <div className="w-full lg:w-3/4 p-4">
            {/* Showing Number of Results */}
            <div className="mb-4 text-sm">
                Showing 1-{paginatedStocks.length} of {filteredStocks.length} results
            </div>
            {/* Active Filters */}
            <div className="flex items-center gap-2 mt-4 flex-wrap mb-5">
                <h2 className="text-lg md:text-xl mr-6">Active Filters</h2>
                {selectedCategory !== "All" && (
                    <div className="bg-[#FFBA35] text-black py-2 px-4 rounded-full text-sm md:text-base flex items-center gap-1">
                        Category: {selectedCategory}
                        <button onClick={handleRemoveCategory}>
                            <IoCloseOutline size={30} className="text-black" />
                        </button>
                    </div>
                )}
                {(priceRange[0] !== 15000 || priceRange[1] !== 100000) && (
                    <div className="bg-[#FFBA35] text-black py-2 px-4 rounded-full text-sm md:text-base flex items-center gap-1 mr-6">
                        Price: ₦{priceRange[0].toLocaleString()} - ₦{priceRange[1].toLocaleString()}
                        <button onClick={handleRemovePriceRange}>
                            <IoCloseOutline size={30} className="text-black" />
                        </button>
                    </div>
                )}
                <button onClick={handleClearFilters} className="text-customRed text-sm underline">
                    Clear All
                </button>
            </div>

            {/* Stock Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedStocks.map((stock, index) => (
                    <Card key={stock.id} className="w-full max-w-[300px] max-h-[530px] border-none bg-[#F2F2F2]">
                        <CardHeader>
                            <div className="relative">
                                <img
                                    src={stock.image}
                                    alt={stock.title}
                                    className="rounded-lg object-cover w-full h-52"
                                />
                                <div className="absolute top-5 right-2 flex flex-col space-y-2">
                                    <button className="bg-white px-2 py-2 rounded-full shadow">
                                        <MdOutlineZoomOutMap size={20} className="text-gray-700" />
                                    </button>
                                    <button className="bg-white px-2 py-2 rounded-full shadow">
                                        <HiOutlineShoppingBag size={20} className="text-gray-700" />
                                    </button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500">Product ID: {stock.id}</p>
                            <CardTitle className="md:text-3xl text-xl font-semibold my-2">{stock.title}</CardTitle>
                            <p className="text-customRed font-bold md:text-xl text-lg">
                                ₦{stock.price.toLocaleString()}
                                <span className="text-black text-sm font-normal"> /per slot</span>
                            </p>
                            <div className="w-full border-b-2 border-gray-300 my-3"></div>
                            <p>
                                Available slot <span className="text-customRed font-bold">{stock.slotsOut}</span> out of{" "}
                                <span className="font-bold">{stock.slotsAvailable}</span>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-customRed text-white py-4 px-2 rounded-lg w-full hover:bg-customRed">
                                Book Now
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-6">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2"
                    >
                        <IoChevronBackOutline size={20} />
                    </button>
                    {[...Array(Math.ceil(filteredStocks.length / itemsPerPage)).keys()].map((page) => (
                        <button
                            key={page + 1}
                            onClick={() => handlePageChange(page + 1)}
                            className={`py-2 px-4 text-xl font-medium ${
                                currentPage === page + 1 ? "bg-customRed text-white rounded-[50%]" : ""
                            }`}
                        >
                            {page + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === Math.ceil(filteredStocks.length / itemsPerPage)}
                        className="p-2"
                    >
                        <IoChevronForward size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StocksCard;
