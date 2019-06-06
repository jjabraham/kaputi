CONTAINER_NAME="kaputi-mongodb"
NETWORK_NAME="kaputi-net"
MONGO_IMAGE="mongo:4.0.4"

echo "Stopping: ${CONTAINER_NAME} "
docker stop ${CONTAINER_NAME}
echo "Removing: ${CONTAINER_NAME}"
docker rm ${CONTAINER_NAME}
echo "Starting: ${CONTAINER_NAME}"

docker run -d -p 27017-27019:27017-27019 --name ${CONTAINER_NAME} ${MONGO_IMAGE}