import { cn } from "@/lib/utils"

import { iconContainerStyles } from "./styles"

import { useArrowLink } from "../../context"
import { ArrowIcon } from "@public/assets/icons/arrow"


const containerBgByBackground = {
  dark: "dark",
  "alternative-dark": "dark",

  light: "light",
  "alternative-light": "light",

  green: "green",
  "alternative-green": "green",

  transparent: "transparent",
} as const


const iconColorByBackground = {
  dark: "text-green",
  "alternative-dark": "text-white",

  light: "text-green",
  "alternative-light": "text-black",

  green: "text-black",
  "alternative-green": "text-white",

  transparent: "text-current",
} as const

export function Icon() {
  const { background, variant } = useArrowLink()

  const isSolid = variant === "solid"

  const containerBg = isSolid
    ? containerBgByBackground[background]
    : "transparent"

  const iconColor = isSolid
    ? iconColorByBackground[background]
    : "text-current"

  return (
    <span
      className={cn(
        iconContainerStyles({
          background: containerBg,
        })
      )}
    >
      <ArrowIcon
        className={cn(
          iconColor
        )}
      />
    </span>
  )
}