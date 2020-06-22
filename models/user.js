/** User class for message.ly */
const db = require("../db");
const Message = require("./message");
const ExpressError = require("../expressError");


/** User of the site. */

class User {
  constructor({ id, username, password, first_name, last_name, phone }) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
  }

  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

  static async register({username, password, first_name, last_name, phone}) {

  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) {

  }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) {

  }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() {
    const results = await db.query(
      `SELECT username, 
      first_name,  
      last_name, 
      phone, 
      FROM users
      ORDER BY username`
    );
    return results.rows;
  }

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) {
    const results = await db.query(
      `SELECT username, 
      first_name,  
      last_name, 
      phone, 
      join_at, 
      last_login_at
      FROM users WHERE username = $1`,
      [username]
      );
      
      if (!results.rows[0]) {
        throw new ExpressError(`No such customer: ${id}`, 404);
      }
      
      return result.rows[0];
    }
    
  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */
    static async messagesFrom(username) {

    }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {id, first_name, last_name, phone}
   */

  static async messagesTo(username) {

  }
}


module.exports = User;