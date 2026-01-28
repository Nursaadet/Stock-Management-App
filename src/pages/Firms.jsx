import { useEffect } from "react"
// import useAxios from "../services/useAxios"
import useStockRequest from "../services/useStockRequest"
import { useSelector } from "react-redux"

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
    getStock("firms")
    getStock("sales")
  }, [])

  console.log(firms)
  return <div>Firms</div>
}

export default Firms
