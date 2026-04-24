import { Fragment } from "react";

export function ShadowsGlowingOrbs() {
  return(
    <Fragment>
      <div className="hero-glow-blue absolute top-1/4 -left-1/4 w-max h-300 blur-[100px]" />
      <div className="hero-glow-yellow absolute bottom-1/4 -right-1/4 w-250 h-250 blur-[80px]" />
    </Fragment>
  )
}