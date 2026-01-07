# az-cli.ps1
# Robust Azure VM Provisioning (PowerShell, UTF-8 safe)
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# --- Force UTF-8 output (prevents latin-1 encoding crashes) ---
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [Console]::OutputEncoding

# --- Config ---
$RG        = "rg-25-01-on-von-brentano-theodor"
$VM        = "herz-seele-vm"
$Location  = "westeurope"
$Image     = "Ubuntu2404"
$Size      = "Standard_B1s"
$AdminUser = "azureuser"

$ScriptDir     = Split-Path -Parent $MyInvocation.MyCommand.Path
$CloudInitFile = Join-Path $ScriptDir "cloud-init.yaml"

# Path to your SSH public key (adjust if needed)
$SshPubKey = Join-Path $HOME ".ssh\azure_rsa.pub"

# --- Preconditions ---
if (-not (Test-Path $CloudInitFile)) {
  throw "cloud-init.yaml not found: $CloudInitFile"
}
if (-not (Test-Path $SshPubKey)) {
  throw "SSH public key not found: $SshPubKey"
}

# --- Reduce noisy output / hints ---
az config set core.display_region_identified=false | Out-Null
az config set core.no_color=true | Out-Null

# --- Login if needed ---
try {
  az account show --only-show-errors -o none | Out-Null
} catch {
  az login --only-show-errors -o none | Out-Null
}

Write-Host "Creating VM '$VM' in RG '$RG'..."

az vm create `
  --resource-group $RG `
  --name $VM `
  --location $Location `
  --image $Image `
  --size $Size `
  --admin-username $AdminUser `
  --ssh-key-values $SshPubKey `
  --public-ip-sku Standard `
  --nsg-rule SSH `
  --custom-data $CloudInitFile `
  --nic-delete-option delete `
  --os-disk-delete-option delete `
  --only-show-errors `
  -o none

Write-Host "Opening port 80..."
az vm open-port `
  --resource-group $RG `
  --name $VM `
  --port 80 `
  --only-show-errors `
  -o none

$PublicIp = (az vm show -d -g $RG -n $VM --query publicIps --only-show-errors -o tsv).Trim()

Write-Host ""
Write-Host "VM Public IP: $PublicIp"
Write-Host "SSH: ssh -i $HOME/.ssh/azure_rsa $AdminUser@$PublicIp"
Write-Host "HTTP: http://$PublicIp/"