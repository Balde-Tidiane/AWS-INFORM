# AWS-Anmeldeinformationen konfigurieren
#Set-AWSCredential -AccessKey 'ASIATGLVDFWDO6S5DN5K' -SecretKey 'f8P/XVvMB1rNYNnvcBOPeK9dcszKZRbqkTmfFRSB' -StoreAs 'MyProfile'

# S3-Bucket löschen
#aws s3 rm s3://trg-bucket-tb --recursive --profile MyProfile
aws s3 rm s3://trg-bucket-tb --recursive

#CloudFormation-Stack löschen
#aws cloudformation delete-stack --stack-name WebSiteHosting-stack-tb --profile MyProfile
aws cloudformation delete-stack --stack-name WebSiteHosting-stack-tb
