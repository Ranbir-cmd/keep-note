import React from "react";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Box, Typography, styled } from "@mui/material";

const EmptyArchive = () => {
  return (
    <Container>
      <NoTrash />
      <Text>No notes in Recycle Bin</Text>
    </Container>
  );
};

const NoTrash = styled(DeleteForeverOutlinedIcon)`
  font-size: 120px;
  color: #eee;
`;
const Text = styled(Typography)`
  color: #888;
  font-size: 24px;
`;
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24vh;
`;
export default EmptyArchive;
