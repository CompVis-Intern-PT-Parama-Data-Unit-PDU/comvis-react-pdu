import { redirect } from "react-router-dom";

type LoginActionReturn =
  | { email?: string; password?: string }
  | { error: string }
  | Response;

export async function loginAction({
  request,
}: {
  request: Request;
}): Promise<LoginActionReturn> {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const errors: { email?: string; password?: string } = {};

    if (typeof email !== "string" || !email.includes("@")) {
      errors.email = "That doesn't look like an email address";
    }
    if (typeof password !== "string" || password.length < 6) {
      errors.password = "Password must be > 6 characters";
    }
    if (Object.keys(errors).length) {
      return errors;
    }

    const response = await fetch('http://localhost:3001/api/auth/login' , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { error: error.message || "Login failed" };
    }

    await response.json();
    return redirect("/dashboard");
  } catch (error) {
    throw new Error("Network occurred");
  }
}

export async function loginLoader() {
  try {
    const response = await fetch('/api/auth/verify', {
      credentials: 'include'
    });
    return response.ok 
      ? redirect("/dashboard") 
      : null;
  } catch {
    return null;
  }
}