import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#FFBF00",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./FNB.png",
  fullDecal: "./FNB.png",
});

export default state;
