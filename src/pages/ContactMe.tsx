import { useState } from "react";
import ContextTitle from "../components/ContextTitle";
import { NAVCONTACTME } from "../constants/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const handleTextChange = ({
    e,
    type,
  }: {
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>;
    type: string;
  }) => {
    setData((prev) => ({ ...prev, [type]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const { name, email, subject, content } = data;
    console.log(data);
    if (name && email && subject && content) {
      try {
        const response = axios.post(`${import.meta.env.VITE_DOMAIN}`, {
          email,
          name,
          subject,
          content,
        });
        toast.promise(response, {
          loading: "Sending...",
          success: <b>Message sent!</b>,
          error: <b>Something went wrong!</b>,
        });
      } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
  };
  return (
    <div id={NAVCONTACTME} className="flex-1 space-y-4 pb-8">
      <ContextTitle>Contact Me</ContextTitle>
      <form action="" className="space-y-3" onSubmit={handleSubmit}>
        <div className="space-y-3 lg:flex lg:space-y-0 lg:space-x-3">
          <div className="flex flex-1 flex-col space-y-2">
            <label htmlFor="" className="text-white">
              Name:
            </label>
            <input
              type="text"
              placeholder="ex: Jose Dela Cruz"
              className="text-white bg-transparent p-3 rounded-md border border-border outline-none placeholder:text-white/50"
              value={data.name}
              onChange={(userInput) =>
                handleTextChange({ e: userInput, type: "name" })
              }
            />
          </div>

          <div className="flex flex-1 flex-col space-y-2">
            <label htmlFor="" className="text-white">
              Email:
            </label>
            <input
              type="email"
              placeholder="ex: Jose@gmail.com"
              className="text-white bg-transparent p-3 rounded-md border border-border outline-none placeholder:text-white/50"
              value={data.email}
              onChange={(userInput) =>
                handleTextChange({ e: userInput, type: "email" })
              }
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-white">
            Subject:
          </label>
          <input
            type="text"
            placeholder="ex: Coding"
            className="text-white bg-transparent p-3 rounded-md border border-border outline-none placeholder:text-white/50"
            value={data.subject}
            onChange={(userInput) =>
              handleTextChange({ e: userInput, type: "subject" })
            }
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-white">
            Context:
          </label>
          <textarea
            name=""
            id=""
            placeholder="ex: This is a message to you..."
            className="text-white bg-transparent p-3 rounded-md border border-border outline-none placeholder:text-white/50 resize-none h-[150px]"
            value={data.content}
            onChange={(userInput) =>
              handleTextChange({ e: userInput, type: "content" })
            }
          ></textarea>
        </div>

        <div className="w-full lg:flex justify-end">
          <button
            type="submit"
            className="bg-white text-main font-semibold w-full py-2 rounded-md lg:w-1/5"
          >
            Send
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default ContactMe;
