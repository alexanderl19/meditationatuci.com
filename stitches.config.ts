import { createStitches } from "@stitches/react";
import { sage, mint } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...sage,
      ...mint,
    },
  },
});
