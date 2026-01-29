import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { pink, deepPurple, amber } from "@mui/material/colors"
import PaidIcon from "@mui/icons-material/Paid"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import { Typography } from "@mui/material"
const KPICards = () => {
  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <PaidIcon />,
      amount: "€12000",
      color: deepPurple[700],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "Profit",
      icon: <ShoppingBasketIcon />,
      amount: "€35000",
      color: pink[700],
      bgColor: pink[100],
    },
    {
      id: 3,
      title: "purchases",
      amount: "€40000",
      icon: <LocalMallIcon />,
      color: amber[700],
      bgColor: amber[100],
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