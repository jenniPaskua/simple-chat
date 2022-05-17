import React, { useState } from "react";
import { StatusBar, Image } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import * as Font from "expo-font";
import Navigation from "./navigations";
import { images } from "./utils/images";

const cacheFonts = (fonts) => {
  return fonts.map((font) => Font.loadAsync(font));
};

const App = () => {
  const _loadAssets = async () => {
    const imageAssets = cacheImages([...Object.values(images)]);
    const fontAssets = cacheFonts([]);
    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
