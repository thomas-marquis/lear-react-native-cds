import React from "react";
import { WebView } from "react-native-webview";

export default function CdiscountScreen() {
  return <WebView source={{ uri: "https://www.cdiscount.com" }} />;
}
