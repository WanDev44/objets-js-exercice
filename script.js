// On ajoute à chaque objet une méthode qui retournera l'alerte
const workers = [
  {name: 'Benjamin', age: 25, nbHour: 35, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Luc', age: 45, nbHour: 36, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Marie', age: 23, nbHour: 35, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Jeanne', age: 36, nbHour: 30, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Jean', age: 37, nbHour: 35, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}}
]

let alerte = '';

const workerHasNotHour = [];

for (let i = 0; i < workers.length; i++) {
  if (workers[i].nbHour !== 35) {
    // On ajoute le message d'alerte à la variable alerte
    alerte += `${workers[i].alert()} \n`;
    // On ajoute dans le tableau l'employé qui n'a pas fait ses 35h
    workerHasNotHour.push(workers[i]);
  }
}

alert(alerte);