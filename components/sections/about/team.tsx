import { ClientImage } from "@/components/ui/client-image";
import type { Team as TeamMembers } from "@/lib/content";

/**
 * About-page Team section. Renders a grid of real team members from the brief.
 * Each card shows the member's photo (or a "photo needed" placeholder per the
 * design-range Gate D — never stock), name, role, and bio. The About page only
 * mounts this when `content.team` is non-empty, so there's no empty/placeholder
 * state to render here.
 */
export function Team({ members }: { members: TeamMembers }) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
          Team
        </h2>
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div key={`${member.name}-${member.role}`} className="flex flex-col">
              <ClientImage
                src={member.photoUrl}
                alt={`${member.name} — ${member.role}`}
                label={`Photo of ${member.name}`}
                className="aspect-[4/5] w-full rounded-2xl border border-border/60"
              />
              <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
