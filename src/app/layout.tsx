import type { Metadata } from "next";
import { Saira } from "next/font/google";
import StyledComponentsRegistry from "../libs/styled-components/registry";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capputeeno"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <StyledComponentsRegistry>
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
