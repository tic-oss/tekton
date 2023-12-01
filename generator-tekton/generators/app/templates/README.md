<h3>Tekton Generator</h3>
To run the files manually, first install few prerequisites<br>
<h3>Prerequisites:</h3>
<ol>
   <li>Have a kubernetes cluster running and install kubectl</li>
   <li>Install Tekton Pipelines using</li>
     kubectl apply --filename \ 
        https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml
   <li>Install Tekton Triggers using</li>
     kubectl apply --filename \
        https://storage.googleapis.com/tekton-releases/triggers/latest/release.yaml
     kubectl apply --filename \
        https://storage.googleapis.com/tekton-releases/triggers/latest/interceptors.yaml
   <li>Install tekton Dashboard</li> 
     kubectl apply --filename \
        https://storage.googleapis.com/tekton-releases/dashboard/latest/release-full.yaml
   <li>Install Tekton CLI, tkn on your machine</h3>
To install tkn, follow <a href="https://tekton.dev/docs/cli/">https://tekton.dev/docs/cli/ </a> </li>
</ol>
git-clone is the task from tekton-hub for cloning the git repositories.
For more information, go through https://hub.tekton.dev/tekton/task/git-clone<br>
To clone the git repository inside your workspace, install git clone task using<br>

```kubectl apply -f https://raw.githubusercontent.com/tektoncd/catalog/main/task/git-clone/0.9/git-clone.yaml```
or
```tkn hub install task git-clone```
<br><br>
<%_ if (buildStrategy == "kaniko") { _%>
Kaniko is the task for building and pushing images to the required workspace.
For more information on kaniko, visit https://hub.tekton.dev/tekton/task/kaniko
<h4>To set up a Pipeline that builds a Docker image using Kaniko on your kubernetes cluster</h4>
<%_ } _%>

<%_ if (buildStrategy == "jib") { _%>
<h4>To set up a Pipeline that builds a Docker image using jib on your kubernetes cluster</h4>
<%_ } _%>
<ol>


  <li>Retrieve the source code.</li>
  <li>Build and push the source code into a Docker image.</li>
  <li>Push the image to the specified repository.</li>
</ol>
<h4>To activate triggers, </h4>
<ul>
     <li>Set up an EventListener that accepts and processes GitHub push events.</li>
     <li>Set up a TriggerTemplate that instantiates a PipelineResource and executes a PipelineRun and its associated 'TaskRuns' when the EventListener detects the push event from a GitHub repository.</li>
     <li>Run the completed stack to experience Tekton Triggers in action.</li>
</ul>
When all components show Running the STATUS column the installation is complete.

<h5>Access Tekton Dashboard</h5>
The Tekton Dashboard is not exposed outside the cluster by default, but we can access it by port-forwarding to the tekton-dashboard Service on port 9097
    
     kubectl port-forward -n tekton-pipelines service/tekton-dashboard 9097:9097
     
You can now open the Dashboard in your browser at <a href="http://localhost:9097">http://localhost:9097</a>
<ul>
<li>Lets run the 00-namespace.yml file to create namespace</li>

      kubectl apply -f 00-namespace.yml
     
<li>Install the git-clone and kaniko tasks</li>

     tkn hub install task git-clone -n (namespace)
     tkn hub install task kaniko -n (namespace)

<li>Install the git-clone and jib-maven or jib-gradle. jib works with Maven and Gradle projects tasks</li>
     
    tkn hub install task git-clone -n (namespace)
    tkn hub install task jib -n (namespace)

<h3>Run the yml files for Pipeline</h3>

Configure your cluster as follows:

<li>Create the secret for ssh key and docker registry using the following command:</li>

     kubectl apply -f 01-ssh-credentials.yml
 
     kubectl apply -f 02-docker-credentials.yml
   
<li>Create the admin user, role, and rolebinding using the following command:</li>

     kubectl apply -f 03-rbac.yml
   
<li>Install the pipeline using the following command:</li>

     kubectl apply -f 04-pipeline.yml

<li>Create the pipelinerun using the following command:</li>

     kubectl apply -f 05-pipelinerun.yml

<li>Create the eventlistener using the following command:</li>

     kubectl apply -f 06-eventlister.yml

<li>Create the ingress using the following command:</li>

     kubectl apply -f 07-ingress.yml

<li>Install the  Triggers using the following command:</li>

     kubectl apply -f 08-triggers.yml