import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const sessionClaims = session?.sessionClaims;

  // Check if sessionClaims and metadata exist before accessing onboardingComplete
  if (sessionClaims?.metadata?.onboardingComplete === true) {
    redirect("/feed");
  }

  return <>{children}</>;
}
