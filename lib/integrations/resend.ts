import "server-only";
import { Resend } from "resend";
import { content } from "@/lib/content";

const apiKey = process.env.RESEND_API_KEY;
const fromAddress = process.env.RESEND_FROM;
const resend = apiKey ? new Resend(apiKey) : null;

export type LeadNotificationInput = {
  firstname: string;
  lastname?: string;
  email: string;
  phone?: string;
  message: string;
};

export type LeadNotificationResult =
  | { sent: true }
  | { sent: false; reason: "not-configured" | "send-failed" };

export function isResendConfigured(): boolean {
  return Boolean(resend && fromAddress);
}

export async function sendLeadNotification(
  lead: LeadNotificationInput,
): Promise<LeadNotificationResult> {
  if (!resend || !fromAddress) {
    return { sent: false, reason: "not-configured" };
  }

  const businessName = content.business.name;
  const ownerEmail = content.business.email;
  const from = `${businessName} <${fromAddress}>`;
  const fullName = [lead.firstname, lead.lastname]
    .filter((s): s is string => Boolean(s && s.length))
    .join(" ");

  try {
    await resend.emails.send({
      from,
      to: ownerEmail,
      subject: `New lead: ${fullName || lead.firstname}`,
      text: `New lead from the website:

Name: ${fullName || lead.firstname}
Email: ${lead.email}
Phone: ${lead.phone ?? "—"}

Message:
${lead.message}
`,
    });

    await resend.emails.send({
      from,
      to: lead.email,
      subject: `Thanks for reaching out — ${businessName}`,
      text: `Hi ${lead.firstname},

Thanks for reaching out. We received your message and will respond within 1 business day.

— ${businessName}
`,
    });

    return { sent: true };
  } catch {
    return { sent: false, reason: "send-failed" };
  }
}
