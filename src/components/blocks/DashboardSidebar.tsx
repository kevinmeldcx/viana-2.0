import { AppText } from "@/components/primitives/AppText";
import { AppButton } from "@/components/primitives/AppButton";

export function DashboardSidebar() {
  return (
    <div className="w-80 p-6 space-y-8 shrink-0 animate-fade-in-up [animation-delay:0.1s]">
      <div>
        <AppText variant="h4" className="text-muted-foreground px-2.5">Quick Tasks</AppText>
        <div className="flex flex-col space-y-2 mt-2">
          <AppButton variant="link" className="justify-start">Manage Floor Plan</AppButton>
          <AppButton variant="link" className="justify-start">Manage Sensors</AppButton>
          <AppButton variant="link" className="justify-start">Manage Shelves</AppButton>
          <AppButton variant="link" className="justify-start">Manage Planograms</AppButton>
        </div>
      </div>

      <div>
        <AppText variant="h4" className="text-muted-foreground px-2.5">Add New Components</AppText>
        <div className="flex flex-col space-y-2 mt-2">
          <AppButton variant="link" className="justify-start">+ Add Site</AppButton>
          <AppButton variant="link" className="justify-start">+ Add Device</AppButton>
          <AppButton variant="link" className="justify-start">+ Add Sensor</AppButton>
        </div>
      </div>

      <div>
        <AppText variant="h4" className="text-muted-foreground px-2.5">Other Shortcuts</AppText>
        <div className="flex flex-col space-y-2 mt-2">
          <AppButton variant="link" className="justify-start">Open Retail Engagement Dashboard</AppButton>
        </div>
      </div>
    </div>
  );
}
