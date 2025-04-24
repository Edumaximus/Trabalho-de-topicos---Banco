class Conta:
    def __init__(self, numero, titular, saldo=0.0):
        self.numero = numero
        self.titular = titular
        self.saldo = saldo

    def depositar(self, valor):
        if valor > 0:
            self.saldo += valor
            print(f'Depósito de R${valor:.2f} realizado com sucesso.')
        else:
            print('Valor de depósito inválido.')

    def sacar(self, valor):
        if 0 < valor <= self.saldo:
            self.saldo -= valor
            print(f'Saque de R${valor:.2f} realizado com sucesso.')
        else:
            print('Saldo insuficiente ou valor inválido.')

    def exibir_saldo(self):
        print(f'Saldo atual da conta {self.numero}: R${self.saldo:.2f}')

    def transferir(self, destino, valor):
        if 0 < valor <= self.saldo:
            self.sacar(valor)
            destino.depositar(valor)
            print(f'Transferência de R${valor:.2f} para a conta {destino.numero} realizada com sucesso.')
        else:
            print('Transferência não realizada. Verifique o valor ou saldo.')

# Exemplo de uso
if __name__ == "__main__":
    conta1 = Conta(123, "João", 1000)
    conta2 = Conta(456, "Maria", 500)

    conta1.exibir_saldo()
    conta2.exibir_saldo()

    conta1.transferir(conta2, 200)

    conta1.exibir_saldo()
    conta2.exibir_saldo()
