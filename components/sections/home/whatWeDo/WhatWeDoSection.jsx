"use client";
import { Button } from "@/components/globals/buttons/Button";
import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import { useState } from "react";

function IconItem({ item, isSelected, onClick }) {
  const { background_color, card_title_short, item_title } = item;

  if (isSelected) {
    return (
      <div
        onClick={onClick}
        className="group relative flex aspect-square w-full cursor-pointer items-center justify-center overflow-hidden bg-[#282828] transition-all duration-300"
      >
        <Heading
          className="pointer-events-none text-[#74C2CA] transition-transform duration-300 select-none group-hover:scale-110"
          style={{ color: background_color }}
        >
          {card_title_short}
        </Heading>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="relative flex aspect-square h-full w-full cursor-pointer flex-col items-stretch justify-start overflow-hidden p-2 transition-all duration-300 sm:p-4 lg:p-5"
      style={{ backgroundColor: background_color || "#74C2CA" }}
    >
      <div className="flex aspect-square size-1/2 items-center justify-center bg-[#282828] select-none xl:size-24">
        <BodyText
          variant="title1"
          className="pointer-events-none text-[#74C2CA]"
          style={{ color: background_color }}
        >
          {card_title_short}
        </BodyText>
      </div>
      <BodyText
        variant="body2"
        className="pointer-events-none mt-auto leading-none whitespace-pre-line text-[#282828] select-none"
      >
        {item_title}
      </BodyText>
    </div>
  );
}

function IconsGrid({ items, selectedItem, onSelect }) {
  return (
    <div className="grid w-full grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 xl:grid-cols-5">
      {items?.map((item, idx) => (
        <IconItem
          key={item?._id || idx}
          item={item}
          isSelected={selectedItem?._id === item?._id}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}

function WhatWeDoContent({ selectedItem }) {
  if (!selectedItem) return null;

  const {
    item_title,
    item_description,
    button_text,
    link_source,
    custom_url,
    button_page,
    open_in_new_tab,
  } = selectedItem;

  let buttonHref = "#";

  if (link_source === "custom") {
    buttonHref = custom_url || "#";
  } else if (Array.isArray(button_page) && button_page.length > 0) {
    buttonHref = button_page[0]?.uri || "#";
  }

  return (
    <div
      key={selectedItem._id}
      className="flex w-full flex-col gap-5 lg:mt-5 lg:gap-7.5"
    >
      <BodyText variant="body2" className="text-black">
        {item_title}
      </BodyText>

      <BodyText className="whitespace-pre-line text-black" variant="body1">
        {item_description}
      </BodyText>

      {buttonHref && button_text && (
        <Button
          variant="gradient"
          href={buttonHref}
          target={open_in_new_tab ? "_blank" : "_self"}
          className="mt-4 w-fit"
        >
          {button_text}
        </Button>
      )}
    </div>
  );
}

function WhatWeDoSection({ data }) {
  const content = data?.data || {};
  const { section_title, what_we_do_items } = content;

  const [selectedItem, setSelectedItem] = useState(
    what_we_do_items?.[0] || null,
  );

  return (
    <section className="bg-gray">
      <div className="container-fractal">
        <div className="flex w-full flex-col gap-7.5 py-15 lg:gap-15 lg:py-30">
          <Heading className="text-black" variant="h1">
            {section_title || "What We Do"}
          </Heading>
          <IconsGrid
            items={what_we_do_items}
            selectedItem={selectedItem}
            onSelect={setSelectedItem}
          />
          <WhatWeDoContent selectedItem={selectedItem} />
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
