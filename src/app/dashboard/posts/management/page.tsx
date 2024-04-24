'use client'

import { FormHelperText, Box, Button, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Tooltip } from '@mui/material'
import { SearchOutlined, DriveFileRenameOutline, DeleteOutline } from '@mui/icons-material'

import Loading from '@/components/Loading'
import Link from 'next/link'
import { toast } from 'sonner'
import * as React from 'react'
import { ApiResponse, Post, UpdatedPostRequest } from 'types/interfaces'
import { fetchPosts, fetchDeletePost } from 'app/methods/method'
import { useSession } from 'next-auth/react'
import { useForm, SubmitHandler } from "react-hook-form";

export default function PostManagement() {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<Post[]>([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<UpdatedPostRequest>();

  async function UpdatePost(updatedPost: UpdatedPostRequest) {
    if (session) {
      const message = toast.loading("Loading...")
      try {
        const res = await fetch(`/api/posts/`, {
          method: "PUT",
          body: JSON.stringify(updatedPost),
          headers: {
            Authorization: `Bearer ${session?.user.id_token}`,
            "Content-Type": "application/json"
          },
        })

        const payload = (await res.json()) as ApiResponse;

        if (payload.ok) {
          toast.success(payload.message)
        }
        toast.error(payload.message)

      } catch (error) {
        console.log(error);
      }
      toast.dismiss(message);
    }
  }

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
        post => post.title.includes(name)
      );

      setPosts(filterPosts);
    }
  }

  async function handleDelete(postId: string) {
    if (session) {
      const message = toast.loading("Loading...");
      const response = await fetchDeletePost(session.user.id_token, postId);

      if (response.ok) {
        setPosts(pre => pre.filter(post => post.id !== postId));
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
      toast.dismiss(message);
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
                  className="flex justify-end items-center my-3 relative ">
                  <TextField
                    size="small" type="text" name="search" id="searchInput"
                    className="cursor-pointer shadow-md text-sm rounded-lg min-w-[300px] mr-3"
                    placeholder="Enter title to search"
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
                    <TableCell align="center" className="text-sm">#</TableCell>
                    <TableCell align="center" className="text-sm">Tiêu đề</TableCell>
                    <TableCell align="center" className="text-sm">Mô tả</TableCell>
                    <TableCell align="center" className="text-sm">Tình trạng</TableCell>
                    <TableCell align="center" className="text-sm">Thao tác</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts && posts.length > 0 ?
                    (
                      posts
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(post => (
                          <TableRow key={post.id} className='hover:bg-slate-100 cursor-pointer' sx={{ "&:last-child td, &:last-child th": { border: 0 }, }}>
                            <TableCell align="center"> {post?.id} </TableCell>
                            <TableCell align="center"> {post?.title} </TableCell>
                            <TableCell align="center"> {post?.description} </TableCell>
                            <TableCell align="center">
                              <Tooltip title={post.status === "ACTIVE" ? "Disable" : "Active"} placement='right-start'>
                                <Switch size="small" color="success" className="cursor-pointer"
                                  checked={post.status === "ACTIVE" ? true : false}
                                />
                              </Tooltip>
                            </TableCell>

                            <TableCell align="center">
                              <Tooltip title="Edit">
                                <IconButton color="success" href={`/dashboard/posts/edit/${post.id}`}>
                                  <DriveFileRenameOutline fontSize="small" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Remove">
                                <IconButton color="error" onClick={() => {
                                  if (window.confirm("Bạn chắc chắn muốn xóa ?")) {
                                    handleDelete(post.id)
                                  }
                                }}
                                >
                                  <DeleteOutline fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        ))
                    )
                    :
                    (<TableRow><TableCell colSpan={7} align="center" className="text-sm"> No Data </TableCell></TableRow>)
                  }
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

