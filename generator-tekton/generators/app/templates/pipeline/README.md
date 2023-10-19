Clone, build and push the images to docker registry using Tekton


Set up a Pipeline that builds a Docker image using Kaniko on your kubernetes cluster

   1.Retrieve the source code.
   2.Build and push the source code into a Docker image.
   3.Push the image to the specified repository.

Set up an EventListener that accepts and processes GitHub push events.
Set up a TriggerTemplate that instantiates a PipelineResource and executes a PipelineRun and its associated 'TaskRuns' when the EventListener detects the push event from a GitHub repository.

Run the completed stack to experience Tekton Triggers in action.


Prerequisites:
1.Have a kubernetes cluster running and install kubectl
2.Install Tekton Pipelines using
     kubectl apply --filename \ 
        https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml
3.Install Tekton Triggers using
     kubectl apply --filename \
        https://storage.googleapis.com/tekton-releases/triggers/latest/release.yaml
     kubectl apply --filename \
        https://storage.googleapis.com/tekton-releases/triggers/latest/interceptors.yaml
4.Install tekton Dashboard 
     kubectl apply --filename \
        https://storage.googleapis.com/tekton-releases/dashboard/latest/release-full.yaml

When all components show Running the STATUS column the installation is complete.

>Access Tekton Dashboard 
```
     The Tekton Dashboard is not exposed outside the cluster by default, but we can access it by port-forwarding to the tekton-dashboard Service on port 9097
    
     kubectl port-forward -n tekton-pipelines service/tekton-dashboard 9097:9097
     ```
     You can now open the Dashboard in your browser at http://localhost:9097
                                                       ```
Install Tekton CLI, tkn on your machine
```
   To install tkn, follow href https://tekton.dev/docs/cli/
   ```
Lets run the 00-namespace.yml file to create namespace
```
   kubectl apply -f 00-namespace.yml
   ```
Install the git-clone and kaniko tasks

tkn hub install task git-clone -n <namespace>
```
tkn hub install task kaniko -n <namespace>
```

1. git-clone is the task from tekton-hub for cloning the git repositories.
For more information, go through https://hub.tekton.dev/tekton/task/git-clone
2. Kaniko is the task for building and pushing images to the required workspace.
For more information on kaniko, visit https://hub.tekton.dev/tekton/task/kaniko


>Run the yml files for Pipeline
```

Configure your cluster as follows:

Create the secret for ssh key and docker registry using the following command:

    kubectl apply -f 01-ssh-credentials.yml
    ```
    kubectl apply -f 02-docker-credentials.yml
    ```
Create the admin user, role, and rolebinding using the following command:
 
   kubectl apply -f 03-rbac.yml
   ```
   



 