const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
config.resolver.unstable_enablePackageExports = false; // TODO: remove after supabase resolves their bug https://github.com/expo/expo/issues/36375

module.exports = withNativeWind(config, { input: "./app/globals.css" });
