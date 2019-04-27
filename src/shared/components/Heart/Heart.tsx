import React, { PureComponent } from "react"
import posed from "react-pose"
import "./Heart.scss"
import SvgHeart from "./SvgHeart"
import { tween, easing, keyframes } from "popmotion"

const PosedHeart = posed(SvgHeart)({
  saved: {
    scale: 1,
    fill: "#FF6C4D",
    stroke: "#FF6C4D",
    originX: props => parseInt(props.width, 10) / 2,
    originY: props => parseInt(props.height, 10) / 2,
    transition: {
      scale: keyframes({
        values: [1, 1.4, 1],
        duration: 350,
        easings: [easing.easeIn, easing.easeOut, easing.easeIn],
        loop: 2
      }),
      default: props => tween(props)
    }
  },
  unsaved: {
    scale: 1,
    originX: props => parseInt(props.width, 10) / 2,
    originY: props => parseInt(props.height, 10) / 2,
    delay: 100,
    transition: {
      scale: { type: "spring" },
      default: props => tween(props)
    },
    // transition: {
    //   scale: {
    //     type: "keyframes",
    //     values: [1, 0.6, 1],
    //     duration: 400
    //   }
    // },
    fill: "#fff",
    stroke: "#FF6C4D"
  }
})
type Props = {
  liked: boolean
  onClick: () => void
  loading?: boolean
}

export class Heart extends PureComponent<Props, { saved: boolean }> {
  static defaultProps: Props = {
    liked: false,
    onClick: () => null
  }
  state = {
    saved: false
  }
  likedStyling = {
    stroke: ""
    // fill: "#c00"
  }

  emptyLikeStyling = {
    stroke: "#FF6C4D"
    // fill: "#fff"
  }

  render(): React.ReactNode {
    const { liked, onClick, loading } = this.props
    // const svgProps = liked ? this.likedStyling : this.emptyLikeStyling
    return (
      <div className={"heart-container"} onClick={onClick}>
        <PosedHeart
          data-loading={loading}
          className={"heart"}
          pose={liked ? "saved" : "unsaved"}
          width={"24px"}
          height={"24px"}
        />
        {/*{loading ? (*/}
        {/*<Loader />*/}
        {/*) : (*/}
        {/*<PosedHeart*/}
        {/*className={"heart"}*/}
        {/*pose={liked ? "saved" : "unsaved"}*/}
        {/*width={"24px"}*/}
        {/*height={"24px"}*/}
        {/*/>*/}
        {/*)}*/}
      </div>
    )
  }
}
