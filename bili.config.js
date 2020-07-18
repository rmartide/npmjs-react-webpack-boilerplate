import peerDepsExternal from "rollup-plugin-peer-deps-external";
module.exports = {
	input: "src/index.js",
	plugins: {
		babel: {
			presets: ["@babel/preset-env", "@babel/preset-react"],
			plugins: ["@babel/plugin-proposal-class-properties"]
		},
		"peer-deps-external": peerDepsExternal()
	},
	output: {
		moduleName: "module-name",
		fileName: "packagename[min].js",
		format: ["umd", "umd-min"]
	}
};
