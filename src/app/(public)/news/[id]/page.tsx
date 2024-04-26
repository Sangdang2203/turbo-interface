'use client';

import theme from "../../../images/themePost.jpeg";
import CustomRating from "@/components/CustomRating";
import Loading from "@/components/Loading";
import { ReadMoreRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Container, Paper, Typography } from "@mui/material";
import { fetchPosts } from "app/methods/method";
import Image from "next/image";
import Link from 'next/link';
import * as React from "react";
import { ApiResponse, Post } from "types/interfaces";

export default function PostDetail({ params }: { params: { id: string } }) {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [post, setPost] = React.useState<Post>();

  React.useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`/api/posts/${params.id}`, {
        method: "GET",
        cache: "no-cache"
      });

      const payload = (await res.json()) as ApiResponse;

      if (payload.ok) {
        setPost(payload.data)
      }
    }
    fetchPost();
    setLoading(false);
  }, [params.id])

  React.useEffect(() => {
    Promise.all([fetchPosts()])
      .then(data => {
        const [resPosts] = data;
        if (resPosts.ok) {

          setPosts(resPosts.data);
        }
        setLoading(false);
      })
  }, [posts])
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

                  <CardContent>
                    <Box className="mb-16">
                      <Typography className="text-xl font-light">{item.title}</Typography>
                      <Typography className="font-extralight">{item.description}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions className="absolute bottom-1 left-1">
                    <Link href={`news/${item.id}`} className='text-sky-700 no-underline hover:text-sky-500' >Đọc thêm &gt;&gt;</Link>
                  </CardActions>
                </Card>
              )
            })}
          </Box>

        </Box>)}
    </>
  )
}