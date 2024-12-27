import { GridSortItem } from "@mui/x-data-grid";

export type SortModel = {
    field: string;
    sort: "asc" | "desc";
  };
  
  export type RequestModel = {
    page: number;
    pageSize: number;
    sort: GridSortItem | null;
    search: string;
  };

  export type CommonGridResponseModel={
    data: any[];
    totalCount: number;
  }
  export type isGlobal={
    organizationId: any;
    isGlobalCompliance: boolean;
  }
  export type globalSave={
    id: any;
    introductionLetter: any;
    employerLevelDisclaimer: any;
    summaryOfRights: any;
    organizationId: any;
    stateNoticeToConsumerList: [
    {
      stateId: any;
      description: any;
    }
  
  ]
}
export type localSave={
  id: any;
  introductionLetter: any;
  employerLevelDisclaimer: any;
  summaryOfRights: any;
  organizationId: any;
  stateNoticeToConsumerList: [
  {
    stateId: any;
    description: any;
  }

]
}