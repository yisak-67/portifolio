import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageLayout from "@/components/PageLayout";
import { Mail, MapPinCheck, Phone } from "lucide-react";
import React from "react";

const infoData = [
  { title: "Phone", description: "(+021) 251 198 254", icon: <Phone /> },
  { title: "Email", description: "youremail@gmail.com", icon: <Mail /> },
  {
    title: "Address",
    description: "New Town, through back city",
    icon: <MapPinCheck />,
  },
];

const ContactPage = () => {
  return (
    <PageLayout>
      <Container className="py-6 md:py-12 flex flex-col md:flex-row gap-6 md:gap-14">
        <div className="w-full md:w-2/3 ">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-4 md:gap-8">
          {infoData?.map((item) => (
            <div key={item?.title} className="flex items-center space-x-4">
              <span className="bg-lightSky/5 p-4 rounded-md">{item?.icon}</span>
              <div>
                <h3 className="text-white/60 text-sm font-semibold">
                  {item?.title}
                </h3>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageLayout>
  );
};

export default ContactPage;
