import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IProduct } from "../../interfaces";
import { addProductValidation } from "../../validations";
import { addProductInputs } from "../../data";
import BasicModal from "../ui/BasicModal";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: IProduct;
}

interface IFormInput {
  title: string;
  body: string;
  price: number;
  phone: string;
}

export default function EditModal({ open, setOpen, product }: IProps) {
  // Set default values from the product
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(addProductValidation),
    defaultValues: {
      title: product.title,
      body: "",
      price: product.price,
      phone: "",
    },
  });

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setOpen(false); // Close the modal after submission if needed
  };

  return (
    <BasicModal open={open} closeBtn={false}>
      <p className="font-bold text-lg mb-4">Edit {product.title}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {addProductInputs.map((input) => (
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
        <div className="flex justify-end space-x-4">
          <Button
            onClick={handleClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 transition-colors"
          >
            Close
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600 "
            style={{ float: "right" }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </BasicModal>
  );
}
