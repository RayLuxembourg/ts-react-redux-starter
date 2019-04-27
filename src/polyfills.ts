import "whatwg-fetch"
import "abortcontroller-polyfill/dist/polyfill-patch-fetch"
import "es7-object-polyfill"
import "url-polyfill"
import "url-search-params-polyfill"

Array.prototype.equals = function(array) {
  return (
    this.length === array.length &&
    this.every(function(this_i, i) {
      return this_i === array[i]
    })
  )
}
