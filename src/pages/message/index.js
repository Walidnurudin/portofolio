import { useForm } from 'react-hook-form';
import sendMessage from '/src/actions/sendMessage';
import { toast } from 'react-toastify';
import { useTheme } from 'next-themes';

const Message = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

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
    const { result, error } = await sendMessage(data);

    if (error)
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
    else
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        for="email"
        class="block mb-2 text-xs font-medium dark:text-white text-black"
      >
        Full Name
      </label>
      <input
        {...register('name', { required: 'Name is required' })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500  block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 mb-5"
        required
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <label
        for="email"
        class="block mb-2 text-xs font-medium dark:text-white text-black"
      >
        Email
      </label>
      <input
        {...register('email', { required: 'Email is required' })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500  block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 mb-5"
        required
        type="email"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <label
        for="email"
        class="block mb-2 text-xs font-medium dark:text-white text-black"
      >
        Message
      </label>
      <textarea
        {...register('message', { required: 'Message is required' })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500  block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 mb-5"
        required
        rows={5}
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <input
        type="submit"
        value="Send"
        className="mt-4 md:mt-10 w-full text-xs flex justify-center md:text-lg bg-sky-600  dark:bg-green-300 py-2 rounded-md text-white dark:text-black cursor-pointer"
      />
    </form>
  );
};

export default Message;
