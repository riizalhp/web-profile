'use client';

export default function ConnectSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/fatihaeros",
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H5v7h3v-7zm-1-2h1a1 1 0 0 0-1-1v1zm10 2h-2.5c-1.93 0-3.5 1.57-3.5 3.5V16h3v-3.5a.5.5 0 0 1 .5-.5H17v4h3v-7a2 2 0 0 0-2-2z"/>
        </svg>
      )
    },
    {
      name: "X Twitter",
      href: "https://twitter.com/fatihaeros",
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Telegram",
      href: "https://t.me/fatihaeros",
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.57c-.28 1.13-1.04 1.4-1.74.88L14.25 16l-2.91 2.78c-.33.33-.61.61-1.02.61z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com/fatihaeros",
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path clipRule="evenodd" d="M12.315 2c-2.43 0-2.784.011-3.808.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.465 6.05C2.218 6.684 2.05 7.41 2.001 8.474c-.049 1.024-.06 1.379-.06 3.808s.011 2.784.06 3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772c.67.67 1.417.925 2.427 1.153 1.024.049 1.379.06 3.808.06s2.784-.011 3.808-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153c.67-.67.925-1.417 1.153-2.427.049-1.024.06-1.379.06-3.808s-.011-2.784-.06-3.808a5.72 5.72 0 0 0-.465-2.427A4.902 4.902 0 0 0 19.95 3.616a4.902 4.902 0 0 0-1.772-1.153C17.545 2.218 16.819 2.05 15.755 2.001 14.731 1.989 14.385 2 11.955 2h.36zM12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" fillRule="evenodd"/>
        </svg>
      )
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:fatihaerosperdana@gmail.com?subject=Let\'s Work Together!&body=Hi Fatiha,%0D%0A%0D%0AI would love to discuss a potential project with you.%0D%0A%0D%0ABest regards';
  };

  return (
    <div className="card md:col-span-3 lg:col-span-1">
      <h2 className="text-xl font-semibold mb-4">Connect</h2>
      
      <div className="space-y-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            className="social-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect with Fatiha on ${link.name}`}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      
      <div className="border-t border-gray-700 mt-6 pt-6">
        <p className="text-sm text-gray-400 mb-2">Let's Work Together!</p>
        <button
          onClick={handleEmailClick}
          className="social-link w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
          aria-label="Send email to Fatiha Eros Perdana"
        >
          <span className="material-icons">send</span>
          <span>Send Email → fatihaerosperdana@gmail.com</span>
        </button>
      </div>
    </div>
  );
}