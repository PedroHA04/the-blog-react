import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Blog - Este é um blog com NextJS",
  description: "Essa seria a descrição",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header><h1>Header</h1></header>
        {children}
        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
