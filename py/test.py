import mysql.connector

# Connection details
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  port="3307",
  password="root",
  database="bookshop_db"
)

# Create a cursor object

mycursor = mydb.cursor()

# Example: Read data
mycursor.execute("SELECT * FROM your_table")
myresult = mycursor.fetchall()

for x in myresult:
  print(x)

# Example: Insert data
sql = "INSERT INTO customers (name, address) VALUES (%s, %s)"
val = ("John Doe", "321 Main St")
mycursor.execute(sql, val)

mydb.commit()

# Example: Close the connection
mydb.close()