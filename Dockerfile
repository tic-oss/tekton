# Use an Ubuntu-based image
FROM ubuntu

# Install prerequisites
RUN apt-get update && apt-get install -y \
    maven \
    curl \
    software-properties-common \
    apt-transport-https \
    ca-certificates \
    gnupg-agent

# Install Docker CLI
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
RUN apt-get update && apt-get install -y docker-ce

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Set working directory
WORKDIR /app

# Start a shell session
CMD ["bash"]
