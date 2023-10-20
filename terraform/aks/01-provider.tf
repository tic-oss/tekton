terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "=3.71.0"
    }
  }
}

provider "azurerm" {
  features {}
  subscription_id = "81d11f56-93d4-4ecf-ab8a-b083965af423"
  tenant_id       = "08396ad5-fd8c-4c92-a481-e11e65398d12"
}

