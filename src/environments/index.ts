import { environment as dev } from "./dev"
import { environment as live } from "./live"
import { environment as qa } from "./qa"

type env = "live" | "qa" | "dev" | undefined | "undefined"
// @ts-ignore

export const environment = (() => {
  switch (process.env.REACT_APP_ENV as env) {
    case "live":
      return live
    case "qa":
      return qa
    default:
      return dev
  }
})()
