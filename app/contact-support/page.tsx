"use client";

import { useState, FormEvent } from "react";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSupport() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!fields.name.trim()) errors.name = "Full name is required.";
    if (!fields.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!fields.subject.trim()) errors.subject = "Subject is required.";
    if (!fields.message.trim()) errors.message = "Message is required.";
    return errors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = e.target;
    setFields((prev) => ({ ...prev, [id]: value }));
    // Clear error for this field as user types
    setFieldErrors((prev) => ({ ...prev, [id]: undefined }));
    setGlobalError(null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(false);
    setGlobalError(null);

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://60sec.com.au/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setSuccess(true);
        setFields({ name: "", email: "", subject: "", message: "" });
        setFieldErrors({});
      } else {
        let message = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data?.message) message = data.message;
          else if (data?.error) message = data.error;
          // Handle field-level errors returned by the API
          if (data?.errors && typeof data.errors === "object") {
            setFieldErrors(data.errors);
            setLoading(false);
            return;
          }
        } catch {
          // JSON parse failed — use status text
          if (res.statusText) message = res.statusText;
        }
        setGlobalError(message);
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Network error. Please try again.";
      setGlobalError(msg);
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-900";
  const inputNormal = `${inputBase} border-slate-300`;
  const inputError = `${inputBase} border-red-400 bg-red-50 focus:border-red-500`;

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-950">
            Contact Support
          </span>

          <h1 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            We&apos;re Here to Help
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Have questions, need assistance, or want to report an issue? Our
            support team is ready to help.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="rounded-3xl border bg-white p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                📧
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Email Support
              </h3>
              <p className="mt-3 text-slate-600">support@60sec.com.au</p>
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                🕒
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Business Hours
              </h3>
              <p className="mt-3 text-slate-600">
                Monday – Friday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Response Time
              </h3>
              <p className="mt-3 text-slate-600">
                Most inquiries receive a response within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border bg-white p-8">
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  {/* Global error */}
                  {globalError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                      {globalError}
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={fields.name}
                        onChange={handleChange}
                        className={fieldErrors.name ? inputError : inputNormal}
                      />
                      {fieldErrors.name && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={fields.email}
                        onChange={handleChange}
                        className={
                          fieldErrors.email ? inputError : inputNormal
                        }
                      />
                      {fieldErrors.email && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={fields.subject}
                      onChange={handleChange}
                      className={
                        fieldErrors.subject ? inputError : inputNormal
                      }
                    />
                    {fieldErrors.subject && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {fieldErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Describe your issue..."
                      value={fields.message}
                      onChange={handleChange}
                      className={
                        fieldErrors.message ? inputError : inputNormal
                      }
                    />
                    {fieldErrors.message && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center gap-2 rounded-xl bg-blue-950 px-8 py-3 font-semibold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>

                  {/* Success message — shown below the form after submission */}
                  {success && (
                    <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-4">
                      <span className="mt-0.5 text-xl">✅</span>
                      <div>
                        <p className="font-semibold text-green-800">Message Sent!</p>
                        <p className="mt-0.5 text-sm text-green-700">
                          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}