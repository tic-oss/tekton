# /bin/bash

echo ""
echo "Installing tekton cli."
linktothepackage="tektoncd-cli-0.33.0_Linux-64bit.deb"
curl -LO https://github.com/tektoncd/cli/releases/download/v0.33.0/${linktothepackage}
sudo dpkg -i ./${linktothepackage}
echo ""

echo ""
echo "\033[1mPrerequisite:\033[0m"
echo " 1. Make sure that your cluster is up and running and installed kubectl and k8s dashboard"
echo " 2. Make sure that you have installed tekton cli."
echo ""

echo -n "Confirm if you meet all the above requirements,(yes/no):"

kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml
kubectl apply --filename \
https://storage.googleapis.com/tekton-releases/triggers/latest/release.yaml
kubectl apply --filename \
https://storage.googleapis.com/tekton-releases/triggers/latest/interceptors.yaml
kubectl apply --filename \
https://storage.googleapis.com/tekton-releases/dashboard/latest/release-full.yaml


echo ""
kubectl apply -f pipeline-yml-files/00-namespace.yml
echo ""

sleep 30

echo ""
echo "Installing requrired tasks from tekton hub"
echo ""

echo ""
namespace="policies-namespace"
tkn hub install task git-clone -n ${namespace}
tkn hub install task jib-maven -n ${namespace}
echo ""

sleep 30

echo ""
kubectl apply -f pipeline-yml-files/01-secrets.yml
kubectl apply -f pipeline-yml-files/02-rbac.yml
kubectl apply -f pipeline-yml-files/03-pipeline.yml
kubectl create -f pipeline-yml-files/04-pipelinerun.yml
echo ""

echo ""
echo "Access tekton dashboard in web http://localhost:9097"
echo ""

kubectl port-forward -n tekton-pipelines service/tekton-dashboard 9097:9097


