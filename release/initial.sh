#!/usr/bin/env bash

{ # Whether forever has installed globally
    forever
} || { # Install forever
    npm i forever -g
}

{ # whether cross-env has installed globally
    cross-env
} || { # Install cross-env
    npm i cross-env -g
}

npm i