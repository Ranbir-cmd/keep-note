import React from "react";

import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { Box, Typography, styled } from "@mui/material";

const EmptyArchive = () => {
  return (
    <Container>
      <NoArchive />
      <Text>Your archived notes appear here</Text>
    </Container>
  );
};

const NoArchive = styled(ArchiveOutlinedIcon)`
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
