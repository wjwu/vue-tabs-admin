#!/bin/bash
file_path='/usr/share/nginx/html/vendor/config'
find $file_path -type f ! -name config.$envs.js|xargs rm -f
ln -s $file_path/config.$envs.js $file_path/config.js
nginx -g "daemon off;"