class Pessoa {
  #nome
  #idade
  #email

  constructor(nome, idade, email) {
    this.setNome(nome)
    this.setIdade(idade)
    this.setEmail(email)
  }

  getNome() {
    return this.#nome
  }
  setNome(nome) {
    if (/\d/.test(nome)) {
      throw new Error('O nome não pode conter números.')
    }
    this.#nome = nome
  }

  getIdade() {
    return this.#idade
  }
  setIdade(idade) {
    if (typeof idade !== 'number' || idade <= 0) {
      throw new Error('A idade deve ser um número positivo.')
    }
    this.#idade = idade
  }

  getEmail() {
    return this.#email
  }
  setEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw new Error('O endereço de e-mail não é válido.')
    }
    this.#email = email
  }
}

const pessoa1 = new Pessoa('João', 25, 'joao@example.com')
console.log(pessoa.getNome())
console.log(pessoa.getIdade())
console.log(pessoa.getEmail())
// Teste para dar erro
pessoa.setNome('J04o')

const pessoa2 = new Pessoa('Nersonson', 30, 'nerson@example.com')
console.log(pessoa.getNome())
console.log(pessoa.getIdade())
console.log(pessoa.getEmail())
// Teste para dar erro
pessoa.setIdade(-5)
