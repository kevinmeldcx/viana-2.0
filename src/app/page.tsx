"use client";

import {
  AppButton,
  AppBadge,
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardDescription,
  AppCardContent,
  AppCardFooter,
  AppInput,
  AppLabel,
} from "@/components/primitives";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-10">
      <div className="mx-auto max-w-2xl space-y-10">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Viana Kit</h1>
          <p className="mt-1 text-sm text-muted-foreground">Component smoke test — Phase 4</p>
        </div>

        {/* Button */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Button</h2>
          <div className="flex flex-wrap gap-3">
            <AppButton>Default</AppButton>
            <AppButton variant="secondary">Secondary</AppButton>
            <AppButton variant="outline">Outline</AppButton>
            <AppButton variant="ghost">Ghost</AppButton>
            <AppButton variant="destructive">Destructive</AppButton>
            <AppButton disabled>Disabled</AppButton>
          </div>
        </section>

        {/* Badge */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Badge</h2>
          <div className="flex flex-wrap gap-3">
            <AppBadge>Default</AppBadge>
            <AppBadge variant="secondary">Secondary</AppBadge>
            <AppBadge variant="outline">Outline</AppBadge>
            <AppBadge variant="destructive">Destructive</AppBadge>
          </div>
        </section>

        {/* Input + Label */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Input & Label</h2>
          <div className="space-y-2">
            <AppLabel htmlFor="email">Email address</AppLabel>
            <AppInput id="email" type="email" placeholder="you@example.com" className="max-w-sm" />
          </div>
          <div className="space-y-2">
            <AppLabel htmlFor="disabled-input">Disabled</AppLabel>
            <AppInput id="disabled-input" placeholder="Can't type here" disabled className="max-w-sm" />
          </div>
        </section>

        {/* Card */}
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Card</h2>
          <AppCard className="max-w-sm">
            <AppCardHeader>
              <AppCardTitle>Component ready</AppCardTitle>
              <AppCardDescription>This card is rendered from the AppCard primitive.</AppCardDescription>
            </AppCardHeader>
            <AppCardContent>
              <p className="text-sm text-muted-foreground">
                All five core components are rendering correctly from <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">@/components/primitives</code>.
              </p>
            </AppCardContent>
            <AppCardFooter>
              <AppButton size="sm">Get started</AppButton>
            </AppCardFooter>
          </AppCard>
        </section>
      </div>
    </main>
  );
}
