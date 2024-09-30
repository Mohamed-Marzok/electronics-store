import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { TState } from "../../redux/store";
import { loginValidation } from "../../validations";
import BasicModal from "../ui/BasicModal";
import Input from "../ui/Input";
import { loginInputs } from "../../data";
import Button from "../ui/Button";

interface IFormInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  // state
  const openModal = useSelector((state: TState) => state.ui.loginModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <BasicModal open={openModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginInputs.map((input) => (
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
          className="bg-blue-500 hover:bg-blue-600 text-white"
          style={{ float: "right" }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </BasicModal>
  );
}
