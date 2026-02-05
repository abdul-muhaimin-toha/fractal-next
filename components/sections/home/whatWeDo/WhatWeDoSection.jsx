
'use client'
import { BodyText } from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import { useState } from "react";

function IconItem({ item, isSelected, onClick }) {
  const { background_color, card_title_short, item_title } = item;

  if (isSelected) {
    return (
      <div
        onClick={onClick}
        className="relative flex aspect-square h-full w-full cursor-pointer flex-col items-stretch justify-start overflow-hidden p-2 sm:p-4 lg:p-5 transition-all duration-300"
        style={{ backgroundColor: background_color || "#74C2CA" }}
      >
        <div 
          data-aos="zoom-in" 
          className="flex aspect-square size-1/2 xl:size-24 items-center justify-center bg-[#282828] select-none"
        >
          <BodyText variant="title1" className="text-[#74C2CA] pointer-events-none" style={{ color: background_color }}>
            {card_title_short}
          </BodyText>
        </div>
        <BodyText
          data-aos="fade-up"
          data-aos-delay="100"
          variant="body2"
          className="mt-auto leading-none text-[#282828] pointer-events-none select-none"
        >
          {item_title}
        </BodyText>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="relative flex aspect-square w-full cursor-pointer items-center justify-center overflow-hidden bg-[#282828] group transition-all duration-300"
    >
      <Heading 
        className="text-[#74C2CA] pointer-events-none select-none group-hover:scale-110 transition-transform duration-300" 
        style={{ color: background_color }}
      >
        {card_title_short}
      </Heading>
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

  return (
    <div 
      key={selectedItem._id}
      className="flex w-full flex-col gap-5 lg:mt-5 lg:gap-7.5"
    >
      <BodyText variant="body2" className="text-black">
        {selectedItem.item_title}
      </BodyText>
      <BodyText className="text-black" variant="body1">
        {selectedItem.item_description}
      </BodyText>
    </div>
  );
}

function WhatWeDoSection({ data }) {
  const content = data?.data || {};
  const { section_title, what_we_do_items } = content;

  const [selectedItem, setSelectedItem] = useState(what_we_do_items?.[0] || null);

  return (
    <section className="bg-gray">
      <div className="container-fractal">
        <div className="flex w-full flex-col gap-7.5 py-15 lg:gap-15 lg:py-30">
          <Heading className="text-black" variant="h1" data-aos="fade-up">
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
