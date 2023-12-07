DynamoDB Table Name:**bec003-ghimire-dynamodb-csp**

Lambda Function Name:**bec003-ghimire-lamdba-csp**

	Role name:**aws-ghimire-lamdba-csp**,Policy:Microservices

API Gateway Name:**bec003-ghimire-gateway-csp**,cors: (* universal)


S3 Bucket Name:**bucket-batch-bec003-ghimire-csp**


API gateway provocation link:
main link->[https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com](https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com/)

get req->https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com/products

put req->https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com/products

			body
			{
				"id":"6",
				"name":"zuitt",
				"description":"desc",
				"price":"100",
			}

get id req->https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com/products/6

del req->https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com/products/6


S3 static website Link->http://bucket-batch-bec003-ghimire-csp.s3-website-us-west-2.amazonaws.com/
