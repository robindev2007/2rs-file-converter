import React from "react";
import { BsLightningChargeFill, BsShieldFill } from "react-icons/bs";
import { FaShield, FaRepeat } from "react-icons/fa6";
import { PiDevicesFill } from "react-icons/pi";

const ServiceDetails = () => {
  const services = [
    {
      icon: <BsLightningChargeFill className="size-10" />,
      title: "Fast an deasy",
      description:
        'Just drop your files on the page, choose an output format and click "Convert" button. Wait a little for the process to complete. We aim to do all our conversions in under 1-2 minutes.',
    },
    {
      icon: <FaShield className="size-10" />,
      title: "Security guaranteed",
      description:
        "We convert file on youre browser so no need to upload file to server and not security issues.",
    },
    {
      icon: <PiDevicesFill className="size-10" />,
      title: "All devices supported",
      description:
        "Convertio is browser-based and works for all platforms. There is no need to download and install any software.",
    },
    {
      icon: <FaRepeat className="size-10" />,
      title: "40+ formats supported",
      description:
        "We support more than 2600 different conversions between more than 40+ different file formats. More than any other converter.",
    },
  ];
  return (
    <div className="text-center pt-10 space-y-3">
      <h2 className="text-4xl font-bold">About this app</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="grid text-center justify-items-center gap-2 transition-colors hover:bg-card p-5 rounded-md sm:max-w-[80%] md:max-w-full mx-auto md:mx-0">
            {service.icon}
            <h3 className="text-lg">{service.title}</h3>
            <p className="text-muted-foreground text-pretty">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
