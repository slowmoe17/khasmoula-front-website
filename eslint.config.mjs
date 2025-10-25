import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
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
      "no-restricted-imports": ["error", {
          "paths": [
            {
              "name": "next/navigation",
              "message": "Please use the navigation from @/i18n/navigation instead",
              "importNames": ["redirect", "usePathname", "useRouter", ]
            }, 
            {
              "name": "next/link",
              "message": "Please use the navigation from @/i18n/navigation instead",
              "importNames": ["default"]
            }
          ]
        }]
    },
  },
];

export default eslintConfig;
