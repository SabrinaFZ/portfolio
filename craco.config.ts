const CracoAlias = require("craco-alias");

module.exports = {
  jest: {
    configure: {
      roots: ["<rootDir>/src/"],
      moduleDirectories: ["node_modules", "src"],
    },
  },
  style: {
    sass: {
      loaderOptions: {
        // Prefer 'sass' (dart-sass) over 'node-sass' if both packages are installed.
        implementation: require("sass"),
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.extend.json",
        unsafeAllowModulesOutsideOfSrc: true,
      },
    },
  ],
  webpack: {
    configure: {
      resolve: {
        modules: ["node_modules"],
      },
    },
  },
};

export {};
