let tarefas = [];

function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
  console.log(`Tarefa adicionada: "${tarefa}"`);
}

function removerTarefa(indice) {
  if (indice >= 0 && indice < tarefas.length) {
    const removida = tarefas.splice(indice, 1);
    console.log(`Tarefa removida: "${removida[0]}"`);
  } else {
    console.log("Índice inválido. Nenhuma tarefa removida.");
  }
}

function listarTarefas() {
  console.log("Lista de Tarefas:");
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa adicionada.");
  } else {
    tarefas.forEach((tarefa, index) => {
      console.log(`${index}: ${tarefa}`);
    });
  }
}


adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios");
listarTarefas();
removerTarefa(0);
listarTarefas();
