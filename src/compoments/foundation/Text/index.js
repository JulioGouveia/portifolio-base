import styled, { css } from "styled-components"

const title = css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
    `}
`
const titleXL = css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.titleXL.fontSize};
        font-weight: ${theme.typographyVariants.titleXL.fontWeight};
        line-height: ${theme.typographyVariants.titleXL.lineHeight};
    `}
    margin: 0;
`
const subTitle = css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.subTitle.fontSize};
        font-weight: ${theme.typographyVariants.subTitle.fontWeight};
        line-height: ${theme.typographyVariants.subTitle.lineHeight};
    `}
`

const smallestException1 = css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.smallestException1.fontSize};
        font-weight: ${theme.typographyVariants.smallestException1.fontWeight};
        line-height: ${theme.typographyVariants.smallestException1.lineHeight};
    `}
`
const paragraph1 = css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${theme.typographyVariants.paragraph1.lineHeight};
    `}
`
const paragraph2 = css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.paragraph2.fontSize};
        font-weight: ${theme.typographyVariants.paragraph2.fontWeight};
        line-height: ${theme.typographyVariants.paragraph2.lineHeight};
    `}
`

const TextBase = styled.span`
 ${function ({variant}) {
     return TypographyVariants[variant]
    }
 }
`

export function Text ({variant, children, tag, ...props}) {
    return (
        <TextBase as={tag} variant={variant} {...props}>
            {children}
        </TextBase>
    )
}

const TypographyVariants = {
    title: title,
    titleXL: titleXL,
    paragraph1: paragraph1,
    paragraph2: paragraph2,
    subTitle: subTitle, 
    smallestException1: smallestException1,
    smallestException2: css`background-color: grey`
    
}
