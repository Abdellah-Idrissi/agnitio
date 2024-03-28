import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputWithLabel } from "./InputWLabel";
import { Checkbox } from "../ui/checkbox";

export function HomeForm() {
  return (
    <Card className="w-full lg:w-1/2">
      <CardHeader>
        <CardTitle>Login - Sign Up</CardTitle>
        <CardDescription>Continue to your account</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid w-full items-center gap-5  my-1 md:mt-3">
          <div className="flex flex-col space-y-1.5">
            <InputWithLabel type="email" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <InputWithLabel type="password" />
          </div>
        </div>

        <p className="text-neutral-700 text-sm mt-5 lg:mt-6 underline underline-offset-[2px] cursor-pointer">
          Forgot Password ?
        </p>

        <div className="flex items-center space-x-2 mt-8 ">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember Me
          </label>
        </div>
      </CardContent>

      <CardFooter className="block">
        <div className="flex justify-between mt-2 w-full">
          <Button>Login</Button>
          <Button variant="outline">Sign Up</Button>
        </div>

        <p className="text-neutral-700 text-sm mt-6 cursor-pointer">
          Don&apos;t have an account?{" "}
          <span className="text-neutral-800 font-medium underline">
            Sign Up now !
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}
