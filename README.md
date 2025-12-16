# DhakaCart DevOps

## Kubernetes Configuration Files

### k8s/ Directory

- **namespace.yaml** - Creates the dhakacart namespace
- **backend-deployment.yaml** - Backend deployment with 2 replicas, health checks, and resource limits
- **backend-service.yaml** - ClusterIP service for backend on port 3000
- **frontend-deployment.yaml** - Frontend deployment with 2 replicas, health checks, and resource limits
- **frontend-service.yaml** - LoadBalancer service for frontend on port 80
