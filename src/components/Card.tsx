import { Box } from "@chakra-ui/layout";
export const Card: React.FC = ({ children }) => {
  return (
    <Box w="100%" maxHeight="420px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      {children}
    </Box>
  );
};
