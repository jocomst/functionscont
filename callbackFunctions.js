const users = [
  {
    id: 1232,
    firstName: "Cam",
    lastName: "Danvers",
    logins: 35,
    isPremiumMember: false,
  },
  {
    id: 3283,
    firstName: "Elijah",
    lastName: "Hawkings",
    logins: 3,
    isPremiumMember: true,
  },
  {
    id: 9283,
    firstName: "Ragupathy",
    lastName: "Bodem",
    logins: 12,
    isPremiumMember: false,
  },
  {
    id: 6972,
    firstName: "Jamilla",
    lastName: "Johnson",
    logins: 5,
    isPremiumMember: true,
  },
  {
    id: 3998,
    firstName: "Jose",
    lastName: "Rivera",
    logins: 16,
    isPremiumMember: false,
  },
  {
    id: 4982,
    firstName: "Ted",
    lastName: "Witherspoon",
    logins: 53,
    isPremiumMember: true,
  },
  {
    id: 6929,
    firstName: "Igor",
    lastName: "Silenski",
    logins: 23,
    isPremiumMember: false,
  },
  {
    id: 3879,
    firstName: "Ira",
    lastName: "Bolislovitz",
    logins: 9,
    isPremiumMember: false,
  },
];

const jose = users.find((user) => user.firstName === "Jose");
const premiumMembers = users.filter((user) => user.isPremiumMember);
const lastNames = users.map((user) => user.lastName);
const fullNamesLogged = users
  .filter((user) => user.logins > 10)
  .map((user) => `${user.firstName} ${user.lastName}`);
const totalLogins = users
  .map((user) => user.logins)
  .reduce((accum, cur) => accum + cur);
console.log(jose);
console.log(premiumMembers);
console.log(lastNames);
console.log(fullNamesLogged);
console.log(totalLogins);
