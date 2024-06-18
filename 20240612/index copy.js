const NotificationType = {
  Success: 'Success',
  Warning: 'Warning'
}

class System {
  #name
  #users

  constructor(name) {
    this.#name = name
    this.#users = []
  }

  addUser(nome, email, cpf) {
    this.#users.push([(Nome = nome), (Email = email), (CPF = cpf)])
  }
}

class User {
  #id
  #nome
  #email
  #cpf
  #login
  #password
  #notifications
  #lastActivity //último data/hora:minuto:segundo em que o usuário teve uma atividade no sistema

  constructor(nome, email, cpf, login) {
    this.#nome = nome
    this.#email = email
    this.#cpf = cpf
    this.#login = login
    this.#notifications = new Notifications()
    this.#lastActivity = '' //aqui deve ser atribuído um formato que comporte data, hora, minuto e segundo
  }
}

class Notifications {
  #notifications

  constructor() {
    this.#notifications = []
  }
}

class Notification {
  #message
  #messageType
  #IsReaded //boleano, se foi visualizado pelo usuario corrente
  #notificatedOn //data hora notificacao;
  #notificatedBy //id do usuario que mandou

  constructor(message, messageType, notificatedBy) {
    this.#message = message
    this.#messageType = messageType
  }
}
