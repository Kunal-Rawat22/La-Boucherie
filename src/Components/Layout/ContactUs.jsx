import ContactInfo from "../ContactUsPage/ContactInfo";
import Suggestion from "../ContactUsPage/Suggestion";


export default function ContactUs() {
  return (
    <div className="flex justify-between">
      <ContactInfo/>
      <div className="w-1/3 px-5 py-2">
       <Suggestion/>
      </div>
    </div>
  );
}
