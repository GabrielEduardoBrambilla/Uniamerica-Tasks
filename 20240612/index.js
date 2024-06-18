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

  addUser(user) {
    this.#users.push(user)
  }

  showUsers() {
    this.#users.forEach(user => user.showInfo())
  }

  expelInactiveUsers() {
    const oneMinuteAgo = new Date(Date.now() - 60000)
    this.#users = this.#users.filter(
      user => new Date(user.getLastActivity()) > oneMinuteAgo
    )
  }

  notifyAllUsers(message, messageType) {
    this.#users.forEach(user =>
      user
        .getNotifications()
        .pushNotification(new Notification(message, messageType, this.#name))
    )
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
  #lastActivity

  constructor(nome, email, cpf, login) {
    this.#id = this.generateId()
    this.#nome = nome
    this.#email = email
    this.#cpf = cpf
    this.#login = login
    this.#password = ''
    this.#notifications = new Notifications()
    this.#lastActivity = new Date().toISOString()
  }

  generateId() {
    return Math.random().toString(36).substring(2, 15)
  }

  showInfo() {
    console.log(`Nome: ${this.#nome}, Email: ${this.#email}, CPF: ${this.#cpf}`)
  }

  getLastActivity() {
    return this.#lastActivity
  }

  getNotifications() {
    return this.#notifications
  }
}

class Notifications {
  #notifications

  constructor() {
    this.#notifications = []
  }

  pushNotification(notification) {
    this.#notifications.push(notification)
  }

  showNotifications() {
    this.#notifications.forEach(notification => notification.show())
  }
}

class Notification {
  #message
  #messageType
  #isRead
  #notifiedOn
  #notifiedBy

  constructor(message, messageType, notifiedBy) {
    this.#message = message
    this.#messageType = messageType
    this.#isRead = false
    this.#notifiedOn = new Date().toISOString()
    this.#notifiedBy = notifiedBy
  }

  show() {
    console.log(`${this.#messageType}: ${this.#message}`)
  }
}

// Exemplo de uso:
const system = new System('CisTema')
const user1 = new User('Jão', 'joao@example.com', '123.456.789-00', 'joazinho')
const user2 = new User(
  'Nersonson',
  'Nerso@example.com',
  '987.654.321-00',
  'Nerso'
)

system.addUser(user1)
system.addUser(user2)

console.log('Usuários do sistema:')
system.showUsers()

console.log('\nNotificando todos os usuários:')
system.notifyAllUsers('Bem-vindo ao sistema!', NotificationType.Success)

console.log('\nNotificações de João:')
user1.getNotifications().showNotifications()

console.log('\nRemovendo usuários inativos:')
system.expelInactiveUsers()
system.showUsers()
