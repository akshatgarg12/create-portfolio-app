import { ContactType } from "@/pages";
import Link from "next/link";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const Contact = ({contact} : {contact : ContactType}) => {
    return (
        <div className="flex flex-col justify-between rounded-lg text-text p-1 space-y-2 md:flex-row">
           <div className="flex flex-col items-center my-auto">
              <TbBrandGithub size={50} />
              <Link target="_blank" href={contact.github_url}>Github/{contact.github_username}</Link>
            </div>
            <div className="flex flex-col items-center my-auto">
              <TbMail size={50} />
              <Link href='#'>{contact.email}</Link>
            </div>
  
            <div className="flex flex-col items-center my-auto">
              <TbBrandLinkedin size={50} />
              <Link target="_blank" href={contact.linkedin_url}>LinkedIn</Link>
            </div>
          </div>
    );
}
 
export default Contact;