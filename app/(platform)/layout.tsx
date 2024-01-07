import { ClerkProvider } from "@clerk/nextjs";

interface PlatformLayoutprops {
  children: React.ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutprops) => {
  return (
    <ClerkProvider> 
    <html lang="eng">
      <body>{children}</body>
    </html>
    </ClerkProvider>
  );
};

export default PlatformLayout;
