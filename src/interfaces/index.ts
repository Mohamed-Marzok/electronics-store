// Common Input Interface
export interface IInputProps {
  type: string;
  label: string;
  placeholder: string;
  id: string;
  name: string;
}

export interface ILoginInput extends Omit<IInputProps, "name"> {
  name: "email" | "password";
}

export interface ISignupInput extends Omit<IInputProps, "name"> {
  name: "email" | "password" | "name" | "confirmPassword" | "image";
}

export interface IAddProductInput extends Omit<IInputProps, "name"> {
  name: "title" | "body" | "price" | "phone";
}

export interface IProduct {
  author: {
    id: number;
    name: string;
    email: string;
    image: string;
  };
  id: number;
  imageURL: string;
  title: string;
  price: number;
  numOfLikes: number;
}

export interface IProductById {
  id: number;
  imagesURL: string[];
  title: string;
  price: number;
  numOfLikes: number;
  body: string;
  phone: string;
  author: {
    id: number;
    name: string;
    email: string;
    image: string;
  };
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  image: string;
}
export interface IProfile {
  id: number;
  name: string;
  email: string;
  image: string;
  products: IProduct[];
}
