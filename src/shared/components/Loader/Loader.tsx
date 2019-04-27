import React from "react"
import { ReactComponent as LoaderSvg } from "../../assets/ios-spinner.svg"
import "./index.scss"

export const Loader = () => {
  return (
    <div>
      <LoaderSvg
        className={"loading"}
        // stroke={"#c00"}
        width={"100px"}
        height={"100px"}
      />
    </div>
  )
}
