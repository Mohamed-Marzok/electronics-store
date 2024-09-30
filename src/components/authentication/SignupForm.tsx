import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { signupInputs } from "../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupValidation } from "../../validations";
import { useSelector } from "react-redux";
import { TState } from "../../redux/store";
import BasicModal from "../ui/BasicModal";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image?: FileList;
}

export default function SignupForm() {
  const openModal = useSelector((state: TState) => state.ui.signupModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(signupValidation),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <BasicModal open={openModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {signupInputs.map((input) => (
          <Input
            key={input.id}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            id={input.id}
            errorMsg={errors[input.name]?.message}
            {...register(input.name)}
          />
        ))}
        <Button
          className="bg-blue-500 hover:bg-blue-600 "
          style={{ float: "right" }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </BasicModal>
  );
}
