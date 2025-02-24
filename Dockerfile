FROM node:18

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y ffmpeg && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

WORKDIR /app

# Copia arquivos de dependências primeiro (melhora o cache do Docker)
COPY package*.json ./


COPY . .

RUN npm install

COPY --chown=node:node . .

EXPOSE 8089

CMD ["npm", "run", "start"]
