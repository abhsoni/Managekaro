"use client";
import { Colors } from "@/theme/colors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import ButtonWithIcon from "../ui/buttoWithIcon";
import Text from "../ui/text";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
const formSchema = z.object({
  email: z.string().email("Email is not correct"),
  password: z
    .string({
      message: "Password is required",
    })
    .min(6, {
      message: "Password should be atleast 6 characters long",
    })
    .max(50, {
      message: "Password should be less than 50 characters",
    }),
});
function LoginForm() {
  // const [state, action] = useFormState(signup, undefined);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {};
  return (
    <div className="flex justify-center flex-col items-center">
      <Text className="mt-4 mb-8" typography="h1" color={Colors.neutral[100]}>
        Login to ManageKaro
      </Text>
      {/* <GoogleSignUpButton /> */}
      {/* <hr className="my-[24px] w-full " /> */}
      <Form {...form}>
        <form className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="w-full">
                  <Text
                    className="mb-[8px]"
                    typography="body3"
                    color={Colors.neutral[100]}
                  >
                    Email
                  </Text>
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-10 px-4 py-3"
                    placeholder="Enter work email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full my-[20px] mb-8">
                <FormLabel>
                  <Text
                    className="mb-[8px]"
                    typography="body3"
                    color={Colors.neutral[100]}
                  >
                    Enter Password
                  </Text>
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-10 px-4 py-3"
                    type="password"
                    placeholder="Enter Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ButtonWithIcon typeof="submit" onClick={form.handleSubmit(onSubmit)}>
            Login
            {/* <ButtonLoader /> */}
          </ButtonWithIcon>
          <Text
            className="my-4 hover:cursor-pointer"
            color={Colors.Primary[60]}
            typography={"subtitle2"}
            onClick={() => {
              console.log("forgot password clicked!!!");
            }}
          >
            Forgot password?
          </Text>
        </form>
      </Form>
      <Separator color={Colors.neutral[10]} className="mb-4" />
      <Button
        variant={"secondary"}
        size={"lg"}
        className="w-full rounded-[8px]"
        onClick={() => router.push("/signup")}
      >
        Login to existing account
      </Button>
    </div>
  );
}
export default LoginForm;
