import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TState } from "../../redux/store";
import { useTheme } from "next-themes";
interface ISetting {
  name: string;
  route: string;
}
const settings: ISetting[] = [
  { name: "Profile", route: "/profile" },
  { name: "LogOut", route: "/" },
];
export default function UserAvatar() {
  // state
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const user = useSelector((state: TState) => state.user.user);
  const { theme } = useTheme();
  //   handler Funcation
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleUserClick = (setting: ISetting) => {
    if (setting.name === "LogOut") {
      navigate(`${setting.route}`);
    } else if (setting.name === "Profile") {
      navigate(`${setting.route}/${user.id}`);
    }
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.name} src={user.image} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: "45px",
          "& .MuiPaper-root": {
            backgroundColor: theme === "dark" ? "#333" : "#fff", // dynamic background color
            color: theme === "dark" ? "#fff" : "#000", // dynamic text color
          },
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: theme === "dark" ? "#555" : "#f0f0f0",
              },
            }}
            key={setting.name}
            onClick={() => handleUserClick(setting)}
          >
            <Typography sx={{ textAlign: "center" }}>{setting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
