import { useEffect } from "react"
// import useAxios from "../services/useAxios"
import useStockRequest from "../services/useStockRequest"

// export const getFirms = async () => {
//   try {
//     const { data } = axiosToken("/firms")
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

const Firms = () => {
  const { getFirms } = useStockRequest()
  // const { axiosToken } = useAxios()

  useEffect(() => {
    getFirms()
  }, [])

  return <div>Firms</div>
}

export default Firms