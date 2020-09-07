import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns';
import * as path from 'path';

export class CdkFargateStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 2
    })

    const cluster = new ecs.Cluster(this, 'MyCluster', {
      vpc: vpc
    })

    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'FargateService', {
      cluster: cluster,
      taskImageOptions: {
        // image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample')
        image: ecs.ContainerImage.fromAsset(path.resolve(__dirname, '../local-image'))
      }
    })

  }
}
