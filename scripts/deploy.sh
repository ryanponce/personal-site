#!/bin/sh
set -- *.html
scp -r "$@" root@138.68.58.25:/var/www/html