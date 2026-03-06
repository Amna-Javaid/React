function Button({ children, variant = "primary", disabled }) {

  const style = {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    background: variant === "primary" ? "black" : "gray",
    color: "white",
    opacity: disabled ? 0.5 : 1
  }

  return (
    <button style={style} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button