import React, { useState } from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // disable submit button state
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  // message sent state
  const [messageSent, setMessageSent] = useState(false);

  // handle input fields change
  const handleChangle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButtonDisable(true);
    // email js function to send mails
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        { ...formData },
        process.env.REACT_APP_EMAIL_PUBLIC_ID
      )
      .then(
        (result) => {
          setMessageSent(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setSubmitButtonDisable(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitButtonDisable(false);
        }
      )
      .catch((err) => {
        console.log(err);
        setSubmitButtonDisable(false);
      });
  };
  return (
    <div className="sectionContainer">
      <div className="flex w-full space-y-10 space-x-0 flex-col lg:flex-row lg:space-y-0 lg:space-x-8">
        {/* contact left section */}
        <div className="flex flex-col items-center lg:items-start space-y-6 lg:basis-1/2 w-full">
          <div className="space-y-2 items-start">
            <h3 className="heading mb-0 text-center lg:text-left">Contact</h3>
          </div>
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-1 sm:place-items-start gap-4 mt-5 w-full">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="animate-pulse h-5 w-5" />
              <p className="text-sm">+918928775685</p>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="animate-pulse h-5 w-5" />
              <p className="text-sm">info@amaxatech.com</p>
            </div>
            <div className="flex items-start space-x-2">
              <MapPinIcon className="animate-pulse text-base h-5 w-5" />
              <p className="text-sm text-center md:text-start">
                MIG2 B903, Gujarat Housing Board, (Phase-1), Near Shanti Nagar,
                Tithal Road, Valsad, Gujarat-396001.
              </p>
            </div>
          </div>
        </div>

        {/* form */}
        <form
          action=""
          className="basis-1/2 flex flex-col items-center w-full"
          onSubmit={handleSubmit}
        >
          {messageSent ? (
            <p className="text-lg text-gray2 font-poppins font-bold">
              Your Query has been submitted successfully. We will revert back to
              you shortly.
            </p>
          ) : (
            <div className="flex flex-col w-full space-y-2 max-w-2xl">
              <div className="flex space-x-2 items-center w-full max-w-2xl">
                <input
                  name="name"
                  type="text"
                  className="contactInput w-full"
                  placeholder="Name"
                  onChange={handleChangle}
                />
                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChangle}
                  type="email"
                  className="contactInput w-full"
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                onChange={handleChangle}
                className="contactInput"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                onChange={handleChangle}
                className="contactInput"
              />
              <button
                type="submit"
                disabled={submitButtonDisable}
                className="px-5 py-3 rounded-md text-white font-poppins font-bold text-lg cursor-pointer"
                style={{
                  background: submitButtonDisable
                    ? "#cccccc"
                    : "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
                }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
