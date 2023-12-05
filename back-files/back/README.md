<h3><center>Clone, build and push the images to registry using Tekton</center></h3>


<h4>Set up a Pipeline that builds a Docker image using Kaniko on your kubernetes cluster</h4>

<ol>


  <li>Retrieve the source code.</li>
  <li>Build and push the source code into a Docker image.</li>
  <li>Push the image to the specified repository.</li>
</ol>

<h4>Set up an EventListener that accepts and processes GitHub push events.</h4>
<h4>Set up a TriggerTemplate that instantiates a PipelineResource and executes a PipelineRun and its associated 'TaskRuns' when the EventListener detects the push event from a GitHub repository.</h4>

<h4>Run the completed stack to experience Tekton Triggers in action.</h4>


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
</ol>

<h4>When all components show Running the STATUS column the installation is complete.</h4>



<h3>Access Tekton Dashboard</h3>
<h5>The Tekton Dashboard is not exposed outside the cluster by default, but we can access it by port-forwarding to the tekton-dashboard Service on port 9097</h5>
    
     kubectl port-forward -n tekton-pipelines service/tekton-dashboard 9097:9097
     
<h5>You can now open the Dashboard in your browser at http://localhost:9097</h5>
                                                  
<h3>Install Tekton CLI, tkn on your machine</h3>
<h4>To install tkn, follow href https://tekton.dev/docs/cli/</h4>
   
<h4>Lets run the 00-namespace.yml file to create namespace<h4>

      kubectl apply -f 00-namespace.yml
     
<h3>Install the git-clone and kaniko tasks</h3>

     tkn hub install task git-clone -n (namespace)
     tkn hub install task kaniko -n (namespace)

<h3>Install the git-clone and jib-maven or jib-gradle (jib works with Maven and Gradle projects tasks</h3>
     
    tkn hub install task git-clone -n (namespace)
    tkn hub install task jib -n (namespace)
<ol>
<li>git-clone is the task from tekton-hub for cloning the git repositories.
For more information, go through https://hub.tekton.dev/tekton/task/git-clone </li>
<li>Kaniko is the task for building and pushing images to the required workspace.
For more information on kaniko, visit https://hub.tekton.dev/tekton/task/kaniko </li>
</ol>


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




     https://comakeitsoftware.webhook.office.com/webhookb2/f0470b0f-32a7-4909-b386-6f5e21730f51@d3290f08-35dd-4188-9066-72652ba8ff94/IncomingWebhook/bb4e9446188b4abcb5e0f8f15bfc0ddf/9d9da26b-622e-4c3a-a64a-91259e740d38