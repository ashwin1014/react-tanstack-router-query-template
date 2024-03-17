/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import type React from "react";

declare module '*.svg' {
  const content: string;
  export default content;
}

// /**
//  * Used to express the most simple conditional logic. The body of the if statement only gets evaluated if condition is true. Only single child allowed
//  * @see https://www.npmjs.com/package/babel-plugin-jsx-control-statements#if
//  */
// declare function If(condition: any): JSX.Element;
// /**
//  * This is an alternative syntax for more complex conditional statements. The syntax itself is XMLish and conforms by and large to JSTL or XSLT. Only single child allowed
//  * @see https://www.npmjs.com/package/babel-plugin-jsx-control-statements#choose-tag
//  */
// declare const Choose: any;
// /**
//  * Analog to <If>
//  * @see https://www.npmjs.com/package/babel-plugin-jsx-control-statements#when
//  */
// declare function When(condition: any): JSX.Element;
// /**
//  * <Otherwise> has no attributes and demarcates the else branch of the conditional. Only single child allowed
//  * @see https://www.npmjs.com/package/babel-plugin-jsx-control-statements#otherwise
//  */
// declare const Otherwise: any;
