import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "493262a8-a4c9-4cdc-ad86-6f525b90aa15");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

return (
    <motion.div
    initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-gradient-to-r from-green-50 to-green-100"
    >
        <motion.h4
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
         className="text-center mb-2 text-lg ">Connect with me</motion.h4>
        <motion.h2
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
         className="text-center text-5xl font-bold">Get in Touch</motion.h2>

        <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
         className="text-center max-w-2xl mx-auto mt-5 mb-12">
            I'd love to connect with you! Whether you have a project in mind or just want to chat, feel free to reach out to me. Let's collaborate and bring your ideas to life.
        </motion.p>

        <motion.form
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.9}}
         onSubmit={onSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-flow-col gap-6 mt-10 mb-8">
                    <motion.input
                    initial={{opacity:0, x:-50}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:0.6, delay:1.1}}
                     className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" type="text" placeholder=" Enter Your Name" required
                    name="name" />
                    <motion.input
                    initial={{opacity:0, x:50}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:0.6, delay:1.2}}
                     className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" type="email" placeholder=" Enter Your Email" required
                    name="email" />
            </div >
            <motion.textarea
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:1.3}}
             rows='6' placeholder='Enter Your Message' className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" name="message"></motion.textarea>
            <motion.button
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
             className="flex items-center justify-center gap-2 px-10 py-3 border rounded-full border-gray-500 bg-white text-gray-500 hover:bg-gray-100 hover:text-white hover:bg-gradient-to-r from-green-400 to-green-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer mt-2" type="submit">Submit now <Image src={assets.right_arrow} alt="arrow icon" className="w-4" /> </motion.button>
            <p className="mt-4">{result}</p>
        </motion.form>
    </motion.div>
);
};

export default Contact;
