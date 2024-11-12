import Image from "next/image";
export default function HomeMenuTitle({subHeader, Header, subSubHeader}) {
  return (
    <div className="grid grid-cols-3 pt-6">
      <div className="">
        <Image
          src={"/salad1.png"}
          width={200}
          height={100}
          alt={"Salad"}
        />
      </div>
      <div className="text-center pt-12">
        <h3 className="text-2xl text-gray-500 uppercase font-semibold">
          {subHeader}
        </h3>
        <h2 className="text-5xl text-primary  italic font-extrabold mt-2">
          {Header}
          
        </h2>
        <h4 className="text-gray-500 text-lg mt-3">{subSubHeader}</h4>
      </div>
      <div className="flex justify-end">
        {" "}
        <Image
          src={"/Pasta2.png"}
          width={200}
          height={100}
          alt={"Salad"}
        />
      </div>
    </div>
  );
}
