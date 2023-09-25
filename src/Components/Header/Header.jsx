import { Box, IconButton, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

const Header = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        sx={{ backgroundColor: "#000", marginTop: "-8px" }}
      >
        <Box display="flex">
          <Typography
            sx={{
              color: "#FAFAFA",
              fontSize: "36px",
              fontFamily: "Roboto",
              fontWeight: "700",
            }}
          >
            PICKING
          </Typography>
        </Box>
        <Box display="flex">
          <IconButton
            size="medium"
            sx={{
              backgroundColor: "#3B82F6",
              "&:hover": { backgroundColor: "#fff" },
              margin: "7px",
            }}
          >
            <PowerSettingsNewOutlinedIcon />
          </IconButton>
          <IconButton
            size="medium"
            sx={{
              backgroundColor: "#3B82F6",
              "&:hover": { backgroundColor: "#fff" },
              margin: "7px",
            }}
          >
            <NotificationsNoneOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export { Header };
