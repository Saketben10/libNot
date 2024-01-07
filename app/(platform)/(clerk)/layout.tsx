interface clerkporps{
children : React.ReactNode
}

const clerkLayout = ({children} : clerkporps)=> {

return (
    <body className="h-full flex flex-col justify-center items-center pt-10">
        <div>
        {children}
        </div>
    </body>
)

}

export default clerkLayout;