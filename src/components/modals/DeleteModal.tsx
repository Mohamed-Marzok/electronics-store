import { IProduct } from "../../interfaces";
import BasicModal from "../ui/BasicModal";
import Button from "../ui/Button";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: IProduct;
}

export default function DeleteModal({ open, setOpen, product }: IProps) {
  //   handler function
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BasicModal open={open} closeBtn={false}>
      <div className="bg-white dark:bg-gray-800 p-4">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Are you sure you want to delete the {product.title}?
        </p>
        <div className="flex justify-end space-x-4">
          <Button
            onClick={handleClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 transition-colors"
          >
            Close
          </Button>
          <Button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Delete
          </Button>
        </div>
      </div>
    </BasicModal>
  );
}
