import { Heading } from "@chakra-ui/layout";
import { headerWrapperStyles } from "@/styles/header";

export const Header: React.FC = () => {
  return (
    <header css={headerWrapperStyles}>
      <Heading>雑記</Heading>
    </header>
  );
};
