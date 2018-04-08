from flask import Flask, render_template, url_for, request, session, redirect, flash, jsonify
from flask_cors import CORS
import requests
from flask_pymongo import PyMongo
from werkzeug.urls import url_parse
from bson.objectid import ObjectId # For ObjectId to work
from flask_login import LoginManager, current_user, login_required, login_user, logout_user, UserMixin, AnonymousUserMixin, confirm_login, fresh_login_required



app = Flask(__name__,
            static_folder = "./frontEnd/Grow_survey/dist/static",
            template_folder = "./frontEnd/Grow_survey/dist")


app.config['MONGO_DBNAME'] = 'connect-to-mongodb'
app.config['MONGO_URI'] = 'mongodb://grow-prototype:growing@ds125288.mlab.com:25288/connect-to-mongodb'

mongo = PyMongo(app);

login = LoginManager(app)

#define my classes

#user class
class User():

    def __init__(self, username=None, password=None, email=None):
        self.username = username
        self.password = password
        self.email = email

    def save(self):
        users=mongo.db.users
        hashpass = self.password
        coun = 0
        users.insert({'name' : self.username, 'password' : hashpass, 'email' : self.email, 'count':coun })
        return self.username

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        return self.password_hash

    def get_by_username(self, username):
        self.username = username
        password = self.password
        return password


    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id

    @staticmethod
    def validate_login(password_hash, password):
        return check_password_hash(password_hash, password)



#ToDo class
class ToDo():
    def __init__(self, title=None, desc=None,categories=None, Deadline=None, checklist=[ ]):
        self.title = title
        self.desc = desc
        self.categories = categories
        self.deadline = Deadline
        self.checklist = checklist
        self.user = session['username']

    def save(self):
        todos=mongo.db.todos
        todos.insert({ "user": self.user, "name": self.title,"description":self.desc, "categories": self.categories, "deadline": self.deadline, "checklist": self.checklist })
        return self.title


#Skills Class
class Skills():
    def __init__(self, title=None):
        self.title = title
        self.user = session['username']

    def save(self):
        skills= mongo.db.skills
        skills.insert({ "user" : self.user, "title" : self.title })
        return self.title


#Dailies Class
class Dailies():
    def __init__(self, title=None, categories=None):
        self.title = title
        self.categories = categories
        self.user = session['username']

    def save(self):
        dailies= mongo.db.dailies
        dailies.insert({ "user" : self.user, "title" : self.title, "categories":self.categories })
        return self.title






#register 
@app.route('/register', methods=['POST', 'GET'])
def register():
    users = mongo.db.users
    username = request.form['username']
    password = request.form['pass']
    email = request.form['Email']
    newUser = User(username, password, email)

    if request.method == 'POST':
        existing_user = users.find_one({'name' : newUser.username})
        existing_email = users.find_one({'email' : newUser.email})

        if existing_email is None :
            if  existing_user is None :
                    newUser.save()
                    return (' Register with success ')
            
            return 'That username already exists!'

        return 'that Email already exists ! '

    return ('nothing happend ')




@app.route('/')
def home():
	return render_template('index.html')

#lunching the Main Function
if __name__ == '__main__':
    app.secret_key = 'mysecret'
    app.run(debug=True)

