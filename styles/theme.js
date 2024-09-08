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
      light: '#efefef',
      dark: '',
    },
    text: {
      light: 'gray.600',
      dark: 'gray.200',
    }
  },
});

export default theme;


{/* ..const theme = extendTheme({
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
      light: '#d0d0d0',
      dark: '#5e5e5e',
    },
    text: {
      light: '#808ff',
      dark: '#c0c0c0',
    }
  },
});.. */}