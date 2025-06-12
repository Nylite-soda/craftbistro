import { createTheme, MantineColorsTuple } from "@mantine/core";

const burgundy: MantineColorsTuple = [
  "#fdf2f2",
  "#fce4e4",
  "#f7c6c7",
  "#f2a5a7",
  "#ee8a8d",
  "#eb7a7e",
  "#ea7176",
  "#d05f65",
  "#ba545a",
  "#a3474e",
];

const gold: MantineColorsTuple = [
  "#fefbf7",
  "#fcf5eb",
  "#f7e9d1",
  "#f1dcb5",
  "#ecd19c",
  "#e8c98b",
  "#e6c583",
  "#ccad6e",
  "#b69a5f",
  "#9f864e",
];

const cream: MantineColorsTuple = [
  "#fefefe",
  "#fcfcfc",
  "#f9f6f0",
  "#f5f0e8",
  "#f1ebe1",
  "#ede7dc",
  "#eae5d9",
  "#d1ccc2",
  "#b9b5ad",
  "#a29e97",
];

export const theme = createTheme({
  colors: {
    burgundy,
    gold,
    cream,
  },
  primaryColor: "burgundy",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  headings: {
    fontFamily: "Georgia, serif",
  },
  defaultRadius: "md",
});
