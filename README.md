## Migrations
```
# create table
$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

# run migration
$ npx sequelize-cli db:migrate

# create a seed file
$ npx sequelize-cli seed:generate --name demo-user

# run migrations
$ npx sequelize-cli db:seed:all
```