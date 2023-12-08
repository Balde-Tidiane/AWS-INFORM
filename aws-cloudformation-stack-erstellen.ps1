#Das Präfix "file://" ist eine Konvention, um anzuzeigen, dass der nachfolgende Pfad auf eine lokale Datei zeigt.
aws cloudformation create-stack --stack-name WebSiteHosting-stack-tb --template-body file://C:\AWS-CloudFormation-Auto/statische-website-hosting.yaml

Write-Host "Warten Sie ein bisschen. Der Stack wird nocht erstellt!"
Write-Host ""
# Warten Sie 60 Sekunden
sleep 60

aws s3 cp C:\\AWS-CloudFormation-Auto\index.html s3://trg-bucket-tb/
aws s3 cp C:\\AWS-CloudFormation-Auto\error.html s3://trg-bucket-tb/
aws s3 cp C:\\AWS-CloudFormation-Auto\aws-logo.jpg s3://trg-bucket-tb/