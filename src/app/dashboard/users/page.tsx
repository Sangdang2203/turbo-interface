"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import { Box, Button, IconButton, Grid, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Tooltip, Dialog, DialogContent, DialogTitle, FormHelperText, Divider } from "@mui/material";
import { CloseOutlined, DoneRounded, DriveFileRenameOutline, RotateLeftRounded, SearchOutlined } from "@mui/icons-material";
import { fetchUsers } from "app/methods/method";
import { ApiResponse, Authority, CreateUserRequest, UpdateUserRequest, User } from "types/interfaces";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UserManagement() {
  const [loading, setLoading] = React.useState(false);
  const [users, setUsers] = React.useState<User[]>([]);
  const [authorities, setAuthorities] = React.useState<Authority[]>([]);
  const [user, setUser] = React.useState<User>();
  const [modalAdd, setModalAdd] = React.useState(false)
  const [modalUpdate, setModalUpdate] = React.useState(false)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { data: session, status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CreateUserRequest>();

  const {
    register: update,
    handleSubmit: handleUpdate,
    formState: { errors: errorsUpdate },
  } = useForm<UpdateUserRequest>();

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

  // Handle Search
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nameInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    const name = nameInput.value.trim();

    if (name === "") {
      fetchUsers().then(data => {
        if (data.ok) {
          setUsers(data.data.reverse());
        }
      });
    } else {
      const filterEmployees = users.filter(
        user =>
          user.lastName.toLowerCase().includes(name.toLowerCase()) ||
          user.firstName.toLowerCase().includes(name.toLowerCase()) ||
          user.email.toLowerCase().includes(name.toLowerCase()) ||
          user.authority.includes(name)
      );

      setUsers(filterEmployees);
    }
  }

  async function AddUser(user: CreateUserRequest) {
    try {
      const message = toast.loading("Loading ...");
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(user),
      });

      const payload = (await res.json()) as ApiResponse;

      if (payload.ok) {
        const response = await fetchUsers();
        setUsers(await response.data.reverse());
        setModalAdd(false);
        toast.success(payload.message);
      } else {
        toast.error(payload.message);
      }
      toast.dismiss(message);

    } catch (error) {
      console.log("Error add user: ", error);
      toast.error("Oops! Error while trying to add user.");
    }
  }

  async function UpdateUser(updatedUser: UpdateUserRequest) {
    const message = toast.loading("Loading...")
    try {
      const res = await fetch(`/api/posts/${user?.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser)
      })

      const payload = (await res.json()) as ApiResponse;

      if (payload.ok) {
        const response = await fetchUsers();
        setUsers(await response.data.reverse());
        setModalUpdate(false);
        toast.success(payload.message);
      }
      toast.error(payload.message)

    } catch (error) {
      console.log(error);
    }
    toast.dismiss(message);
  }
  // Handle Change Status
  // function handleChangeStatus(id: string) {
  //   fetchChangeStatus(id)
  //     .then(() => {
  //       const updatedUsers = users.map(user => {
  //         if (user.id === id && user.activated === true) {
  //           return {
  //             ...user,
  //             activated: false,
  //           };
  //         } else if (user.id === id && user.activated === false) {
  //           return {
  //             ...user,
  //             activated: true,
  //           };
  //         }
  //         return user;
  //       });
  //       setUsers(updatedUsers);
  //       toast.success("Change status successfully.");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       toast.error("Failed to change status !");
  //     });
  // }

  // fetch data
  React.useEffect(() => {
    Promise.all([fetchUsers()]).then(data => {
      const [resUser] = data;

      if (resUser.ok) {
        setUsers(resUser.data.reverse());
      }

      setLoading(false);
    });
  }, []);

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Paper elevation={6} sx={{ borderRadius: "10px", boxSizing: "border-box" }}>
            <Grid container>
              <Grid item xs={12} sm={6} className="flex justify-between items-center p-3">
                <Button variant="contained" className="uppercase py-2 px-3 text-white bg-blue-500 hover:opacity-85" onClick={() => setModalAdd(true)}>
                  + Add
                </Button>
                <Button variant="contained" className="uppercase py-2 px-3 text-white bg-blue-500 hover:opacity-85" onClick={() => setModalUpdate(true)}>
                  Update
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
                    <TableCell align="center" className="text-sm"> # </TableCell>
                    <TableCell align="center" className="text-sm"> Họ tên </TableCell>
                    <TableCell align="center" className="text-sm"> Email </TableCell>
                    <TableCell align="center" className="text-sm"> Vai trò </TableCell>
                    <TableCell align="center" className="text-sm"> Trạng thái </TableCell>
                    <TableCell align="center" className="text-sm"> Thao tác </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {users && users.length > 0 ?
                    (
                      users
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(user => (
                          <TableRow key={user.id} sx={{ "&:last-child td, &:last-child th": { border: 0 }, }}>
                            <TableCell align="center"> {user.id} </TableCell>
                            <TableCell align="center"> {user.lastName + " " + user.firstName} </TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                            <TableCell align="center">
                              <Switch
                                size="small" color="success" className="cursor-pointer"
                                checked={user.activated === true ? true : false}
                                disabled={user.authority === "ROLE_ADMIN" ? true : false}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Tooltip title="Edit">
                                <Button
                                  type="button" variant="text" color="success"
                                  endIcon={<DriveFileRenameOutline fontSize="medium" />}
                                  onClick={() => { setUser(user), setModalUpdate(true) }}
                                ></Button>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        ))
                    )
                    :
                    (<TableRow><TableCell colSpan={6} align="center" className="text-sm"> No Data </TableCell></TableRow>)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={users ? users.length : 0}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      )}

      {/* Add or Update User */}
      <Dialog
        open={user ? modalUpdate : modalAdd}
        onClose={() => user ? setModalUpdate(false) : setModalAdd(false)}
        className="max-w-[500px] mx-auto">
        <Tooltip title="Close">
          <CloseOutlined
            onClick={() => user ? setModalUpdate(false) : setModalAdd(false)}
            color="error"
            className="text-md absolute top-1 right-1 rounded-full hover:opacity-80 hover:bg-red-200 cursor-pointer"
          />
        </Tooltip>

        <DialogTitle className="text-center mt-2">
          {user ? "Updated User Information" : "Add New User"}
        </DialogTitle>

        <Divider />

        <DialogContent>
          {user ? (<form
            onSubmit={handleUpdate(UpdateUser)}>
            <Box className="my-3">
              <TextField
                disabled
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                defaultValue={user?.login}
              />
            </Box>

            <Box className="my-3">
              <TextField
                {...update("lastName", {
                  required: "Nhập đầy đủ thông tin.",
                  minLength: { value: 2, message: "Tối thiểu 2 ký tự.", },
                  maxLength: { value: 10, message: "Tối đa 10 ký tự.", },
                })}
                type="text"
                value={user?.lastName}
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                placeholder="Nhập họ"
              />
              <FormHelperText className="text-red-700 px-2 mt-2 ">{errorsUpdate.lastName?.message}</FormHelperText>
            </Box>
            <Box className="my-3">
              <TextField
                {...update("firstName", {
                  required: "Nhập đầy đủ thông tin.",
                  minLength: { value: 8, message: "Tối thiểu 8 ký tự.", },
                  maxLength: { value: 50, message: "Tối đa 50 ký tự.", },
                })}
                type="text"
                value={user?.firstName}
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                placeholder="Nhập tên"
              />
              <FormHelperText className="text-red-700 px-2 mt-2 ">{errorsUpdate.firstName?.message}</FormHelperText>
            </Box>

            <Box>
              <TextField
                disabled
                value={user?.authority}
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
              />
            </Box>

            <Box className="my-3">
              <TextField
                {...update("email", {
                  required: "Nhập đầy đủ thông tin.",
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Phải đúng định dạng email.", },
                })}
                type="text"
                value={user?.email}
                // value="aaaa"
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                placeholder="Nhập địa chỉ email"
              />
              <FormHelperText className="text-red-700 px-2 mt-2 ">{errorsUpdate.email?.message}</FormHelperText>
            </Box>

            <Box className="flex justify-between">
              <Button
                type="submit" variant="contained" size="medium" className="w-full mr-2 p-2 text-white bg-[#008200] hover:opacity-85"
                startIcon={<DoneRounded fontSize='medium' />} >Cập nhật
              </Button>
              <Button
                type="reset" variant="contained" size="medium" className="w-full p-2 text-white bg-[#0C2340] hover:opacity-85"
                startIcon={<RotateLeftRounded fontSize='medium' />} >Hủy bỏ
              </Button>
            </Box>
          </form>)
            :
            (<form
              onSubmit={handleSubmit(AddUser)}>
              <Box className="my-3">
                <TextField
                  {...register("login", {
                    required: "Nhập đầy đủ thông tin.",
                    minLength: { value: 8, message: "Tối thiểu 8 ký tự.", },
                    maxLength: { value: 50, message: "Tối đa 50 ký tự.", },
                  })}
                  type="text"
                  className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                  placeholder="Nhập tên đăng nhập"
                />
                <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.login?.message}</FormHelperText>
              </Box>

              <Box className="my-3">
                <TextField
                  {...register("lastName", {
                    required: "Nhập đầy đủ thông tin.",
                    minLength: { value: 2, message: "Tối thiểu 2 ký tự.", },
                    maxLength: { value: 10, message: "Tối đa 10 ký tự.", },
                  })}
                  type="text"
                  className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                  placeholder="Nhập họ"
                />
                <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.lastName?.message}</FormHelperText>
              </Box>

              <Box className="my-3">
                <TextField
                  {...register("firstName", {
                    required: "Nhập đầy đủ thông tin.",
                    minLength: { value: 8, message: "Tối thiểu 8 ký tự.", },
                    maxLength: { value: 50, message: "Tối đa 50 ký tự.", },
                  })}
                  type="text"
                  className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                  placeholder="Nhập tên"
                />
                <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.firstName?.message}</FormHelperText>
              </Box>
              <Box>
                <select
                  {...register("authority")}
                  className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
                  id="authority">
                  <option value="">Vui lòng bấm chọn</option>
                  {authorities && authorities.filter(pre => pre.name != "ROLE_ADMIN").map(authority => (
                    <option
                      key={authority.name}
                      value={authority.name}>
                      {authority.name}
                    </option>
                  ))}
                </select>
                <FormHelperText className="text-red-700 px-2 mt-2">{errors.authority?.message}</FormHelperText>
              </Box>

              <Box className="my-3">
                <TextField
                  {...register("email", {
                    required: "Nhập đầy đủ thông tin.",
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Phải đúng định dạng email.", },
                  })}
                  type="text"
                  className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                  placeholder="Nhập địa chỉ email"
                />
                <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.email?.message}</FormHelperText>
              </Box>

              <Box className="flex justify-between">
                <Button
                  type="submit" variant="contained" size="medium" className="w-full my-3 mr-2 p-2 text-white bg-[#008200] hover:opacity-85"
                  startIcon={<DoneRounded fontSize='medium' />} >Đồng ý
                </Button>
                <Button
                  type="reset" variant="contained" size="medium" className="w-full my-3 p-2 text-white bg-[#0C2340] hover:opacity-85"
                  startIcon={<RotateLeftRounded fontSize='medium' />} >Hủy bỏ
                </Button>
              </Box>
            </form>)}

        </DialogContent>
      </Dialog>
    </Box>
  );
}
