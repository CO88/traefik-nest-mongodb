        yarn build
        if [ "$NODE_ENV" == "production" ]; then
                yarn start
        elif [ "$NODE_ENV" == "development" ]; then
                yarn start:debug
                # yarn start:dev
        fi