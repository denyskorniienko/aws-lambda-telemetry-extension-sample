1. install packages
```bash
cd nodejs-example-logs-api-extension
chmod +x index.js
npm install
cd ..
```

2. create extension.zip
```bash
chmod +x extensions/nodejs-example-telemetry-api-extension
zip -r extension.zip ./nodejs-example-telemetry-api-extension
zip -r extension.zip ./extensions
```

3. upload a extension.zip file as a layer in the AWS console

4. attach a layer to the lambda

5. Configure the extension by setting below environment variables

DISPATCH_POST_URI - the URI you want telemetry to be posted to. If not specified you will still be able to observe extension work via produced logs in CloudWatch, but telemetry events will be discarded.
DISPATCH_MIN_BATCH_SIZE - optimize dispatching telemetry by telling the dispatcher how many log events you want it to batch. On function invoke the telemetry will be dispatched to DISPATCH_POST_URI only if number of log events collected so far is greater than DISPATCH_MIN_BATCH_SIZE. On function shutdown the telemetry will be dispatched to DISPATCH_POST_URI regardless of how many log events were collected so far.

![alt text](./sample-extension-seq-diagram.png)
