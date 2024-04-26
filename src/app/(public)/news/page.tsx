"use client"

import { ArrowBackIosNewRounded, NavigateNextRounded, SearchOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, Chip, Container, Divider, FormHelperText, Grid, IconButton, Pagination, PaginationItem, Stack, TextField, Typography } from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';
import * as React from "react";
import { Post } from "types/interfaces";
import { fetchPosts } from 'app/methods/method';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading';

export default function NewsPage() {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<Post[]>([]);
  //const [postsMap, setPostsMap] = React.useState<Map<string, string>>(new Map());
  const [latestPosts, setLatestPosts] = React.useState<Post[]>([]);
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nameInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    const name = nameInput.value.trim();

    if (name === "") {
      fetchPosts().then(data => {
        if (data.ok) {
          setPosts(data.data.reverse());
        }
      });
    } else {
      const filterPosts = posts.filter(
        post =>
          post.title.toLowerCase().includes(name.toLowerCase())
      );

      setPosts(filterPosts);
    }
  }

  const getLastestPosts = (posts: Post[]): Post[] => {
    //@ts-ignore
    const sortedPosts = posts.sort((a, b) => a.createAt - b.updateAt);
    const lastestPosts = sortedPosts.slice(0, 3);
    return lastestPosts;
  }

  const lastestPosts = getLastestPosts(posts);


  React.useEffect(() => {
    Promise.all([fetchPosts()])
      .then(data => {
        const [resPost] = data;
        if (resPost.ok) {
          setPosts(resPost.data);
          setLatestPosts(getLastestPosts(resPost.data));
        }
      })
    setLoading(false);
  }, [])

  React.useEffect(() => {
    // const newPostsMap = new Map();

    // for (const post of posts) {
    //   newPostsMap.set(post.slug, post.id);
    // }

    // setPostsMap(newPostsMap);
    Promise.all([fetchPosts()]).then(data => {
      const [resPosts] = data;

      if (resPosts.ok) {
        setPosts(resPosts.data);
      }

      setLoading(false);
    })

  }, [])

  return (
    <>
      {loading ?
        (<Loading />)
        :
        (<Container>
          <Grid container>
            <Grid item xs={12} sm={4} my={5}>
              <form
                onSubmit={handleSearch}
                method="post"
                className="flex justify-center items-center my-4 relative">
                <TextField
                  size="small" type="text" name="search" id="searchInput"
                  className="shadow-md text-sm rounded-lg w-full cursor-pointer mr-3"
                  placeholder="Nhập tiêu đề cần tìm ..."
                />
                <Button type='submit' variant='contained' color='success'>Tìm</Button>
                {/* <IconButton type='submit' className="relative">
                  <SearchOutlined color="success" fontSize="small" />
                </IconButton> */}
              </form>
              <Typography className='text-xl text-center'>Bài viết mới</Typography>
              {lastestPosts && lastestPosts.map((item) => {
                if (item.status === "ACTIVE") {
                  return (
                    <Box key={item.id} my={2}>
                      <Link href={`news/${item.id}`} className='text-sky-700 no-underline text-lg hover:text-[1.25rem] duration-500' title={item.title}>{item.title}</Link>
                      <Divider className='my-3' />
                    </Box>
                  )
                }
              })}
            </Grid>

            <Grid item xs={6} sm={8} className='grid md:grid-cols-3 gap-3 my-10'>
              {posts && posts.map((item) => {
                if (item.status === "ACTIVE") {
                  return (
                    <Box key={item.id} className="max-h-[400px] rounded-md hover:shadow-2xl cursor-pointer duration-700">
                      <CardContent>
                        <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-24.jpg" className="w-full h-auto rounded-md" alt="UnifiedCloudStorage" />
                        <Box my={2}>
                          <Typography className="text-lg title-truncate">{item.title}</Typography>
                          {item.categories.map((cate) => {
                            return (
                              <Chip key={cate.id} label={cate.name} size='small' color='secondary' />
                            )
                          })}

                          <Typography className="text-sm font-extralight mt-3 content-truncate">{item.description}</Typography>
                        </Box>
                        <Link href={`news/${item.id}`} className='text-sky-700 no-underline hover:text-sky-500' >Đọc thêm &gt;&gt;</Link>
                      </CardContent>
                    </Box>
                  )
                }
              })}
            </Grid>
          </Grid>


          <Stack spacing={2} py={10}>
            <Pagination shape='rounded' count={Math.ceil(posts.length / 9)} page={page} onChange={handleChange} />
          </Stack>

        </Container>)
      }
    </>

  )
}
