/*

// arrays, listas e tuplas
const tupla: [string, string, number, boolean ] = [
    "Cezar Mezzalira",
    "cezar.mezzalira@gmail.com",
    34,
    true
];


const tuplas: [string, string, number, boolean,] [] = [
    ["Cezar Mezzalira", "cezar.mezzalira@gmail.com", 34, true],
    ["edemir@gmail.com", "Edemir", 34, true],
];


// nome, email, idade, ativo
const nome = tupla[1][0];


//hast table - tabela de chave/valor
type pessoa = {
    nome: string;
    email: string;
    idade: number;
    ativo: boolean;
    celular?: string;
}



const pessoas: pessoa[] = [
{
    nome: "Cezar Mezzalira",
    email: "cezar.mezzalira@gmail.com",
    idade: 34,
    ativo: true
},

{
    nome: "Edemir",
    email: "edemir@gmail.com",
    idade: 34,
    ativo: true
}
]

for (const pessoa of pessoas) {
    console.log(pessoa["email"]);
}

*/

/////////////////////////// A T I V I D A D E //////////////////////////////

// Criar uma lista de 10 produtos que contenha o seguinte layout:
// id do tipo number, nome do tipo texto, quantidade em estoque do tipo float,
// ativo do tipo boolean, data de criação do tipo texto,
// data ultima atualização do tipo texto.


//definição do tipo do produto:
type Produto = {
    id: number;
    nome: string;
    quantidade: number;
    ativo: boolean;
    dataCriacao: string;
    dataAtualizacao: string;
  };

  const produtos: Produto[] = [
    {
      id: 1,
      nome: "produto1",
      quantidade: 25,
      ativo: true,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },

    {
      id: 2,
      nome: "produto2",
      quantidade: 25,
      ativo: true,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },

    {
      id: 3,
      nome: "produto3",
      quantidade: 25,
      ativo: false,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },

    {
      id: 4,
      nome: "produto4",
      quantidade: 25,
      ativo: true,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },

    {
      id: 5,
      nome: "produto5",
      quantidade: 25,
      ativo: true,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },

    {
      id: 6,
      nome: "produto6",
      quantidade: 25,
      ativo: true,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },

    {
      id: 7,
      nome: "produto7",
      quantidade: 25,
      ativo: false,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },

    {
      id: 8,
      nome: "produto8",
      quantidade: 25,
      ativo: true,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },

    {
      id: 9,
      nome: "produto9",
      quantidade: 25,
      ativo: true,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },

    {
      id: 10,
      nome: "produto10",
      quantidade: 25,
      ativo: true,
      dataCriacao: "2024",
      dataAtualizacao: "2024",
    },
  ];

  console.log (produtos);