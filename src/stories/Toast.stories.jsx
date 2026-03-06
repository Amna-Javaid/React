import Toast from "../components/Toast"
export default {
  title: "Components/Toast",
  component: Toast,
}

export const Success = () => (
  <Toast
    message="Saved successfully!"
    type="success"
  />
)

export const Error = () => (
  <Toast
    message="Something went wrong!"
    type="error"
  />
)

export const Warning = () => (
  <Toast
    message="Be careful!"
    type="warning"
  />
)

