'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import sendEmail from '@/services/sendEmail';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: async ({ name, email, message }) => {
      try {
        await sendEmail({ name, email, message });
        formik.resetForm();

        alert('Email sent successfully!');
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <div className='max-w-[400px] mx-auto'>
      <div className='mb-[40px]'>
        <h1 className='text-3xl font-bold'>Contact</h1>
        <p className='mt-[8px]'>
          You can send me an email if you want to work together, or just to say
          hi!
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[32px]'>
        <div className='flex flex-col sm:flex-row gap-[16px]'>
          <section className='flex flex-col gap-[8px]'>
            <label className='text-xl' htmlFor='name'>
              Your Name *
            </label>
            <input
              id='name'
              type='text'
              required
              autoComplete='off'
              value={formik.values.name}
              onChange={formik.handleChange}
              className='w-full text-lg p-[8px] bg-dark1 text-white1 border-[2px] rounded-[4px] focus:border-primary focus:outline-none border-white1'
            />
          </section>
          <section className='flex flex-col gap-[8px]'>
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
              className='w-full text-lg p-[8px] bg-dark1 text-white1 border-[2px] rounded-[4px] focus:border-primary focus:outline-none border-white1'
            />
          </section>
        </div>
        <section className='flex flex-col gap-[8px]'>
          <label className='text-xl' htmlFor='message'>
            Your Message *
          </label>
          <textarea
            id='message'
            rows={3}
            required
            value={formik.values.message}
            onChange={formik.handleChange}
            autoComplete='off'
            className='w-full text-lg resize-none p-[8px] bg-dark1 text-white1 border-[2px] rounded-[4px] focus:border-primary focus:outline-none border-white12'
          />
        </section>
        <section className='flex justify-end'>
          <button
            type='submit'
            className='text-lg bg-primary px-[12px] py-[8px] rounded-[4px]'>
            Send
          </button>
        </section>
      </form>

      <section className='flex flex-col gap-[8px]'>
        <h2 className='text-3xl font-bold mt-[40px]'>My CV</h2>
        <p className='mt-[8px]'>Check my CV or download it</p>
        <a
          href='/docs/Juan_Manzanero.pdf'
          target='_blank'
          className='w-max text-lg bg-primary px-[12px] py-[8px] mt-[20px] rounded-[4px] self-end'>
          Open CV
        </a>
      </section>
    </div>
  );
};

export default Contact;
