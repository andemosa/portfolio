import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const [formData, setFormData] = useState({
    error: "",
    loading: false,
    submitted: false,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // const formData = new FormData(formRef.current);
    // const data = Object.fromEntries(formData);

    setFormData({
      error: "",
      loading: true,
      submitted: false,
    });
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_API_KEY ?? ""
      );
      setFormData({
        error: "",
        loading: false,
        submitted: true,
      });
    } catch (error: any) {
      setFormData({
        error: error.message ?? "An error occurred",
        loading: false,
        submitted: false,
      });
    }
  };

  const { error, loading, submitted } = formData;

  return (
    <form
      ref={formRef}
      className="max-w-lg flex flex-col gap-4 w-full mt-4"
      onSubmit={handleContact}
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-black-700 dark:text-white-700"
        >
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="text-gray-900 border text-sm rounded-lg w-full p-2.5 dark:bg-gray-900 dark:text-white-900"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-black-700 dark:text-white-700"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="text-gray-900 border text-sm rounded-lg w-full p-2.5 dark:bg-gray-900 dark:text-white-900"
          placeholder="name@example.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-black-700 dark:text-white-700"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="text-gray-900 border text-sm rounded-lg w-full p-2.5 dark:bg-gray-900 dark:text-white-900"
          placeholder="Let me know how I can help you"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-black-700 dark:text-white-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="text-gray-900 border text-sm rounded-lg w-full p-2.5 dark:bg-gray-900 dark:text-white-900 resize-none"
          placeholder="Leave a comment..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white-900 bg-blue-900 transform hover:scale-y-105 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 dark:bg-blue-900 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        disabled={loading || submitted}
      >
        {loading ? (
          <div role="status" className="flex justify-center items-center">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-white-900 animate-spin dark:text-white-700 fill-blue-700"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Submit"
        )}
      </button>
      {error && (
        <p className="mt-2 font-semibold text-center text-red-600 dark:text-red-500">
          {error}
        </p>
      )}
      {submitted && (
        <p className="mt-2 font-semibold text-center text-blue-900 dark:text-blue-700">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};
