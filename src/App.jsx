// // // import Card from "./components/Card"
// // // import { capitalize, truncate, formatPrice } from "./utils"
// // // function App() {

// // //   ~console.log(capitalize("harry potter"))
// // //   console.log(truncate("Harry Potter is a wizard story", 12))
// // //   console.log(formatPrice(25))
// // //   const books = [
// // //     {
// // //       id: 1,
// // //       title: "Harry Potter",
// // //       price: 20,
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Atomic Habits",
// // //       price: 15,
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Deep Work",
// // //       price: 18,
// // //     }
// // // ]


// // //   return (

// // //     <div>
// // //       {books.map(book => (
// // //         <div key={book.id}>
// // //           <h2>{capitalize(book.title)}</h2>
// // //           <p>{formatPrice(book.price)}</p>
// // //         </div>
// // //       ))} 

// // //     </div>

// // //     // <div style={{ 
// // //     //   display: "flex", 
// // //     //   justifyContent: "center", 
// // //     //   alignItems: "center", 
// // //     //   height: "100vh", 
// // //     //   background: "#f5f5f5" 
// // //     // }}>
// // //     //   <Card />
// // //     // </div>

// // //   )
// // // }

// // // export default App


// // import Button from "./components/Button"
// // import Card2 from "./components/Card2"
// // import Text from "./components/Text"

// // function App() {
// //   return (
// //     <div style={{ padding: "40px" }}>
// //       <h2>Component Playground</h2>

// //       <Button label="Primary" variant="primary" />
// //       <Button label="Secondary" variant="secondary" />
// //       <Button label="Delete" variant="destructive" />

// //       <Card2 
// //         title="Card Title"
// //         description="This is a reusable card component."
// //       />

// //       <Text label='Large Text Example' size="20px"/>
// //       <Text label='Small Text Example' size="14px"/>
// //     </div>
// //   )
// // }

// // export default App

// // import SelectableCard from "./components/SelectableCard"

// // function App() {
// //   return (
// //     <div style={{ padding: "40px" }}>
// //       <h2>Interactive Card</h2>

// //       <SelectableCard title="Plan A" />
// //       <SelectableCard title="Plan B" />
// //     </div>
// //   )
// // }

// // export default App

// import { useState } from "react"

// // function App() {
// //   const [name, setName] = useState("")

// //   return (
// //     <div style={{ padding: "40px" }}>
// //       <input
// //         type="text"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         placeholder="Enter your name"
// //       />

// //       <p>Hello, {name}</p>
// //     </div>
// //   )
// // }
// function App() {
//   const [activeTab, setActiveTab] = useState("home")

//   return (
//     <div>
//       <button onClick={() => setActiveTab("home")}>Home</button>
//       <button onClick={() => setActiveTab("profile")}>Profile</button>

//       {activeTab === "home" && <p>Home Content</p>}
//       {activeTab === "profile" && <p>Profile Content</p>}
//     </div>
//   )
// }

// export default App

// import { useState } from "react"
// import Toast from "./components/Toast"

// function App() {
//   const [showToast, setShowToast] = useState(false)

//   return (
//     <div style={{ padding: "40px" }}>
//       <button onClick={() => setShowToast(true)}>
//         Show Toast
//       </button>

//       {showToast && (
//         <Toast
//           message="Saved successfully!"
//           duration={3000}
//           onClose={() => setShowToast(false)}
//         />
//       )}
//     </div>
//   )
// }

// export default App

// function App() {
//   return (
//     <div className="p-10 bg-gray-200 min-h-screen">
//       <h1 className="text-3xl font-bold text-blue-600">
//         Tailwind Working 🚀
//       </h1>
//     </div>
//   )
// }

// export default App

import Grid from "./components/Grid"

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 className="text-4xl text-red-500">Test</h1>
      <Grid>
        <div style={{ background: "lightblue", padding: "20px" }}>1</div>
        <div style={{ background: "lightblue", padding: "20px" }}>2</div>
        <div style={{ background: "lightblue", padding: "20px" }}>3</div>
      </Grid>
    </div>
  )
}

export default App
   
