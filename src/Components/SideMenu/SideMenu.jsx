import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import avatarUser from "../../assets/png/avatar robot.png";
import logoOctopy from "../../assets/png/Logo Octopy.png";
import logoCompleto from "../../assets/png/logo_octopy completo.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import AddRoadOutlinedIcon from "@mui/icons-material/AddRoadOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{ color: "grey" }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashdoard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "#f2f0f0 !important",
          marginTop: "-8px",
          borderRadius: "0 40px 0 0",
          boxShadow: "0 0 10px #71717A",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          marginTop: "20px",
        },
        "& .pro-inner-item:hover": {
          color: "#000 !important",
        },
        "& .pro-menu-item.active": {
          color: "#000 !important",
        },
        "& .pro-sidebar .pro-menu .pro-menu-item": {
          fontSize: "18px",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        {isCollapsed && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="left"
            ml="10px"
          >
            <img
              alt="logo-octopy"
              width="50px"
              height="50px"
              src={logoOctopy}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                marginTop: "30px",
                marginLeft: "6px",
              }}
            />
          </Box>
        )}
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0px 20px 0px",
              color: "grey",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="-10px"
              >
                <img
                  alt="logo-octopy"
                  width="180px"
                  height="100px"
                  src={logoCompleto}
                  style={{
                    cursor: "pointer",
                    // borderRadius: "50%",
                  }}
                />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10"}>
            <Item
              title="Tablero"
              to="/"
              icon={<DashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubMenu title="Robots" icon={<SmartToyOutlinedIcon />}>
              <Item
                title="General"
                to="/generalrobots"
                icon={<SmartToyOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              >
                <Typography variant="h6"> General</Typography>
              </Item>
              <Item
                title="Particular"
                to="/privaterobots"
                icon={<SmartToyOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              >
                <Typography variant="h6"> Particular</Typography>
              </Item>
            </SubMenu>

            <Item
              title="Mapas"
              to="/maps"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Waypoints"
              to="/waypoints"
              icon={<AddRoadOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Rutas"
              to="/paths"
              icon={<RouteOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Metricas"
              to="/metrics"
              icon={<StackedBarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <SubMenu
              title="Configuracion"
              icon={<SettingsOutlinedIcon />}
              sx={{ fontSize: "30px" }}
            >
              <Item
                title="Usuarios"
                to="/users"
                icon={<GroupOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              >
                <Typography variant="h6"> General</Typography>
              </Item>
              <Item
                title="Roles"
                to="/roles"
                icon={<NoAccountsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              >
                <Typography variant="h6"> General</Typography>
              </Item>
            </SubMenu>
          </Box>
          {isCollapsed && ( // Mostrar imágenes solo cuando está colapsado
            <Box md="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: "160px" }}
              >
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={avatarUser}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>
          )}
          {!isCollapsed && ( // Mostrar imágenes solo cuando está desplegado
            <Box md="25px">
              <Box
                display="flex"
                justifyContent="left"
                alignItems="left"
                sx={{ marginTop: "160px" }}
              >
                <img
                  alt="profile-user"
                  width="70px"
                  height="70px"
                  src={avatarUser}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  fontSize="20px"
                  paddingTop="25px"
                  padding-left="20px"
                  color="grey"
                  sx={{ m: "10px 0 0 0" }}
                  alignContent="right"
                >
                  Gerardo Macuil
                </Typography>
              </Box>
            </Box>
          )}
        </Menu>
        {!isCollapsed && (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              fontSize="18px"
              sx={{ fontWeight: "bold" }}
              alignContent="center"
            >
              OCTOPY
            </Typography>
            <Typography sx={{ fontWeight: "lighter" }}>
              &nbsp;2023 V1.0.0
            </Typography>
          </Box>
        )}
        {isCollapsed && (
          <Box display="block" justifyContent="center" alignItems="center">
            <Typography
              fontSize="12px"
              sx={{ fontWeight: "bold", display: "block", textAlign: "center" }}
            >
              OCTOPY
            </Typography>

            <Typography
              fontSize="10px"
              sx={{
                fontWeight: "lighter",
                display: "block",
                textAlign: "center",
              }}
            >
              &nbsp;2023 V1.0.0
            </Typography>
          </Box>
        )}
      </ProSidebar>
    </Box>
  );
};

export { SideMenu };
