import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js + TypeScript recommended settings
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],

    rules: {
      // ✅ Allow temporary use of `any`
      "@typescript-eslint/no-explicit-any": "off",

      // ✅ Allow require() imports
      "@typescript-eslint/no-require-imports": "off",

      // ✅ Turn unused vars into warnings
      "@typescript-eslint/no-unused-vars": ["warn"],

      // ✅ Allow apostrophes in text without escaping
      "react/no-unescaped-entities": "off",

      // ✅ (Optional) Disable Prettier conflicts
      "prettier/prettier": "off",
    },
  },
];

export default eslintConfig;
