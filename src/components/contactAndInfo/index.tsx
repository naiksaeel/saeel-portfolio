import ContactSection from "@/components/contactAndInfo/contactSection";
import InfoSection from "@/components/contactAndInfo/infoSection";

const ContactAndInfoSection = () => {
  return (
    <section className="bg-darkbg text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 min-h-96">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <ContactSection />

          {/* Quote + Stats */}
          <InfoSection />
        </div>
      </div>
    </section>
  );
};

export default ContactAndInfoSection;
