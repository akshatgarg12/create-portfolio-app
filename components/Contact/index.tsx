import { ContactType } from "@/pages";
import Link from "next/link";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const Contact = ({contact} : {contact : ContactType}) => {
    return (
        <div className="flex flex-col justify-between rounded-lg text-text p-6 space-y-1.5 md:flex-row">
            <div className="flex flex-row items-center my-auto space-x-2">
              <TbMail size={50} />
              <p>{contact.email}</p>
            </div>
            <div className="flex flex-row items-center my-auto space-x-2">
              <TbBrandGithub size={50} />
              <Link target="_blank" href={contact.github_url}>Github/{contact.github_username}</Link>
            </div>
            <div className="flex flex-row items-center my-auto space-x-2">
              <TbBrandLinkedin size={50} />
              <Link target="_blank" href={contact.linkedin_url}>LinkedIn/{contact.linkedin_username}</Link>
            </div>
          </div>
    );
}
 
export default Contact;