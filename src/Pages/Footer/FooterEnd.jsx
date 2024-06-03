import { Footer } from "flowbite-react";
// import {
//   BsDribbble,
//   BsFacebook,
//   BsGithub,
//   BsInstagram,
//   BsTwitter,
// } from "react-icons/bs";

const FooterEnd = () => {
  return (
    // <Footer container>
    //   <div className="w-full">
    //     <div className="grid w-full justify-evenly sm:flex sm:justify-between md:flex md:grid-cols-1">
    //       <div>
    //         <Footer.Brand
    //           href="https://flowbite.com"
    //           src="https://flowbite.com/docs/images/logo.svg"
    //           alt="Flowbite Logo"
    //           name="Flowbite"
    //         />
    //       </div>
    //       <div className=" grid grid-cols-3 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
    //         <div>
    //           <Footer.Title title="about" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Flowbite</Footer.Link>
    //             <Footer.Link href="#">Tailwind CSS</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Follow us" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Github</Footer.Link>
    //             <Footer.Link href="#">Discord</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Legal" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link className="w-full" href="#">
    //               License
    //             </Footer.Link>
    //             <Footer.Link className="w-full" href="#">
    //               Privacy Policy
    //             </Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //       </div>
    //     </div>
    //     <Footer.Divider />
    //     <div className="w-full sm:flex sm:items-center sm:justify-between">
    //       <Footer.Copyright href="#" by="Flowbite™" year={2022} />
    //       <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    //         <Footer.Icon href="#" icon={BsFacebook} />
    //         <Footer.Icon href="#" icon={BsInstagram} />
    //         <Footer.Icon href="#" icon={BsTwitter} />
    //         <Footer.Icon href="#" icon={BsGithub} />
    //         <Footer.Icon href="#" icon={BsDribbble} />
    //       </div>
    //     </div>
    //   </div>
    // </Footer>

    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://i.postimg.cc/GtsmszP2/logo.png"
            name="BuildiFy"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2024} />
      </div>
    </Footer>
  );
};

export default FooterEnd;
