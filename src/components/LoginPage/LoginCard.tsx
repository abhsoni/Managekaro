// import useForm from "react-hook-form";
import { Colors } from "@/theme/colors";
import { Separator } from "../ui/separator";
import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
const LoginCard = () => {
  // const router = useRouter();
  return (
    <div className="flex">
      <div className=" flex flex-col rounded-[20px] border border-neutral-20 p-8">
        <LoginForm />
      </div>
      {/* <Text>ffffffffff</Text> */}
    </div>
  );
};

export default LoginCard;

// export default LoginForm;
