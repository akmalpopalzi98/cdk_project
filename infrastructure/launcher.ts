import { SpaceStack } from "./stack";
import {App} from 'aws-cdk-lib'

const app = new App()
new SpaceStack(app,'space-finder',{
    stackName:'SpaceFinder'
})



