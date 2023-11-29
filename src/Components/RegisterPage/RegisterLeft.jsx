export default function RegisterLeft()
{
    return (
      <div className=" w-1/3 flex flex-col pr-8 pt-6">
        <div>
          <h1 className="text-4xl font-medium">
            Welcome to <br />
            La Boucherie
          </h1>
        </div>
        <div>
          <p className="font-medium text-sm mt-3">
            Kindly invest a minute to enter the details and proceed with your
            account registration.
          </p>
        </div>
        <div className="text-lg font-medium mt-28">
          Already a User? <span className="text-primary">Login Here</span>
        </div>
        <div className="text-xl mt-16">
          <span className="text-primary">Click here</span> to create your new
          <span className="font-semibold"> Business Account.</span>
        </div>
      </div>
    );
}