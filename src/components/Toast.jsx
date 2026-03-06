import { useEffect } from "react"

function Toast({ message, duration = 3000, onClose }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => {
      clearTimeout(timer)
    }
  }, [duration, onClose])

  return (
    <div style={styles.toast}>
      {message}
    </div>
  )
}

const styles = {
  toast: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "black",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px"
  }
}

export default Toast