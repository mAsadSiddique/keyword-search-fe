import React from "react";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import CustomTableHead from "src/utils/TableHead";
import Spinner from "src/utils/Spinner";
import { useGetScreenBreakPointDown } from "src/hooks/useGetScreenBreakpoints";

const KeywordTableListing = ({ isLoading, totalKeywords, items = [] }) => {
  const theme = useTheme();
  const smDown = useGetScreenBreakPointDown("sm");

  const headColumns = [
    "Keywords",
    "Search Volume",
    "Average CPC (USD)",
    "Competition",
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          //   alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          minHeight: 120,
          borderRadius: 4,
          backgroundColor: theme.palette.grey[200],
          p: 5,
          my: 5,
          gap: 10,
        }}
      >
        <Typography variant="body1">Total Keywords</Typography>
        <Typography variant="body1">
          {totalKeywords ? totalKeywords : "-----"}
        </Typography>
      </Box>
      <Card>
        <Box
          sx={{
            minWidth: { xs: "auto", sm: 800 },
          }}
        >
          <TableContainer sx={{ maxHeight: { xs: 440, sm: "100%" } }}>
            <Table aria-label="collapsible table" stickyHeader={smDown}>
              <CustomTableHead headColumns={headColumns} />

              <TableBody>
                {isLoading ? (
                  <Spinner size={"5rem"} />
                ) : (
                  items?.map((product, index) => {
                    return (
                      <React.Fragment key={index}>
                        {product?.map((item, ind) => {
                          return (
                            <TableRow key={ind}>
                              <TableCell component="th" scope="row">
                                {item?.string}
                              </TableCell>
                              <TableCell>-----</TableCell>
                              <TableCell>-----</TableCell>
                              <TableCell>-----</TableCell>
                            </TableRow>
                          );
                        })}
                        {/* <KeywordsTableRows index={index} items={product} /> */}
                      </React.Fragment>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};

export default KeywordTableListing;
