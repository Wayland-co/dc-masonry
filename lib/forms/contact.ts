import { z } from "zod";

/**
 * Contact-form schema — shared between the client component (react-hook-form
 * validation) and the server action (defense-in-depth + safe parse before
 * forwarding to HubSpot).
 *
 * Field names match HubSpot's default contact-property names so a stock
 * HubSpot form maps 1:1 without remapping.
 */
export const contactFormSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Tell us what you're trying to fix"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: ContactFormValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
};
