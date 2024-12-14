"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import SuccessMsg from "./SuccessMsg";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
    Service: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      Service: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.Name.trim() || !formData.Email.trim()) {
      toast({
        title: "Error",
        description: "Please input your name and email to continue.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      // EmailJS template details
      const emailTemplate = {
        Name: formData.Name,
        Email: formData.Email,
        Phone: formData.Phone,
        Address: formData.Address,
        Message: formData.Message,
        Service: formData.Service,
      };

      const result = await emailjs.send(
        "service_sepsk4w", // Replace with your EmailJS Service ID
        "template_qxnihs6", // Replace with your EmailJS Template ID
        emailTemplate,
        "yojO2z3nshfv8TLM4" // Replace with your EmailJS Public Key (User ID)
      );

      if (result.status === 200) {
        setSuccess(true);
        setStatus("Success! Your message has been sent.");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          Message: "",
          Service: "",
        });
      } else {
        setStatus("Error! Unable to send your message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Error! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">Let&apos;s work together</h3>
      <p>
    Have a project in mind or an idea you'd like to discuss? Fill out the form below, and let's create something amazing together!
  </p>
      {success ? (
        <SuccessMsg status={status} />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Input
              type="text"
              id="Name"
              name="Name"
              required
              placeholder="Your name"
              value={formData.Name}
              onChange={handleChange}
              disabled={loading}
              className="disabled:bg-white/10"
            />
            <Input
              type="email"
              id="Email"
              name="Email"
              required
              placeholder="Email address"
              value={formData.Email}
              onChange={handleChange}
              disabled={loading}
              className="disabled:bg-white/10"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Input
              type="text"
              id="Phone"
              name="Phone"
              placeholder="Phone number"
              value={formData.Phone}
              onChange={handleChange}
              disabled={loading}
              className="disabled:bg-white/10"
            />
            <Input
              type="text"
              id="Address"
              name="Address"
              placeholder="Address"
              value={formData.Address}
              onChange={handleChange}
              disabled={loading}
              className="disabled:bg-white/10"
            />
          </div>
          <Textarea
            name="Message"
            placeholder="Text here"
            rows={5}
            value={formData.Message}
            onChange={handleChange}
            disabled={loading}
            className="disabled:bg-white/10"
          />
          <Select onValueChange={handleSelectChange} disabled={loading}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-bodyColor text-white border-white/20">
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="Web Development">Web Development</SelectItem>
                <SelectItem value="SEO Management">App Development</SelectItem>
                <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                <SelectItem value="Logo Design">Logo Design</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            disabled={loading}
            type="submit"
            className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
          >
            {loading ? "Submitting message..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
