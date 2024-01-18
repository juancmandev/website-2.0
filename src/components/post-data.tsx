import { Calendar, User2, Globe, Github } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  date: string;
  author: string;
  website?: string;
  github?: string;
}

export default function PostData(props: Props) {
  return (
    <section className='flex flex-col gap-4 mb-10'>
      <div className='flex items-center gap-1'>
        <Calendar />
        <span>{props.date}</span>
      </div>

      <div className='flex items-center gap-1'>
        <User2 />
        <span>{props.author}</span>
      </div>

      <div className='flex items-center gap-6'>
        {props.website && (
          <Button asChild variant='link' className='p-0 flex gap-1'>
            <a href={props.website} target='_blank'>
              <Globe />
              <span>Website</span>
            </a>
          </Button>
        )}
        {props.github && (
          <Button asChild variant='link' className='p-0 flex gap-1'>
            <a href={props.github} target='_blank'>
              <Github />
              <span>GitHub</span>
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}
