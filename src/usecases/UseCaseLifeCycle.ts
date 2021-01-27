import { Sequelize } from 'sequelize';

export class UseCaseLifeCycle {
  #sequelize;
  #transaction;

  constructor() {
    const env = process.env.NODE_ENV || 'development';
    const config = require(__dirname + '/../config/config.json')[env];
    this.#sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

  async begin() {
    this.#transaction = await this.#sequelize.transaction();
  }

  async success() {
    await this.#transaction.commit();
  }

  async fail() {
    await this.#transaction.rollback();
  }
}
