import { Calendar, User2, Globe, Github } from 'lucide-react';

interface Props {
  date: string;
  author: string;
  website?: string;
  github?: string;
}

export default function PostData(props: Props) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <Calendar />
        <span>{props.date}</span>
      </div>

      <div className='flex items-center gap-2'>
        <User2 />
        <span>{props.author}</span>
      </div>

      <div className='flex items-center gap-4'>
        {props.website && (
          <a title='Web of this project' href={props.website} target='_blank'>
            <Globe />
          </a>
        )}
        {props.github && (
          <a
            title='Source Code of this project'
            href={props.github}
            target='_blank'
          >
            <Github />
          </a>
        )}
      </div>
    </div>
  );
}
