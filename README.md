# Let's Play PONG

![gif](/src/assets/gifs/pong.gif)

## Introduction

This game is a canvas study case to make a pong game.

## CSE 110 - Bug Description

### Prerequisite

- Install [VSCode](https://code.visualstudio.com/).
- Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code.
  - You will also need to set up Docker to use Dev Container. Please follow the [instructions here](https://code.visualstudio.com/docs/devcontainers/containers#_installation).
  - If you are using Windows/Mac OS, installing the [Docker Desktop](https://www.docker.com/products/docker-desktop/) _should_ be enough.
- (Optional, but saves you from manually cloning the repo) Install the [GitHub Classroom](https://marketplace.visualstudio.com/items?itemName=GitHub.classroom) extension in VS Code.

### To run:

1. If you installed the extension "GitHub Classroom", click the "Open in VSCode" code at the top of this repo. Skip to 4.
2. If not, manually clone this repository using `git`.
3. Open the cloned local repository using VSCode.
4. You should see a pop-up in the lower right corner prompting you to "reopen in dev container". Click that.
   - If you do not see the pop-up. Press "Ctrl/Command + Shift + P" and type "Dev Container: Reopen in Container" and select that option.
5. Wait for the container to build, which will automatically set up the required dependencies for the project.
6. When the build finishes, run `yarn start` to start the dev server. GLHF : )

### Task description

The scoreboard at the top of the window should update as the player and/or computer earn points. In this branch, the scoreboard is broken and remains at 0-0 even after a point is made. Your task is to identify the code relevant to the bug, and attempt to find a fix.


### To submit:
Run the following commands line by line to commit and push all your changes (or use the sidebar):
```
$ git add .
$ git commit
$ git push
```


### @Author [@4ss1s](https://github.com/4SS1S)
