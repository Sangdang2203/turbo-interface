import { FmdGoodRounded, PersonRounded, ReadMoreRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";


const JobRequirement = () => {
  return (
    <>
      <Box className="container grid sm:grid-cols-4 gap-x-6 gap-y-6 mb-10">
        <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">

          <CardContent>
            <Box className="mb-16">
              <Typography className="text-lg font-normal mb-2">Tuyển dụng Nhân Viên IT System Administrator</Typography>
              <Button startIcon={<PersonRounded />} className="font-extralight">Số lượng: 1</Button>
              <Button startIcon={<FmdGoodRounded />} className="font-extralight">Nơi làm việc: TPHCM</Button>
            </Box>
          </CardContent >
          <CardActions className="absolute bottom-1 left-1">
            <Button href="/" className="hover:border-blue-400 p-3 border" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
          </CardActions>
        </Card >
      </Box >
    </>
  )
}
export default JobRequirement;