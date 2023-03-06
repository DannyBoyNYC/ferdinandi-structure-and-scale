import copy from "rollup-plugin-copy";

let files = ["index.js", "treasure.js", "dice.js"];

export default files.map((file) => {
  return {
    input: `src/js/${file}`,
    output: {
      file: `dist/js/${file}`,
      format: "iife",
    },
    plugins: [
      copy({
        targets: [
          {
            src: [
              "src/index.html",
              "src/dice.html",
              "src/treasure.html",
              "src/css/style.css",
            ],
            dest: "dist",
          },
        ],
      }),
    ],
  };
});
