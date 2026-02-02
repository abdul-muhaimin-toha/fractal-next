"use client";

import { BodyText } from "@/components/globals/typography/BodyText";
import Image from "next/image";
import React from "react";

function TestimonialDivider() {
  return (
    <svg
      className="aspect-280/28 h-7 w-auto object-contain sm:h-10 md:h-12"
      width={280}
      height={27}
      viewBox="0 0 280 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_40_539)">
        <path
          d="M119.667 17.14L128.112 27H134.724L131.282 17.6185H138.034V0H119.667V17.14ZM121.19 1.51981H136.501V16.0987H129.09L132.533 25.4802H128.808L121.181 16.5865V1.51981H121.19Z"
          fill="url(#paint0_linear_40_539)"
        />
        <path
          d="M159.769 0H141.401V17.14L149.847 27H156.458L153.016 17.6185H159.769V0ZM158.245 16.0987H150.834L154.277 25.4802H150.552L142.925 16.5865V1.51981H158.236V16.0987H158.245Z"
          fill="url(#paint1_linear_40_539)"
        />
        <path
          d="M7.62939e-06 11.5859L116.366 11.5859V10.0755L7.62939e-06 10.0755V11.5859Z"
          fill="url(#paint2_linear_40_539)"
        />
        <path
          d="M163.634 11.5859L280 11.5859V10.0755L163.634 10.0755V11.5859Z"
          fill="url(#paint3_linear_40_539)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_40_539"
          x1="119.667"
          y1="13.5"
          x2="138.034"
          y2="13.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51AEA6" />
          <stop offset={1} stopColor="#E6CA2F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_40_539"
          x1="141.401"
          y1={0}
          x2="159.769"
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51AEA6" />
          <stop offset={1} stopColor="#E6CA2F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_40_539"
          x1="116.366"
          y1="10.8354"
          x2="7.62939e-06"
          y2="10.8354"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51AEA6" />
          <stop offset={1} stopColor="#E6CA2F" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_40_539"
          x1={280}
          y1="10.8354"
          x2="163.634"
          y2="10.8354"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51AEA6" />
          <stop offset={1} stopColor="#E6CA2F" />
        </linearGradient>
        <clipPath id="clip0_40_539">
          <rect width={280} height={27} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TestimonialItem({
  imageSrc,
  title,
  subtitle,
  author,
  reverse = false,
}) {
  return (
    <div
      className={`flex w-full flex-col items-start gap-7.5 ${
        reverse
          ? "sm:items-end md:ml-auto md:flex-row-reverse md:items-start md:gap-6 lg:max-w-280 lg:gap-12.5"
          : "sm:items-start md:mr-auto md:max-w-4xl md:flex-row md:items-start md:gap-6 lg:max-w-280 lg:gap-12.5"
      }`}
    >
      <div className="relative aspect-square w-37.5 sm:w-40 md:w-37.5 md:shrink-0 lg:w-57.5 from-gradient-orange to-gradient-green bg-linear-to-r p-1">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Client image"
            width={228}
            height={228}
            unoptimized={true}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div
        className={`flex flex-col gap-5 text-left ${
          reverse ? "sm:max-w-xl sm:text-right" : "sm:max-w-xl sm:text-left"
        } md:max-w-max md:gap-3 md:self-stretch`}
      >
        <BodyText variant="title3" className="text-ocean-green">
          {subtitle}
        </BodyText>
        <BodyText variant="title4" className="text-gray">
          {title}
        </BodyText>
        <BodyText variant="body4" className="text-ocean-green lg:mt-auto">
          {author}
        </BodyText>
      </div>
    </div>
  );
}

export default function TestimonialSection({ data }) {
  const content = data?.data || {};
  const { testimonials } = content;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center gap-15 py-15 md:gap-30 lg:py-47.5">
          {testimonials.map((item, idx) => (
            <React.Fragment key={item._id || idx}>
              <TestimonialItem
                imageSrc={item.client_image}
                title={item.title}
                subtitle={item.description}
                author={`${item.client_name} - ${item.client_designation}`}
                reverse={idx % 2 === 1}
              />
              {idx < testimonials.length - 1 && <TestimonialDivider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
