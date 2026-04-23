import { createContext, useContext } from "react"
import { TBackgroundVariants, TVariant } from "./types"

interface IArrowLinkContext {
  background: TBackgroundVariants
  variant: TVariant
}

const ArrowLinkContext = createContext<IArrowLinkContext | null>(null)

export function useArrowLink() {
  const context = useContext(ArrowLinkContext)

  if (!context) {
    throw new Error("Use within ArrowLink.Root")
  }

  return context
}

export default ArrowLinkContext