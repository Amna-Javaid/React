function Toast({ message, type = "success" }) {

  const styles = {
    padding: "12px 16px",
    borderRadius: "6px",
    color: "white",
    margin: "10px",
    width: "250px"
  }

  const colors = {
    success: "green",
    error: "red",
    warning: "orange"
  }

  return (
    <div style={{ ...styles, background: colors[type] }}>
      {message}
    </div>
  )
}

export default Toast