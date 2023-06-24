'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GitHubIcon, LinkedinIcon, TwitterIcon } from '@/assets/Icons';

const SOCIAL_LINKS = [
  {
    icon: <TwitterIcon />,
    href: 'https://twitter.com/juancmandev',
  },
  {
    icon: <GitHubIcon />,
    href: 'https://github.com/juancmandev',
  },
  {
    icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/in/juancmandev/',
  },
];

export default function Footer() {
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async ({ email }) => {
      setSubmitting(true);

      try {
        console.log(email);
      } catch (error) {
        alert(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <footer className='w-full py-10 px-6 md:px-15 bg-dark1'>
      <div className='max-w-[700px] mx-auto flex flex-col gap-10'>
        <section className='w-[272px] mx-auto flex flex-col md:flex-row justify-between gap-2 md:w-full md:mx-0'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl'>Newsletter</h2>
            <div>
              <p className='text-sm'>
                {`Don't miss out on my latest posts and projects!`}
              </p>
              <p className='text-sm'>{`Don't worry, I won't send you spam.`}</p>
            </div>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className='flex flex-col md:flex-row gap-2'>
            <section className='flex flex-col gap-2'>
              <label className='text-xl' htmlFor='email'>
                Your Email *
              </label>
              <input
                id='email'
                type='email'
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete='off'
                className='w-full text-lg p-2 bg-dark1 text-white1 border-2 rounded-[4px] focus:border-primary focus:outline-none border-white1'
              />
            </section>
            <button
              type='submit'
              className='outline-none text-lg md:self-end h-max bg-primary px-3 py-2 border-2 border-primary rounded-[4px] transition-colors hover:bg-primaryLight hover:border-primaryLight focus:bg-primaryLight focus:border-primaryLight active:bg-primaryDark active:border-primaryDark'>
              Subscribe
            </button>
          </form>
        </section>
        <section className='w-[272px] flex flex-col gap-2 mx-auto md:mx-0'>
          <h2 className='text-2xl'>Social Media</h2>
          <ul className='flex justify-between'>
            {SOCIAL_LINKS.map(({ icon, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className='outline-none text-primary hover:text-primaryLight focus:text-primaryLight active:text-primaryDark transition-colors'
                  target='_blank'>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}
