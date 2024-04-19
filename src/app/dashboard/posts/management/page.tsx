'use client'

import { Box, Button, Grid, IconButton, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Tooltip } from '@mui/material'
import { SearchOutlined, DriveFileRenameOutline, DeleteOutlineOutlined } from '@mui/icons-material'

import { useRouter } from 'next/navigation'
import Loading from '@/components/Loading'
import Link from 'next/link'
import { toast } from 'sonner'
import * as React from 'react'
import { ApiResponse, Post } from 'types/interfaces'
import { fetchPosts } from 'app/methods/method'

export default function PostManagement() {
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState<Post[]>([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const router = useRouter()

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nameInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    const name = nameInput.value.trim();

    if (name === "") {
      fetchPosts().then(res => setPosts(res.data));
    } else {
      const filterPosts = posts.filter(
        post =>
          post.title.toLowerCase().includes(name.toLowerCase()) ||
          post.user.toLowerCase().includes(name.toLowerCase())
      );

      setPosts(filterPosts);
    }
  }


  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    Promise.all([fetchPosts()])
      .then(data => {
        const [resPost] = data;
        if (resPost.ok) {
          setPosts(resPost.data.reverse());
        }
      })
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (<Loading />)
        :
        (<>
          <Paper
            elevation={6}
            sx={{ borderRadius: "10px", boxSizing: "border-box" }}>
            <Grid container>
              <Grid item xs={12} sm={6} className="flex justify-between items-center px-3">
                <Button variant="contained" color="primary" className="text-white" href="/dashboard/posts/create">
                  Tạo mới
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <form
                  onSubmit={handleSearch}
                  method="post"
                  className="flex justify-end items-center my-3 relative">
                  <TextField
                    size="small" type="text" name="search" id="searchInput"
                    className="border shadow-md text-sm rounded-lg min-w-[300px] min-h-[40px] cursor-pointer mr-3 p-2"
                    placeholder="Enter name to search"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <IconButton className="relative mr-5">
                      <SearchOutlined color="success" fontSize="small" />
                    </IconButton>
                  </div>
                </form>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            elevation={6}
            sx={{ my: 3, borderRadius: "10px", boxSizing: "border-box" }}>
            <TableContainer sx={{ width: "100%", overflow: "hidden" }}>
              <Table className="mt-3" sx={{ minWidth: 650 }} size="small">
                <TableHead className='bg-slate-300'>
                  <TableRow>
                    <TableCell align="center" className="text-sm">Tiêu đề</TableCell>
                    <TableCell align="center" className="text-sm">Mô tả</TableCell>
                    <TableCell align="center" className="text-sm">Tác giả</TableCell>
                    <TableCell align="center" className="text-sm">Thể loại</TableCell>
                    <TableCell align="center" className="text-sm">Tình trạng</TableCell>
                    <TableCell align="center" className="text-sm">Thao tác</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {posts && posts.length > 0 ?
                      (
                        posts
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map(post => (
                            <TableRow key={post.id} sx={{ "&:last-child td, &:last-child th": { border: 0 }, }}>
                              <TableCell align="center">
                                {post?.title.length > 30 ? post?.title.substring(0, 30) + ' ...' : post?.title}
                              </TableCell>
                              <TableCell align="center">
                                {post?.description.length > 30 ? post?.description.substring(0, 30) + ' ...' : post?.description}
                              </TableCell>
                              <TableCell align="center">
                                {post?.content.length > 30 ? post?.content.substring(0, 30) + ' ...' : post?.content}
                              </TableCell>
                              <TableCell align="center">{post?.user}</TableCell>
                              <TableCell align="center">{post?.category}</TableCell>
                              <TableCell align="center">
                                <Switch size="small" color="success" className="cursor-pointer"
                                  checked={post.status === "ACTIVE" ? true : false}
                                />
                              </TableCell>

                              <TableCell align="center">
                                <Tooltip title="Edit">
                                  <Button type="button" size='small' variant="text" color="success"
                                    href={`/dashboard/posts/edit/${post.slug}`}>
                                    <DriveFileRenameOutline fontSize="small" />
                                  </Button>
                                </Tooltip>
                              </TableCell>
                            </TableRow>
                          ))
                      )
                      :
                      (<TableCell colSpan={7} align="center" className="text-sm"> No Data </TableCell>)
                    }
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={posts ? posts.length : 0}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
        )
      }
    </>
  )
}

