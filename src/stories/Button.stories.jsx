import Button from "../components/Button"

export default {
  title: "Components/Button",
  component: Button
}

export const Primary = () => (
  <Button variant="primary">
    Primary Button
  </Button>
)

export const Secondary = () => (
  <Button variant="secondary">
    Secondary Button made by amna
  </Button>
)

export const Disabled = () => (
  <Button disabled>
    Disabled Button
  </Button>
)