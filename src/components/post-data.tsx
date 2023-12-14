import { DateIcon, PersonIcon, WebIcon, GitHubIcon } from '@/assets/Icons';
import { formatDate } from '@/utils/formatDate';

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
        <DateIcon size='1.5rem' />
        <span>{props.date}</span>
      </div>

      <div className='flex items-center gap-2'>
        <PersonIcon size='1.5rem' />
        <span>{props.author}</span>
      </div>

      <div className='flex items-center gap-4'>
        {props.website && (
          <a title='Web of this project' href={props.website} target='_blank'>
            <WebIcon size='1.5rem' />
          </a>
        )}
        {props.github && (
          <a
            title='Source Code of this project'
            href={props.github}
            target='_blank'
          >
            <GitHubIcon size='1.5rem' />
          </a>
        )}
      </div>
    </div>
  );
}
