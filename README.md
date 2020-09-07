# CDK Fargate

- CDK App that deploy ALBed Fargate Service with local Dockderfile

## Useful commands

### Dockerfile build and run at local

```zsh
cd local-image/
docker build -t myimage/go:x.y .
docker run -p 127.0.0.1:8080:80 myimage/go:x.y
```


## Useful links

- https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/ecs/fargate-service-with-local-image
- https://docs.aws.amazon.com/cdk/api/latest/docs/aws-ecs-patterns-readme.html