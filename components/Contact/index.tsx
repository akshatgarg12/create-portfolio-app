import Link from "next/link";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const Contact = () => {
    return (
        <div className="flex flex-col justify-between rounded-lg text-text p-6 space-y-1.5 md:flex-row">
            <div className="flex flex-row items-center my-auto space-x-2">
              <TbMail size={50} />
              <p>akshatarungarg78@gmail.com</p>
            </div>
            <div className="flex flex-row items-center my-auto space-x-2">
              <TbBrandGithub size={50} />
              <Link target="_blank" href="https://github.com/akshatgarg12">Github/akshatgarg12</Link>
            </div>
            <div className="flex flex-row items-center my-auto space-x-2">
              <TbBrandLinkedin size={50} />
              <Link target="_blank" href="https://www.linkedin.com/in/akshat-garg-ba1ab0183/">LinkedIn/akshatgarg</Link>
            </div>
          </div>
    );
}
 
export default Contact;