import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import clsx from "clsx";

type Props = {
  open: boolean;
  color?: string;
  setChecked: (newState: boolean) => void;
};

export default function CustomSelectIcon({ open, color }: Props) {
  return open ? (
    <KeyboardArrowDownIcon
      className={clsx(color ? color : "text-neutral-700")}
    />
  ) : (
    <KeyboardArrowRightIcon
      className={clsx(color ? color : "text-neutral-700")}
    />
  );
}
