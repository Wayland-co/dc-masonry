"use client";

import dynamic from "next/dynamic";

export const ContactFormLazy = dynamic(
  () =>
    import("@/components/forms/contact-form").then((m) => ({
      default: m.ContactForm,
    })),
  { ssr: false, loading: () => null },
);
