import { useState } from "react";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";
import { profileData, contactSection } from "@/data/myInfo";
import { FadeUp } from "@/animations";

const ContactSection = () => {
  const { emailId } = profileData;
  const { heading, paragraph } = contactSection;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-hide success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div>
        <FadeUp>
          <p className="text-lg tracking-widest text-gray-400 my-1">— Contact</p>
        </FadeUp>
        <FadeUp delay={100}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
        </FadeUp>
        <FadeUp delay={150}>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">{paragraph}</p>
        </FadeUp>
        {emailId && (
          <FadeUp delay={200}>
            <span className="text-gray-400 text-sm">Direct Email: </span>
            <a
              href={`mailto:${emailId}`}
              className="text-secondary font-semibold hover:underline transition-all duration-300"
            >
              {emailId}
            </a>
          </FadeUp>
        )}
      </div>

      {/* Interactive Contact Form */}
      {contactSection.showContactForm && (
        <FadeUp delay={250}>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
            {isSubmitted && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm animate-fade-in">
                <FaCheckCircle className="flex-shrink-0" size={18} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Saeel Naik"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300 text-sm"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300 text-sm"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi, I'd love to chat about a new project idea..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-all duration-300 text-sm resize-none"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              className="w-full flex items-center justify-center gap-2 py-3 bg-secondary hover:bg-yellow-400 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed text-primary font-bold rounded-lg transition-all duration-300 shadow-md shadow-secondary/10 hover:shadow-secondary/25"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" size={16} />
                  <span>Sending Message...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </FadeUp>
      )}
    </div>
  );
};

export default ContactSection;
