import { Navbar } from "./_components/Navbar";

interface Marketingprops {
    children : React.ReactNode
}

const MarkettingLayout = ({children} : Marketingprops)=>{

return (
    <div className="h-full bg-slate-100">
        <Navbar/>
        <main className="pt-40 pb-20 bg-slate-100">
            {children}
        </main>
    </div>
)

}
export default MarkettingLayout;