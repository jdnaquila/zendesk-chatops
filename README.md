# Zendesk assignment by Deniel Naquila

**Requirements:**

-   Linux host with the following packages installed:
    -   git
    -   docker
    -   docker-compose

**Note:** In case `docker` and `docker-compose` is not installed yet. Install them and run the following commands in order to run `docker` and `docker-compose` without `root` access:

```
sudo groupadd docker
sudo gpasswd -a $USER docker
newgrp docker
```

You can use

```
docker run hello-world
```

to check if you can run docker without `sudo`.

**Preparation of source files and deployment of application:**

1. Open terminal
2. Run the following commands:

```
git clone https://github.com/jdnaquila/zendesk-chatops.git
cd zendesk-chatops
docker-compose up -d
```

3. This will run `docker-compose` in detached mode (run containers in the background) and it will begin to build the images and containers and start them.

**Note:** If you are able to run another terminal in another window, you can run `docker-compose` normally by running the following command instead:

```
docker-compose up
```

This way, you are able to see the console logging live. 4. Once deployment is done, the console log should display the following:

```
Application listening on port 8080
Connected to database
```

**Note:** If you are running `docker-compose` in detached mode, run the command `docker logs zendesk-chatops-app` to check the logs.

**Testing the application:**

1. Run the following commands:

```
chmod +x ./test.sh
./test.sh
```

2. The script will run a test on the task requirements of the program.
3. `All tests passed!` will be displayed if all tests pass and `One or more tests failed!` will be displayed if at least one test fails.
