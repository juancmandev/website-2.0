export const generateStaticParams = () => {
  return [{ lang: 'en' }, { lang: 'es' }];
};

const About = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <h1>About</h1>
    </main>
  );
};

export default About;
