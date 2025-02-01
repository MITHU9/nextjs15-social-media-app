import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import { SessionProvider } from "./SessionProvider";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session?.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="mx-auto max-w-7xl p-5 flex w-full grow gap-5">
          <MenuBar className="sticky top-[5.25rem] h-fit hidden sm:block flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm lg:px-5 xl:w-80" />

          {children}
        </div>
        <MenuBar className="sticky bottom-0 h-fit flex sm:hidden space-x-3 border-t justify-center bg-card px-3 py-2 shadow-sm w-full" />
      </div>
    </SessionProvider>
  );
}
