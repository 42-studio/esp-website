#-----------------------------------#
# ESProfiler SPA Multistage (Build) #
#-----------------------------------#

FROM node:lts-stretch AS build
MAINTAINER ANTANI Solutions LTD

# Make build folder
RUN mkdir /project-build

# Copy project into container
COPY ./ /project-build/

# Set Working Directory
WORKDIR /project-build/

# Perform Build
RUN yarn install && yarn build

#-------------------------------------#
# ESProfiler SPA Multistage (Package) #
#-------------------------------------#

FROM nginx
MAINTAINER ANTANI Solutions LTD

# Git Commit Hash
ARG commit_info=not-assigned

# Copy from build stage
COPY --from=build /project-build/dist/ /usr/share/nginx/html/

# Copy Nginx Config
COPY ./nginx.conf /etc/nginx/nginx.conf

# Show Contents of Folder
RUN ls -lah /usr/share/nginx/html/

# Expose Web Ports
EXPOSE 80/tcp
EXPOSE 443/tcp
