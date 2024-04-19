"use client";

import Loading from "@/components/Loading";
import {
  Avatar, Button, Dialog, DialogContent, DialogTitle, Tooltip, Chip, Autocomplete, Checkbox, TextField, Card, Box, CardContent, CardActions, Typography, Divider, FormHelperText, IconButton, Container,
} from "@mui/material";
import { CheckBoxOutlineBlank, CheckBox, AddCircle, CloseOutlined, DeleteOutline } from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import React from "react";
import { red } from "@mui/material/colors";
import { fetchAuthorities } from "app/methods/method";
import { Role, ApiResponse } from "types/interfaces";


export default function RoleManagement() {
  const [loading, setLoading] = React.useState(false);
  const [roles, setRoles] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedRoleId, setSelectedRoleId] = React.useState<Number>(0);

  const [openAddPermisson, setOpenAddPermisson] = React.useState(false);
  const [openAddRole, setOpenAddRole] = React.useState(false);
  const [createPermission, setCreatePermission] = React.useState(false);

  const {
    register: roleRegister,
    handleSubmit: roleHandleSubmit,
    formState: { errors: roleErrors },
  } = useForm<Role>();


  // fetch data
  React.useEffect(() => {
    Promise.all([fetchAuthorities()]).then(data => {
      const [authRes] = data;
      if (authRes.ok) {
        setRoles(authRes.data);
      }
      setLoading(false);
    });
  }, []);
  // Add new role
  async function AddRole(role: Role) {
    const message = toast.loading("Loading...");
    try {
      const res = await fetch("/api/roles/", {
        method: "POST",
        body: JSON.stringify(role),
      });

      const payload = (await res.json()) as ApiResponse;

      if (payload.ok) {
        const response = await fetchAuthorities();
        setRoles(await response.data);
        setOpenAddRole(false);
        toast.success(payload.message);
      } else {
        toast.error(payload.message);
      }
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(message);
  }
  // Remove role
  // const handleDeleteRole = async (roleId: number) => {
  //   const loadingId = toast.loading("Loading...");
  //   const response = await fetch(`/api/roles/${roleId}`, {
  //     method: "DELETE",
  //   });

  //   const payload = (await response.json()) as ApiResponse;

  //   if (roleId <= 4 && payload.ok) {
  //     toast.error("Failed to delete! The role is one of system roles.");
  //   } else if (roleId > 4 && payload.ok) {
  //     setRoles(pre => pre.filter(role => role.id !== roleId));
  //     toast.success(payload.message);
  //   } else {
  //     toast.error(payload.message);
  //   }
  //   toast.dismiss(loadingId);
  // };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Box className="flex justify-between items-center">
            <Button onClick={() => setOpenAddRole(true)} variant="contained" color="primary" className="text-white" href="/dashboard/recruitment/create">
              <Tooltip title="Thêm mới">
                <Typography>Tạo mới</Typography>
              </Tooltip>
            </Button>
          </Box>


          {/* Role card */}
          <Container className="grid sm:grid-cols-3 gap-x-3 gap-y-6 mx-3">
            {roles && roles.map(role => (
              <Card key={role.id} className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
                <CardContent className="relative mb-3">
                  <Box className="w-full h-full flex items-center">
                    <Avatar src={role.name.slice(0, 1)} alt={role.name} />
                    <Box className="">
                      <Typography
                        className={
                          role.name === "Admin"
                            ? "text-green-700 font-semibold mx-2"
                            : "text-orange-400 mx-2"
                        }>{role.name}
                      </Typography>
                    </Box>
                  </Box>

                  {selectedRole &&
                    (<Dialog open sx={{ maxWidth: 500, mx: "auto" }}>
                      <Tooltip title="Close">
                        <CloseOutlined
                          color="error"
                          onClick={() => setSelectedRole(null)}
                          className="text-md absolute top-1 right-1 rounded-full hover:opacity-80 hover:bg-red-200 cursor-pointer"
                        />
                      </Tooltip>
                      <DialogContent>
                        <Typography
                          className={
                            selectedRole.name === "Admin" ? "text-green-700 font-semibold my-1" : "text-orange-400 my-1"
                          }
                        >
                          {selectedRole.name} has permissions, include:
                        </Typography>
                        {selectedRole.roleHasPermissions.map(permission => {
                          return (
                            <Chip
                              key={permission}
                              label={permission}
                              color="default"
                              variant="outlined"
                              size="small"
                              className="text-xs mr-1 my-1"
                              onDelete={() => {
                                handleDelete(selectedRole.id, permission);
                              }}
                            />
                          );
                        })}
                      </DialogContent>
                    </Dialog>)}
                </CardContent>

                <CardActions className="absolute inset-x-0 bottom-1 flex justify-between items-center">
                  <Tooltip title="Add Permission">
                    <IconButton
                      onClick={() => {
                        setOpenAddPermisson(true);
                        setSelectedRoleId(role.id);
                      }}>
                      <AddCircle fontSize="small" color="primary" /></IconButton>
                  </Tooltip>

                  <Tooltip title="Remove Role">
                    <IconButton
                      onClick={() => {
                        if (
                          window.confirm("Are you sure to remove this role?")
                        ) {
                          handleDeleteRole(role.id);
                        }
                      }}>
                      <DeleteOutline fontSize="small" color="error" /></IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            ))}
          </Container>

          {/* Form add new role */}


          {/* Form add permissions into role */}
          <Dialog
            open={openAddPermisson}
            onClose={() => setOpenAddPermisson(false)}
            className="mx-auto"
          >
            <Tooltip title="Close">
              <CloseOutlined
                onClick={() => setOpenAddPermisson(false)}
                color="error"
                className="text-md absolute top-1 right-1 rounded-full hover:opacity-80 hover:bg-red-200 cursor-pointer"
              />
            </Tooltip>

            <DialogContent>
              <form className="text-xs">
                <Autocomplete
                  {...permissionRegister("permissionNames")}
                  className="my-2"
                  color="secondary"
                  multiple
                  options={permissions}
                  disableCloseOnSelect
                  getOptionLabel={option => option.name}
                  renderOption={(props, option, { selected }) => (
                    <li key={option.name} {...props} >
                      <Checkbox
                        icon={<CheckBoxOutlineBlank fontSize="small" />}
                        checkedIcon={<CheckBox fontSize="small" />}
                        sx={{ marginRight: 8 }}
                        checked={selected} /> {option.name}
                      <Button onClick={() => setCreatePermission(true)} ></Button>
                    </li>
                  )}
                  style={{ width: 350 }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Permissions"
                      placeholder="Add permission"
                    />
                  )}
                  onChange={handlePermissionChange}
                />
                <Button color="secondary" variant="text" onClick={() => setCreatePermission(true)}>
                  Add other permission
                </Button>

                <div className="flex justify-around mb-2 mt-10">
                  <Button
                    type="submit" color="success" variant="contained" size="medium" className="w-full"
                    onClick={permissionHandleSubmit(AddPermission)}>
                    + Add permission
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          {/* Create one permission */}
          <Dialog
            open={createPermission}
            onClose={() => setCreatePermission(false)}
            sx={{ maxWidth: 450, mx: "auto" }}
          >
            <Tooltip title="Close">
              <CloseOutlined
                onClick={() => setCreatePermission(false)}
                color="error"
                className="text-md absolute top-1 right-1 rounded-full hover:opacity-80 hover:bg-red-200 cursor-pointer"
              />
            </Tooltip>

            <DialogContent>
              <form
                onSubmit={handleSubmit(createOnePermission)}
                className="text-xs"
              >
                <div className="my-3">
                  <TextField
                    autoFocus variant="outlined"
                    color="info"
                    sx={{ minWidth: 300 }}
                    {...register("name", {
                      required: "Permission name is required.",
                    })}
                    placeholder="Enter permission name"
                  />
                </div>

                <span className="text-danger">{permissionErrors.permissionNames?.message}</span>

                <Button color="success" variant="contained" size="medium" type="submit" fullWidth>+ Add New</Button>
              </form>
            </DialogContent>
          </Dialog>
        </Box>
      )}
    </>
  );
}
