import ipfsapi

if __name__ == '__main__':

# Connect to local node

	try:

		api = ipfsapi.connect('127.0.0.1', 5001)

		print(api)
		res = api.add('finalized_model.sav')
		print (res)
	except ipfsapi.exceptions.ConnectionError as ce:

		print(str(ce))
