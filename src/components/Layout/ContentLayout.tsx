import { Container } from "@chakra-ui/layout";
import { contentLayoutStyles } from "@/styles/layout/contentLayout";

export const ContentLayout: React.FC = ({ children }) => {
  return (
    <div css={contentLayoutStyles}>
      <Container maxW="xl" centerContent>
        {children}
      </Container>
    </div>
  );
};
