import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useTheme } from 'next-themes';

import app from '../../../config';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

const db = getFirestore(app);

const Message = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    let result;

    try {
      setLoading(true);

      result = await setDoc(doc(collection(db, 'messages')), data, {
        merge: true
      });

      setLoading(false);
      toast.success('Message successfully sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: currentTheme === 'dark' ? 'dark' : 'light'
      });

      resetField('name');
      resetField('email');
      resetField('message');
    } catch (e) {
      setLoading(false);
      toast.error('There is an error!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: currentTheme === 'dark' ? 'dark' : 'light'
      });

      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block mb-2 text-xs font-medium dark:text-white text-black">
        Full Name
      </label>
      <input
        {...register('name', { required: 'Name is required' })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500  block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 mb-2"
        required
      />
      {errors.name && (
        <p className="text-red-500 m-0 text-xs">{errors.name.message}</p>
      )}

      <label className="block mb-2 text-xs font-medium dark:text-white text-black mt-5">
        Email
      </label>
      <input
        {...register('email', { required: 'Email is required' })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500  block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 mb-2"
        required
        type="email"
      />
      {errors.email && (
        <p className="text-red-500 m-0 text-xs">{errors.email.message}</p>
      )}

      <label className="block mb-2 text-xs font-medium dark:text-white text-black mt-5">
        Message
      </label>
      <textarea
        {...register('message', { required: 'Message is required' })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500  block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 mb-2"
        required
        rows={5}
      />
      {errors.message && (
        <p className="text-red-500 m-0 text-xs">{errors.message.message}</p>
      )}

      {loading ? (
        <button
          className="mt-4 md:mt-10 w-full text-xs flex justify-center md:text-lg bg-slate-300 py-2 rounded-md text-white dark:text-black cursor-pointer"
          disabled
        >
          ...loading
        </button>
      ) : (
        <input
          type="submit"
          value="Send"
          className="mt-4 md:mt-10 w-full text-xs flex justify-center md:text-lg bg-sky-600  dark:bg-green-300 py-2 rounded-md text-white dark:text-black cursor-pointer"
        />
      )}
    </form>
  );
};

export default Message;
