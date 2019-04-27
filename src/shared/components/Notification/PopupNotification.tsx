import React, { Component, CSSProperties, PureComponent } from "react"
import posed from "react-pose"

type Props = {
  pose: "expanded" | "closed"
}

const Popup = posed.div({
  expanded: {
    delay: 0,
    // applyAtStart: {display: 'block'},
    scale: 1,
    transition: {
      type: "tween",
      duration: 200
    }
    // opacity: 1,
  },
  closed: {
    scale: 0,
    // opacity: 0,
    transition: {
      type: "tween",
      duration: 150
    }
    // applyAtEnd: {display: 'none'}
  }
})

const PopupStyles: CSSProperties = {
  // background: "rgb(204, 0, 0)",
  background:"#303030",
  height: "47px",
  width: "70%",
  position: "absolute",
  zIndex: 10,
  borderRadius: "10px",
  left: 0,
  right: 0,
  margin: "0 auto",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#fff",
  textAlign: "center",
  lineHeight: "47px",
  fontWeight: "bold",
  fontSize: "14px"
}

class PopupNotification extends PureComponent<Props> {
  render() {
    const { pose, children } = this.props
    return (
      <Popup style={PopupStyles} pose={pose}>
        {children}
      </Popup>
    )
  }
}

export default PopupNotification
