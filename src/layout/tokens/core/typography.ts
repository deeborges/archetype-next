const family = {
  nunito: {
  },
  variant: {
    thin: "",
    light: "",
    regular: "",
    semi_bold: "",
    bold: "",
    extra_bold: "",
  },
};

const line_height = {
  tight: 1,
  medium: 1.1,
  comfy: 1.5,
};

const size = {
  xxsmall: "0.625rem", // 10px
  xsmall: "0.75rem", // 12px
  small: "0.875rem", // 14px
  default: "1rem", // 16px | 1rem
  medium: "1.25rem", // 20px
  large: "1.5rem", // 24px
  xl_2: "2rem", // 32px // 16 * 2
  xl_2_5: "2.5rem", // 40px // 16 * 2,5
  xl_3: "3rem", // 48px // 16 * 3
  xl_4: "4rem", // 64px // 16 * 4
  xl_5: "5rem", // 80px // 16 * 5
  xl_6: "6rem", // 96px // 16 * 6
};

const styles = {
  heading: {
    web: {
      level1: size.xl_5,
      level2: size.xl_4,
      level3: size.xl_3,
      level4: size.xl_2,
      level5: size.xl_2_5,
      level6: size.large,
    },
    mobile: {
      level1: size.xl_4,
      level2: size.xl_3,
      level3: size.xl_2,
      level4: size.xl_2_5,
      level5: size.large,
      level6: size.medium,
    },
  },
  paragraph: size.default,
  label: size.xsmall,
};

const weight = {
  "100": 100,
  "200": 200,
  "300": 300,
  "400": 400,
  "500": 500,
  "600": 600,
  "700": 700,
  "800": 800,
  "900": 900,
};

export const typography = {
  family,
  line_height,
  size,
  styles,
  weight,
};

export default typography;
