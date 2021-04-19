#!/usr/bin/env python
# -*- coding: utf-8 -*-

# adaptado de https://wiki.python.org/moin/TcpCommunication

import sys
import socket

TCP_IP = 'server01.matsoftwares.com.br'
TCP_PORT = 1883
BUFFER_SIZE = 20
MESSAGE = "INSERT 34 87 1470 0.5 917 1 2 1"

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