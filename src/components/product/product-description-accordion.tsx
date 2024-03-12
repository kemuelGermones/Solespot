"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

interface ProductDescriptionAccordionProps {
  description: string;
}

export default function ProductDescriptionAccordion({
  description,
}: ProductDescriptionAccordionProps) {
  return (
    <Accordion
      className="px-0"
      itemClasses={{
        title: "text-base font-bold",
      }}
    >
      <AccordionItem title="PRODUCT DESCRIPTION">{description}</AccordionItem>
      <AccordionItem title="SHIPPING & RETURNS">
        Solespot shipping policy entails standard rates based on destination,
        weight, and dimensions. Orders ship within 1-2 business days, with free
        shipping available for qualifying orders. International shipping
        offered, with customers responsible for customs fees. Tracking provided.
        Returns accepted within 30 days if unused and in original packaging,
        with an RMA number. Refunds issued within 5-7 business days. Customer
        covers return shipping unless due to our error. Damaged items reported
        within 48 hours for prepaid return label. No direct exchanges; customers
        can return for refund and reorder. Policies subject to change; check
        website for updates.
      </AccordionItem>
    </Accordion>
  );
}
