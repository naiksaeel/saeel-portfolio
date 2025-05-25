// components
import ContactSection from "@/components/contactAndInfo/contactSection";
import InfoSection from "@/components/contactAndInfo/infoSection";
import SectionContainer from "@/components/ui/sectionContainer";

const ContactAndInfoSection = () => {
  return (
    <SectionContainer>
      <section className="text-white font-sans">
        <div className="px-8 md:px-12 py-16 min-h-96 max-w-screen-sm md:max-w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <ContactSection />

            {/* Quote + Stats */}
            <InfoSection />
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default ContactAndInfoSection;
