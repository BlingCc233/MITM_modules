# MITM_legym_modules
> The project enters the maintenance phase. Please submit an issue if you have any questions.
<div align="center">
  
### _Module rules for Shadowrocket, Quantumult X, and Loon_
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)


</div>


- Install [configuration file](https://whatshub.top/config/shadowrocket_basic.conf) for Shadowrocket.
- Enable HTTPS decryption under this configuration.
- Install the CA certificate -> Download the CA certificate -> Allow -> Settings -> Enter password at the top to install.
- Trust the newly installed certificate in `Settings - General - About - Certificate Trust Settings`.
- Go back to Shadowrocket and open `Modules`.
- Import [the module you need (e.g., legym check-in)](https://blingcc.eu.org/legym/legym.module).
- Enable Shadowrocket proxy and verify its functionality in the app.
- For Android, you need to use a superior routing method for mitm proxy similar to the one mentioned above. The principle is the same, whether it's rooted, soft-routed, or [Windows](https://github.com/Grergo/clash-with-mitm?tab=readme-ov-file#mitm-configuration). It all involves CA+rewrite.

## Links you may need:

```properties 
https://blingcc.eu.org/legym/legym.module
```
```properties
https://blingcc.eu.org/legym/prefix_legym.module
```
```properties
https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/classsign.module
```

## For Quantumult X users:
> Simply copy the following code configuration (excluding `[rewrite_local]` and `[mitm]`) to the corresponding field.

```properties
[rewrite_local]
^https?:\/\/cpes\.legym\.cn\/running\/app\/getRunningLimit url script-response-body https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/prefix_legym.js
^https?:\/\/cpes\.legym\.cn\/education\/activity\/simple\/attainability\/get url script-response-body https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/legym.js
^https?:\/\/cpes\.legym\.cn\/education\/attainability\/info url script-response-body https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/classsign.js

[mitm] 

hostname = cpes.legym.cn

```
