locals {
  istio_charts_url = "https://istio-release.storage.googleapis.com/charts"
}

resource "helm_release" "istio-base" {
  repository       = local.istio_charts_url
  chart            = "base"
  name             = "istio-base"
  timeout          = 120
  namespace        = "istio-system"
  create_namespace = true
  version          = "1.19.1"
  cleanup_on_fail  = true
  force_update     = false
}

resource "helm_release" "istiod" {
  repository       = local.istio_charts_url
  chart            = "istiod"
  name             = "istiod"
  timeout          = 120
  namespace        = "istio-system"
  create_namespace = true
  version          = "1.19.1"
  cleanup_on_fail  = true
  force_update     = false
  depends_on       = [helm_release.istio-base]
}
resource "helm_release" "istio-ingressgateway" {
  repository      = local.istio_charts_url
  chart           = "gateway"
  name            = "istio-ingressgateway"
  cleanup_on_fail = true
  force_update    = false
  timeout         = 500
  namespace       = "istio-system"
  version         = "1.19.1"
  depends_on      = [helm_release.istiod]

  set {
    name = "name"
    value = "istio-ingressgateway"
  }
  set {
    name = "labels.app"
    value = "istio-ingressgateway"
  }
  set {
    name = "labels.istio"
    value = "ingressgateway"
  }
  # provision's application loadbalancer
  set {
    name  = "service.type"
    value = "LoadBalancer"
  }
}


resource "time_sleep" "wait_30_seconds" {
  depends_on = [
    helm_release.istio-ingressgateway
    ]
  create_duration = "30s"
}




