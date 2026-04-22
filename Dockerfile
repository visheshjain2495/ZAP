FROM node:20-bullseye

RUN apt-get update && apt-get install -y python3 python3-pip

WORKDIR /app
COPY . .

RUN npm install
RUN pip3 install -r requirements.txt
RUN npm run build

ENV PORT=8080

RUN chmod +x start.sh

CMD ["./start.sh"]