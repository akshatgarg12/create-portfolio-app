import { ContactType } from "@/pages";
import Link from "next/link";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const Contact = ({ contact }: { contact: ContactType }) => {
  return (
    <div className="flex flex-col justify-between rounded-lg text-text p-1 space-y-2 md:flex-row">
      <div className="flex flex-col items-center min-w-[30%] my-auto">
        <TbBrandGithub size={50} />
        <Link target="_blank" href={contact.github_url}>
          Github/{contact.github_username}
        </Link>
      </div>
      <div className="flex flex-col items-center min-w-[30%] my-auto">
        <TbMail size={50} />
        <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
      </div>

      <div className="flex flex-col items-center min-w-[30%] my-auto">
        <TbBrandLinkedin size={50} />
        <Link target="_blank" href={contact.linkedin_url}>
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Contact;
