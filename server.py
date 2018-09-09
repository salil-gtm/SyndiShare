from flask import Flask, Response
from threading import Thread
import requests
import numpy as np
import time
from time import sleep
import subprocess

app = Flask(__name__)

import pickle
filename = 'finalized_model.sav'
loaded_model = pickle.load(open(filename, 'rb'))
import pandas as pd

def my_truffle():
    q = subprocess.Popen(["bash", "auto.sh"], stdout=subprocess.PIPE)
    return 

def my_ipfs():
    q = subprocess.Popen(["python3.6", "ipfs.py"], stdout=subprocess.PIPE)
    value = q.communicate()[0]
    return value 


@app.route("/threshold", methods=['GET'])
def main1():
    my_truffle()
    hash = my_ipfs()
    return hash

@app.route("/predict", methods=['GET'])
def main2():
    test = pd.read_csv('testing.csv')
    print "File Loaded"
    result = loaded_model.predict(test)
    if (result > 1):
           result = 1
    if (result < 0):
           result = 0 
    print(result)
    my_truffle()
    return str(result[0] * 100)


if __name__ == "__main__":
    app.run("0.0.0.0",5000)
