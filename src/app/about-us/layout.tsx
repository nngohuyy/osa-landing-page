import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSA | About us",
  description:
    "OSA's page with information about upcoming events and activities.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
