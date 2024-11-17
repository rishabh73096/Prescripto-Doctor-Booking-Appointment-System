import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left side */}
        <div>
          <img className="w-40 mb-5" src={assets.logo} alt="" />
          <p className="md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* center */}
        <div>
          <p className="mb-5 font-medium text-xl">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>Aboud us</li>
            <li>Contact us </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* right side */}
        <div>
          <p className="mb-5 font-medium text-xl">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li> +91 7309651657 </li>
            <li>Rishabhtiwari7306@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="my-5" />
        <p className="text-center text-gray-600 my-5">
          Copyright © 2024 Rishabh tiwari - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
