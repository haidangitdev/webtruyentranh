/* eslint-disable react-hooks/rules-of-hooks */

// Ghi đè cấu hình webpack

const {
  override,
  useBabelRc
} = require("customize-cra");

module.exports = override(
  useBabelRc()
);