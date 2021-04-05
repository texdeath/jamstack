import { mainLayoutStyles } from "@/styles/layout/mainLayout";

export const MainLayout: React.FC = ({ children }) => {
  return <main css={mainLayoutStyles}>{children}</main>;
};
