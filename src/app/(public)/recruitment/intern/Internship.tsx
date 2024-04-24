import { PersonRounded, FmdGoodRounded, ReadMoreRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";


const Internship = () => {
  return (
    <>
      <Box className="container grid sm:grid-cols-4 gap-x-6 gap-y-6 mb-10">
        <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">

          <CardContent>
            <Box className="mb-16">
              <Typography className="text-lg font-normal mb-2">Tuyển dụng Nhân Viên Marketing</Typography>
              <Box className="flex items-center">
                <PersonRounded fontSize="medium" />
                <Typography className="px-3 font-extralight">Số lượng: 1</Typography>
              </Box>

              <Box className="flex items-center my-3">
                <FmdGoodRounded fontSize="medium" />
                <Typography className="px-3 font-extralight">Nơi làm việc: TPHCM</Typography>
              </Box>
            </Box>
          </CardContent >
          <CardActions className="absolute bottom-1 left-1">
            <Button href="/" className="hover:border-blue-400 p-3  border" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
          </CardActions>
        </Card >
      </Box >
    </>
  )
}
export default Internship;