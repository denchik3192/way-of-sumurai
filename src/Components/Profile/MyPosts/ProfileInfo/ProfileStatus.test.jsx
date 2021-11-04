// import React, { Children } from "react";
// import { create } from "react-test-renderer";
// import ProfileStatus from "./ProfileStatus.test";

// describe("ProfileStatus", () => {
//   // test("status in props should be in the state", () => {
//   //   const component = create(<ProfileStatus status="My status"/>);
//   //   const instance = component.getInstance();
//   //   expect(instance.state.status).toBe("My status");
//   // });
//   test("<span> with status should be displays with correct status", () => {
//     const component = create(<ProfileStatus status="My status"/>);
//     const root = component.root;
    
//     expect(() => {
//       let input = root.findByType("input");
//     }).toThrow();
//   });

//   test("<span> with status should contains correct status", () => {
//     const component = create(<ProfileStatus status="My status"/>);
//     const root = component.root;
//     const span = root.findByType("span");
//     expect(span.children[0]).toBeNull();
//   });
  
// });