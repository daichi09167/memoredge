import { Provider } from '@/components/ui/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The suppressHydrationWarning attribute tells React to ignore mismatches 
    // in this element's attributes during hydration
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* This meta tag helps with initial color mode flashing */}
        <meta name="color-scheme" content="light dark" />
      </head>
      {/* suppressHydrationWarning is needed here too since theme providers 
          may modify body attributes */}
      <body suppressHydrationWarning>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}