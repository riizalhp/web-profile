import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import Image from 'next/image';

const reviews = [
  {
    name: 'Theresia Tatik Pujiastuti',
    username: 'RS PANTI RAPIH',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=pJub28QAAAAJ&citpid=2',
  },
  {
    name: 'Fieryal Nafila',
    username: 'PT PINDAD',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://scontent-cgk2-2.cdninstagram.com/v/t51.2885-19/394773036_1215054696564108_2650932998415715501_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-cgk2-2.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2QHmjPWvlwZ28WphwIjzqJirLOaVSCbp2wJxLgw-shbFG3Of_gUsCX5vfa7y8Dl0lLs&_nc_ohc=ZlLoZeVmpL4Q7kNvwEl2bur&_nc_gid=tI2XySWrh1Y78EnYctvBRQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfSElERx9W96ZQLgiU668L0L6yZOqVObt8G8onHjxOhNWA&oe=688D4C28&_nc_sid=7a9f4b://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james',
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
