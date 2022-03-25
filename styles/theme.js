import styled from "styled-components";


const fontSizes = {
    small: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "30px",
    xxxl: "38px",
};
  
  const deviceSizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "450px",
    tablet: "768px",
    tabletL: "1024px",
    desktopS: "1200px",
  };
  
  const colors = {
    black: "#000000",
    white: "#FFFFFF",
    gray_1: "#222222",
    blue: "blue",
    red: "red",
  };
  
  const device = {
    mobileS: `only all and (max-width: ${deviceSizes.mobileS})`,
    mobileM: `only all and (max-width: ${deviceSizes.mobileM})`,
    mobileL: `only all and (max-width: ${deviceSizes.mobileL})`,
    tablet: `only all and (max-width: ${deviceSizes.tablet})`,
    tabletL: `only all and (max-width: ${deviceSizes.tabletL})`,
    desktopS: `only all and (max-width: ${deviceSizes.desktopS})`,
  };
  
  const theme = {
    fontSizes,
    colors,
    deviceSizes,
    device,
  };
  
  export default theme;