//import '#/styles/globals.css';


import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-ignore
  return (
    <html lang="en" style={{ scrollBehavior: 'auto' }}>
      <head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link
          fetchpriority='high'
          rel='preload'
          as='image'
          href='/_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&w=640&q=90' />

        <link rel='icon' href='/favicon.ico' />
      </head>
      <body style={{ scrollBehavior: 'auto' }}>
        <div>{children}</div>
      </body>
    </html>
  );
}
