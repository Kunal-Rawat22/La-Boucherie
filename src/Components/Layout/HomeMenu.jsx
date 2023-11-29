import Image from "next/image";
import TruncateText from "../Functions/TruncatedText";

export default function HomeMenu() {
  return (
    <div className="grid grid-cols-3 gap-4 pb-8">
      <div className="flex flex-col items-center p-6 bg-gray-200 border border-gray-200 transition-all rounded-xl aspect-square justify-between hover:bg-white hover:border-primary hover:border hover:shadow-2xl hover:shadow-black/50">
        <Image
          src={"/Salad1.png"}
          alt=""
          width={150}
          height={50}
          className="aspect-square object-center"
        />
        <h4 className="text-2xl mt-6 font-medium">Pasta Salad</h4>
        <p className=" mt-4 text-base font-medium text-gray-400 text-justify">
          <TruncateText
            text={
              "Immerse your taste buds in a tantalizing ensemble of al dente rotini pasta, vibrant cherry tomatoes, crisp cucumber, red onions, and the subtle crunch of bell peppers. Drizzled with our signature red wine vinaigrette, crafted from extra-virgin olive oil, Dijon mustard, and a hint of garlic."
            }
            limit={19}
            className={" font-medium "}
          />
        </p>
        <button className="mt-6 bg-primary text-white text-xl font-medium px-8 py-2 rounded-full w-full text-center">
          Add to cart $5
        </button>
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-200 border border-gray-200 transition-all rounded-xl aspect-square justify-between hover:bg-white hover:border-primary hover:border hover:shadow-2xl hover:shadow-black/50">
        <Image
          src={"/pizza.png"}
          alt=""
          width={150}
          height={50}
          className="aspect-square object-cover"
        />
        <h4 className="text-2xl mt-6 font-medium">Pasta Salad</h4>
        <p className=" mt-4 text-base font-medium text-gray-400 text-justify">
          <TruncateText
            text={
              "Immerse your taste buds in a tantalizing ensemble of al dente rotini pasta, vibrant cherry tomatoes, crisp cucumber, red onions, and the subtle crunch of bell peppers. Drizzled with our signature red wine vinaigrette, crafted from extra-virgin olive oil, Dijon mustard, and a hint of garlic."
            }
            limit={19}
            className={" font-medium "}
          />
        </p>
        <button className="mt-6 bg-primary text-white text-xl font-medium px-8 py-2 rounded-full w-full text-center">
          Add to cart $5
        </button>
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-200 border border-gray-200 transition-all rounded-xl aspect-square justify-between hover:bg-white hover:border-primary hover:border hover:shadow-2xl hover:shadow-black/50">
        <Image
          src={"/Pasta2.png"}
          alt=""
          width={150}
          height={50}
          className="aspect-square object-cover"
        />
        <h4 className="text-2xl mt-6 font-medium">Pasta Salad</h4>
        <p className=" mt-4 text-base font-medium text-gray-400 text-justify">
          <TruncateText
            text={
              "Immerse your taste buds in a tantalizing ensemble of al dente rotini pasta, vibrant cherry tomatoes, crisp cucumber, red onions, and the subtle crunch of bell peppers. Drizzled with our signature red wine vinaigrette, crafted from extra-virgin olive oil, Dijon mustard, and a hint of garlic."
            }
            limit={19}
            className={" font-medium "}
          />
        </p>
        <button className="mt-6 bg-primary text-white text-xl font-medium px-8 py-2 rounded-full w-full text-center">
          Add to cart $5
        </button>
      </div>
    </div>
  );
}
