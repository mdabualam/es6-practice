const person = {name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Wstson', address:'Kochu Khet', phone: '017112211', friends: ['Tom Hancks', 'Tom Cruise', 'Tom Yarn'] }

const {phone, gfName, address} = person;

// const gfName = person.gfName;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);
// console.log(gfName, phone);

const friends = [ 'Shakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Shahrukh Khan' ];
const [chotoFriend, ...restFriends] = friends;

console.log(restFriends);