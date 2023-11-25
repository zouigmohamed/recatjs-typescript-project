import { FurnitureProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IPropsProductCard {
  id?: string;
  product: FurnitureProduct;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductCard = ({ product}: IPropsProductCard) => {
  return (
    <div className="">
      <div className="relative h-[400px] flex flex-col text-gray-700 bg-white shadow-md w-66 rounded-xl  mx-auto p-2 border-slate-300 border-[1px] mb-5 ">
        <div className="relative h-[200px]  mx-2 overflow-hidden text-white shadow-lg rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <Image
            ImageUrl={product.imageUrl}
            Alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2 flex flex-col justify-start items-start ml-1">
          <h5 className="block mb-1 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {product.title}
          </h5>
          <p className="text-left font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {txtSlicer(product.description)}
          </p>
        </div>
        <div className="p-2">
          <div className=" flex justify-between items-center">
            <div className="flex space-x-[1px]">
              <span className="bg-red-500 inline-block h-5 w-5 rounded-full" />
              <span className="bg-indigo-500 inline-block h-5 w-5 rounded-full" />
              <span className="bg-emerald-500 inline-block h-5 w-5 rounded-full" />
              <span className="bg-orange-500 inline-block h-5 w-5 rounded-full" />
            </div>
            <div className="">
              <Image
                ImageUrl="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                Alt="Nature Scene with Barceloneta Beach"
                className="w-10 h-10 rounded-full object-center border-[2.2px] border-slate-500 p-[1px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-evenly w-full  bottom-0   items-center mx-auto flex-col lg:flex-row gap-2">
          <Button
            className="h-[40px]  lg:w-[120px] text-center flex justify-center items-center bg-indigo-500"
            onClick={() => console.log("done")}
            width="w-full"
          >
            read
          </Button>
          <Button
            className="h-[40px]  lg:w-[120px] text-center flex justify-center items-center bg-yellow-500"
            onClick={() => console.log("done")}
            width="w-full"
          >
            read
          </Button>


        </div>
      </div>
    </div>
  );
};

export default ProductCard;
