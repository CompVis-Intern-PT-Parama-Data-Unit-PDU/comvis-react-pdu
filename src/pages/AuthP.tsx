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
import ModeToggle from "@/components/mode-toogle";
import BgLogin from "@/assets/images/media.jpg";
import Icon from "@/assets/icons/pdu.svg";
import { Form, useActionData, useNavigation } from "react-router-dom";

type LoginActionReturn =
  | { email?: string; password?: string }
  | { error: string }
  | Response;

export default function LoginForm() {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const errors = useActionData() as LoginActionReturn;

  const isFieldErrors = (
    data: LoginActionReturn
  ): data is { email?: string; password?: string } => {
    return data && !("error" in data) && !(data instanceof Response);
  };

  const isError = (data: LoginActionReturn): data is { error: string } => {
    return data && "error" in data;
  };

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
                <img src={Icon} alt="icon" className="self-center h-16" />
                <div className="flex-col">
                  <CardTitle className="text-3xl self-center">Login</CardTitle>
                  <CardTitle className="text-1xl self-center">
                    Computer Vision Monitoring
                  </CardTitle>
                </div>
              </div>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form method="POST" action="/" className="grid gap-4">
                <fieldset className="grid gap-2" disabled={busy}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                  {errors && isFieldErrors(errors) && errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </fieldset>
                <fieldset className="grid gap-2" disabled={busy}>
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                  />
                  {errors && isFieldErrors(errors) && errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password}
                    </span>
                  )}
                </fieldset>
                {errors && isError(errors) && (
                  <span className="text-red-500 text-sm">Invalid Credencial</span>
                )}
                <Button type="submit" className="w-full" disabled={busy}>
                  Login
                </Button>
              </Form>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <Button variant="outline" className="w-full" disabled={busy}>
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
