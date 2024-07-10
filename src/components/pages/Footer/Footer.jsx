import AppStore from "../../../assets/Icons/AppStore";
import Logo from "../../../assets/Icons/Logo";
import PlayStore from "../../../assets/Icons/PlayStore";

const Footer = () => {
  return (
    <div className="bg-black px-2 py-5 md:px-5 sm:px-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
      <div className=" p-5 w-full sm:w-1/2">
        <div>
          <Logo />
        </div>
        <div className="text-white flex flex-col items-start gap-4 mt-4">
          <div className="flex flex-row gap-6">
            <p>Download Now</p>
            <p>License</p>
          </div>
          <div className="flex flex-row gap-6">
            <p>About</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>News</p>
          </div>
          <div className="flex flex-row gap-6">
            <p>Help</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="text-white p-5 flex flex-col items-start gap-3 w-full sm:w-auto">
        <p>Get the App</p>
        <AppStore />
        <PlayStore />
      </div>
    </div>
  );
};

export default Footer;
