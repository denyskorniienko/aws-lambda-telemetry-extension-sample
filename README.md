1.
```bash
cd nodejs-example-logs-api-extension
```

```bash
chmod +x index.js
```

```bash
npm install
```

```bash
cd ..
```

2. chmod +x extensions/nodejs-example-telemetry-api-extension
zip -r extension.zip ./nodejs-example-telemetry-api-extension
zip -r extension.zip ./extensions

3. upload a extension.zip file as a layer in the AWS console

4. attach a layer to the lambda

![alt text](./sample-extension-seq-diagram.png)
