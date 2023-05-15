export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  emergencyContact: string;
  gender: string;
  aboutMe: string;
  avatar: string;
  trips: [];
  googleId: string;
}

export type Adventurer = {
  username: string;
  socketId: string;
};

export type Message = {
  sender: string;
  text: string;
  createdAt: string;
};
