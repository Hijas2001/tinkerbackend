// const { createContext, useState, useEffect } = require("react");

// const shopContext = createContext(null)

// const ShopContextProvider = (props) => {
//     const { allproducts, setAllproducts } = useState([])
//     useEffect(() => {
//         fetch("http://localhost:4000/getalldata").then(response => response.json()).then(data => setAllproducts(data))
//     })

//     let contextValue = { allproducts }
//     return (
//         <shopContext.Provider value={contextValue}>
//             {props.children}
//         </shopContext.Provider>
//     )

// }

// export default ShopContextProvider;