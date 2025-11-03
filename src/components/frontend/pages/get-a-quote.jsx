// import React, { Component } from "react";
// import { Helmet } from "react-helmet";

// const styleH1 = {
//   fontSize: "15px",
//   textAlign: "center",
//   color: "red"
// };

// const invisibleStyle = {
//   display: "none"
// };

// class GetaQuote extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     const properties = { header: "Acme" };
//     const head = [["ID", "Name", "Country"]];
//     const body = [
//       [1, "Shaw", "Tanzania"],
//       [2, "Nelson", "Kazakhstan"],
//       [3, "Garcia", "Madagascar"]
//     ];
//     const imgurl = "public/assets/images/new-logo.png";

//     return (
//       <div>
//         {" "}
//         <div>
//           <Helmet>
//             <title>{`GNF - ${this.props.title}`}</title>
//           </Helmet>
//           {/*Forget Password section*/}
//           <section className="  section-b-space">
//             <div className="container">
//               <div className="row section-b-space">
//                 <div className="col-sm-12">
//                   <React.Fragment>
//                     <PDF properties={properties} preview={true}>
//                       {/* <Image
//                         x={10}
//                         y={25}
//                         width={180}
//                         height={180}
//                         src={imgurl}
//                       ></Image> */}
//                       <Text x={10} y={25} size={40}>
//                         Glass n fusion
//                       </Text>
//                       <Text x={165} y={11} size={12}>
//                         Glass & Fusion
//                       </Text>
//                       <Text x={165} y={15} size={12}>
//                         5 Dawley Road,Hayes,
//                       </Text>
//                       <Text x={165} y={19} size={12}>
//                         London, UB3 1LS
//                       </Text>
//                       <Text x={12} y={34} size={14}>
//                         Attention Mr. Customer
//                       </Text>
//                       <Text x={12} y={39} size={16}>
//                         Measurements & Price Estimator (Quartz, Marble, Granite,
//                         Compact Worktops)
//                       </Text>
//                       <Table x={10} y={43} head={head} body={body} />

//                       {/* <Image
//                         src={OctoCatImage}
//                         x={15}
//                         y={40}
//                         width={180}
//                         height={180}
//                       /> */}
//                       {/* <AddPage />
//                       <Table head={head} body={body} />
//                       <AddPage format="a4" orientation="l" /> */}
//                       {/* <Text x={10} y={10} color="red">
//                         Sample
//                       </Text>
//                       <Line x1={20} y1={20} x2={60} y2={20} />
//                       <AddPage /> */}
//                       <Html sourceById="page" />
//                     </PDF>
//                     <div id="page" style={invisibleStyle}></div>
//                   </React.Fragment>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }

// export default GetaQuote;
