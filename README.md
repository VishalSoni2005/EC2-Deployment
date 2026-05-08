curl commands to test server:
1: test
crul http://localhost:5000/

2: create user
curl -X POST http://localhost:5000/user/create \
-H "Content-Type: application/json" \
-d '{
"name": "Soni",
"email": "soni@gmail.com",
"role": "admin"
}'

3: Get All users
curl -X GET http://localhost:5000/users   

4: update based on email
curl -X PUT http://localhost:5000/user/update \
-H "Content-Type: application/json" \
-d '{
  "email": "soni@gmail.com",
  "name": "Updated Soni",
  "role": "user"
}'

5: DELETE  user
curl -X DELETE http://localhost:5000/user/delete \
-H "Content-Type: application/json" \
-d '{
  "email": "soni@gmail.com"
}'


## Docker command:

1; docker build -t crud .
2: docker run -p 5000:5000 crud or docker run --network=host wad_cc_crud

docker run --network=host wad_cc_crud