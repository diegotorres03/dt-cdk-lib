# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamoCostruct <a name="DynamoCostruct" id="dt-cdk-lib.DynamoCostruct"></a>

#### Initializers <a name="Initializers" id="dt-cdk-lib.DynamoCostruct.Initializer"></a>

```typescript
import { DynamoCostruct } from 'dt-cdk-lib'

new DynamoCostruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.DynamoCostruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dt-cdk-lib.DynamoCostruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dt-cdk-lib.DynamoCostruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.DynamoCostruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dt-cdk-lib.DynamoCostruct.addDax">addDax</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.addIndex">addIndex</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.addKeys">addKeys</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.createDax">createDax</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.end">end</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="dt-cdk-lib.DynamoCostruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDax` <a name="addDax" id="dt-cdk-lib.DynamoCostruct.addDax"></a>

```typescript
public addDax(): void
```

##### `addIndex` <a name="addIndex" id="dt-cdk-lib.DynamoCostruct.addIndex"></a>

```typescript
public addIndex(): void
```

##### `addKeys` <a name="addKeys" id="dt-cdk-lib.DynamoCostruct.addKeys"></a>

```typescript
public addKeys(partitionKey: string, sortKey?: string): void
```

###### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="dt-cdk-lib.DynamoCostruct.addKeys.parameter.partitionKey"></a>

- *Type:* string

---

###### `sortKey`<sup>Optional</sup> <a name="sortKey" id="dt-cdk-lib.DynamoCostruct.addKeys.parameter.sortKey"></a>

- *Type:* string

---

##### `createDax` <a name="createDax" id="dt-cdk-lib.DynamoCostruct.createDax"></a>

```typescript
public createDax(subnetIds: string[], securityGroupIds: string[]): void
```

###### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="dt-cdk-lib.DynamoCostruct.createDax.parameter.subnetIds"></a>

- *Type:* string[]

---

###### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="dt-cdk-lib.DynamoCostruct.createDax.parameter.securityGroupIds"></a>

- *Type:* string[]

---

##### `end` <a name="end" id="dt-cdk-lib.DynamoCostruct.end"></a>

```typescript
public end(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.DynamoCostruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dt-cdk-lib.DynamoCostruct.isConstruct"></a>

```typescript
import { DynamoCostruct } from 'dt-cdk-lib'

DynamoCostruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dt-cdk-lib.DynamoCostruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.DynamoCostruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dt-cdk-lib.DynamoCostruct.property.daxCache">daxCache</a></code> | <code>aws-cdk-lib.aws_dax.CfnCluster</code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dt-cdk-lib.DynamoCostruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `daxCache`<sup>Optional</sup> <a name="daxCache" id="dt-cdk-lib.DynamoCostruct.property.daxCache"></a>

```typescript
public readonly daxCache: CfnCluster;
```

- *Type:* aws-cdk-lib.aws_dax.CfnCluster

---

##### `table`<sup>Optional</sup> <a name="table" id="dt-cdk-lib.DynamoCostruct.property.table"></a>

```typescript
public readonly table: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---


### FunctionConstruct <a name="FunctionConstruct" id="dt-cdk-lib.FunctionConstruct"></a>

#### Initializers <a name="Initializers" id="dt-cdk-lib.FunctionConstruct.Initializer"></a>

```typescript
import { FunctionConstruct } from 'dt-cdk-lib'

new FunctionConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.FunctionConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dt-cdk-lib.FunctionConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dt-cdk-lib.FunctionConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.FunctionConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dt-cdk-lib.FunctionConstruct.createLayer">createLayer</a></code> | create a layer from local file, s3 url or existing layer construct. |
| <code><a href="#dt-cdk-lib.FunctionConstruct.handler">handler</a></code> | here is where you add or reference the lambda code. |
| <code><a href="#dt-cdk-lib.FunctionConstruct.useLayer">useLayer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="dt-cdk-lib.FunctionConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createLayer` <a name="createLayer" id="dt-cdk-lib.FunctionConstruct.createLayer"></a>

```typescript
public createLayer(name: string, path: string): LayerVersion
```

create a layer from local file, s3 url or existing layer construct.

###### `name`<sup>Required</sup> <a name="name" id="dt-cdk-lib.FunctionConstruct.createLayer.parameter.name"></a>

- *Type:* string

layer friendly name.

---

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.FunctionConstruct.createLayer.parameter.path"></a>

- *Type:* string

local or s3 path to layer folder.

---

##### `handler` <a name="handler" id="dt-cdk-lib.FunctionConstruct.handler"></a>

```typescript
public handler(functionCode: string, options?: FunctionOptions): Function
```

here is where you add or reference the lambda code.

###### `functionCode`<sup>Required</sup> <a name="functionCode" id="dt-cdk-lib.FunctionConstruct.handler.parameter.functionCode"></a>

- *Type:* string

function code in the target language as a string, or a ./path/to/file or s3://path/to/file.

---

###### `options`<sup>Optional</sup> <a name="options" id="dt-cdk-lib.FunctionConstruct.handler.parameter.options"></a>

- *Type:* <a href="#dt-cdk-lib.FunctionOptions">FunctionOptions</a>

---

##### `useLayer` <a name="useLayer" id="dt-cdk-lib.FunctionConstruct.useLayer"></a>

```typescript
public useLayer(name: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="dt-cdk-lib.FunctionConstruct.useLayer.parameter.name"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.FunctionConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dt-cdk-lib.FunctionConstruct.isConstruct"></a>

```typescript
import { FunctionConstruct } from 'dt-cdk-lib'

FunctionConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dt-cdk-lib.FunctionConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.FunctionConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dt-cdk-lib.FunctionConstruct.property.layers">layers</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_lambda.LayerVersion}</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionConstruct.property.layersToUse">layersToUse</a></code> | <code>aws-cdk-lib.aws_lambda.LayerVersion[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dt-cdk-lib.FunctionConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `layers`<sup>Required</sup> <a name="layers" id="dt-cdk-lib.FunctionConstruct.property.layers"></a>

```typescript
public readonly layers: {[ key: string ]: LayerVersion};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_lambda.LayerVersion}

---

##### `layersToUse`<sup>Required</sup> <a name="layersToUse" id="dt-cdk-lib.FunctionConstruct.property.layersToUse"></a>

```typescript
public readonly layersToUse: LayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.LayerVersion[]

---


### WebAppConstruct <a name="WebAppConstruct" id="dt-cdk-lib.WebAppConstruct"></a>

#### Initializers <a name="Initializers" id="dt-cdk-lib.WebAppConstruct.Initializer"></a>

```typescript
import { WebAppConstruct } from 'dt-cdk-lib'

new WebAppConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.WebAppConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dt-cdk-lib.WebAppConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dt-cdk-lib.WebAppConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dt-cdk-lib.WebAppConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.WebAppConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dt-cdk-lib.WebAppConstruct.addAssets">addAssets</a></code> | Use this metod to upload application artifacts add local assets to the remote store (S3 Bucket) be mindfull of size, use this method for small bundles. |
| <code><a href="#dt-cdk-lib.WebAppConstruct.run">run</a></code> | Run local comands before uploading assets and creating infraestructure. |

---

##### `toString` <a name="toString" id="dt-cdk-lib.WebAppConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addAssets` <a name="addAssets" id="dt-cdk-lib.WebAppConstruct.addAssets"></a>

```typescript
public addAssets(path: string, destinationPath?: string): WebAppConstruct
```

Use this metod to upload application artifacts add local assets to the remote store (S3 Bucket) be mindfull of size, use this method for small bundles.

if you want to send large files, consider using multipart uploads
after deploying infraestructure

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.WebAppConstruct.addAssets.parameter.path"></a>

- *Type:* string

---

###### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="dt-cdk-lib.WebAppConstruct.addAssets.parameter.destinationPath"></a>

- *Type:* string

---

##### `run` <a name="run" id="dt-cdk-lib.WebAppConstruct.run"></a>

```typescript
public run(path: string, commands: string | string[]): WebAppConstruct
```

Run local comands before uploading assets and creating infraestructure.

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.WebAppConstruct.run.parameter.path"></a>

- *Type:* string

---

###### `commands`<sup>Required</sup> <a name="commands" id="dt-cdk-lib.WebAppConstruct.run.parameter.commands"></a>

- *Type:* string | string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.WebAppConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dt-cdk-lib.WebAppConstruct.isConstruct"></a>

```typescript
import { WebAppConstruct } from 'dt-cdk-lib'

WebAppConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dt-cdk-lib.WebAppConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.WebAppConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dt-cdk-lib.WebAppConstruct.property.webappBucket">webappBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dt-cdk-lib.WebAppConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `webappBucket`<sup>Required</sup> <a name="webappBucket" id="dt-cdk-lib.WebAppConstruct.property.webappBucket"></a>

```typescript
public readonly webappBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### FunctionOptions <a name="FunctionOptions" id="dt-cdk-lib.FunctionOptions"></a>

#### Initializer <a name="Initializer" id="dt-cdk-lib.FunctionOptions.Initializer"></a>

```typescript
import { FunctionOptions } from 'dt-cdk-lib'

const functionOptions: FunctionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.layers">layers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.vpc">vpc</a></code> | <code>string \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="dt-cdk-lib.FunctionOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `layers`<sup>Optional</sup> <a name="layers" id="dt-cdk-lib.FunctionOptions.property.layers"></a>

```typescript
public readonly layers: string[];
```

- *Type:* string[]

---

##### `name`<sup>Optional</sup> <a name="name" id="dt-cdk-lib.FunctionOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="dt-cdk-lib.FunctionOptions.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="dt-cdk-lib.FunctionOptions.property.vpc"></a>

```typescript
public readonly vpc: string | Vpc;
```

- *Type:* string | aws-cdk-lib.aws_ec2.Vpc

---



