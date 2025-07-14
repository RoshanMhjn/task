import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Name too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(5, "Message too short")
    .required("Message is required"),
});

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.aakashlabs.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to send");

      alert("Success");
      actions.resetForm();
    } catch (err) {
      console.log(err);

      alert("Fail");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="max-w-xl mx-auto space-y-4 text-left">
            <div>
              <Field name="name" as={Input} placeholder="Name" />
              <ErrorMessage
                name="name"
                component="p"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div>
              <Field name="email" as={Input} placeholder="Email" />
              <ErrorMessage
                name="email"
                component="p"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div>
              <Field name="message" as={Textarea} placeholder="Message" />
              <ErrorMessage
                name="message"
                component="p"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
