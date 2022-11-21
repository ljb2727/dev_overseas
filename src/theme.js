import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#666666",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },

    green: {
      main: "#36ae37",
      contrastText: "#ffffff",
    },
    white: {
      main: "#ffffff",
      contrastText: "#333333",
    },
    gray: {
      main: "#aeaeae",
      contrastText: "#ffffff",
    },

    red: {
      main: "#ff0000",
      contrastText: "#ffffff",
    },

    blue: {
      main: "#436ae3",
      contrastText: "#ffffff",
    },

    text: {
      blue: "#436ae3",
      green: "#36ae37",
      red: "#ff0000",
      gray: "#666666",
      black: "#000000",
    },

    common: {
      color: "#2d2d2d",
      borderColor: "#e0e0e0",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        variant: "outlined",
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: "1rem",
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        // Name of the slot
        root: {
          "& .Mui-selected": {
            fontWeight: "bold",
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: "4px",
        },
      },
    },

    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "0.9rem",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "0",
          marginLeft: "0",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          //background: "none",
        },
      },
    },
  },
});

export default theme;
