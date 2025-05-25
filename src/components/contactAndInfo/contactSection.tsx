import { profileData, contactSection } from "@/data/myInfo";

const ContactSection = () => {
  const { emailId } = profileData;

  const { heading, paragraph } = contactSection;

  return (
    <div>
      <p className="text-lg tracking-widest text-gray-400 my-1">— Contact</p>
      <h2 className="text-2xl font-semibold mb-6">{heading}</h2>
      <p className="text-gray-400 mb-7">{paragraph}</p>

      <a
        href={`mailto:${emailId}`}
        className="text-secondary font-semibold hover:underline"
      >
        {emailId}
      </a>
    </div>
  );
};

export default ContactSection;
