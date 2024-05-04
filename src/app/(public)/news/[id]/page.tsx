'use client';

import Image from "next/image";
import Link from 'next/link';
import * as React from "react";
import Loading from "@/components/Loading";
import { fetchPosts } from "app/methods/method";
import { ApiResponse, Post } from "types/interfaces";
import theme from "../../../images/themePost.jpg";
import CustomRating from "@/components/CustomRating";
import { Box, Container, Typography } from "@mui/material";


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
          <Box className="relative flex flex-col items-center text-center">
            <Image src={theme} alt="" className="w-full h-auto" />
            <Box className="absolute bottom-1/2 text-white w-3/4">
              <Typography className="text-xl leading-10 font-bold uppercase text-wrap overflow-hidden text-ellipsis text-with-shadow">
                {post?.title}
              </Typography>
            </Box>
          </Box>

          <Container>
            <Box my={2}><CustomRating /></Box>
            <Box className='w-3/4 mx-auto'> {post?.content} </Box>
          </Container>


          <Typography className="my-10 text-center text-xl text-sky-600">Bài viết liên quan</Typography>
          <Container className="container grid sm:grid-cols-4 gap-x-6 gap-y-6 pb-10">
            {posts && posts.map((item) => {
              return (
                <Box key={item.id} className="relative shadow-2xl p-1 rounded-md hover:scale-105 duration-700 cursor-pointer">
                  <Box className="mb-16 px-3">
                    <Typography className="text-xl line-clamp-2"> {item.title} </Typography>
                    <Typography className="text-sm pt-2 line-clamp-2"> {item.description} </Typography>
                  </Box>

                  <Box className="absolute bottom-1 left-1">
                    <Link href={`/news/${item.id}`} className='px-3 text-sky-700 no-underline hover:text-sky-500' >Đọc thêm &gt;&gt;</Link>
                  </Box>
                </Box>
              )
            })}
          </Container>

        </Box>)}
    </>
  )
}