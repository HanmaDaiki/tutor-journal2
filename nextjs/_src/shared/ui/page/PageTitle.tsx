import { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

export const PageTitle = ({ children }: PropsWithChildren) => {
  return (
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      textTransform="uppercase"
      color="primary"
      padding={2}
    >
      {children}
    </Typography>
  );
};
