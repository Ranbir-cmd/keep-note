import React from "react";
import { LightbulbOutlined as LightBulb } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";

const EmptyNote = () => {
  return (
    <Container>
      <Light />
      <Text>Notes you add appear here</Text>
    </Container>
  );
};

const Light = styled(LightBulb)`
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
export default EmptyNote;
