import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import Image from 'next/image';

const reviews = [
  {
    name: 'Theresia Tatik Pujiastuti',
    username: 'RS PANTI RAPIH',
    body: "Rizal is a rare combination of a detail-oriented project manager and a highly skilled web developer. He kept our team organized while delivering a flawless product ahead of schedule.",
    img: 'https://s14.gifyu.com/images/bNmm8.webp',
  },
  {
    name: 'Fieryal Nafila',
    username: 'PT PINDAD',
    body: "Working with Rizal was effortless. He understands business needs, translates them into technical solutions, and makes sure everything is done on time without sacrificing quality.",
    img: 'https://s14.gifyu.com/images/bNmmg.webp',
  },
  {
    name: 'Dinda',
    username: 'Co-Founder GoTrash',
    body: "Rizal handled our project from concept to launch. His ability to manage timelines while writing clean, efficient code made the whole process stress-free for us.",
    img: 'https://s14.gifyu.com/images/bNmmj.webp',
  },
  {
    name: 'Agus Sumaryono',
    username: 'Founder Edusales',
    body: "Professional, communicative, and extremely talented. Rizal built our website exactly as envisioned and even suggested improvements that boosted our user experience.",
    img: 'https://s14.gifyu.com/images/bNmmP.webp',
  },
  {
    name: 'Irin Apriyadi',
    username: 'Maintenance Head at PT. Gemala Kempa Daya',
    body: "I’ve collaborated with Rizal on multiple projects. His project management keeps everyone aligned, and his development skills bring designs to life beautifully.",
    img: 'https://s14.gifyu.com/images/bNmq6.webp',
  },
  {
    name: 'Muhammad Iqbal Ghozy',
    username: 'Senior Fullstack Engineer',
    body: "Working with them was a great experience. The results were neat, well thought-out, and right on time.",
    img: 'https://s14.gifyu.com/images/bNm7K.webp',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <Image className='rounded-full' width={32} height={32} alt='' src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm'>{body}</blockquote>
    </figure>
  );
};

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Client Testimonials</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            What clients and collaborators say about working with me
          </p>
        </div>
        <div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl'>
          <Marquee pauseOnHover className='[--duration:20s]'>
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className='[--duration:20s]'>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
          <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
