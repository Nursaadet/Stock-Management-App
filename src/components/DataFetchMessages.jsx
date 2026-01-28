import Alert from "@mui/material/Alert"
import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

export const ErrorMessage = () => {
  return <Alert severity="error">Veriler çekilemedi</Alert>
}

const TableSkeleton = () => {
  return (
    <div>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width="100%" height={90} />
        <Skeleton variant="rectangular" width="100%" height={50} />
        <Skeleton variant="rectangular" width="100%" height={50} />
        <Skeleton variant="rectangular" width="100%" height={50} />
        <Skeleton variant="rectangular" width="100%" height={30} />
      </Stack>
    </div>
  )
}

export default TableSkeleton