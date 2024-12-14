import { Injectable } from "@angular/core";
import { ShoppingService } from "../shopping/shopping.service";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  date: Date;
  phone: string;
  address: string;
  is_logged: number;
  favourite?: Array<string>;

}

@Injectable()

export class UserService {

  constructor(public shoppingCart: ShoppingService) {}

  currentUser: User = UserService.dummyUserList[0];

  static dummyUserList: Array<User> = [
    {
      id:0,
      firstName: "User",
      lastName: " ",
      email: "user@singidunum.ac.rs",
      password: "test123",
      date: new Date("2023-04-18 14:23"),
      phone: "0601935555",
      address: "Danijelova 32, Beograd",
      is_logged: 0
    },
    {
      id:1,
      firstName: "Nikola",
      lastName: "Novakovic",
      email: "nnovakovic@singidunum.ac.rs",
      password: "vipkorisnik1",
      date: new Date("2024-05-18 12:00"),
      phone: "0651935555",
      address: "Petra I 12B, Beograd",
      is_logged: 0
    },
    {
      id:2,
      firstName: "Nikola",
      lastName: "Petrovic",
      email: "npetrovic@singidunum.ac.rs",
      password: "pustiProbleme123",
      date: new Date("2024-04-18 14:23"),
      phone: "0611934955",
      address: "Danijelova 32, Beograd",
      is_logged: 0,
      favourite: ["Jeans, Shorts, Suits"]
    },
    {
      id:3,
      firstName: "Milan",
      lastName: "Bosnjak",
      email: "mbosnjak@yahoo.com",
      password: "sifra123",
      date: new Date("2024-04-18 14:23"),
      phone: "0611955955",
      address: "Danijelova 12, Beograd",
      is_logged: 0,
      favourite: ["Jeans, Suits"]
    },
    {
      id:3,
      firstName: "Nikola",
      lastName: "Pandrc",
      email: "p_nikola@usa.net",
      password: "kojajesifra",
      date: new Date("2024-04-18 14:23"),
      phone: "0662934955",
      address: "Danijelova 32, Beograd",
      is_logged: 0,
      favourite: ["Suits", "Coat"]
    },
    
  ];

  //korisnicko ime korisnika - getUsername()
  getUsername(user: User): string {
    return user.email;
  }

  //vracanje ulogovanog korisnika - getLoggedUser()
  getLoggedUser(): User {
    this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.is_logged != 0)!;
    return this.currentUser;
  }

  //vraca id ulogovanog korisnika - getLoggedUserId()
  getLoggedUserId(): number {
    this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.is_logged != 0)!;
    return this.currentUser.id;
  }

  //id korisnika - getUserById()
  getUserById(id: number): User {
    var foundUser!: User;

    UserService.dummyUserList.forEach((user) => {
      if(user.id === id){
        foundUser = user;
      }
    });


    this.currentUser = foundUser;
    return foundUser;
  }

  //prikaz korisnika prema email adresi - getUser()
  getUser(userEmail: string): User {
    this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
    return this.currentUser;
  }

  //provera da li je lozinka ispravna - isPasswordCorrect()
  isPasswordCorrect(userEmail: string, password: string): boolean {
     return UserService.dummyUserList.find(userToFind => 
      (userToFind.email == userEmail && userToFind.password == password)) != undefined;
  }

  // registruj korisnika - registerUser()
  registerUser(firstName: string, lastName: string, email: string, password: string, date: Date, phone: string, address: string, is_logged: number): User {
    var maxId: number = 0;
    UserService.dummyUserList.forEach(user => {
      if(maxId < user.id)
        maxId = user.id;
    });

    var id = ++maxId;
    var user: User = {id, firstName, lastName, email, password, date, phone, address, is_logged};

    UserService.dummyUserList.push(user);

    // Kreiranje nove korpe
    this.shoppingCart.createCart(id);

    //this.currentUser = user;
    console.log(user);
    
    return user;
  }
   
}
