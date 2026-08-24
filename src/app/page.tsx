"use client";

import ScrollManager from "@/components/scroll-manager";
import ContactFooter from "@/components/contact-footer";

export default function Home() {
  // The ScrollManager is a Client Component that tracks the user's vertical scroll
  // and mathematically translates it into three distinct animation phases:
  // 1. Horizontal sliding of the Projects panel
  // 2. Vertical scrolling of the individual Project cards
  // 3. Horizontal sliding of the Contact panel
  return (
    <>
      <ScrollManager />
      <ContactFooter />
    </>
  );
}
