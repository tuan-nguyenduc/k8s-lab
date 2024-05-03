# Kubernetes: Big Lab 
1. Deploy application on Kubernetes with the following requirements: 
2. Deploy 3 pods to run Front-End services (e.g. ReactJS, VueJS, Angular, etc.). 
3. Deploy 3 pods to run Back-End services (e.g. C#, Java, Golang, Python, etc.). 
4. The images for Front-End and Back-End must be built from Dockerfile and pushed to Dockerhub (default images from the Docker registry should not be used) 
5. The pods should be auto-scaled based on CPU usage. 
6. Deploy a database (e.g. MySQL, MongoDB, etc.) with the option to implement a High Availability (HA) model using Helm or StatefulSet (bonus points will be awarded). 
7. Configure the Front-End services to call the Back-End services, and the Back-End services to call the database. 
8. Store relevant credential settings in Secrets. 
9. (Optional) Use DaemonSet to deploy ElasticSearch (using the fluentd-elasticsearch image) or complete EFK stack or any kind of logging and monitoring stacks. 
10. Deploy an Ingress to allow access to the Front-End service from the internet using a DNS. Configuring HTTPS is a bonus point. If a domain name is not available, use LoadBalancer service type (maximum points will not be awarded). 

