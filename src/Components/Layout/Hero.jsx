import Image from "next/image";
import Right from "../Icons/Right";
export default function Hero() {
  return (
    <div className="hero">
      <div className="py-24">
        <h1 className="text-5xl font-bold ">
          Everything <br/> is better <br/> with a{" "}
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="text-lg font-medium text-gray-500 my-6">
          Pizza is the missing piece that makes everyday complete, a simple yet
          delicous joy in life !!{" "}
        </p>
        <div className="flex gap-5">
          <button className="bg-primary p-2 text-lg font-semibold text-white rounded-full px-6 flex items-center uppercase">
            Order Now &nbsp; <Right />
          </button>
          <button className="p-2 text-lg font-semibold rounded-full px-6 border border-primary flex text-gray-600">
            Learn More &nbsp; <Right />
          </button>
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={"/pizza.png"}
          alt={"Pizza"}
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
    </div>
  );
}
