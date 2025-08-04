import { Linkedin, Instagram, Handshake, MessageSquare, Share2 } from 'lucide-react';

export default function ConnectCard() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/rizal-hanifa-pratama/", icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.325-.028-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.159V8.928h3.413v1.56h.045c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.27 2.378 4.27 5.461v6.253zM7.003 6.717a1.701 1.701 0 01-1.702-1.702c0-.949.75-1.701 1.702-1.701.951 0 1.701.752 1.701 1.701 0 .95-.75 1.702-1.701 1.702zM8.704 20.452H5.35V8.928h3.354v11.524zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.209 0 22.225 0z"/></svg>
    ) },
    { name: "WhatsApp", href: "https://wa.me/6289667912404", icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24" className={className}>
<path d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 13.8 2.5007813 15.5 3.3007812 17 L 2 22 L 7.1992188 20.800781 C 8.6992188 21.600781 10.3 22 12 22 C 17.5 22 22 17.5 22 12 C 22 9.3 20.999609 6.8003906 19.099609 4.9003906 C 17.199609 3.0003906 14.7 2 12 2 z M 12 4 C 14.1 4 16.099219 4.8007813 17.699219 6.3007812 C 19.199219 7.9007813 20 9.9 20 12 C 20 16.4 16.4 20 12 20 C 10.7 20 9.2992188 19.7 8.1992188 19 L 7.5 18.599609 L 6.8007812 18.800781 L 4.8007812 19.300781 L 5.3007812 17.5 L 5.5 16.699219 L 5.0996094 16 C 4.3996094 14.8 4 13.4 4 12 C 4 7.6 7.6 4 12 4 z M 8.5 7.4003906 C 8.3 7.4003906 8.0007812 7.3992188 7.8007812 7.6992188 C 7.5007813 7.9992188 6.9003906 8.6007813 6.9003906 9.8007812 C 6.9003906 11.000781 7.8003906 12.200391 7.9003906 12.400391 C 8.1003906 12.600391 9.6992188 15.199219 12.199219 16.199219 C 14.299219 16.999219 14.699219 16.800781 15.199219 16.800781 C 15.699219 16.700781 16.700391 16.199609 16.900391 15.599609 C 17.100391 14.999609 17.099219 14.499219 17.199219 14.199219 C 17.099219 14.099219 16.999219 14.000391 16.699219 13.900391 C 16.499219 13.800391 15.3 13.199609 15 13.099609 C 14.7 12.999609 14.600391 12.899219 14.400391 13.199219 C 14.200391 13.499219 13.699609 13.999219 13.599609 14.199219 C 13.499609 14.399219 13.399609 14.400781 13.099609 14.300781 C 12.899609 14.200781 12.099609 13.999609 11.099609 13.099609 C 10.299609 12.499609 9.7992187 11.700391 9.6992188 11.400391 C 9.4992187 11.200391 9.7007813 11.000391 9.8007812 10.900391 L 10.199219 10.5 C 10.299219 10.4 10.300391 10.199609 10.400391 10.099609 C 10.500391 9.9996094 10.500391 9.8992188 10.400391 9.6992188 C 10.300391 9.4992187 9.7996094 8.3007812 9.5996094 7.8007812 C 9.3996094 7.4007812 9.2 7.4003906 9 7.4003906 L 8.5 7.4003906 z"></path>
</svg>
    ) },
    { name: "TikTok", href: "https://www.tiktok.com/@riizalhp", icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24" className={className}>
<path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z"></path>
</svg>
    ) },
    { name: "Instagram", href: "https://www.instagram.com/riizalhp", icon: ({ className }: { className?: string }) => (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className={className}>
    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
</svg>
    ) },
  ];

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">Connect</h2>
        <span className="text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20">
          Let's Connect
        </span>
      </div>
      <div className="space-y-4">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link cursor-hover py-2 px-3 sm:py-3 sm:px-4"
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
          className="social-link w-full text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg mb-4"
          aria-label="Send email to Rizal Hanifa Pratama"
        >
          <Handshake className="w-6 h-6" />
          <span className="text-sm">Send Email → rizalhp12345@gmail.com</span>
        </a>
      </div>
    </div>
  );
}