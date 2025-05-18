import { PageShell } from "@ui";
import { Navigation } from "../../components/Navigation/Navigation";

const navLinks = [
	{ href: "/authorized", label: "Forside" },
	{ href: "authorized/dashboard", label: "Dashboard" },
	{ href: "/klippekort", label: "Administrér" },
];




export default function AuthorizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {

 
  return (
    <div className="flex flex-col min-h-screen">
      <PageShell headerContent={<Navigation links={navLinks} />}>
        {children}

      </PageShell>
    </div>
  );
}