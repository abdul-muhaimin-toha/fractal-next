"use client";

import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import { Button } from "@/components/globals/buttons/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

type FormValues = {
  name: string;
  email: string;
  organization: string;
  phone: string;
};

const fields: {
  name: keyof FormValues;
  label: string;
  required?: boolean;
}[] = [
  { name: "name", label: "Name (required)", required: true },
  { name: "email", label: "Email (required)", required: true },
  { name: "organization", label: "Organization Name" },
  { name: "phone", label: "Phone Number" },
];

function GetInTouch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="bg-dark relative mt-20.5 overflow-hidden lg:mt-33.5 xl:mt-43.75">
      <div className="container-fractal">
        <div className="z-10 flex w-full flex-col gap-20 py-30 sm:max-w-lg sm:gap-24 md:max-w-xl lg:max-w-194.5 lg:gap-30 lg:pb-75">
          {/* Heading */}
          <div
            data-aos="fade-down"
            className="z-10 flex w-full flex-col gap-6 2xl:gap-15"
          >
            <Heading
              className="from-gradient-green to-gradient-orange w-fit bg-linear-to-r bg-clip-text text-transparent"
              variant="h1"
            >
              Contact Us
            </Heading>
            <BodyText variant="body3" className="max-w-md lg:max-w-max">
              Have a difficult communications problem? Get in touch, we're
              always happy to chat
            </BodyText>
          </div>
          {/* Form Fields */}
          <form
            data-aos="fade-up"
            onSubmit={handleSubmit(onSubmit)}
            className="z-10 flex w-full flex-col gap-7.5"
          >
            {fields.map(({ name, label, required }) => (
              <div
                key={name}
                className="flex w-full flex-col gap-1.5 sm:gap-2.5"
              >
                <Label>
                  <BodyText
                    variant="body3"
                    className="text-gray sm:text-xl sm:font-medium md:text-xl md:font-medium lg:text-2xl lg:font-medium xl:text-2xl xl:font-medium 2xl:text-2xl 2xl:font-medium"
                  >
                    {label}
                  </BodyText>
                </Label>
                <Input
                  {...register(name, {
                    required: required ? `${label} is required` : false,
                    pattern:
                      name === "email"
                        ? {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                          }
                        : undefined,
                  })}
                  className="placeholder:text-ocean-weed selection:bg-ocean-orange aria-invalid:ring-ocean-orange aria-invalid:border-ocean-orange focus-visible:border-ocean-olive focus-visible:ring-ocean-olive h-11 rounded-none border-0 border-none bg-white font-sans text-black shadow-none outline-none selection:text-white focus-visible:ring-[3px] md:text-base lg:h-15"
                />
                {/* Error message */}
                {errors[name] && (
                  <BodyText
                    variant="body4"
                    className="text-ocean-orange mt-1 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-base"
                  >
                    {errors[name]?.message as string}
                  </BodyText>
                )}
              </div>
            ))}
            <Button type="submit" variant="border" className="w-fit">
              Submit
            </Button>
          </form>
          <div
            data-aos="fade-up"
            className="z-10 flex w-full flex-col gap-6 md:gap-10"
          >
            <BodyText variant="title1">Contact Details</BodyText>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2.5 lg:gap-10">
              <div className="flex w-full flex-col gap-2.5">
                <BodyText variant="title2" className="text-ocean-green">
                  Call Us
                </BodyText>
                <Link href="/" className="hover:underline duration-300">
                  <BodyText variant="body1" className="text-white opacity-60">
                    (416) 857-1229
                  </BodyText>
                </Link>
              </div>
              <div className="flex w-full flex-col gap-2.5">
                <BodyText variant="title2" className="text-ocean-green">
                  Email Us
                </BodyText>
                <Link href="/" className="hover:underline duration-300">
                  <BodyText variant="body1" className="text-white opacity-60">
                    ali@fractaldigital.ca
                  </BodyText>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          data-aos="fade-left"
          src="/contact-us/bg.svg"
          alt="Hero tree"
          width={360}
          height={606}
          className="absolute top-0 right-0 bottom-0 left-0 z-0 block h-full w-full object-cover object-right md:object-center"
        />
      </div>
    </section>
  );
}

export default GetInTouch;
