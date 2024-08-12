import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: "localhost",
    port: "3307",
    database: "bookshop_db",
    user: "root",
    password: "root"// "Ro0t=112r" // "ro=oT123"
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
} 