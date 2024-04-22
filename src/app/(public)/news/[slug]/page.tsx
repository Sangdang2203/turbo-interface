'use client';

import theme from "../../../../../public/images/themePost.jpeg";
import CustomRating from "@/components/CustomRating";
import Loading from "@/components/Loading";
import { ReadMoreRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Container, Paper, Typography } from "@mui/material";
import { fetchPosts } from "app/methods/method";
import Image from "next/image";
import * as React from "react";
import { Post } from "types/interfaces";

export default function PostDetail() {
  const [loading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState<Post>();
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    Promise.all([fetchPosts()])
      .then(() => {
        const shuffledPosts = posts.sort(() => Math.random() - 0.5);
        const relatedPosts = shuffledPosts.slice(0, 4);
        setPosts(relatedPosts);
        setLoading(false);
      })
  }, [])
  return (
    <>
      {loading ? (<Loading />)
        :
        (<Box>
          <Box className="relative flex flex-col items-center text-center -mt-6">
            <Image src={theme} alt="" className="w-full h-[500px]"></Image>
            <Box className="absolute bottom-1/2 text-white w-3/4">
              <Typography className="text-xl leading-10 font-bold uppercase text-wrap overflow-hidden text-ellipsis text-with-shadow">
                {post?.title}
              </Typography>
            </Box>
          </Box>

          <Container>
            <div>{post?.content}</div>
            <CustomRating />

          </Container>


          <Typography className="my-10 text-center text-xl text-sky-600">Bài viết liên quan</Typography>
          <Box className="container grid sm:grid-cols-4 gap-x-6 gap-y-6 mb-10">
            {posts && posts.map((item) => {
              return (
                <Card key={item.id} className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
                  <Image src="" className="w-full h-auto" alt="cloudServer" />
                  <CardContent>
                    <Box className="mb-16">
                      <Typography className="text-xl font-light">Cloud Server</Typography>
                      <Typography className="font-extralight">Cụm máy chủ Cloud với Firewall cùng mạng nội bộ riêng biệt, trở thành trung tâm dữ liệu ảo cho doanh nghiệp thực hiện chuyển đổi số.</Typography>
                    </Box>
                  </CardContent>
                  <CardActions className="absolute bottom-1 left-1">
                    <Button href={`/news/${item?.slug}`} className="hover:border-blue-400 p-3 border" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
                  </CardActions>
                </Card>
              )
            })}
          </Box>

        </Box>)}
    </>
  )
}