import * as React from "react";
import styles from "./HelloWorld.module.scss";
import { escape } from "@microsoft/sp-lodash-subset";
import styled from "styled-components";

const Button = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  height: 32px;
  min-width: 80px;
  background-color: #ffb900;
  border-color: #0078d4;
  color: #002050;
  outline: transparent;
  position: relative;
  font-family: Segoe UI WestEuropean, Segoe UI, -apple-system,
    BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 700;
  border-width: 0;
  text-align: center;
  cursor: pointer;
  display: inline-flexbox;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 8px;
`;

const HelloWorld = (props: { description: string }) => {
  const {
    helloWorld,
    container,
    row,
    column,
    title,
    subTitle,
    description,
    label,
  } = styles;
  return (
    <div className={helloWorld}>
      <div className={container}>
        <div className={row}>
          <div className={column}>
            <span className={title}>React? In SharePoint?</span>
            <p className={subTitle}>
              This is the dawn of a new era — a convergence of super powers. ⚓
            </p>
            <p
              className={description}
            >{`Configure the following text in the sidebar: ${escape(
              props.description
            )}`}</p>
            <Button href="https://www.youtube.com/watch?v=rsCul1sp4hQ&t=3s">
              <span className={label}>
                Watch a monkey play pong with his mind
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;

// export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
//   public render(): React.ReactElement<IHelloWorldProps> {
//     const {helloWorld, container, row, column, title, subTitle, description, label } = styles;
//     return (
//       <div className={helloWorld}>
//         <div className={container}>
//           <div className={row}>
//             <div className={column}>
//               <span className={title}>React? In SharePoint?</span>
//               <p className={subTitle}>
//                 This is the dawn of a new era — a convergence of super powers.
//                 ⚓
//               </p>
//               <p className={description}>
//                 {escape(this.props.description)}
//               </p>
//               <Button href="https://aka.ms/spfx">
//                 <span className={label}>Learn more</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
