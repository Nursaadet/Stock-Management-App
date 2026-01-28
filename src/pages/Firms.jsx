import { useEffect } from "react"
// import useAxios from "../services/useAxios"
import useStockRequest from "../services/useStockRequest"
import { useSelector } from "react-redux"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"

// export const getFirms = async () => {
//   try {
//     const { data } = axiosToken("/firms")
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

const Firms = () => {
  // const { axiosToken } = useAxios()
  // const { getFirms, getSales } = useStockRequest()
  const { getStock } = useStockRequest()
  const { firms } = useSelector((state) => state.stock)

  useEffect(() => {
    // getFirms()
    // getSales()
    // getStock("sales")
    getStock("firms")
  }, [])

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={2}>
        Firms
      </Typography>

      <Button variant="contained">New Firm</Button>

      <Grid container>
        {firms.map((firm) => (
          <Grid item></Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Firms
