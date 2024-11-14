import DashboardL from "@/layout/DashboardL";
import { TeamMembers } from "@/components/team-member"
import { CreateUser } from "@/components/create-user"

export default function UserManagement() {
  return (
    <DashboardL>
        <main className="flex justify-center h-[93%] py-4 space-x-4">
            <TeamMembers/>
            <CreateUser/>
        </main>
    </DashboardL>
  )
}
