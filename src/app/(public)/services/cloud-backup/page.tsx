"use client";

import React from "react";
import theme_card from "../../../images/theme_card.png";
import cloudServer_icon_01 from "../../../images/cloudServer/cloudServer_icon_01.png"
import cloudServer_icon_02 from "../../../images/cloudServer/cloudServer_icon_02.png"
import cloudServer_icon_03 from "../../../images/cloudServer/cloudServer_icon_03.png"
import { Container, Box, Typography, Card, Grid, Divider, TextField, FormControlLabel, Tab, Tabs, Slider, Input, Button } from "@mui/material";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function CloudGPU() {
  const [month, setMonth] = React.useState(1);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setMonth(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (month < 1) {
      setMonth(1);
    } else if (month > 12) {
      setMonth(12);
    }
  };
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", py: 10 }}>
          <Typography className="text-[2.5rem] font-light text-sky-900">
            Bảng giá dịch vụ sao lưu dữ liệu đám mây
          </Typography>
          <Typography> Với Cloud Backup, dữ liệu của bạn sẽ được bảo vệ an toàn khi gặp sự cố </Typography>
          <Button href="tel:0769999967" variant="contained" color="info" className="my-5">Liên hệ ngay để nhận ưu đãi hấp dẫn</Button>
        </Box>

        <div className="container grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
          <Card className="relative rounded-xl hover:shadow-lg cursor-pointer  text-sky-900">
            <div className="flex flex-col justify-center items-center p-3">
              <Image src={theme_card} className="w-full h-auto rounded-xl relative" alt="Minh bạch chi phí" />

              <div className="absolute text-center">
                <Typography className="text-[1.5rem] font-bold pb-10">Starter tiết kiệm 20%</Typography>
                <Typography className="font-extralight text-justify px-3">
                  Hỗ trợ ảo hóa VMware/Hyper-V
                </Typography>
                <Typography className="font-extralight px-3">
                  300 GB dung lượng lưu trữ cloud
                </Typography>
                <Typography className="font-extralight px-3">
                  01 máy chủ ảo được sao lưu
                </Typography>
                <Typography className="font-extralight px-3">
                  Khôn giới hạn bản sao lưu
                </Typography>
              </div>
            </div>
          </Card>

          <Card className="relative rounded-xl hover:shadow-lg cursor-pointer  text-sky-900">
            <div className="flex flex-col justify-center items-center p-3">
              <Image src={theme_card} className="w-full h-auto rounded-xl relative" alt="Minh bạch chi phí" />

              <div className="absolute text-center">
                <Typography className="text-[1.5rem] font-bold pb-10">Pro tiết kiệm 35%</Typography>
                <Typography className="font-extralight text-justify px-3">
                  Hỗ trợ ảo hóa VMware/Hyper-V
                </Typography>
                <Typography className="font-extralight px-3">
                  600 GB dung lượng lưu trữ cloud
                </Typography>
                <Typography className="font-extralight px-3">
                  03 máy chủ ảo được sao lưu
                </Typography>
                <Typography className="font-extralight px-3">
                  Khôn giới hạn bản sao lưu
                </Typography>
              </div>
            </div>
          </Card>

          <Card className="relative rounded-xl hover:shadow-lg cursor-pointer  text-sky-900">
            <div className="flex flex-col justify-center items-center p-3">
              <Image src={theme_card} className="w-full h-auto rounded-xl relative" alt="Minh bạch chi phí" />

              <div className="absolute text-center">
                <Typography className="text-[1.5rem] font-bold pb-10">Enterise tiết kiệm 45%</Typography>
                <Typography className="font-extralight text-justify px-3">
                  Hỗ trợ ảo hóa VMware/Hyper-V
                </Typography>
                <Typography className="font-extralight px-3">
                  1500 GB dung lượng lưu trữ cloud
                </Typography>
                <Typography className="font-extralight px-3">
                  06 máy chủ ảo được sao lưu
                </Typography>
                <Typography className="font-extralight px-3">
                  Khôn giới hạn bản sao lưu
                </Typography>
              </div>
            </div>
          </Card>


        </div>

        <Card className="rounded-2xl my-10">
          <Grid container className="shadow-lg pb-5">
            <Grid item xs={12} md={5} className="flex flex-col items-center justify-center">
              <Typography className="text-[1.3rem] font-semibold">Cần sao lưu trên 2TB+ dung lượng?</Typography>
              <Typography className="w-3/4 text-justify">
                Liên hệ với chúng tôi để được tư vấn gói sao lưu với dung lượng lớn và nhiều tính năng hơn.
              </Typography>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className="pt-5" value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Hàng tháng" {...a11yProps(0)} />
                  <Tab label="Hàng năm" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Typography className="font-bold text-center">{100 * month} GB Dung Lượng Sao Lưu</Typography>
                <Typography className="text-[2rem] text-center text-yellow-600 font-bold">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(
                    120000 * month
                  )}
                </Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Typography className="font-bold text-center">{100 * month} GB Dung Lượng Sao Lưu</Typography>
                <Typography className="text-[2rem] text-center text-yellow-600 font-bold">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(
                    78000 * month
                  )}
                </Typography>
              </CustomTabPanel>

              <Box sx={{ width: 300 }}>
                <Slider
                  value={typeof month === 'number' ? month : 0}
                  min={1}
                  max={20}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={7} className=" text-sky-900">
              <Grid>
                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_01} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold pt-10">Chi phí phù hợp</Typography>
                    <Typography className="w-3/4 text-justify">
                      Không cần lo lắng ngân sách về các cấp giá. Lựa chọn gói dung lượng lưu trữ đám mây phù hợp với nhu cầu sao lưu của doanh nghiệp.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_02} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Bảo mật đầu cuối</Typography>
                    <Typography className="w-3/4 text-justify">
                      Mục đích chính của sao lưu đám mây là bảo vệ tất cả dữ liệu của bạn, vì vậy mã hóa đầu cuối là một tính năng quan trọng được tích hợp sẵn.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_03} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Ổn định và tin cậy</Typography>
                    <Typography className="w-3/4 text-justify">
                      Giảm thời gian khôi phục (RPO) và tạo bản sao lưu cực nhanh từ ảnh chụp với hệ thống lưu trữ mở rộng không giới hạn.
                    </Typography>
                  </Box>
                </Box>


              </Grid>
            </Grid>
          </Grid>
        </Card>


        <Box >
          <Box>
            <Box my={5} sx={{ textAlign: "center" }}>
              <Typography className="text-[2rem] font-light text-sky-900"> Bảng giá dịch vụ Cloud Backup (-35%) </Typography>
              <Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
            </Box>
            <div className='grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10 text-center'>
              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <div className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > business starter</Typography>
                </div>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="Hỗ trợ ảo hóa VMware/Hyper-V" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="300 GB dung lượng lưu trữ Cloud" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="1 máy chủ ảo được sao lưu" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="Không giới hạn số bản sao lưu" /></div>

                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 500.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <div className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > business standard</Typography>
                </div>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="Hỗ trợ ảo hóa VMware/Hyper-V" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="300 GB dung lượng lưu trữ Cloud" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="1 máy chủ ảo được sao lưu" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="Không giới hạn số bản sao lưu" /></div>

                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 980.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <div className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > business plus</Typography>
                </div>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="Hỗ trợ ảo hóa VMware/Hyper-V" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="300 GB dung lượng lưu trữ Cloud" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="1 máy chủ ảo được sao lưu" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[300px]" defaultValue="Không giới hạn số bản sao lưu" /></div>

                  <Typography className="uppercase text-[1.5rem]  font-bold py-5 text-yellow-600" > 2.015.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>
            </div>
          </Box>

          <div className=" text-sky-900">
            <Typography className="text-[2rem] font-light text-center py-5"> Bảng giá tài nguyên bổ sung </Typography>

            <div className='grid sm:grid-cols-4 gap-x-6 gap-y-6 mb-10'>
              <div className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <div className='py-5'>
                  <Typography className='text-[0.9rem] font-bold'>Bản quyền máy chủ vật lý</Typography>
                  <Typography className='text-sm pt-2'>Tặng 100 GB dung lượng sao lưu / license</Typography>
                </div>
                <Divider />
                <FormControlLabel className="py-3 text-yellow-600"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="15 USD x 1 tháng"
                />
              </div>

              <div className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <div className='py-5'>
                  <Typography className='text-[0.9rem] font-bold'>Bản quyền cho máy chủ ảo</Typography>
                  <Typography className='text-sm pt-2'>Tặng 100 GB dung lượng sao lưu / license</Typography>
                </div>
                <Divider />
                <FormControlLabel className="py-3 text-yellow-600"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="12 USD x 1 tháng"
                />
              </div>

              <div className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <div className='py-5'>
                  <Typography className='text-[0.9rem] font-bold'>Bản quyền PC/Laptop/Workstation</Typography>
                  <Typography className='text-sm pt-2'>Tặng 100 GB dung lượng sao lưu / license </Typography>
                </div>
                <Divider />
                <FormControlLabel className="py-3 text-yellow-600"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="6 USD x 1 tháng"
                />
              </div>

              <div className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <div className='py-5'>
                  <Typography className='text-[0.9rem] font-bold'>WAN Acceleration - Unlimited VM&apos;s</Typography>
                  <Typography className='text-sm pt-2'>Thêm 100 GB Attached Storage</Typography><br />
                </div>
                <Divider />
                <FormControlLabel className="py-3 text-yellow-600"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="70 USD x 1 tháng"
                />
              </div>
            </div>
          </div>
        </Box >

        <Box pb={5}>
          <Typography className="text-[2rem] text-sky-900 font-light text-center py-5"> Các câu hỏi thường gặp </Typography>
          <Grid container className=" text-sky-900">
            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-xl font-semibold">Tôi có thể hủy bất cứ lúc nào không?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Bạn có thể hủy dịch vụ Cloud Backup bất cứ lúc nào. Không có câu hỏi nào được hỏi
                khi bạn hủy nhưng chúng tôi sẽ đánh giá cao nếu bạn cung cấp cho chúng tôi một số phản hồi.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-xl font-semibold">Gói dịch vụ dùng thử?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Chắc chắn có. Hãy dùng thử dịch vụ Cloud Backup miễn phí 30 ngày để trải nghiệm hiệu quả và sự đơn giản ngay từ đầu.
                Trong vòng vài phút sau khi đăng ký, bạn sẽ có thể sử dụng dịch vụ của mình.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-xl font-semibold">Có tính phí truyền dữ liệu hàng tháng không?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Bạn sẽ không phải chịu bất kỳ khoản phí truyền dữ liệu nào đến hệ thống sao lưu lưu trữ đám mây của chúng tôi.
                Bạn có thể sao lưu và khôi phục bao nhiêu phiên bản tùy ý.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-xl font-semibold">Cách tính chi phí sao lưu như thế nào?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Bạn chỉ phải trả một khoản phí thấp cho mỗi máy chủ cần sao lưu và dung lượng lưu trữ,
                không có thêm gì khác. Chiết khấu cao khi bạn cam kết sử dụng lâu dài.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}