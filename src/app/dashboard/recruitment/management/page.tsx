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

export default function RecruitmentPage() {
  const [loading, setLoading] = React.useState(false);
  const [jobs, setJobs] = React.useState<Post[]>([])
  const [page, setPage] = React.useState(10)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const router = useRouter()

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nameInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    const name = nameInput.value.trim();

    if (name === "") {
      fetchPosts().then(data => {
        if (data.ok) {
          setJobs(data.data.reverse());
        }
      });
    } else {
      const filterJobs = jobs.filter(
        job =>
          job.title.toLowerCase().includes(name.toLowerCase())
      );

      setJobs(filterJobs);
    }
  }

  const handleItemClick = (id: any) => {
    // navigate to the update page with the id as a URL parameter
    router.push(`/app/news-management/update/${id}`)
  }

  // const handleDelete = async (id: any) => {
  //   const loadingId = toast.loading("Loading...");
  //   const response = await fetch(`/api/news-management/${id}`, {
  //     method: 'DELETE',
  //   })
  //   const payload = await response.json() as ApiResponse;
  //   if (payload.ok) {
  //     setData(pre => pre.filter(item => item.id !== id));
  //     toast.success(payload.message)
  //   } else {
  //     toast.error(payload.message)
  //   }
  //   toast.dismiss(loadingId);
  // }


  // Avoid a layout jump when reaching the last page with empty rows.

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      {loading ? (<Loading />)
        :
        (<>
          <Paper
            elevation={6}
            sx={{ borderRadius: "10px", boxSizing: "border-box" }}>
            <Grid container>
              <Grid item xs={12} sm={6} className="flex justify-between items-center p-3">
                <Button variant="contained" color="primary" className="text-white" href="/dashboard/recruitment/create">
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
                <TableHead className="bg-slate-300">
                  <TableRow>
                    <TableCell align="center" className="text-sm">Title</TableCell>
                    <TableCell align="center" className="text-sm">Content</TableCell>
                    <TableCell align="center" className="text-sm">Status</TableCell>
                    <TableCell align="center" className="text-sm">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jobs && jobs.length > 0 ?
                    (
                      jobs
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(job => (
                          <TableRow key={job.id} sx={{ "&:last-child td, &:last-child th": { border: 0 }, }}>
                            <TableCell align="center">
                              {job?.title.length > 30 ? job?.title.substring(0, 30) + ' ...' : job?.title}
                            </TableCell>
                            <TableCell align="center">
                              {job?.content.length > 30 ? job?.content.substring(0, 30) + ' ...' : job?.content}
                            </TableCell>
                            <TableCell align="center">
                              <Switch size="small" color="success" className="cursor-pointer"
                                checked={job.status === "ACTIVE" ? true : false}
                              />
                            </TableCell>

                            <TableCell align="center">
                              <Tooltip title="Edit">
                                <Button type="button" size='small' variant="text" color="success"
                                  href={`/dashboard/posts/edit/${job.slug}`}>
                                  <DriveFileRenameOutline fontSize="small" />
                                </Button>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        ))
                    )
                    :
                    (<TableCell colSpan={4} align="center" className="text-sm"> No Data </TableCell>)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={jobs ? jobs.length : 0}
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

