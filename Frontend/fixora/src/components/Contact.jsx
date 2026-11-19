
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Contact = () => {
  const location = useLocation();
  const selectedService = location.state?.selectedService || null;
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const navigate = useNavigate();

  // Get today's date in local YYYY-MM-DD format
  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  // Validation Schema
  const validationSchema = Yup.object({
    customerName: Yup.string()
      .trim()
      .required("Customer name is required"),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10 digit number"),

    address: Yup.string()
      .trim()
      .required("Address is required"),

    workType: Yup.string()
      .required("Please select a work type"),

    preferredDate: Yup.string()
      .required("Date is required")
      .test(
        "not-past",
        "Past date is not allowed",
        (value) => !value || value >= minDate
      ),

    preferredTime: Yup.string()
      .required("Time is required"),

    description: Yup.string()
      .trim()
      .min(10, "Description must be at least 10 characters")
      .max(300, "Description cannot exceed 300 characters")
      .required("Description is required"),
  });

  // Formik Configuration
  const formik = useFormik({
    initialValues: {
      customerName: "",
      phone: "",
      address: "",
      preferredDate: "",
      preferredTime: "",
      workType: "",
      description: "",
    },

    validationSchema,

    onSubmit: async (values) => {
      console.log("Booking Details:", values);
      setBookingSubmitted(true);

    },
  });

  // Common Input Styling
  const getInputClass = (field) => `
    w-full p-3 rounded-lg
    bg-white text-gray-900
    border
    outline-none
    transition duration-200
    focus:ring-2 focus:ring-purple-500
    ${formik.touched[field] && formik.errors[field]
      ? "border-red-500 focus:ring-red-400"
      : "border-gray-300 focus:border-purple-500"
    }
  `;

  // Common Label Styling
  const labelClass = "block text-sm font-semibold text-white";

  // Validation Error Component
  const ErrorText = ({ field }) => {
    if (!formik.touched[field] || !formik.errors[field]) {
      return null;
    }

    return (
      <p className="text-red-400 text-sm mt-1 font-medium">
        {formik.errors[field]}
      </p>
    );
  };

  return (
    <section className="contact">
      <div className="contact-badge">✦ Get In Touch</div>

      <h1 className="contact-title">
        Contact <span>FIXORA</span>
      </h1>

      <p className="contact-description">
        Have a question, need support, or want to work with us?
        <br />
        Our team is here to help. Let's solve it together!
      </p>

      {selectedService ? (
        <div className="max-w-2xl mx-auto my-8 p-6 md:p-8 rounded-2xl shadow-lg bg-fuchsia-950">

          {/* Selected Service */}
          <div className="flex flex-col items-center text-center gap-3 mb-8">

            <h2 className="text-xl font-bold text-white">
              Your Selected Service
            </h2>

            <p className="text-4xl">
              {selectedService.icon}
            </p>

            <h3 className="text-lg font-semibold text-white">
              {selectedService.title}
            </h3>

            <p className="text-gray-300">
              {selectedService.description}
            </p>

          </div>

          {bookingSubmitted ? (
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Booking Request Submitted by {formik.values.customerName}</h2>
              <p>Service : {selectedService.title}</p>
              <p className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Status: Submitted</p>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">Thank you for choosing FIXORA</p>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200" onClick={() => navigate("/")}>Back to Home</button>
            </div>
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >


              {/* Customer Name */}
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="customerName">
                  Customer's Name:
                </label>

                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formik.values.customerName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your name"
                  className={getInputClass("customerName")}
                />

                <ErrorText field="customerName" />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="phone">
                  Phone Number:
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your phone number"
                  className={getInputClass("phone")}
                />

                <ErrorText field="phone" />
              </div>

              {/* Address */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className={labelClass} htmlFor="address">
                  Address:
                </label>

                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your complete address"
                  className={getInputClass("address")}
                />

                <ErrorText field="address" />
              </div>

              {/* Work Type */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className={labelClass} htmlFor="workType">
                  Work Type:
                </label>

                <select
                  id="workType"
                  name="workType"
                  value={formik.values.workType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={getInputClass("workType")}
                >
                  <option value="">Select Work Type</option>

                  {selectedService?.workTypes?.map((work) => (
                    <option key={work} value={work}>
                      {work}
                    </option>
                  ))}
                </select>

                <ErrorText field="workType" />
              </div>

              {/* Preferred Date */}
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="preferredDate">
                  Preferred Date:
                </label>

                <input
                  id="preferredDate"
                  type="date"
                  name="preferredDate"
                  min={minDate}
                  value={formik.values.preferredDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={getInputClass("preferredDate")}
                />

                <ErrorText field="preferredDate" />
              </div>

              {/* Preferred Time */}
              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="preferredTime">
                  Preferred Time:
                </label>

                <input
                  id="preferredTime"
                  type="time"
                  name="preferredTime"
                  value={formik.values.preferredTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={getInputClass("preferredTime")}
                />

                <ErrorText field="preferredTime" />
              </div>

              {/* Description */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className={labelClass} htmlFor="description">
                  Description:
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  maxLength={300}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Describe the problem you are facing..."
                  className={`${getInputClass("description")} resize-y`}
                />

                <div className="flex justify-between items-center">
                  <ErrorText field="description" />

                  <span className="text-xs text-gray-300 ml-auto">
                    {formik.values.description.length}/300
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-md disabled:opacity-60"

                >
                  {formik.isSubmitting ? "Submitting..." : "Submit Booking"}
                </button>
              </div>

            </form>
          )}

          {/* Booking Form */}

        </div>
      ) : (

        <div className="max-w-2xl mx-auto my-10 px-6 py-12 md:py-16 rounded-3xl bg-gradient-to-br from-[#1b102b] via-[#25143d] to-[#35165a] border border-purple-500/20 shadow-2xl shadow-purple-950/30 text-center">

          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-purple-500/15 border border-purple-400/20 flex items-center justify-center">
            <span className="text-4xl">🛠️</span>
          </div>

          {/* Badge */}
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-purple-300 uppercase mb-4">
            Booking Starts Here
          </span>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            No Service Selected
          </h1>

          {/* Description */}
          <p className="max-w-md mx-auto text-gray-300 leading-relaxed mb-8">
            Looks like you haven't selected a service yet.
            Explore our services and let us take care of your needs.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-900/40 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Services
            <span className="text-lg">→</span>
          </button>

          {/* Footer text */}
          <p className="mt-8 text-sm text-purple-300/70 tracking-wider">
            Find. Book. Fix.
          </p>

        </div>

      )}
    </section>
  );
};

export default Contact;
