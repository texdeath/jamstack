import { mainLayoutStyles } from "@/styles/mainLayout";

export const MainLayout: React.FC = ({ children }) => {
  return <main css={mainLayoutStyles}>{children}</main>;
};
