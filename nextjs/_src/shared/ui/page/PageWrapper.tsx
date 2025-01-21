import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100evh - 64px)",
        padding: "54px 0 24px",
      }}
    >
      {children}
    </Box>
  );
};
