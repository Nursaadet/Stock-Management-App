import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import EuroIcon from "@mui/icons-material/Euro"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
const KPICards = () => {
  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <EuroIcon />,
      amount: "€12000",
      color: "pink",
      bgColor: "hotpink",
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
        <Paper key={data.id} elevation={3}>
          merhaba
        </Paper>
      ))}
    </Stack>
  )
}

export default KPICards