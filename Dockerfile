# Use the predefined node base image for this module.
FROM node:8.9.4

# create the log directory
RUN mkdir -p /var/log/applications/node-project

# Creating base "project" directory where the source repo will reside in our container.
# Code is copied from the host machine to this "project" folder in the container as a last step.
RUN mkdir /project
WORKDIR /project
COPY . /project

# Install node dependencies
RUN npm install

# For development environment, we want to use forever to keep the code running
RUN npm install -g forever@0.14.2
RUN touch .foreverignore
RUN echo ".git/*" >> .foreverignore
RUN echo "node_modules/*" >> .foreverignore
RUN cat .gitignore >> .foreverignore

# Map a volume for the log files and add a volume to override the code
VOLUME ["/project", "/var/log/applications/node-project"]

# Expose web service and nodejs debug port
EXPOSE  3000

CMD ["forever", "--debug=3000", "/dist/main.js"]
