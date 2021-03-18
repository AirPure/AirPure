#!/usr/bin/env python
# -*- coding: utf-8 -*-

# adaptado de https://wiki.python.org/moin/TcpCommunication

import sys
import socket

TCP_IP = '127.0.0.1'
TCP_PORT = 7007
BUFFER_SIZE = 20
MESSAGE = "DEBITO 1000"

if len(sys.argv) >= 2:
    TCP_IP = sys.argv[1]

if len(sys.argv) >= 3:
    MESSAGE = sys.argv[2]

print("[CLIENTE] Iniciando")

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print("[CLIENTE] Conectando")
s.connect((TCP_IP, TCP_PORT))
print("[CLIENTE] Enviando dados: \"" + MESSAGE + "\"")
s.send((MESSAGE + '\n').encode('utf-8'))
print("[CLIENTE] Fechando conexão com o CLIENTE")
s.close()

print("[CLIENTE] Fim")