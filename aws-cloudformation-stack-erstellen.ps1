#Das Präfix "file://" ist eine Konvention, um anzuzeigen, dass der nachfolgende Pfad auf eine lokale Datei zeigt.
aws cloudformation create-stack --stack-name WebSiteHosting-stack-tb --template-body file://C:\AWS-CloudFormation-Auto/statische-website-hosting.yaml
