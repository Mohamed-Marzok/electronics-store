import {
  IAddProductInput,
  ILoginInput,
  IProduct,
  IProductById,
  IProfile,
  ISignupInput,
  IUser,
} from "../interfaces";

export const loginInputs: ILoginInput[] = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    name: "email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
  },
];
export const addProductInputs: IAddProductInput[] = [
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "Enter product title",
    name: "title",
  },
  {
    id: "body",
    label: "Body",
    type: "text",
    placeholder: "Enter product body",
    name: "body",
  },
  {
    id: "price",
    label: "Price",
    type: "number",
    placeholder: "Enter product price",
    name: "price",
  },
  {
    id: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Enter your phone",
    name: "phone",
  },
];
export const signupInputs: ISignupInput[] = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    name: "name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    name: "email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
  },

  {
    id: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    name: "confirmPassword",
  },
  {
    id: "image",
    label: "Profile Image",
    type: "file",
    placeholder: "Upload your profile image",
    name: "image",
  },
];
export const products: IProduct[] = [
  {
    author: {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      image: "https://via.placeholder.com/150",
    },
    id: 1,
    imageURL:
      "https://cdn.pixabay.com/photo/2016/09/28/08/48/iduino-uno-r3b-1699990_640.png",
    price: 90,
    title: "Arduino Uno",
    numOfLikes: 25,
  },
  {
    author: {
      id: 8,
      name: "Alice Smith",
      email: "alicesmith@example.com",
      image: "https://via.placeholder.com/150",
    },
    id: 2,
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTqVf6nKsdZxRiKaHzA2CCDceBxlfsKbNZQ&s",
    price: 120,
    title: "Raspberry Pi 4",
    numOfLikes: 18,
  },
  {
    author: {
      id: 6,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      image: "https://via.placeholder.com/150",
    },
    id: 3,
    imageURL:
      "https://cdn.pixabay.com/photo/2023/01/20/03/27/circuits-7730653_1280.png",
    price: 5,
    title: "Breadboard",
    numOfLikes: 7,
  },
  {
    author: {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      image: "https://via.placeholder.com/150",
    },
    id: 4,
    imageURL:
      "https://cdn.pixabay.com/photo/2017/01/31/17/09/diode-2025636_1280.png",
    price: 0.5,
    title: "Diode 1N4007",
    numOfLikes: 11,
  },
  {
    author: {
      id: 2,
      name: "John Doe",
      email: "johndoe@example.com",
      image: "https://via.placeholder.com/150",
    },
    id: 5,
    imageURL:
      "https://cdn.pixabay.com/photo/2016/10/04/17/21/capacitor-1714934_640.png",
    price: 0.2,
    title: "Capacitor 100uF",
    numOfLikes: 8,
  },
  {
    author: {
      id: 2,
      name: "Charlie Brown",
      email: "charliebrown@example.com",
      image: "https://via.placeholder.com/150",
    },
    id: 6,
    imageURL:
      "https://cdn.pixabay.com/photo/2012/04/13/12/55/resistor-32290_1280.png",
    price: 0.1,
    title: "Resistor 1k Ohm",
    numOfLikes: 14,
  },
  {
    author: {
      id: 2,
      name: "David Lee",
      email: "davidlee@example.com",
      image: "https://via.placeholder.com/150",
    },
    id: 7,
    imageURL:
      "https://cdn.pixabay.com/photo/2012/04/26/13/04/lcd-42426_640.png",
    price: 15,
    title: "LCD 16x2 Display",
    numOfLikes: 21,
  },
  {
    author: {
      id: 3,
      name: "Eve Adams",
      email: "eveadams@example.com",
      image:
        "https://cdn.pixabay.com/photo/2021/10/09/06/46/baloch-6693129_960_720.jpg",
    },
    id: 8,
    imageURL:
      "https://cdn.pixabay.com/photo/2017/08/12/06/11/electronic-2633615_640.jpg",
    price: 2,
    title: "5V Relay Module",
    numOfLikes: 13,
  },
];
export const productById: IProductById = {
  id: 1,
  imagesURL: [
    "https://cdn.pixabay.com/photo/2016/03/31/18/38/icon-1294526_640.png",
    "https://cdn.pixabay.com/photo/2013/07/12/17/57/analog-152668_640.png",
    "https://cdn.pixabay.com/photo/2013/07/12/17/56/sensor-152662_640.png",
  ],
  title: "Wireless Headphones",
  price: 199.99,
  numOfLikes: 120,
  body: "High-quality wireless headphones with noise-cancellation and 20-hour battery life.",
  phone: "01010604596",
  author: {
    id: 2,
    name: "John Doe",
    email: "johndoe@example.com",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
  },
};

export const user: IUser = {
  id: 2,
  name: "Mohamed Marzok",
  email: "aaa116510@gmail.com",
  image:
    "https://cdn.pixabay.com/photo/2021/02/08/07/51/fishermen-5994018_640.jpg",
};
export const profile: IProfile = {
  id: 2,
  image:
    "https://cdn.pixabay.com/photo/2021/02/08/07/51/fishermen-5994018_640.jpg",
  name: "John Doe",
  email: "johndoe@example.com",
  products: [
    {
      author: {
        id: 2,
        name: "John Doe",
        email: "johndoe@example.com",
        image: "https://via.placeholder.com/150",
      },
      id: 5,
      imageURL:
        "https://cdn.pixabay.com/photo/2016/10/04/17/21/capacitor-1714934_640.png",
      price: 0.2,
      title: "Capacitor 100uF",
      numOfLikes: 8,
    },
    {
      author: {
        id: 2,
        name: "Charlie Brown",
        email: "charliebrown@example.com",
        image: "https://via.placeholder.com/150",
      },
      id: 6,
      imageURL:
        "https://cdn.pixabay.com/photo/2012/04/13/12/55/resistor-32290_1280.png",
      price: 0.1,
      title: "Resistor 1k Ohm",
      numOfLikes: 14,
    },
    {
      author: {
        id: 2,
        name: "David Lee",
        email: "davidlee@example.com",
        image: "https://via.placeholder.com/150",
      },
      id: 7,
      imageURL:
        "https://cdn.pixabay.com/photo/2012/04/26/13/04/lcd-42426_640.png",
      price: 15,
      title: "LCD 16x2 Display",
      numOfLikes: 21,
    },
  ],
};
