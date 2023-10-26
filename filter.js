const nomesAlunos = ["Marcos", "Ana", "Mauro", "José"];
const medias = [7, 4.5, 8, 7.5]

const alunosReprovados = nomesAlunos.filter((_, indice) => medias[indice] < 7 ? true : false);

console.log(alunosReprovados);