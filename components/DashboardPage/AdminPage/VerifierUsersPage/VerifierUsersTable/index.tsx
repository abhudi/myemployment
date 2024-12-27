"use client";
import { Dialog, DialogActions, DialogContent, DialogTitle, Pagination, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef, GridSortItem } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import toast from "react-hot-toast";
import Button from "@/components/Common/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useVerifierUserList } from "@/api/requests/dashboard/verifierUsers";
import { useQueryClient } from "@tanstack/react-query";

interface VerifierUsersTableProps {
  searchQuery: string;
}

export default function VerifierUsersTable({ searchQuery }:VerifierUsersTableProps) {
  
  const columns: GridColDef[] = [
  
    { field: "full_name", headerName: "Full Name",      width: 170,},
    { field: "company_name", headerName: "Company Name",width: 170,},
    { field: "email", headerName: "Email",      width: 170,},
    { field: "job_title", headerName: "Job Title",width: 170,},
    { field: "phone_numbers", headerName: "Phone Number",width: 170,  sortable: false,},
    { field: "address", headerName: "Address", flex:1, sortable: false,},
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button onClick={() => handleClickResendOpen(params.row.id)} className="bg-blue-400 py-2 px-1 text-base 2xl:text-lg rounded-lg font-aeonik-medium text-white hover:text-text hover:bg-blue-500 transition-all duration-700 ease-in-out">
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

  const [rows, setRows] = useState<VerifierUserValues[]>([]);
  const [rowCount, setRowCount] = useState(0); 
   const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const initialSortState: GridSortItem = { field: "full_name", sort: "asc" };
  const [sortModel, setSortModel] = useState<GridSortItem>(initialSortState);
  const { mutateAsync:verifierUserList , isPending: isLoading } =   useVerifierUserList();

  const fetchData =  () => {
    // API call to fetch verifier users
    verifierUserList({  page:paginationModel.page,pageSize: paginationModel.pageSize,sort: sortModel, search: searchQuery })
      .then((response) => {
        setRows(response.data.data);
        setRowCount(response.data.totalCount);
      })
      .catch((error) => toast.error(error));
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery,paginationModel, sortModel, searchQuery]);

  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  
  const handleClickDeleteOpen = (userId: string) => {
    setSelectedUserId(userId);
    setOpen(true);
  };

      const handleClickEditOpen = (userId: string) => {
    setSelectedUserId(userId);
    setOpen(true);
  };

  const handleClickResendOpen = (userId: string) => {
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
        rows={rows}
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
    </Box>
  );
}
