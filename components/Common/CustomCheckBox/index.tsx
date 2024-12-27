import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";

export default function CustomCheckBox() {
  return (
    <Checkbox
      icon={<Box className="w-6 h-6 border border-gray-300 rounded-md" />}
      checkedIcon={
        <Box className="w-6 h-6 bg-green-100 border border-green-200 rounded-md relative">
          <img
            draggable="false"
            src="/assets/img/dashboard/consumer/consentManagement/checked.png"
            alt=""
            className="w-12 absolute -top-0.5 -right-1"
          />
        </Box>
      }
    />
  );
}
