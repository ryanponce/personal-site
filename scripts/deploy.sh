#!/bin/sh
set -- src/*
scp -r "$@" root@165.22.161.138:/var/www/ponce.la/html