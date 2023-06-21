import { ContactType } from "@/pages";
import Link from "next/link";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

const Contact = ({ contact }: { contact: ContactType }) => {
  return (
    <div className="flex flex-row justify-center text-text p-1 space-x-10">
      <div className="rounded-full bg-background p-4 hover:border hover:border-border">
        <Link target="_blank" href={contact.github_url}>
          <FiGithub size={20} />
        </Link>
      </div>
      <div className="rounded-full bg-background p-4 hover:border hover:border-border">
        <Link target="_blank" href={`mailto:${contact.email}`}>
          <FiMail size={20} />
        </Link>
      </div>
      <div className="rounded-full bg-background p-4 hover:border hover:border-border">
        <Link target="_blank" href={contact.linkedin_url}>
          <FiLinkedin size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
