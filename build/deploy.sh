#!/bin/bash

if [ -z "$UBAHDEV_REMOTE_USER" ] || [ -z "$UBAHDEV_REMOTE_HOSTNAME" ]; then
    echo "No UBAHDEV_REMOTE_USER or UBAHDEV_REMOTE_HOSTNAME envs"
    exit 1
fi

SSH_CLEAR_COMMAND="ssh $UBAHDEV_REMOTE_USER@$UBAHDEV_REMOTE_HOSTNAME 'rm -rf /usr/share/www/*'"

eval $SSH_CLEAR_COMMAND

LOCAL_DIR="dist"

SCP_COMMAND="scp -r $LOCAL_DIR/* $UBAHDEV_REMOTE_USER@$UBAHDEV_REMOTE_HOSTNAME:/usr/share/www/"

echo "Deploying..."
$SCP_COMMAND

if [ $? -eq 0 ]; then
    echo "Done!"
else
    echo "Deploy error."
fi
