FROM registry.cn-hangzhou.aliyuncs.com/prod-env/nginx:v1
MAINTAINER ZQKHYL
COPY admin-system /usr/share/nginx/html
COPY start.sh /opt/script/start.sh
RUN chmod +x /opt/script/start.sh
ENV minx 256m
ENV max 512m
ENV envs prod
CMD ["/opt/script/start.sh"]