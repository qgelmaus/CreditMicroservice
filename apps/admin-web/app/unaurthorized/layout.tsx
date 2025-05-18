import { PageShell } from "@ui";

export default function UnauthorizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
          <PageShell >
            {children}
    
          </PageShell>
        </div>
  );
}