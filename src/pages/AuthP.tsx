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
import ModeToggle from "@/components/mode-toogle"
import BgLogin from "@/assets/images/media.jpg";
import Icon from "@/assets/icons/pdu.svg";

export default function LoginForm() {
  return (
    <div>
      <div className="absolute z-10 m-2">
        <ModeToggle />
      </div>
      <div className="relative flex h-screen w-full items-center justify-center">
        <div>
          <img
            className="absolute inset-0 z-0 h-screen w-full object-cover"
            alt="Background"
            src={BgLogin}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10">
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <div className="flex space-x-4">
              <img src={Icon} alt="icon" className="self-center h-16"/>
              <div className="flex-col">
              <CardTitle className="text-3xl self-center">Login</CardTitle>
              <CardTitle className="text-1xl self-center">Computer Vision Monitoring</CardTitle>
              </div>
              </div>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <Button variant="outline" className="w-full">
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
