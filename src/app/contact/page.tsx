"use client";

import dynamic from "next/dynamic";
import AnimatedSection from "../components/AnimatedSection";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import React from "react";

const LeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

const ContactForm = React.memo(
  ({ formData, setFormData, handleSubmit, isSubmitting }: any) => {
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const { name, value } = e.target;
      setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    return (
      <form onSubmit={handleSubmit} className="p-5">
        <fieldset className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="col-span-1 flex flex-col gap-y-1">
            <label htmlFor="name" className="text-base text-slate-900">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              pattern="[0-9]{10,15}"
              className="rounded-sm border border-gray-300 px-4 py-3 text-base text-slate-900 focus:outline focus:outline-1 focus:outline-secondary-200"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-y-1">
            <label htmlFor="email" className="text-base text-slate-900">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-sm border border-gray-300 px-4 py-3 text-base text-slate-900 focus:outline focus:outline-1 focus:outline-secondary-200"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-y-1">
            <label htmlFor="subject" className="text-base text-slate-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="rounded-sm border border-gray-300 px-4 py-3 text-base text-slate-900 focus:outline focus:outline-1 focus:outline-secondary-200"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-y-1">
            <label htmlFor="message" className="text-base text-slate-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              required
              className="rounded-sm border border-gray-300 px-4 py-3 text-base text-slate-900 focus:outline focus:outline-1 focus:outline-secondary-200"
            />
          </div>
        </fieldset>
        <div className="mt-4 flex justify-center lg:mt-8">
          <button
            type="submit"
            className="hover:bg-primary-100 rounded-full bg-secondary-200 px-8 py-3 text-center text-white"
          >
            Send message
          </button>
        </div>
      </form>
    );
  },
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Loading and success states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: null,
  });

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Reset form on success
      setFormData({ name: "", email: "", message: "", subject: "" });
      setSubmitStatus({ success: true, error: null });
    } catch (error: any) {
      setSubmitStatus({ success: false, error: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="px-5 py-14 font-sans sm:mx-auto sm:max-w-136 lg:max-w-240 xl:max-w-screen-xl">
      <AnimatedSection>
        <div className="flex flex-col items-center gap-y-5 pb-14">
          <h1 className="relative inline-block pb-5 text-3xl font-bold text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:block after:h-1 after:w-12 after:bg-secondary-200 after:content-['']">
            Contact
          </h1>
          <p className="text-center text-slate-900 lg:max-w-3xl">
            I am always excited to collaborate on new and meaningful projects.
            Whether you have a question, a project idea, or just want to say hi
            — feel free to reach out using the form below. I will get back to
            you as soon as possible!
          </p>
        </div>
        <div className="lg:flex lg:gap-x-8">
          <AnimatedSection className="p-5 shadow-custom lg:w-2/5">
            <div className="mb-10 flex flex-col gap-y-10">
              <div className="flex items-center gap-x-4">
                <span className="group size-11 rounded-full bg-secondary-100 p-3 hover:bg-secondary-200">
                  <IconMapPin
                    className="size-5 text-secondary-200 group-hover:text-white"
                    stroke={1}
                  />
                </span>
                <span>
                  <h2 className="text-md mb-1.5 font-bold text-slate-900">
                    Adress
                  </h2>
                  <p className="text-sm text-gray-600">Toamasina, Madagascar</p>
                </span>
              </div>
              <div className="flex items-center gap-x-4">
                <Link
                  href={"tel:+261384543837"}
                  target="_blank"
                  className="group size-11 rounded-full bg-secondary-100 p-3 hover:bg-secondary-200"
                >
                  <IconPhone
                    className="size-5 text-secondary-200 group-hover:text-white"
                    stroke={1}
                  />
                </Link>
                <span>
                  <h2 className="text-md mb-1.5 font-bold text-slate-900">
                    Calls Us
                  </h2>
                  <p className="text-sm text-gray-600">+261384543837</p>
                </span>
              </div>
              <div className="flex items-center gap-x-4">
                <Link
                  href={"mailto:ainavoniarisoa@gmail.com"}
                  className="group size-11 rounded-full bg-secondary-100 p-3 hover:bg-secondary-200"
                >
                  <IconMail
                    className="size-5 text-secondary-200 group-hover:text-white"
                    stroke={1}
                  />
                </Link>
                <span>
                  <h2 className="text-md mb-1.5 font-bold text-slate-900">
                    Email Us
                  </h2>
                  <p className="text-sm text-gray-600">
                    ainavoniarisoa@gmail.com
                  </p>
                </span>
              </div>
            </div>
            <LeafletMap
              center={[-18.17012567569023, 49.37523040087744]}
              markerPosition={[-18.17012567569023, 49.37523040087744]}
              zoom={8}
              popupText="Toamasina, Madagascar."
            />
          </AnimatedSection>

          <div className="mt-8 shadow-custom lg:mt-0 lg:w-3/5">
            {submitStatus.success && (
              <div className="mb-4 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {submitStatus.error && (
              <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
                Error: {submitStatus.error}
              </div>
            )}

            <ContactForm
              onSubmit={handleSubmit}
              setFormData={setFormData}
              formData={formData}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
