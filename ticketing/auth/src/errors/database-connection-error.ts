export class DatabaseConnectionError extends Error {
  reason = 'Eror connecting to database';

  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
