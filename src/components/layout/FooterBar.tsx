
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const socialIcons = [
  { id: 1, icon: Facebook, link: "https://www.facebook.com/raremindsgroup" },
  { id: 2, icon: Twitter, link: "https://twitter.com/minds_rare" },
  { id: 3, icon: Instagram, link: "https://www.instagram.com/rareminds_eym/" },
  { id: 4, icon: Youtube, link: "https://www.youtube.com/channel/UClkBtwJsScYxFzNoFdlifeA" },
  { id: 5, icon: Linkedin, link: "https://www.linkedin.com/company/13376601/admin/" },
];

const FooterBar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });
  const [serviceData, setServiceData] = useState<any>({});
  const [subscriberEmail, setSubscriberEmail] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const subscribeInput = useRef<HTMLInputElement>(null);

  const userType = localStorage.getItem("currentUserType");

  useEffect(() => {
    // Mock data instead of API call
    const mockServiceData = {
      serviceData: [
        { ContentSlug: "recruitment", Heading1: "Recruitment" },
        { ContentSlug: "executive-search", Heading1: "Executive Search" },
        { ContentSlug: "contract-staffing", Heading1: "Contract Staffing" },
        { ContentSlug: "talent-assessment", Heading1: "Talent Assessment" }
      ]
    };
    setServiceData(mockServiceData);
  }, [userType]);

  const submitSubscription = () => {
    if (subscriberEmail) {
      if (!/(.+)@(.+){2,}\.(.+){2,}/.test(subscriberEmail)) {
        setSuccessMessage("Enter a valid email address");
      } else {
        setSuccessMessage("Thank you for subscribing");
        if (subscribeInput.current) subscribeInput.current.value = "";
        setTimeout(() => setSuccessMessage(null), 2000);
      }
    } else {
      setSuccessMessage("Please enter an email address");
    }
  };

  return (
    <div className="bg-rareminds-dark text-white font-medium">
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-5'} gap-4 container mx-auto py-12`}>
        {/* Links Section */}
        <div>
          <h2 className="font-bold mb-4 uppercase tracking-wider text-lg">Quick Links</h2>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-red-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-red-400 transition-colors">About</a></li>
            <li><a href="/contact-us" className="hover:text-red-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Corporate Program Section */}
        <div>
          <h2 className="font-bold mb-4 uppercase tracking-wider text-lg">Corporate Program</h2>
          <ul className="space-y-3">
            <li><a onClick={() => navigate("/institutions")} className="hover:text-red-400 transition-colors cursor-pointer">Institutions Program</a></li>
            <li><a onClick={() => navigate("/government")} className="hover:text-red-400 transition-colors cursor-pointer">Government Program</a></li>
            <li><a onClick={() => navigate("/schools")} className="hover:text-red-400 transition-colors cursor-pointer">School Program</a></li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h2 className="font-bold mb-4 uppercase tracking-wider text-lg">Our Services</h2>
          <ul className="space-y-3">
            {serviceData?.serviceData?.map((ele: any) => (
              <li key={ele.ContentSlug}><a href={`/${ele.ContentSlug}`} className="hover:text-red-400 transition-colors">{ele.Heading1}</a></li>
            ))}
          </ul>
        </div>

        {/* Case Study Section */}
        <div>
          <h2 className="font-bold mb-4 uppercase tracking-wider text-lg">Case Study</h2>
          <ul className="space-y-3">
            <li><a href="/blog" className="hover:text-red-400 transition-colors">Blog</a></li>
            <li><a href="/walloffame" className="hover:text-red-400 transition-colors">Wall of Fame</a></li>
            <li><a href="/events" className="hover:text-red-400 transition-colors">Events</a></li>
          </ul>
        </div>

        {/* Newsletter Signup Section */}
        <div>
          <h2 className="font-bold mb-4 uppercase tracking-wider text-lg">Sign up to our newsletter</h2>
          <form onSubmit={(e) => { e.preventDefault(); submitSubscription(); }} className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="p-3 w-full bg-rareminds-dark/50 border border-red-400/30 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => {
                setSuccessMessage(null);
                setSubscriberEmail(e.target.value);
              }}
              ref={subscribeInput}
            />
            <button type="submit" className="p-3 w-full bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors">
              SUBSCRIBE
            </button>
          </form>
          {successMessage && (
            <p className="text-white text-center mt-4 bg-red-500/20 p-2 rounded">{successMessage}</p>
          )}
        </div>
      </div>

      {/* Social Icons */}
      <div className="container mx-auto flex justify-center space-x-4 py-4">
        {socialIcons.map((social) => {
          const Icon = social.icon;
          return (
            <a 
              key={social.id} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 hover:bg-red-600 transition-colors p-3 rounded-full"
            >
              <Icon size={20} className="text-white" />
            </a>
          );
        })}
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        <div className="container mx-auto flex justify-between items-center">
          <p>© {new Date().getFullYear()} Rareminds. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-red-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
