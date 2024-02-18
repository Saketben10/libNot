import { ClerkProvider } from "@clerk/nextjs";
import {Toaster} from 'sonner'

interface PlatformLayoutprops {
  children: React.ReactNode;
}


const PlatformLayout = ({ children }: PlatformLayoutprops) => {
  return (
    <ClerkProvider> 
      <Toaster/>
   
    {children} 
 
    </ClerkProvider>
  );
};

export default PlatformLayout;
