import User from "./User.js";
import UserPrivado from "./UserPrivado.js";

const novoUser = new User('Olga', 'olga@o.com', '2000-05-05');
console.log(novoUser.exibirInfos());
novoUser.nome = 'Nastia';
console.log(novoUser.nome); // Isso vai mudar o nome, porque na classe User nome não é privado.

const novoUserPrivado = new UserPrivado ('Olga', 'ola@o.com', '2000-05-05');
novoUserPrivado.#nome = 'Nastia';  //Vai mostrar erro, porque na classe UserPrivado nome é uma propriedade privado.

