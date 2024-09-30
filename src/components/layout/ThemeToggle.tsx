// components/ThemeToggle.js
import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents hydration issues
  }

  return (
    <IconButton
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      sx={{ color: theme === "dark" ? "white" : "black" }}
    >
      {theme === "dark" ? <LightModeRoundedIcon /> : <NightlightRoundedIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
