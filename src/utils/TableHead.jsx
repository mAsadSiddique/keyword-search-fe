import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const CustomTableHead = ({ headColumns }) => {
  return (
    <TableHead>
      <TableRow>
        {headColumns &&
          headColumns?.map((col, ind) => (
            <TableCell key={ind}>{col}</TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
