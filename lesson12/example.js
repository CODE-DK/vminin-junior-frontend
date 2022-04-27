const name = 'John Dow';
const user = {
    name: 'John Smith',
    getName(info) {
        return `${this.name}, ${info}`;
    }
};
console.log('username', user.getName());

// bind, call, apply

// call example: reqirect this to some other class
//               works like a proxy
const newUser = {
    name: 'Mike Sims'
};
let newUsername = user.getName.call(newUser, 'Supertramp');
console.log('newUsername', newUsername);

// bind example: like call, but not call method in same time
const bindGetName = user.getName.bind(newUser, 'Supertramp');
newUsername = bindGetName();
console.log('newUsername', newUsername);

// apply example: like call, but array for params
newUsername = user.getName.apply(newUser, ['Supertramp']);
console.log('newUsername', newUsername);