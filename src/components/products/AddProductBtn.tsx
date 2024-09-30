import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { openAddModal } from "../../redux/uiSlice";
import { TDispatch } from "../../redux/store";

export default function AddProductBtn() {
  // state
  const dispatch: TDispatch = useDispatch();
  // handler funcation
  const handleAdd = () => {
    dispatch(openAddModal());
  };
  return (
    <Button
      onClick={handleAdd}
      className="bg-green-500 hover:bg-green-700 text-white"
    >
      New
    </Button>
  );
}
