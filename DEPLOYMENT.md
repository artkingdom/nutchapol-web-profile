# Deployment (GHCR + Synology NAS)

This project deploys by pushing a Docker image to GHCR from your PC, then pulling it on the NAS.

## PC (build + push)

```bash
docker build -t ghcr.io/artkingdom/nutchapol-web-profile:latest .
docker push ghcr.io/artkingdom/nutchapol-web-profile:latest
```

## NAS (pull + run)

```bash
docker compose pull
docker compose up -d
```
