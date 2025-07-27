'use client';

export default function ConnectSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rizal-hanifa-pratama/",
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H5v7h3v-7zm-1-2h1a1 1 0 0 0-1-1v1zm10 2h-2.5c-1.93 0-3.5 1.57-3.5 3.5V16h3v-3.5a.5.5 0 0 1 .5-.5H17v4h3v-7a2 2 0 0 0-2-2z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6289667912404",
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@riizalhp",
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/riizalhp",
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path clipRule="evenodd" d="M12.315 2c-2.43 0-2.784.011-3.808.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.465 6.05C2.218 6.684 2.05 7.41 2.001 8.474c-.049 1.024-.06 1.379-.06 3.808s.011 2.784.06 3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772c.67.67 1.417.925 2.427 1.153 1.024.049 1.379.06 3.808.06s2.784-.011 3.808-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153c.67-.67.925-1.417 1.153-2.427.049-1.024.06-1.379.06-3.808s-.011-2.784-.06-3.808a5.72 5.72 0 0 0-.465-2.427A4.902 4.902 0 0 0 19.95 3.616a4.902 4.902 0 0 0-1.772-1.153C17.545 2.218 16.819 2.05 15.755 2.001 14.731 1.989 14.385 2 11.955 2h.36zM12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" fillRule="evenodd"/>
        </svg>
      )
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:rizalhp12345@gmail.com?subject=Let\'s Work Together!&body=Hi Rizal,%0D%0A%0D%0AI would love to discuss a potential project with you.%0D%0A%0D%0ABest regards';
  };

  return (
    <section className="scroll-animate">
      <div className="card">
        <h2 className="text-xl font-semibold mb-4 gradient-text">Connect</h2>
        
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="social-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with Rizal on ${link.name}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        
        <div className="border-t border-purple-500/20 mt-6 pt-6">
          <p className="text-sm text-gray-400 mb-2">Let's Work Together!</p>
          <button
            onClick={handleEmailClick}
            className="social-link w-full text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
            aria-label="Send email to Rizal Hanifa Pratama"
          >
            <span className="material-icons">handshake</span>
            <span>Send Email → rizalhp12345@gmail.com</span>
          </button>
        </div>
      </div>
    </section>
  );
}