"use client";

import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import Link from "next/link";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

import UserManagementTable from "./UserManagementTable";
import toast from "react-hot-toast";
import { useOrganizationUserList } from "@/api/requests/dashboard/organizationUserList";
import { sessionStorageUtil } from "@/utils/sessionStorageUtil";
import { useOrganizationGetUserDetailsSelect } from "@/api/requests/dashboard/organizationGetUserDetailsSelect";
import { useShowAddEditUserModal } from "@/store/hooks/modal";
import { OrganizationProfileFormValues } from "@/api/types";


export default function UserManagement() {
  const [organizationUserDataList, setRows] = useState<OrganizationUserValues[]>([]);
  const { mutateAsync: organizationUserList, isPending: isLoading } = useOrganizationUserList();
  const { mutateAsync: getUserDetails } = useOrganizationGetUserDetailsSelect();

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditable, setIsEditable] = useState(true);


  const fetchData = async () => {
    try {
      const response = await organizationUserList({
        requestDto: {
          organizationId:sessionStorageUtil.getOrganizationId(),
            organizationTypeId: sessionStorageUtil.getOrganizationTypeId(),
        },
      });
      setRows(response.data);
    } catch (error) {
      toast.error((error as any).message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  const handleClickEditOpen = async (userId: string) => {
    try {
      const userDetails = await getUserDetails(userId);
      setSelectedUser(userDetails.data);
      showAddEditUserModal({ user: userDetails.data as OrganizationProfileFormValues, action: "edit" });
    
    } catch (error) {
      toast.error("Failed to fetch user details");
    }
  };


   const handleClickDeleteOpen = (user: any) => {
    setSelectedUser(user);
    setIsEditable(false);
    setOpen(true);
  };
  



  const showAddEditUserModal= useShowAddEditUserModal();

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full flex-row gap-0 justify-between items-center mb-2 md:mb-6">
        <Typography className="w-full text-start text-3xl font-aeonik-bold text-blue400 mt-2">
          User Management
        </Typography>
        <Link href="javascript:void(0)" onClick={()=>showAddEditUserModal({ user: undefined, action: "add" })}>
         <Button className="min-w-44 medium-blue-gradient px-6 py-3 text-base 3xl:text-lg rounded-lg font-bold text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none">
          Add User
        </Button>
        </Link>

      </FlexBox>

      <UserManagementTable organizationUserDataList={organizationUserDataList} fetchData={fetchData} handleClickEditOpen={handleClickEditOpen} handleClickDeleteOpen={handleClickDeleteOpen} isLoading={isLoading}/>
    </FlexBox>
  );
}
