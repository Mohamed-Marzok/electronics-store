import { ReactNode } from "react";
import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { TDispatch } from "../../redux/store";
import { closeAllModal } from "../../redux/uiSlice";
import { useTheme } from "next-themes";

interface IProps {
  open: boolean;
  children: ReactNode;
  closeBtn?: boolean;
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  closeBtn = true,
  children,
}: IProps) {
  const dispatch = useDispatch<TDispatch>();
  const { theme } = useTheme();

  return (
    <Modal
      open={open}
      onClose={() => dispatch(closeAllModal())}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={style}
        className={`${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } p-5 rounded-md`}
      >
        {closeBtn && (
          <IconButton
            aria-label="close"
            onClick={() => dispatch(closeAllModal())}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon
              className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}
            />
          </IconButton>
        )}

        <Box id="modal-description">{children}</Box>
      </Box>
    </Modal>
  );
}
