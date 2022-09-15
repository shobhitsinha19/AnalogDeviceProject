from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
from github import Github
import sys

def getArguments():
	n = len(sys.argv)
	usernames = []	 
	for i in range(1, n):
	    usernames.append(sys.argv[i])
	return usernames

def getMongoDb():
	myclient = MongoClient('mongodb://localhost/githubRepo')
	repository = myclient.githubRepo.repos
	return repository


def populateDb(usernames, repository):
	github = Github()
	
	output = []
	for username in usernames:
		user = github.get_user(username)
		repos = []
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
		    output.append('Success. Id inserted: ' + username)
		except DuplicateKeyError as error:
		    output.append('Error Occurred: ' + str(error))
	return output
	


if __name__ == '__main__':
	usernames = getArguments()
	repository = getMongoDb()
	output = populateDb(usernames, repository)
	res = "\n".join("Input-{} Output-{}".format(x, y) for x, y in zip(usernames, output))
	print(res)
