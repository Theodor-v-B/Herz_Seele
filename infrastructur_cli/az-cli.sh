az vm create \
  --resource-group rg-25-01-on-von-brentano-theodor \
  --name herz-seele-vm \
  --location westeurope \
  --image Ubuntu2404 \
  --size Standard_B1s \
  --admin-username azureuser \
  --ssh-key-values ~/.ssh/azure_rsa.pub \
  --public-ip-sku Standard \
  --nsg-rule SSH \
  --custom-data cloud-init.yaml \
  --nic-delete-option delete \
  --os-disk-delete-option delete

  az vm open-port \
  --resource-group rg-25-01-on-von-brentano-theodor \
  --name herz-seele-vm \
  --port 80