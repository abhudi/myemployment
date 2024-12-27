export type AccountSetupInfo = {
  accountType: string;
  permissible_purposes: {
    for_employment_purposes: boolean;
    by_written_instruction: boolean;
    for_consumer_initiated_transaction: boolean;
  };
};
