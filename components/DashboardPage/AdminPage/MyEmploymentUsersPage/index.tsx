"use client";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

import FlexBox from "@/components/Common/FlexBox";
import MyEmploymentUsersTable from "./MyEmploymentUsersTable";
import { ClearIcon } from "@mui/x-date-pickers";
import Link from "next/link";
import toast from "react-hot-toast";
import Button from "@/components/Common/Button";
import { useMyEmploymentUserList } from "@/api/requests/dashboard/myEmploymentUsers";
import { useMyEmploymentGetUserDetailsSelect } from "@/api/requests/dashboard/myEmploymentGetUserDetailsSelect";
import { GridSortItem } from "@mui/x-data-grid";
import { useShowAddEditUserWithRoleModal } from "@/store/hooks/modal";


export default function MyEmploymentUsers() {

  const [myEmploymentDataUserList, setRows] = useState<MyEmploymentUserValues[]>([]);
  const { mutateAsync: myEmploymentUserList, isPending: isLoading } = useMyEmploymentUserList();
  const { mutateAsync: getUserDetails } = useMyEmploymentGetUserDetailsSelect();
  // const [rows, setRows] = useState<MyEmploymentUserValues[]>([]);
  const [rowCount, setRowCount] = useState(0); 
  

  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditable, setIsEditable] = useState(true);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const initialSortState: GridSortItem = { field: "full_name", sort: "asc" };
  const [sortModel, setSortModel] = useState<GridSortItem>(initialSortState);

  const handleSearchClick = () => {
    setSearchQuery(searchValue);
  };


  const handleOpenAddUser = () => {
    setIsEditable(true);
    setOpen(true);
    console.log("Button clicked on add user");
  };

  const handleClearClick = () => {
    setSearchValue("");
    setSearchQuery("");
  };

  const handleClickDeleteOpen = (user: any) => {
    setSelectedUser(user);
    setOpen(true);
  };
  

  const handleClickEditOpen = async (userId: string) => {
 
      getUserDetails(userId).then((userDetails) => {
          setSelectedUser(userDetails.data);
          showAddEditUserWithRoleModal({user:userDetails.data,action:"edit"})
      }, (error) => {
        toast.error("Failed to fetch user details");
      });
    
  };

  const handleClickResendPassLinkOpen = async (userId: string) => {
    try {
      alert("need to add resend functionality")
      setOpen(true);
    } catch (error) {
      toast.error("Failed to fetch user details");
    }
  };



  
  const fetchData = async () => {
    try {
      const response = await myEmploymentUserList({
        page:paginationModel.page,pageSize: paginationModel.pageSize,sort: sortModel, search: searchQuery
      });
      setRows(response.data.data);
        setRowCount(response.data.totalCount);
    } catch (error) {
      toast.error((error as any).message);
    }
  };

 
  useEffect(() => {
    fetchData();
  }, [searchQuery, paginationModel, sortModel, searchQuery]);

    var showAddEditUserWithRoleModal= useShowAddEditUserWithRoleModal();
  

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center md:items-start flex-col">
        <Typography className="flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          My Employment Users
        </Typography>

        <FlexBox className="w-full mb-6 items-center justify-between flex-col xl:flex-row gap-4">
          <FlexBox className="w-full items-center justify-end gap-4">
            <FlexBox className="w-full xl:w-2/5">
              <InputBase
                placeholder="Search all employment user..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                endAdornment={
                  <>
                    <IconButton
                      className="w-10 h-10 mx-1 md:mx-2"
                      onClick={handleSearchClick}
                    >
                      <SearchIcon className="text-blue400 text-3xl" />
                    </IconButton>
                    {searchValue && (
                      <IconButton
                        className="w-10 h-10 mx-1 md:mx-2"
                        onClick={handleClearClick}
                      >
                        <ClearIcon className="text-blue400 text-3xl" />
                      </IconButton>
                    )}
                  </>
                }
                className="ps-4 w-full border border-neutral-300 text-black font-aeonik bg-white rounded-lg p-1.5"
              />
            </FlexBox>
            <Link href="javascript:void(0)" onClick={()=>showAddEditUserWithRoleModal({user:undefined,action:"add"})} className="h-10">
              <Button className="min-w-44 h-10 medium-blue-gradient px-6 py-3 text-base 3xl:text-lg rounded-lg font-bold text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none">
                Add User
              </Button>
            </Link>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <MyEmploymentUsersTable 
      initialSortState={initialSortState}
      paginationModel={paginationModel}
      setPaginationModel={setPaginationModel}
      sortModel={sortModel}
      setSortModel={setSortModel}
      searchQuery={searchQuery} 
      myEmploymentDataUserList={myEmploymentDataUserList} 
      rowCount={rowCount}
      setRowCount={setRowCount}
      fetchData={fetchData} 
      handleClickResendPassLinkOpen={handleClickResendPassLinkOpen}
      handleClickEditOpen={handleClickEditOpen}
       handleClickDeleteOpen={handleClickDeleteOpen}
       isLoading={isLoading}/>
   
    </FlexBox>
  );
}
