class Client {
  name;
  cpf;
}

class CurrentAccount {
  agency;
  balance;

  withdraw(value) {
    if (this.balance >= value) {
      this.balance -= value;
    }
  }
}

const client1 = new Client();
client1.name = 'Fulano';
client1.cpf = 11222333;

const client2 = new Client();
client2.name = 'Ciclano';
client2.cpf = 11222444;

const client1CurrentAccount = new CurrentAccount();
client1CurrentAccount.balance = 0;
client1CurrentAccount.agency = 1001;

// console.log(client1);
// console.log(client2);

console.log(client1CurrentAccount.balance);
client1CurrentAccount.balance = 100;
console.log(client1CurrentAccount.balance);
client1CurrentAccount.withdraw(50);
console.log(client1CurrentAccount.balance);