import Text from "./Text"
import Input from "./Input"
import Button from "./Button"

function SearchHeader() {
  return (
    <div>

      <Text>Search Books</Text>

      <div style={{ marginTop: 10 }}>

        <Input placeholder="Type book name" />

        <Button>
          Search
        </Button>

      </div>

    </div>
  )
}

export default SearchHeader