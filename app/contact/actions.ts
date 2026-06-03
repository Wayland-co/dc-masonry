"use server";

import { after } from "next/server";
import { contactFormSchema, type ContactFormValues } from "@/lib/forms/contact";
import { sendLeadNotification } from "@/lib/integrations/resend";

export type SubmitResult =
  | { success: true }
  | { success: false; error: string };

const HUBSPOT_SUBMIT_URL = (portalId: string, formGuid: string) =>
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

export async function submitContactForm(
  values: ContactFormValues
): Promise<SubmitResult> {
  const parsed = contactFormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Please check the form and try again." };
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;

  if (!portalId || !formGuid) {
    return {
      success: false,
      error: "Contact form isn't configured yet. Email us directly for now.",
    };
  }

  const fields = Object.entries(parsed.data)
    .filter(([, value]) => typeof value === "string" && value.length > 0)
    .map(([name, value]) => ({ name, value: value as string }));

  const response = await fetch(HUBSPOT_SUBMIT_URL(portalId, formGuid), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields,
      context: { pageName: "Contact" },
    }),
  });

  if (!response.ok) {
    return {
      success: false,
      error: "We couldn't deliver your message. Please try again or email us.",
    };
  }

  after(async () => {
    const result = await sendLeadNotification(parsed.data);
    if (!result.sent) {
      console.warn("[resend] lead notification skipped:", result.reason);
    }
  });

  return { success: true };
}
