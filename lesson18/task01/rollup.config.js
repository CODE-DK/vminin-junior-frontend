import styles from "rollup-plugin-styles";
import image from "rollup-plugin-img";
import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";

export default [
  {
    input: "index.js",
    output: {
      file: "./dist/bundle.js",
      format: "iife",
    },
    plugins: [
      styles(),
      image({ limit: 50000 }),
      babel({ babelHelpers: 'bundled' }),
      serve({
        port: 8000,
      }),
    ],
  },
];
