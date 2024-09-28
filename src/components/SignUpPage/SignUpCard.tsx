// import useForm from "react-hook-form";
import { Colors } from "@/theme/colors";
import { Separator } from "../ui/separator";

import SignUpForm from "./SignUpForm";
const SignUpCard = () => {
  return (
    <div className="flex">
      <div className=" flex flex-col rounded-[20px] border border-neutral-20 p-8">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpCard;

// export default LoginForm;
