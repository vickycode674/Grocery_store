// import React from "react";
// import { Categories } from "./Categories";
// import { Heading } from "./Heading";

// const AllCategories = () => {
//   return (
//     <div className="inline-flex flex-col items-start relative top-32 right-300">
//       <Heading
//         className="!flex-[0_0_auto] !pt-0 !pb-[20px] !px-0"
//         vector="image.svg"
//       />
//       <Categories
//         className="!flex-[0_0_auto] !pt-0 !pb-[10px] !px-0"
//         text="Fresh Fruit (25)"
//         text1=" (134)"
//       />
//       <Categories
//         className="!flex-[0_0_auto]"
//         radioProperty1="checked"
//         text="Vegetables"
//         text1=" (150)"
//       />
//       <Categories
//         className="!flex-[0_0_auto]"
//         radioProperty1="normal"
//         text="Cooking"
//         text1=" (54)"
//       />
//       <Categories
//         className="!flex-[0_0_auto]"
//         radioProperty1="normal"
//         text="Snacks"
//         text1=" (47)"
//       />
//       <Categories
//         className="!flex-[0_0_auto]"
//         radioProperty1="normal"
//         text="Beverages"
//         text1=" (43)"
//       />
//       <Categories
//         className="!flex-[0_0_auto]"
//         radioProperty1="normal"
//         text="Beauty &amp; Health"
//         text1=" (38)"
//       />
//       <Categories
//         className="!flex-[0_0_auto] !pt-[10px] !pb-[26px] !px-0"
//         radioProperty1="normal"
//         text="Bread &amp; Bakery"
//         text1=" (15)"
//       />
//     </div>
//   );
// };

// export default AllCategories;
import React from "react";
import { Categories } from "./Categories";
import { Heading } from "./Heading";
import "../shop1.css" ;

 const AllCategories = () => {
  return (
    <div className="all-categories">
      <Heading className="heading-instance" vector="/images/shop1/Vectorup.png" />
      <Categories className="categories-instance" text="Fresh Fruit (25)" text1=" (134)" />
      <Categories className="design-component-instance-node" radioProperty1="checked" text="Vegetables" text1=" (150)" />
      <Categories className="design-component-instance-node" radioProperty1="normal" text="Cooking" text1=" (54)" />
      <Categories className="design-component-instance-node" radioProperty1="normal" text="Snacks" text1=" (47)" />
      <Categories className="design-component-instance-node" radioProperty1="normal" text="Beverages" text1=" (43)" />
      <Categories className="design-component-instance-node" radioProperty1="normal" text="Beauty & Health" text1=" (38)" />
      <Categories className="categories-2" radioProperty1="normal" text="Bread & Bakery" text1=" (15)" />
    </div>
  );
}

export default AllCategories;
