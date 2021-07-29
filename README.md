### React Project Using AWS Lambda, S3 Bucket, Dynamo DB, API Gateway

- Project Infrastructure

<img src="./screenshots/infra.png">
<img src="./screenshots/pss.png">

- Deploy on S3 Bucket
1. Create React Project
2. Build Project
3. Create S3 Bucket
4. Change Website Policy
5. Create site url
6. Now install aws-cli
7. Create IAM user on AWS IAM User console
8. Get Access Key ID and Secret Key
9. Set up credentials in aws-cli with access Key ID and secret Key
10. Now deploy the react project with S3 Bucket

- Create API Gateway
1. Go to API Gateway
2. Choose type of API and build
3. Create methods
4. Deploy API method
5. Get the url

- Create Lambda Function
1. Go to Lambda dashboard
2. Create a function 
3. Test the function
4. Now add that lambda function in created API methods (API Type = Lambda)
5. Test API

- Create Dynamo DB Table
1. Go to Dyanmo DB dashboard
2. Create new table
3. Add primary key (with short key?)
4. Add item
5. Connect table to lambda function
6. Return response