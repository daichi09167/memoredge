import { Pool } from "pg";

// PostgreSQL接続設定
const pool = new Pool({
  user: process.env.DB_USER,        // ユーザー名
  host: process.env.DB_HOST,        // ホスト名
  database: process.env.DB_NAME,    // データベース名
  password: process.env.DB_PASSWORD,// パスワード
  port: Number(process.env.DB_PORT) || 5432, // ポート番号
});

export const query = async (text: string, params?: []) => {
    try {
      const res = await (await pool.connect()).query(text, params);
      return res;
    } finally {
      (await pool.connect()).release();
    }
  };
export { pool };