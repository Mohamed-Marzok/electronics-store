import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";

interface IProps {
  setDeleteOpen: (open: boolean) => void;
  setEditOpen: (open: boolean) => void;
}

export default function DeleteandUpdateBtn({
  setDeleteOpen,
  setEditOpen,
}: IProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { theme } = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    setDeleteOpen(true);
    handleClose();
  };
  const handleEdit = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    setEditOpen(true);
    handleClose();
  };

  return (
    <div className="absolute top-0 -right-3">
      <IconButton
        color="warning"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: theme === "dark" ? "#374151" : "#fff",
            color: theme === "dark" ? "#fff" : "#374151",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            borderRadius: "8px",
          },
        }}
        sx={{ p: 0, m: 0 }}
      >
        <MenuItem onClick={(e) => handleEdit(e)}>Edit</MenuItem>
        <MenuItem onClick={(e) => handleDelete(e)}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
