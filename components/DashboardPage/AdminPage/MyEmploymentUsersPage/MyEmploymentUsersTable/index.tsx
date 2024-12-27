"use client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef, GridSortItem } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@/components/Common/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useMyEmploymentDeleteUser } from "@/api/requests/dashboard/myEmploymentDeleteUser";
import { Typography } from "@mui/material";


export default function MyEmploymentUsersTable({ 
  myEmploymentDataUserList, 
  rowCount,
  handleClickEditOpen,
  handleClickResendPassLinkOpen,
   fetchData,
   paginationModel, isLoading, sortModel, setPaginationModel, setSortModel, initialSortState,
    searchQuery }:any) {

  const columns: GridColDef[] = [
  
    { field: "full_name", headerName: "Full Name",      width: 170,},
    { field: "email", headerName: "Email",      width: 170,},
    { field: "role", headerName: "Role",width: 170,},
    { field: "phone_numbers", headerName: "Phone Number",width: 170,  sortable: false,},
    { field: "address", headerName: "Address", flex:1,  sortable: false,},
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          {/* need to chnage the following "handleClickEditOpen" to suitable resendlink method */}
          <Button onClick={() => handleClickResendPassLinkOpen(params.row.id)} className="bg-blue-400 py-2 px-1 text-base 2xl:text-lg rounded-lg font-aeonik-medium text-white hover:text-text hover:bg-blue-500 transition-all duration-700 ease-in-out">
          <Typography noWrap>Resend Password Link</Typography>
          </Button>
          <Button onClick={() => handleClickEditOpen(params.row.id)} className="bg-blue-400 py-2 px-1 text-base 2xl:text-lg rounded-lg font-aeonik-medium text-white hover:text-text hover:bg-blue-500 transition-all duration-700 ease-in-out">
            <BorderColorIcon />
          </Button>
          <Button onClick={() => handleClickDeleteOpen(params.row.id)} className="bg-red-400 py-2 px-1 text-base 2xl:text-lg rounded-lg font-aeonik-medium text-white hover:text-white hover:bg-red-500 transition-all duration-700 ease-in-out">
            <DeleteIcon />
          </Button>
        </Stack>
      ),
    },
  ];


  const { mutateAsync: deleteUser } = useMyEmploymentDeleteUser();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  
  
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);


  const handleDeleteConfirm = async () => {
    if (selectedUserId) {
      try {
        await deleteUser(selectedUserId);
        toast.success("User deleted successfully");
        queryClient.invalidateQueries({ queryKey: ["myEmploymentUserList"] }); // Invalidate the query to refetch the data
        fetchData(); // Refetch the data to update the table
        handleDeleteConfirmClose();
      } catch (error) {
        toast.error((error as any).message);
      }
    }
  };
  
    const handleClickDeleteOpen = (userId: string) => {
      setSelectedUserId(userId);
      setOpen(true);
    };

    const handleDeleteConfirmClose = () => {
      setOpen(false);
      setSelectedUserId(null);
    };

  return (
    <Box
      ref={ref}
      {...events}
      className="max-h-[800px] overflow-x-auto relative scrollbar-hide"
    >
      <Box className="min-w-[750px]">
        <Paper>
         
           <DataGrid
        rows={myEmploymentDataUserList}
        columns={columns}
        rowCount={rowCount}
        pagination
        paginationModel={paginationModel}
        pageSizeOptions={[10, 20, 50]}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
        sortingMode="server"
        onSortModelChange={(newSortModel) => {
          if (newSortModel.length > 0) {
            setSortModel(newSortModel[0]);
          } else {
            setSortModel(initialSortState);
          }
        }}
         loading={isLoading}
      />
        </Paper>
      </Box>


      <Dialog
        open={open}
        onClose={handleDeleteConfirmClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirmClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
