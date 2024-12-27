"use client";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef, GridSortItem } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Button from "@mui/material/Button";
import { usePendingApprovalList } from "@/api/requests/dashboard/pendingApprovals";
import toast from "react-hot-toast";
import { useDenySignUpFromApplication } from "@/api/requests/auth/register/deny";
import { useApproveSignUpFromApplication } from "@/api/requests/auth/register/approve";

// interface PendingApprovalsTableProps {
//   readonly searchQuery: string;
// }

export default function PendingApprovalsTable({
  searchQuery,
}: any) {
  const columns: GridColDef[] = [
    { field: "first_name", headerName: "First Name", width: 170 },
    { field: "last_name", headerName: "Last Name", width: 170 },
    { field: "email", headerName: "Email", width: 170 },
    { field: "job_title", headerName: "Job Title", width: 170 },
    { field: "company_name", headerName: "Company Name", width: 170 },
    { field: "signup_reason", headerName: "SignUp Reason", width: 170 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <Stack direction="row">
            <Button
            className="bg-red-400 py-2 px-3 md:px-6 text-base 2xl:text-lg rounded-lg font-aeonik-medium text-white hover:text-white hover:bg-red-500 transition-all duration-700 ease-in-out ms-4"
            onClick={() => handleDialogOpen(params.row.id, "resendPasswordLink")}
          >
            <Typography noWrap>Resend Password Link</Typography>
          </Button>
          <Button
            className="bg-blue-400 py-2 px-3 md:px-6 text-base 2xl:text-lg rounded-lg font-aeonik-medium text-white hover:text-text hover:bg-blue-500 transition-all duration-700 ease-in-out"
            onClick={() => handleDialogOpen(params.row.id, "approve")}
          >
            Approve
          </Button>
          <Button
            className="bg-red-400 py-2 px-3 md:px-6 text-base 2xl:text-lg rounded-lg font-aeonik-medium text-white hover:text-white hover:bg-red-500 transition-all duration-700 ease-in-out ms-4"
            onClick={() => handleDialogOpen(params.row.id, "deny")}
          >
            <Typography noWrap>Deny</Typography>
          </Button>
        
        </Stack>
      ),
    },
  ];

  const [rows, setRows] = useState<PendingApprovalValues[]>([]);
  const [rowCount, setRowCount] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const initialSortState: GridSortItem = { field: "first_name", sort: "asc" };
  const [sortModel, setSortModel] = useState<GridSortItem>(initialSortState);
  const { mutateAsync: requestPendingApprovalList, isPending: isLoading } =
    usePendingApprovalList();
  const { mutateAsync: requestPendingApprove, isPending: isPendingDeny } =
    useApproveSignUpFromApplication();
  const { mutateAsync: requestPendingDeny, isPending: isPendingApprove } =
    useDenySignUpFromApplication();

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [dialogAction, setDialogAction] = useState<"approve" | "deny" | "resendPasswordLink" | null>(
    null,
  );

  const handleDialogOpen = (id: string, action: "approve" | "deny" |"resendPasswordLink") => {
    setSelectedUserId(id);
    setDialogAction(action);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedUserId(null);
    setDialogAction(null);
  };

  const handleConfirmAction = async () => {
    if (dialogAction === "approve" && selectedUserId) {
      try {
        await requestPendingApprove(selectedUserId);
        toast.success("User approved successfully");
      } catch (error) {
        toast.error("Failed to approve user");
      }
    } else if (dialogAction === "deny" && selectedUserId) {
      try {
        await requestPendingDeny(selectedUserId);
        toast.success("User denied successfully");
      } catch (error) {
        toast.error("Failed to deny user");
      }
    } else if (dialogAction === "resendPasswordLink" && selectedUserId) {
      try {
        await requestPendingDeny(selectedUserId);
        toast.success("Password reset link sent successfully");
      } catch (error) {
        toast.error("Failed to sent password reset link");
      }
    }
    fetchData();
    handleDialogClose();
  };

  const fetchData = () => {
    // API call to fetch pending approvals
    requestPendingApprovalList({
      page: paginationModel.page,
      pageSize: paginationModel.pageSize,
      sort: sortModel,
      search: searchQuery,
    })
      .then((response) => {
        setRows(response.data.data);
        setRowCount(response.data.totalCount);
      })
      .catch((error) => toast.error(error));
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery, paginationModel, sortModel, searchQuery]);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
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

          <Dialog open={openDialog} onClose={handleDialogClose}>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to {dialogAction} this user?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirmAction} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </Box>
    </Box>
  );
}
