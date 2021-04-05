import React from "react";
import { Box } from "@chakra-ui/layout";
import { cardStyleOptions } from "@/styles/modules/card";

/**
 * 記事一覧を表示するカードコンポーネントです。
 * @param children
 */
export const Card: React.FC = ({ children }) => {
  const {
    width,
    borderRadius,
    borderWidth,
    marginBottom,
    maxHeight,
    overflow,
  } = cardStyleOptions;
  return (
    <Box
      w={width}
      maxHeight={maxHeight}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      overflow={overflow}
      marginBottom={marginBottom}
    >
      {children}
    </Box>
  );
};
