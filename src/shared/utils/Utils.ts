export const renderHeight = (height: number, usedMetricSystem?) => {
  if (!height) {
    return;
  }
  if (usedMetricSystem) {
    return height + "CM";
  } else {
    const feet = Math.floor(height / 30.48);
    const inches = Math.round((height / 30.48 - feet) * 12);
    return " " + feet + "`" + inches + "\"";
  }
};


export const fixViewToScreen = () => {
  document.body.style.position = "fixed";
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.top = "0";
};
