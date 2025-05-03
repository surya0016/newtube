import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import MainSection from "./main-section"
import { Separator } from "@/components/ui/separator"
import PersonalSection from "./personal-section"

const HomeSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="pt-16 z-40 border-none">
      <SidebarContent className="bg-background">
        <MainSection/>
        <Separator/>
        <PersonalSection/>
      </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar