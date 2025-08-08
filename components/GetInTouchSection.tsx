import React from 'react';

const GetInTouchSection = () => {
  return (
    <section id="contact" className="relative flex flex-col items-center justify-center py-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Ripple 1 */}
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-20 animate-ripple-1"></div>
        {/* Ripple 2 */}
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-20 animate-ripple-2"></div>
        {/* Ripple 3 */}
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-20 animate-ripple-3"></div>
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>
        <a
          href="https://wa.me/6289667912404"
          className="btn-primary cursor-hover"
        >
          Let's Chat
        </a>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        .animate-ripple-1 {
          animation: ripple 3s infinite ease-out;
        }
        .animate-ripple-2 {
          animation: ripple 3s infinite ease-out 1s; /* Start 1s later */
        }
        .animate-ripple-3 {
          animation: ripple 3s infinite ease-out 2s; /* Start 2s later */
        }
      `}</style>
    </section>
  );
};

export default GetInTouchSection;
