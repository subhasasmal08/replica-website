import React from "react";
import "./button.scss";
export default function Button({
  icon,
  name,
  bg = "",
  className,
  disabled,
  onClick,
  style = {},
  id,
  onFocus,
  title = "",
}) {
  return (
    <button
      id={id}
      className={`btn ${className ?? ""}`}
      style={{ backgroundColor: bg, ...style }}
      disabled={disabled}
      onClick={!disabled && onClick}
      onFocus={onFocus}
      title={title}
    >
      <div className="btn_icon">{icon ?? ""}</div>
      <span className="btn_name">{name}</span>
    </button>
  );
}
