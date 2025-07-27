import { Linkedin, Instagram, Handshake, MessageSquare, Share2 } from 'lucide-react';

export default function ConnectCard() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/rizal-hanifa-pratama/", icon: Linkedin },
    { name: "WhatsApp", href: "https://wa.me/6289667912404", icon: MessageSquare },
    { name: "TikTok", href: "https://www.tiktok.com/@riizalhp", icon: Share2 }, // Using Share2 icon as placeholder
    { name: "Instagram", href: "https://www.instagram.com/riizalhp", icon: Instagram }
  ];

  return (
    <div className="card scroll-animate">
      <h3 className="text-xl font-bold mb-6 text-white">Connect</h3>
      <div className="space-y-4">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link cursor-hover"
              aria-label={`Connect with Rizal on ${link.name}`}
            >
              <Icon className="w-6 h-6" />
              <span>{link.name}</span>
            </a>
          );
        })}
      </div>
      
      <div className="border-t border-white/20 mt-6 pt-6">
        <p className="text-sm text-white/50 mb-2">Let&apos;s Work Together!</p>
        <a
          href="mailto:rizalhp12345@gmail.com?subject=Let's Work Together!&body=Hi Rizal,%0D%0A%0D%0AI would love to discuss a potential project with you.%0D%0A%0D%0ABest regards"
          className="social-link w-full text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
          aria-label="Send email to Rizal Hanifa Pratama"
        >
          <Handshake className="w-6 h-6" />
          <span>Send Email → rizalhp12345@gmail.com</span>
        </a>
      </div>
    </div>
  );
}