import Script from "next/script";

export const metadata = {
  title: "Tooly — 100+ free AI tools for everyday work",
  description:
    "A free toolbox of sharp, single-purpose AI tools. Write cover letters, fix emails, generate ideas, and more. No login required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700&family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          :root {
            --green: #1D9E75;
            --green-dark: #0F6E56;
            --ink: #16201C;
            --muted: #5F6B66;
            --line: #E4E8E6;
            --bg: #FBFCFB;
            --surface: #F1F5F3;
          }
          body {
            font-family: 'DM Sans', sans-serif;
            color: var(--ink);
            background: var(--bg);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
          }
          h1, h2, h3 { font-family: 'Bricolage Grotesque', sans-serif; line-height: 1.05; }
          a { color: inherit; text-decoration: none; }
          .wrap { max-width: 960px; margin: 0 auto; padding: 0 24px; }
        `}</style>
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LRDW16MH06"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LRDW16MH06');
          `}
        </Script>
      </body>
    </html>
  );
}
