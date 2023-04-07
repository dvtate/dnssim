#!/usr/bin/env bash

cd $( dirname -- "$( realpath -- "$0"; )"; )
if [[ "$1" == "deploy" ]] 
then
    npm run deploy
else
    npm start
fi