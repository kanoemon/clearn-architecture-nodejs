## Migrations
```
# create table
$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
$ npx sequelize-cli migration:generate --name migration-skeleton

# run migration
$ npx sequelize-cli db:migrate

# create a seed file
$ npx sequelize-cli seed:generate --name demo-user

# run seeds
$ npx sequelize-cli db:seed:all
```