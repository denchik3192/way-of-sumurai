import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let State = {
    posts: [
      { id: 1, message: "Hi, it's my first post", likesCount: 12 },
      { id: 2, message: "Hi, it's my second post", likesCount: 122 },
      { id: 2, message: "Hi, it's my second post", likesCount: 122 },
    ],
    profile: null,
    status: "",
  };

test("length of post should e incremented", () => {
  let action = addPostCreator("denis");
  
  let newState = profileReducer(State, action);

  expect(newState.posts.length).toBe(4);
});

test("after deleting length  should be decremented", () => {
  let action = deletePost(1);
  
  let newState = profileReducer(State, action);

  expect(newState.posts.length).toBe(2);
});

