"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import clsx from "clsx";
import { DataGrid, GridColDef, GridSortItem } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import toast from "react-hot-toast";

import { Stack, Typography } from "@mui/material";
import Button from "@/components/Common/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useQueryClient } from "@tanstack/react-query";
import { useOrganizationDeleteUser } from "@/api/requests/dashboard/organizationDeleteUser";


export default function UserManagementTable({ organizationUserDataList, handleClickEditOpen, fetchData, isLoading }: any) {
  const { mutateAsync: deleteUser } = useOrganizationDeleteUser();
  const queryClient = useQueryClient();

const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

// delete functionality

const handleDelete = async () => {
  if (selectedUserId) {
    try {
      await deleteUser(selectedUserId);
      toast.success("User deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["organizationUserList"] }); 
      fetchData(); 
      handleClose();
    } catch (error) {
      toast.error((error as any).message);
    }
  }
};

  const handleClickDeleteOpen = (userId: string) => {
    setSelectedUserId(userId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUserId(null);
  };

  return (
    <Box
      ref={ref}
      {...events}
      className="max-h-[380px] overflow-x-auto relative scrollbar-hide"
    >
      <Box className="w-full">
         <TableContainer component={Paper} className="shadow-none w-full d-none">
          <Table className="w-full">
            <TableHead>
              <TableRow className="bg-slate-100">
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none rounded-l-xl">
                  Name
                </TableCell>
                
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Email
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Job Title
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                Phone
                </TableCell>
               
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none rounded-r-xl">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {organizationUserDataList.map((row: any, i: number) => (
                <TableRow
                  key={i}
                  className={clsx(
                    i % 2 !== 0 ? "bg-slate-100" : "",
                    "border-none",
                  )}
                >
                  <TableCell className="border-none rounded-l-xl">
                    {row.first_name} {row.last_name}
                  </TableCell>
                  <TableCell className="border-none rounded-r-xl">
                    {row.email}
                  </TableCell>
                  <TableCell className="border-none rounded-r-xl">
                    {row.job_title}
                  </TableCell>
                 
                  <TableCell className="border-none rounded-r-xl">
                    {row.phone_numbers}
                  </TableCell>
             
                  <TableCell className="border-none rounded-r-xl">
                    <Stack direction="row" gap="16px">
                      <Button onClick={() => handleClickEditOpen(row.id)} className="bg-blue-400 py-2 px-1 text-base 2xl:text-lg rounded-lg font-aeonik-medium text-white hover:text-text hover:bg-blue-500 transition-all duration-700 ease-in-out">
                        <Typography noWrap>
                          <BorderColorIcon />
                        </Typography>
                      </Button>
                      <Button  onClick={() => handleClickDeleteOpen(row.id)} className="bg-red-400 py-2 px-1 text-base 2xl:text-lg rounded-lg font-aeonik-medium text-white hover:text-white hover:bg-red-500 transition-all duration-700 ease-in-out">
                        <Typography noWrap>
                          <DeleteIcon />
                        </Typography>
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>


      <Dialog
        open={open}
        onClose={handleClose}
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
