// data
import { profileData, contactSection } from "@/data/myInfo";

// animations
import { FadeUp } from "@/components/animation";

const ContactSection = () => {
  const { emailId } = profileData;

  const { heading, paragraph } = contactSection;

  return (
    <div>
      <FadeUp>
        <p className="text-lg tracking-widest text-gray-400 my-1">— Contact</p>
      </FadeUp>
      <FadeUp>
        <h2 className="text-2xl font-semibold mb-6">{heading}</h2>
      </FadeUp>

      <FadeUp>
        <p className="text-gray-400 mb-7">{paragraph}</p>
      </FadeUp>

      {emailId && (
        <FadeUp>
          <a
            href={`mailto:${emailId}`}
            className="text-secondary font-semibold hover:underline"
          >
            {emailId}
          </a>
        </FadeUp>
      )}
    </div>
  );
};

export default ContactSection;
