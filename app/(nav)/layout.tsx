import Navbar from "@/app/components/Navbar"
import SectionalBrandOverlay from "@/app/components/SectionalBrandOverlay"
import { ReactNode } from "react"

const Layout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <div>
      <header
        className="absolute inset-x-0 top-4 flex justify-between
        items-center max-w-7xl mx-auto py-4 px-5 h-7 z-10">
        <SectionalBrandOverlay base gap="gap-4" className="flex-row-reverse" />
        <Navbar />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout