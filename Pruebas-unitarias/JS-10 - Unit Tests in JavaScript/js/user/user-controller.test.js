const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('findByEmail of userController', () => {
  //let email =  'lalito@gmail.com';
  let user = new User(12319, 'Eduardo Diaz', 'lalito@gmail.com');
  userController.add(user);
  expect(userController.findByEmail(user.email)).toEqual(user);
});

test('findById of userController', () => {
  let user = new User(1919, 'Lalo Diaz', 'micorreo@gmail.com');
  userController.add(user);
  expect(userController.findById(user.id)).toEqual(user);
});

