set -e

docker run -v "$(pwd)"/node:/usr/src/app node /bin/bash -c 'cd /usr/src/app && node test_mylogger.js'
