# S3-Bucket löschen
aws s3 rm s3://trg-bucket-tb --recursive #--recursive ist erforderlich, wenn der S3-Bucket Unterverzeichnisse oder viele Objekte enthält, um den gesamten Inhalt des Buckets zu löschen.

#CloudFormation-Stack löschen
aws cloudformation delete-stack --stack-name WebSiteHosting-stack-tb
