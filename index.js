import User from "./User.js";
import UserPrivado from "./UserPrivado.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Olga', 'olga@o.com', '1987-04-16');
console.log(novoUser.exibirInfos());

novoUser.nome = 'Nastia';
console.log(novoUser.nome); // isso vai mudar o nome, pq no classe User nome nao e privado

const novoUserPrivado = new UserPrivado ('Olga', 'ola@o.com', '1987-04-16');
//novoUserPrivado.#nome = 'Nastia';  //vai mostrar erro 

