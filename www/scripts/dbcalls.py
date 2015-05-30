"""
from socket import *
import json
s = socket()
s.bind(('', 8100))
s.listen(4)
ns, na = s.accept()

HOST = None
PORT = 8100
s = None
for res in socket.getaddrinfo(HOST, PORT, socket.AF_UNSPEC,
                              socket.SOCK_STREAM, 0, socket.AI_PASSIVE):
    af, socktype, proto, canonname, sa = res
    try:
        s = socket.socket(af, socktype, proto)
    except socket.error as msg:
        s = None
        continue
    try:
        s.bind(sa)
        s.listen(1)
    except socket.error as msg:
        s.close()
        s = None
        continue
    break
if s is None:
    print 'could not open socket'
    sys.exit(1)
conn, addr = s.accept()
print 'Connected by', addr
while 1:
    data = conn.recv(1024)
    if not data: break
    conn.send(data)
conn.close()	 
"""


from flask import *
from flask.ext.jsonpify import jsonify
from flaskext.mysql import MySQL
from flask.ext.sqlalchemy import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Bavud2015@localhost:3306/test'

db = SQLAlchemy(app)


@app.route("/delete")
def delete():
	print("IN DELETE")
	response = "success"
	print(response)
	itemId = request.args.get("id")
	mySqlQuery = "DELETE FROM CONTACTS where ID = "+itemId;
	print(mySqlQuery)
	print(itemId)
	connection = db.engine.connect()
	print(connection)
	trans = connection.begin()
	print(trans)
	try: 
		retval = connection.execute(mySqlQuery)
		#print(retval.rowcount)
		trans.commit()
		connection.close()
	except:
		response = "failure"
		print('DB exception')
		trans.rollback()
		raise
		connection.close()
	return jsonify(response=response)
#return output

@app.route("/insert")
def insert():
	response = "success"
	itemId = 0
	itemName = request.args.get("name")
	print(itemName)
	itemPhone = request.args.get("phone")
	print(itemPhone)
	itemEmail = request.args.get("email")
	print(itemEmail)
	connection = db.engine.connect()
	print(connection)
	trans = connection.begin()
	print(trans)
	try: 
		maxIdResultProxy = connection.execute("select max(id) from contacts")
		print(maxIdResultProxy)
		for row in maxIdResultProxy:
			itemId = row[0]
		itemId = itemId + 1
		print(itemId)		
		mySqlQuery = "INSERT INTO CONTACTS(id,name,phone,email) VALUES (" +str(itemId) + ",'" + itemName + "'," + itemPhone + ",'" + itemEmail+ "')"
		#mySqlQuery = "select * from contacts where id = 1"
		print(mySqlQuery)
		retval = connection.execute(mySqlQuery)
		#print(retval.rowcount)
		#for row in retval:
			#print(row[0])
		trans.commit()
		connection.close()
	except:
		print('DB exception')
		response = "failure"
		trans.rollback()
		connection.close()
		raise
#	connection.close()
	return jsonify(response = response,id = itemId)

@app.route("/refresh")
def refresh():
	mySqlQuery = "SELECT * FROM CONTACTS order by name"
	#print(mySqlQuery)
	#print(output)
	connection = db.engine.connect()
	#print(connection)
	trans = connection.begin()
	#print(trans)
	try: 
		i=0
		retval = connection.execute(mySqlQuery)
		cursorList = []
		for row in retval:
			cursorList.append(json.dumps({'id' : row[0], 'name' : row[1],'phone' : row[2],'email' : row[3]}))
			#jsonify('i'+i = rowJson)
			#i=i+1;
			#cursorList.append(row)
		#print(cursorList)
		connection.close()
	except:
		print('DB exception')
		trans.rollback()
		connection.close()
		raise
	return jsonify(contact_list = cursorList)
#	return Response(json.dumps(cursorList),  mimetype='application/json')
	#return jsonify(contact_list = 1)
if __name__ == "__main__":
    app.run()