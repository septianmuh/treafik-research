This app use Traefik Api Gateway with simple golang api (fiber) and nodejs api (express). 
Binding port: 
- Golang : 8020 in its local container
- NodeJs : 8030 in its local container
  
Reverse Proxy setting in docker compose with Traefik, access in local:
- Golang : api.golang.localhost
- Nodejs : api.nodejs.localhost

- Just Running docker-compose.yml with command: 
    docker-compose up
