import { IProduct } from "../../interfaces";
import { useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import DeleteandUpdateBtn from "./DeleteandUpdateBtn";
import DeleteModal from "../modals/DeleteModal";
import EditModal from "../modals/EditModal";
import { TState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const [liked, setLiked] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const user = useSelector((state: TState) => state.user.user);
  const navigate = useNavigate();
  // handlerFuncaion
  const handleLikeBtn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setLiked(!liked);
  };
  const productClickHandler = () => {
    navigate(`/product/${product.id}`);
  };
  const avatarClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    navigate(`/profile/${product.author.id}`);
  };
  return (
    <div>
      <div
        role="button"
        key={product.id}
        onClick={productClickHandler}
        className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow relative"
      >
        {user.id === product.author.id && (
          <DeleteandUpdateBtn
            setDeleteOpen={setOpenDeleteModal}
            setEditOpen={setOpenEditModal}
          />
        )}
        <img
          src={product.imageURL}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-200">
            {product.title}
          </h2>
          <Avatar
            alt={product.author.name}
            src={product.author.image}
            sx={{ width: 24, height: 24, cursor: "pointer" }}
            onClick={(e) => {
              avatarClickHandler(e);
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Price: ${product.price}
          </p>

          <div className="flex items-center">
            <IconButton color="error" onClick={(e) => handleLikeBtn(e)}>
              {liked ? <FavoriteIcon /> : <FavoriteBorderRoundedIcon />}
            </IconButton>
            <p className="text-gray-700 dark:text-gray-300">
              {liked ? product.numOfLikes + 1 : product.numOfLikes}
            </p>
          </div>
        </div>
      </div>
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        product={product}
      />
      <EditModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        product={product}
      />
    </div>
  );
}
