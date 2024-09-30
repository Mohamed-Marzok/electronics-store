import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { addProductValidation } from "../../validations";
import { TState } from "../../redux/store";
import { addProductInputs } from "../../data";
import AddProductImageInput from "../products/AddProductImageInput";
import Button from "../ui/Button";
import BasicModal from "../ui/BasicModal";
import Input from "../ui/Input";
interface IFormInput {
  title: string;
  body: string;
  price: number;
  phone: string;
}
export default function AddProductModal() {
  const openModal = useSelector((state: TState) => state.ui.addModal);
  const [images, setImages] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductValidation),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newProduct = {
      ...data,
      imageURL: images,
    };
    console.log(newProduct);
  };

  return (
    <BasicModal open={openModal}>
      <p className="font-bold text-lg mb-4">New Product</p>
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
        <AddProductImageInput images={images} setImages={setImages} />
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
