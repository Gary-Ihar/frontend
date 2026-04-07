export type User = {
  uiid: string;
  fullName: string;
  username: string;
  address: string;
  website: string;
  organization: string;
};

export type APIResponse<T> = {
  data: T;
};

// type Address = {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// };

// type Geo = {
//   lat: string;
//   lng: string;
// };

// type Company = {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// };
