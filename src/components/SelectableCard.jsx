import { useState } from "react"
import "./SelectableCard.css"

function SelectableCard({ title }) {
  const [selected, setSelected] = useState(false)

  return (
    <div
      className={`card ${selected ? "selected" : ""}`}
      onClick={() => setSelected(!selected)}
    >
      <h3>{title}</h3>

      {selected && <span className="checkmark">✔</span>}
    </div>
  )
}

export default SelectableCard