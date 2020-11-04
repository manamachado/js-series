class Client {
  name;
  cpf;
  agency;
  balance;
}

const client1 = new Client();
const client2 = new Client();

client1.name = 'Fulano';
client1.cpf = 11222333;
client1.agency = 1001;
client1.balance = 0;

client2.name = 'Ciclano';
client2.cpf = 11222444;
client2.agency = 1001;
client2.balance = 0;

console.log(client1);
console.log(client2);