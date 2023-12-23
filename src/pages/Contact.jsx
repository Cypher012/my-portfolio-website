import { useEffect } from "react";
import "./contact.css";
import { motion } from "framer-motion";
import { pageAnimate } from "./pages";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="visible"
      className="pt-32 pb-20 lg:px-10  dark:text-neutral-300"
    >
      <span className="dark:bg-gray-800 dark:text-neutral-400 bg-slate-300 px-3 py-2 text-sm text-neutral-700 uppercase">
        Contact
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d253105.11957300725!2d4.668231873363923!3d7.600263692083058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1698765971234!5m2!1sen!2sng"
        className="w-full h-[400px] mt-16 rounded"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <form
        action="https://formsubmit.co/ayoojoade@gmail.com"
        method="POST"
        className="w-full flex flex-col gap-y-3 mt-20"
      >
        <input
          type="text"
          name="name"
          id="name"
          required
          className="p-3 text-neutral-600"
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          id="email"
          required
          className="p-3 text-neutral-600"
          placeholder="Email"
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          className="p-3 text-neutral-600 resize-none"
        />
        <div className="mt-10">
          <button className="bg-black dark:bg-gray-300 dark:text-slate-900 text-gray-300 px-8 lg:hover:px-10 duration-300 py-4 ">
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
