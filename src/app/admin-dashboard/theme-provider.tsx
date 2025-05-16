"use client";

import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create a dark theme that matches main site colors
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a", // Darker blue-gray like main site
      paper: "#1e293b",   // Slightly lighter blue-gray for cards/papers
    },
    primary: {
      main: "#60a5fa",    // Bright blue from main site
      light: "#93c5fd",
      dark: "#3b82f6",
    },
    secondary: {
      main: "#8b5cf6",    // Purple accent from main site
      light: "#a78bfa",
      dark: "#7c3aed",
    },
    success: {
      main: "#22c55e",    // Green for completed status
    },
    warning: {
      main: "#fbbf24",    // Amber for pending status
    },
    text: {
      primary: "#f3f4f6",
      secondary: "#94a3b8",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Force any potential root layout styles to be overridden
        'header, footer': {
          display: 'none !important',
        },
        body: {
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)',
          minHeight: '100vh',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
        containedPrimary: {
          background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
          boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
          '&:hover': {
            background: 'linear-gradient(to right, #2563eb, #3b82f6)',
            boxShadow: '0 6px 20px rgba(59, 130, 246, 0.6)',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'linear-gradient(to bottom, #0f172a, #1e293b)',
          borderRight: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to right, #0f172a, #1e293b)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
          backgroundImage: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))',
          backdropFilter: 'blur(10px)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
        },
        colorSuccess: {
          background: 'linear-gradient(145deg, #22c55e, #16a34a)',
        },
        colorWarning: {
          background: 'linear-gradient(145deg, #fbbf24, #f59e0b)',
        },
      },
    },
  },
});

export default function AdminThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
} 