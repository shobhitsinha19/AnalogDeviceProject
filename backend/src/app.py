from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from pymongo.errors import DuplicateKeyError

from github import Github

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/githubRepo'
mongo = PyMongo(app)

CORS(app)

repository = mongo.db.repos

@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in repository.find():
        users.append({
            'username': doc['_id'],
            'name': doc['name'],
            'location': doc['location'],
            'followers': doc['followers'],
        })
    return jsonify(users)


@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    user = repository.find_one({'_id': id})
    return jsonify({
            'username': id,
            'name': user['name'],
            'location': user['location'],
            'followers': user['followers'],
            'repositories': user['repositories'],
    })

@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
    repository.delete_one({'_id': id})
    return jsonify({'msg': "User Deleted Successfully"})


@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    repository.update_one({'_id': id}, {'$set': {
         'name': request.json['name'],
         'email': request.json['email'],
         'contact': request.json['contact'],
         'address': request.json['address']
    }})
    return jsonify({'msg': "User Update Successfully"})

@app.route('/repos/<username>', methods=['POST'])
def saveRepos(username):
    github = Github()
    repos = []
    user = github.get_user(username)
    for repo in user.get_repos():
        repos.append(str(repo.name))
    try:
        id = repository.insert_one({
            '_id': username,
            'name': user.name,
            'location': user.location,
            'followers': user.followers,
            'repositories': repos
        })
    except DuplicateKeyError as error:
        return jsonify({'id': username, 'msg': str(error)}), 500
    return jsonify({'id': str(id.inserted_id), 'msg': "Repositories Added Successfully"})

if __name__ == '__main__':
    app.run(port=8000, debug=True)
