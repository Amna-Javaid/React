import './Button.css'

function Button({ label, variant }) {
  return (
    <button className={`btn btn-${variant}`}>
      {label}
    </button>
  )
}

export default Button