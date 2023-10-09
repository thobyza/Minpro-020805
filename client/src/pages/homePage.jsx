import { BottomMenu } from "../components/bottomMenu"
import { Navbar } from "../components/navbar"

export const HomePage = () => {
    return (
        <>
            <Navbar/>
            <div className="bg-indigo-200 h-screen"></div>
            <BottomMenu/>
        </>
    )
}