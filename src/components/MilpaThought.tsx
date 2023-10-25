import { MilpaThoughtProps } from '@/interfaces';
import { marked } from 'marked';

export default function MilpaThought(props: MilpaThoughtProps) {
  const renderer = new marked.Renderer();
  marked.setOptions({
    gfm: true,
    breaks: true,
    renderer,
  });
  const renderContent = (md: string) => marked.parse(md);
  const parseContent = renderContent(props.content);

  return (
    <article className='prose prose-invert border px-4 py-2 rounded-sm bg-dark2'>
      <header className='mb-2'>
        <span className='font-light text-sm'>
          {new Date(props.created_at).toLocaleDateString()}{' '}
          {new Date(props.created_at).toLocaleTimeString()}
        </span>
        <div>
          {props.tags ? (
            props.tags.map((tag) => (
              <span className='text-sm' key={tag}>
                #{tag}{' '}
              </span>
            ))
          ) : (
            <span className='text-sm'>#random</span>
          )}
        </div>
      </header>
      <main dangerouslySetInnerHTML={{ __html: parseContent }} />
    </article>
  );
}
