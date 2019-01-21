FROM node
WORKDIR /opt/app
# Install yarn from the local .tgz
ADD . /opt/app
RUN npm install