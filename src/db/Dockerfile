FROM mysql:5.7
ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE userdb
ENV MYSQL_USER mysqluser
ENV MYSQL_PASSWORD password
ENV DATABASE_HOST mysql
EXPOSE 3306
COPY ./createTable.sql /docker-entrypoint-initdb.d/