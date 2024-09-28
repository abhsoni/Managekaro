"use client";
import { typographyType, Typography } from "@/theme/typography";
import styled, { css } from "styled-components";

interface DefaultStyleProps {
  typography: {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    letterSpacing: string;
    fontStyle?: string;
  };
  mobileTypography: {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    letterSpacing: string;
    fontStyle?: string;
  };
  color: string;
}

const defaultStyle = css<DefaultStyleProps>`
  font-size: ${(props: DefaultStyleProps) => props.typography.fontSize};
  line-height: ${(props: DefaultStyleProps) => props.typography.lineHeight};
  font-family: ${(props: DefaultStyleProps) => props.typography.fontFamily};
  font-weight: ${(props: DefaultStyleProps) => props.typography.fontWeight};
  letter-spacing: ${(props: DefaultStyleProps) =>
    props.typography.letterSpacing};
  color: ${(props: DefaultStyleProps) => props.color};
  font-style: ${(props: DefaultStyleProps) =>
    props.typography.fontStyle ?? "normal"};

  @media (max-width: 768px) {
    font-size: ${(props: DefaultStyleProps) => props.mobileTypography.fontSize};
    line-height: ${(props: DefaultStyleProps) =>
      props.mobileTypography.lineHeight};
    font-weight: ${(props: DefaultStyleProps) =>
      props.mobileTypography.fontWeight};
    letter-spacing: ${(props: DefaultStyleProps) =>
      props.mobileTypography.letterSpacing};
    font-family: ${(props: DefaultStyleProps) =>
      props.mobileTypography.fontFamily};
    font-style: ${(props: DefaultStyleProps) =>
      props.typography.fontStyle ?? "normal"};
  }
`;

const StyledTags = {
  div: styled.div<DefaultStyleProps>`
    ${defaultStyle}
  `,
  h1: styled.h1<DefaultStyleProps>`
    ${defaultStyle}
  `,
  h2: styled.h2<DefaultStyleProps>`
    ${defaultStyle}
  `,
  h3: styled.h3<DefaultStyleProps>`
    ${defaultStyle}
  `,
  h4: styled.h4<DefaultStyleProps>`
    ${defaultStyle}
  `,
  h5: styled.h5<DefaultStyleProps>`
    ${defaultStyle}
  `,
  h6: styled.h6<DefaultStyleProps>`
    ${defaultStyle}
  `,
  p: styled.p<DefaultStyleProps>`
    ${defaultStyle}
  `,
  a: styled.a<DefaultStyleProps>`
    ${defaultStyle}
  `,
  span: styled.span<DefaultStyleProps>`
    ${defaultStyle}
  `,
  label: styled.label<DefaultStyleProps>`
    ${defaultStyle}
  `,
};

const Text = ({
  children,
  typography = "body1",
  mobileTypography = "body2",
  style,
  tag = "p",
  ...props
}: {
  tag?: keyof typeof StyledTags;
  children?: React.ReactNode;
  typography?: typographyType;
  mobileTypography?: typographyType;
  style?: React.CSSProperties;
} & React.HTMLAttributes<any>) => {
  const Tag = tag as keyof typeof StyledTags; // Convert tag to key

  const StyledTag = StyledTags[Tag] as React.ComponentType<any>; // Use key in StyledTags object

  return (
    <StyledTag
      typography={Typography[typography]}
      mobileTypography={Typography[mobileTypography]}
      {...props}
    >
      {children}
    </StyledTag>
  );
};

export default Text;
