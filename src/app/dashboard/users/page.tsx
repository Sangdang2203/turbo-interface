"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Button, IconButton, Grid, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Tooltip, Dialog, DialogContent, DialogTitle, FormHelperText, Divider, Chip, FormControl, InputLabel, MenuItem, OutlinedInput } from "@mui/material";
import { CloseOutlined, DoneRounded, DriveFileRenameOutline, RotateLeftRounded, SearchOutlined } from "@mui/icons-material";
import { fetchAuthorities, fetchUsers } from "app/methods/method";
import { ApiResponse, Authority, CreateUserRequest, UpdateUserRequest, User } from "types/interfaces";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import theme from "theme";

export default function UserManagement() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState<User[]>([]);
  //const [authority, setAuthority] = React.useState<string[]>([]);
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
    if (session) {
      event.preventDefault();
      const nameInput = document.getElementById(
        "searchInput"
      ) as HTMLInputElement;
      const name = nameInput.value.trim();

      if (name === "") {
        fetchUsers(session.user.id_token).then(data => {
          if (data.ok) {
            setUsers(data.data.reverse());
          }
        });
      } else {
        const filterEmployees = users.filter(
          user =>
            user.lastName.includes(name) ||
            user.firstName.includes(name) ||
            user.email.includes(name)
        );

        setUsers(filterEmployees);
      }
    }
  }

  async function AddUser(user: CreateUserRequest) {
    if (session) {
      try {
        // user.authority = authority;
        const message = toast.loading("Loading ...");
        const res = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            Authorization: `Bearer ${session.user.id_token}`,
            "Content-Type": "application/json",
          },
        });

        const payload = (await res.json()) as ApiResponse;

        if (payload.ok) {
          const response = await fetchUsers(session.user.id_token);
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
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // const handleChange = (event: SelectChangeEvent<typeof authority>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setAuthority(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };

  async function UpdateUser(updatedUser: UpdateUserRequest) {
    if (session) {
      const message = toast.loading("Loading...")
      try {
        const res = await fetch(`/api/posts/${user?.id}`, {
          method: "PUT",
          body: JSON.stringify(updatedUser)
        })

        const payload = (await res.json()) as ApiResponse;

        if (payload.ok) {
          const response = await fetchUsers(session.user.id_token);
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
    if (session) {
      Promise.all([
        fetchUsers(session.user.id_token),
        fetchAuthorities(session.user.id_token)
      ])
        .then(data => {
          const [resUser, resAuth] = data;

          if (resUser.ok) {
            setUsers(resUser.data.reverse());
          }

          if (resAuth.ok) {
            setAuthorities(resAuth.data);
          }

          setLoading(false);
        });
    }
  }, [session]);

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
              </Grid>
              <Grid item xs={12} sm={6}>
                <form
                  onSubmit={handleSearch}
                  method="post"
                  className="flex justify-end items-center my-3 relative">
                  <TextField
                    size="small" type="text" name="search" id="searchInput"
                    className="shadow-md text-sm rounded-lg min-w-[300px] min-h-[40px] cursor-pointer mr-3"
                    placeholder="Enter email | name to search"
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
                          <TableRow key={user.id} className="hover:bg-slate-100 cursor-pointer" sx={{ "&:last-child td, &:last-child th": { border: 0 }, }}>
                            <TableCell align="center"> {user.lastName + " " + user.firstName} </TableCell>
                            <TableCell align="center"> {user.email} </TableCell>
                            <TableCell align="center"> {user.authority} </TableCell>
                            <TableCell align="center">
                              <Tooltip placement="right-start" title={user.activated === true ? "Disable" : "Active"}>
                                <Switch
                                  size="small" color="success" className="cursor-pointer"
                                  checked={user.activated === true ? true : false}
                                  disabled={user.authority === "ROLE_ADMIN" ? true : false}
                                />
                              </Tooltip>
                            </TableCell>
                            <TableCell align="center">
                              <Tooltip title="Edit" placement="right-start">
                                <IconButton color="success" onClick={() => { setUser(user), setModalUpdate(true) }}>
                                  <DriveFileRenameOutline fontSize="small" />
                                </IconButton>
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
                className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
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
                className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
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
                className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
                placeholder="Nhập tên"
              />
              <FormHelperText className="text-red-700 px-2 mt-2 ">{errorsUpdate.firstName?.message}</FormHelperText>
            </Box>

            {/* <Box>
              <TextField
                disabled
                value={user?.authority}
                className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
              />
            </Box> */}

            <Box className="my-3">
              <TextField
                {...update("email", {
                  required: "Nhập đầy đủ thông tin.",
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Phải đúng định dạng email.", },
                })}
                type="text"
                value={user?.email}
                className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
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
                  type="text" size="small" color="primary"
                  className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
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
                  type="text" size="small" color="primary"
                  className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
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
                  type="text" size="small" color="primary"
                  className="min-w-[300px] cursor-pointer shadow-lg w-full"
                  placeholder="Nhập tên"
                />
                <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.firstName?.message}</FormHelperText>
              </Box>
              <Box>
                {/* <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">Quyền</InputLabel>
                  <Select
                    className="min-w-[300px]"
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={authority}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {authorities.map((item) => (
                      <MenuItem
                        key={item.name}
                        value={item.name}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
                <select
                  {...register("authority")}
                  className="min-w-[300px] w-full p-[12px] rounded-md cursor-pointer shadow-lg"
                  id="authority">
                  <option value="">Vui lòng bấm chọn</option>
                  {authorities && authorities.filter(pre => pre.name !== "ROLE_ADMIN").map(item => (
                    <option
                      key={item.name}
                      value={item.name}>
                      {item.name}
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
                  type="text" size="small" color="primary"
                  className="min-w-[300px] rounded-md cursor-pointer shadow-lg w-full"
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
