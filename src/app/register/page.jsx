import RegisterForm from "@/Components/RegisterPage/Form";
import RegisterBtn from "@/Components/RegisterPage/RegisterBtn";
import RegisterLeft from "@/Components/RegisterPage/RegisterLeft";
import RegisterPolicy from "@/Components/RegisterPage/RegisterPolicy";
export default function RegisterPage() {
  return (
    <>
      <div className="flex mt-12">
        <RegisterLeft/>
        <div className="w-2/3 px-4">
          <div className="border py-6 px-6 items-center justify-center register">
            <div>
              <h3 className="text-3xl font-medium">Register Here</h3>
            </div>
            <RegisterForm />
            <RegisterPolicy/>
            <RegisterBtn/>
          </div>
        </div>
      </div>
    </>
  );
}
