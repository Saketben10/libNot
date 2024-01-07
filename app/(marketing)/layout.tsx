import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/footer";

interface Marketingprops {
    children : React.ReactNode
}

const MarkettingLayout = ({children} : Marketingprops)=>{

return (
    <div className="h-full bg-slate-100">
        <Navbar/>
        <main className="pt-20 pb-20 bg-slate-100">
            {children}
        </main>
        <Footer/>
    </div>
)

}
export default MarkettingLayout;