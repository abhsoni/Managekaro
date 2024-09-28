import { CSSProperties } from "react";

export const Typography: {
  [key: string]: CSSProperties;
} = {
  h1: {
    fontSize: "32px",
    fontFamily: "__Lora_65b071",
    fontWeight: 400,
    lineHeight: "42px",
  },
  h2: {
    fontSize: "24px",
    fontFamily: "__Lora_65b071",
    fontWeight: 400,
    lineHeight: "30px",
  },
  h3: {
    fontSize: "16px",
    fontFamily: "__Lora_65b071",
    fontWeight: 700,
    lineHeight: "20px",
  },
  h4: {
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    lineHeight: "20px",
  },
  h5: {
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    lineHeight: "20px",
  },
  h6: {
    fontSize: "18px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    lineHeight: "26px",
  },
  subtitle1: {
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    lineHeight: "24px",
  },
  subtitle2: {
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    lineHeight: "16px",
  },
  subtitle3: {
    fontSize: "12px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    lineHeight: "14px",
  },
  subtitle4: {
    fontSize: "12px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "14.5px",
  },
  body1: {
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "-0.18px",
  },
  body2: {
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "-0.09px",
  },
  body3: {
    fontSize: "12px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "0.02px",
  },
  body4: {
    fontSize: "20px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0.02px",
  },
  body8: {
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    lineHeight: "17px",
    letterSpacing: "-0.09px",
  },
  body5: {
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "-0.09px",
  },
  body6: {
    fontSize: "32px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    lineHeight: "38px",
    letterSpacing: "-0.09px",
  },
  body7: {
    fontSize: "12px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    lineHeight: "16px",
    letterSpacing: "0.02px",
  },
  supportingFont1: {
    fontSize: "18px",
    fontFamily: "__Lora_65b071",
    fontWeight: 400,
    fontStyle: "italic",
    lineHeight: "26px",
  },
  supportingFont2: {
    fontSize: "18px",
    fontFamily: "__Lora_65b071",
    fontWeight: 500,
    lineHeight: "26px",
    fontStyle: "italic",
  },
  supportingFont3: {
    fontSize: "18px",
    fontFamily: "__Lora_65b071",
    fontWeight: 400,
    fontStyle: "italic",
    lineHeight: "26px",
  },
  supportingFont4: {
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "16px",
  },
  supportingFont5: {
    fontSize: "18px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "24px",
  },
  supportingFont6: {
    fontSize: "18px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    lineHeight: "24px",
  },
  supportingFont7: {
    fontSize: "20px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: "-0.09px",
  },
  supportingFont8: {
    fontSize: "10px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "12px",
    letterSpacing: "-0.09px",
  },
  supportingFont9: {
    fontSize: "12px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "12px",
    letterSpacing: "0.02px",
  },
};

export type typographyType = keyof typeof Typography;
