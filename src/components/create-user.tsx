import { Icons } from "@/assets/icons/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area"

export function CreateUser() {
  return (
    <Card className="mr-auto h-full ml-2 w-1/3 border-primary">
    <CardHeader>
      <CardTitle className="text-2xl">Create User</CardTitle>
      <CardDescription>
        Fill out the form to create a user account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <Button variant="outline" className="w-full">
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

    <ScrollArea className="rounded-md h-[260px]">
        <div className="grid gap-2">
          <Label htmlFor="full-name" className="flex justify-between items-baseline">Full Name</Label>
          <Input
            id="full-name"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="grid gap-2 mt-3">
          <Label htmlFor="email" className="flex justify-between items-baseline">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="John@example.com"
            required
          />
        </div>
        <div className="grid gap-2 mt-3">
          <Label htmlFor="employee-number" className="flex justify-between items-baseline">Employee Number </Label>
          <Input
            id="employee-number"
            type="text"
            required
          />
        </div>
        <div className="grid gap-2 mt-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
            </ScrollArea>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </CardContent>
  </Card>
  )
}
