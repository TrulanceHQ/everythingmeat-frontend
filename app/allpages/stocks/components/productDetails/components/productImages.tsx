import Image from "next/image";
import { MdOutlineZoomOutMap } from "react-icons/md";

interface ProductImagesProps {
  selectedImage: string;
  fade: boolean;
  handleImageChange: (image: string) => void;
  handleZoomClick: () => void;
  product: { images: string[] };
}
const ProductImages: React.FC<ProductImagesProps> = ({ selectedImage, fade, handleImageChange, handleZoomClick, product }) => {
  return (
    <div className="w-full lg:w-[40%] flex lg:flex-col flex-row items-center md:px-5 lg:px-0">
      <div className="relative w-full max-w-lg aspect-square lg:mt-0 md:mt-5 lg:pl-0 md:pl-5">
        <Image
          src={selectedImage}
          alt="Selected Product"
          width={500}
          height={500}
          className={`object-cover rounded-md transition-opacity xl:max-w-xl lg:max-w-sm md:max-w-md max-w-[300] duration-500 ml-5 ${fade ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Zoom Icon */}
        <MdOutlineZoomOutMap
          size={30}
          className="absolute top-8 xl:right-8 lg:right-1 md:right-14 right-10 text-black bg-white rounded-full p-1 cursor-pointer shadow-md md:w-[30] md:h-[30] w-[20] h-[20]"
          onClick={handleZoomClick}
        />
      </div>

      {/* Bottom Thumbnails */}
      <div className="lg:mt-5 lg:mb-0 md:mb-[50] mb-[40] flex lg:flex-row flex-col gap-2 xl:ml-8 lg:ml-12 md:mr-0 mr-5">
        {product.images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageChange(image)}
            className={`cursor-pointer rounded-md`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={117}
              height={117}
              className="object-cover rounded-md lg:max-w-[90] xl:max-w-none md:max-w-[100] max-w-[45]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
