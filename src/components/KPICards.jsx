import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { deepOrange, deepPurple } from "@mui/material/colors"
import EuroIcon from "@mui/icons-material/Euro"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { Typography } from "@mui/material"
const KPICards = () => {
  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <EuroIcon />,
      amount: "€12000",
      color: deepPurple[700],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "Profit",
      icon: <ShoppingBasketIcon />,
      amount: "€35000",
      color: "purple",
      bgColor: "hotpink",
    },
  ]
  return (
    <Stack justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
      {kpiData.map((data) => (
        <Paper key={data.id} elevation={3} sx={{ display: "flex" }}>
          <Avatar
            sx={{
              bgcolor: data.bgColor,
              color: data.color,
              width: 60,
              height: 60,
            }}
          >
            {data.icon}
          </Avatar>

          <Box>
            <Typography>{data.title}</Typography>
            <Typography>{data.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  )
}

export default KPICards