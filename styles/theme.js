// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#444" : "#fff",
        color: props.colorMode === "dark" ? "#fff" : "#444",
      },
    }),
  },
  colors: {
    sidebar: {
      light: 'white',
      dark: 'gray.800',
    },
    text: {
      light: 'gray.600',
      dark: 'gray.200',
    }
  },
});

export default theme;
