//Object Types lesson and Arrays Types lesson
const personExplicit: {
  name: string;
  age: number;
} = {
  name: "Maximilian",
  age: 30,
};

const personInferred = {
  name: "Maximilian",
  age: 30,
};

const personTuple: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports, Cooking"],
  role: [2, "author"],
};

// .push() still works on Tuples and won't be caught by TS
personTuple.role.push("admin");
// personInferred.role[1] = 10;

console.log(personExplicit.name);

for (const hobby of personTuple.hobbies) {
  console.log(hobby.toUpperCase());
}

//let's say we want to store values such as readOnly, Author,
// in the passed we may have had

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const personWithEnum = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports, Cooking"],
  role: Role.ADMIN,
};

if (personWithEnum.role === Role.ADMIN) {
  console.log("we are admins");
}
