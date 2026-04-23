import { cn } from "@/lib/utils"

import { textColorStyles } from "./styles"
import { IArrowLinkTextProps } from "./types"

import { Typography } from "@components/ui/typography"
import { useArrowLink } from "../../context"

export function Text({
  text,
  className,
}: IArrowLinkTextProps) {
  const { background, variant: variantArrowLink } = useArrowLink()

  const variant = variantArrowLink === "solid" ? background : variantArrowLink

  return (
    <Typography
      variant="p"
      className={cn(
        textColorStyles({ variant }),
        className
      )}
    >
      {text}
    </Typography>
  )
}