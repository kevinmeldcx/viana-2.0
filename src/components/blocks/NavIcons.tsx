import {
  DashboardIcon,
  DashboardActiveIcon,
  SiteIcon,
  SiteActiveIcon,
  DevicesIcon,
  DevicesActiveIcon,
  SensorIcon,
  SensorActiveIcon,
  XrayIcon,
  XrayActiveIcon,
  ManifestIcon,
  ManifestActiveIcon,
  InstallerIcon,
  InstallerActiveIcon,
} from "@/assets/icons"

function NavIconPair({
  Default,
  Active,
}: {
  Default: React.ElementType
  Active: React.ElementType
}) {
  return (
    <>
      <span className="group-data-[active=true]/menu-button:hidden">
        <Default />
      </span>
      <span className="hidden group-data-[active=true]/menu-button:block">
        <Active />
      </span>
    </>
  )
}

export function DashboardNavIcon() {
  return <NavIconPair Default={DashboardIcon} Active={DashboardActiveIcon} />
}

export function SiteNavIcon() {
  return <NavIconPair Default={SiteIcon} Active={SiteActiveIcon} />
}

export function DevicesNavIcon() {
  return <NavIconPair Default={DevicesIcon} Active={DevicesActiveIcon} />
}

export function SensorNavIcon() {
  return <NavIconPair Default={SensorIcon} Active={SensorActiveIcon} />
}

export function XrayNavIcon() {
  return <NavIconPair Default={XrayIcon} Active={XrayActiveIcon} />
}

export function ManifestNavIcon() {
  return <NavIconPair Default={ManifestIcon} Active={ManifestActiveIcon} />
}

export function InstallerNavIcon() {
  return <NavIconPair Default={InstallerIcon} Active={InstallerActiveIcon} />
}
