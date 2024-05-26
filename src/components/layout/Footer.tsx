import { SiGmail, SiWhatsapp } from "react-icons/si";
import Tooltip from "../Tooltip";
import UnstyledLink from "../links/UnstyledLink";

const Footer = () => {
  return (
    <footer className="layout mt-14 xl:mt-20 pt-4 pb-6 text-sm sm:text-base border-slate-200 mx-auto">
      <main className="flex flex-col items-center border-t pt-6 dark:border-gray-600">
        <p className="mt-8 font-medium text-gray-600 dark:text-gray-300">
          Reach me out
        </p>
        <div className="mt-2 flex space-x-4">
          <div className="flex items-center gap-2 justify-center">
            <Tooltip text="Email: deasywahyuni1@gmail.com">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                <SiGmail />
              </button>
            </Tooltip>
            <Tooltip text="Contact Person: 082390346662">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                <SiWhatsapp />
              </button>
            </Tooltip>
          </div>
        </div>
        <p className="mt-8 text-sm dark:text-gray-200">
          © 2024 Deasy Wahyuni •{" "}
          <UnstyledLink href="https://forms.gle/Vd6S6DiKs8jfi9cr8">
            Got any feedback?
          </UnstyledLink>
        </p>
      </main>
    </footer>
  );
};

export default Footer;
