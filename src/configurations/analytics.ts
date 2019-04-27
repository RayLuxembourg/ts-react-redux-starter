import { environment } from "../environments"
import { API } from "./api"

export interface AnalyticEvent {

}

class AppAnalytics {
  debug = localStorage.getItem("debug") || null
  url = environment.analyticsUrl

  static isDebugging() {
    return !environment.production
  }
  static currentUser() {
    const user = localStorage.getItem("user")
    if (user) {
      return JSON.parse(user).id
    }
    return null
  }

  send(event:AnalyticEvent) {
    API.post(`${this.url}`, {
      ...event
    }).subscribe()
  }
}
const AnalyticsApi = new AppAnalytics()

export default AnalyticsApi
