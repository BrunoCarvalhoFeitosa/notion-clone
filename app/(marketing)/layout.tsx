import Navbar from "./_components/Navbar"
import ScrollTopButton from "./_components/ScrollTopButton"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <Navbar />
            <ScrollTopButton />
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout